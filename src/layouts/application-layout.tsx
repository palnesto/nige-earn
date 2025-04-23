import { ScrollToHash } from "@/components/common/scroll-to-hash";
import Footer from "@/components/common/Footer";
import ServiceSupport from "@/components/common/ServiceSupport";
import { useEffect, useRef, useState } from "react";
import { useCartStore } from "@/stores/cart.store";

interface ApplicationLayoutProps {
  children: React.ReactNode;
}
export function ApplicationFooter({ children }: ApplicationLayoutProps) {
  const { cartItems, isModalOpen, openModal } = useCartStore();
  console.log("hello", cartItems);

  const navbarRef = useRef(null);
  const [navbarHeight, setNavbarHeight] = useState(0);

  useEffect(() => {
    if (navbarRef.current) {
      // Get the navbar height when the component mounts
      const height = navbarRef.current.offsetHeight;
      setNavbarHeight(height);
    }
  }, []);
  return (
    <main className="relative">
      {/* {isModalOpen && <CartModal />} */}
      <ScrollToHash />
      <div className="fixed top-0 left-0 right-0 z-[999] bg-white">
        {/* <Navbar refElement={navbarRef} /> */}
      </div>
      {/* space */}

      <div
        style={{
          marginTop: navbarHeight,
        }}
      >
        {children}
        <ServiceSupport />
        <Footer />
      </div>
      {cartItems?.length > 0 && (
        <div
          className="fixed bg-white bottom-10 right-10 text-lg aspect-square h-16 w-28 p-4 border shadow-2xl drop-shadow-2xl rounded-3xl flex items-center"
          onClick={() => {
            openModal();
          }}
        >
          {cartItems?.length}
          <img src="/assets/addcart.png" alt="cart" />
        </div>
      )}
    </main>
  );
}
