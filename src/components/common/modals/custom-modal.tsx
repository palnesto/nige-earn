import { ReactNode } from "react";
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
} from "@/components/ui/alert-dialog";
import { X } from "lucide-react";
import { Separator } from "@/components/ui/separator";
import { cn } from "@/utils/utils";

export const CustomModal = ({
  children,
  isOpen,
  onClose,
  title,
  onSubmit,
  submitButtonText,
  submitButtonClass,
  submitButtonProps,
  footer,
  contentContainerClass,
  isLoading,
  loader,
  needX,
  isSubmitting,
}: {
  children: ReactNode;
  isOpen: boolean;
  onClose: () => void;
  title: string;
  onSubmit: () => void;
  submitButtonText?: string;
  submitButtonClass?: string;
  submitButtonProps?: React.ButtonHTMLAttributes<HTMLButtonElement>;
  footer?: ReactNode;
  contentContainerClass?: string;
  isLoading?: boolean;
  loader?: ReactNode;
  needX?: boolean;
  isSubmitting?: boolean;
}) => {
  return (
    <AlertDialog open={isOpen}>
      <AlertDialogContent
        className={cn(
          "w-full max-w-[95vw] sm:max-w-[85vw] md:max-w-[75vw] lg:max-w-[65vw] xl:max-w-[55vw] 2xl:max-w-[45vw]",
          "h-[60vh] sm:h-[50vh] lg:h-[60vh]",
          "max-h-[90vh] sm:max-h-[85vh] md:max-h-[80vh] lg:max-h-[75vh] xl:max-h-[70vh]",
          "p-4 sm:p-6",
          "overflow-hidden",
          contentContainerClass
        )}
      >
        <AlertDialogHeader className="space-y-3">
          <div className="flex items-center justify-between">
            <AlertDialogTitle className="text-xl sm:text-2xl font-semibold">
              {title}
            </AlertDialogTitle>
            {needX && (
              <button
                onClick={onClose}
                className="p-2 rounded-full hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
                aria-label="Close modal"
              >
                <X className="h-5 w-5" />
              </button>
            )}
          </div>
          <Separator className="bg-gray-200 dark:bg-gray-700" />
        </AlertDialogHeader>

        <AlertDialogDescription className="flex-grow overflow-hidden py-4">
          <div className="h-full overflow-y-auto scrollbar-thin scrollbar-thumb-gray-300 dark:scrollbar-thumb-gray-600 scrollbar-track-transparent pr-2">
            {isLoading
              ? loader ?? (
                  <div className="flex items-center justify-center h-full">
                    <div className="animate-pulse text-gray-500 dark:text-gray-400">
                      Loading...
                    </div>
                  </div>
                )
              : children}
          </div>
        </AlertDialogDescription>

        <AlertDialogFooter className="flex-shrink-0 xl:pt-2 gap-3">
          {footer ?? (
            <>
              <AlertDialogCancel onClick={onClose} className="sm:w-auto w-full">
                Cancel
              </AlertDialogCancel>
              <AlertDialogAction
                disabled={!!isSubmitting}
                className={cn(
                  "sm:w-auto w-full",
                  isSubmitting && "opacity-50 cursor-not-allowed",
                  submitButtonClass
                )}
                onClick={onSubmit}
                {...submitButtonProps}
              >
                {submitButtonText ?? "Submit"}
              </AlertDialogAction>
            </>
          )}
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
  );
};
