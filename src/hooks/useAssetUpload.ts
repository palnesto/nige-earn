import { useState } from "react";

// const GITHUB_URL = "https://github.com/saranshkhulbe7/random";
async function fetchSignedUrl(
  fileName: string,
  shouldSameUrl: boolean = false
) {
  const res = await fetch(
    `${import.meta.env.VITE_BACKEND_URL}/utils/signed-url`,
    {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ file: { fileName }, shouldSameUrl }),
    }
  );
  if (!res.ok) throw new Error("Failed to fetch signed URL");
  const data = await res.json();
  return data.signedUrl;
}

async function uploadFile(signedUrl: string, file: File) {
  const res = await fetch(signedUrl, {
    method: "PUT",
    headers: { "Content-Type": file.type || "application/octet-stream" },
    body: file,
  });
  if (!res.ok) throw new Error("File upload failed");
  return signedUrl.split("?")[0];
}

export function extractKey(url: string): string {
  const parts = url.split(".com/");
  if (parts.length < 2) throw new Error("Cannot extract key from URL");
  const key = parts[1].split("?")[0];

  // ✅ Decode the key to prevent double encoding
  return decodeURIComponent(key);
}

function useAssetUpload() {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  async function uploadAsset(file: File, assetConfig: object) {
    setLoading(true);
    setError(null);
    try {
      // 1. Get signed URL
      const signedUrl = await fetchSignedUrl(file.name);
      // 2. Upload file
      const finalFileUrl = await uploadFile(signedUrl, file);
      // 3. Finalize asset processing
      // await finalizeAsset(finalFileUrl, assetConfig);
      await fetch(`${import.meta.env.VITE_BACKEND_URL}/utils/make-public`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          file: { fileName: extractKey(finalFileUrl) },
        }),
      });
      return finalFileUrl;
    } catch (err: any) {
      setError(err.message);
      throw err;
    } finally {
      setLoading(false);
    }
  }

  return { loading, error, uploadAsset };
}

export function useImageUpload() {
  const { loading, error, uploadAsset } = useAssetUpload();
  async function uploadImage(
    file: File,
    cropParams?: { x: number; y: number; width: number; height: number },
    compress: boolean = true
  ) {
    return await uploadAsset(file, {
      imageProps: { cropParams, compress },
    });
  }

  return { loading, error, uploadImage };
}

export function useVideoUpload() {
  const { loading, error, uploadAsset } = useAssetUpload();
  async function uploadVideo(
    file: File,
    trimParams?: { start: number; end: number },
    cropParams?: { x: number; y: number; width: number; height: number },
    compression: boolean = false
  ) {
    return await uploadAsset(file, {
      videoProps: { trimParams, cropParams, compression },
    });
  }

  return { loading, error, uploadVideo };
}

export function usePdfUpload() {
  const { loading, error, uploadAsset } = useAssetUpload();
  async function uploadPdf(file: File, compress: boolean = true) {
    return await uploadAsset(file, {
      pdfProps: { compress },
    });
  }

  return { loading, error, uploadPdf };
}

// async function finalizeAsset(fileUrl: string, assetConfig: object) {
//   const key = extractKey(fileUrl);
//   const overwriteUrl = await fetchSignedUrl(key, true);
//   const res = await fetch(`${ASSET_SERVER_URL}/api/v1/assets`, {
//     method: "POST",
//     headers: { "Content-Type": "application/json" },
//     body: JSON.stringify({
//       source: GITHUB_URL,
//       originalUrl: fileUrl,
//       overwriteUrl,
//       assetConfig,
//     }),
//   });

//   if (!res.ok) throw new Error("Asset finalization failed");
//   return await res.json();
// }
