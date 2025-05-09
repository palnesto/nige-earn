import * as React from "react";
import { ChevronLeft, ChevronRight, MoreHorizontal } from "lucide-react";
import { cn } from "@/utils/utils";
import { ButtonProps, buttonVariants } from "@/components/ui/button";

/* ───── Low-level primitives (unchanged) ───────── */
export const Pagination = ({
  className,
  ...props
}: React.ComponentProps<"nav">) => (
  <nav
    role="navigation"
    aria-label="pagination"
    className={cn("mx-auto flex w-full justify-center", className)}
    {...props}
  />
);
Pagination.displayName = "Pagination";

export const PaginationContent = React.forwardRef<
  HTMLUListElement,
  React.ComponentProps<"ul">
>(({ className, ...props }, ref) => (
  <ul
    ref={ref}
    className={cn("flex items-center gap-1", className)}
    {...props}
  />
));
PaginationContent.displayName = "PaginationContent";

export const PaginationItem = React.forwardRef<
  HTMLLIElement,
  React.ComponentProps<"li">
>(({ className, ...props }, ref) => (
  <li ref={ref} className={cn("", className)} {...props} />
));
PaginationItem.displayName = "PaginationItem";

type PaginationLinkProps = {
  isActive?: boolean;
} & Pick<ButtonProps, "size"> &
  React.ComponentProps<"a">;

export const PaginationLink = ({
  className,
  isActive,
  size = "icon",
  ...props
}: PaginationLinkProps) => (
  <a
    aria-current={isActive ? "page" : undefined}
    className={cn(
      buttonVariants({
        variant: isActive ? "outline" : "ghost",
        size,
      }),
      className
    )}
    {...props}
  />
);
PaginationLink.displayName = "PaginationLink";

export const PaginationPrevious = ({
  className,
  ...props
}: React.ComponentProps<typeof PaginationLink>) => (
  <PaginationLink
    aria-label="Go to previous page"
    size="default"
    className={cn("gap-1 pl-2.5", className)}
    {...props}
  >
    <ChevronLeft className="h-4 w-4" />
    <span>Prev</span>
  </PaginationLink>
);
PaginationPrevious.displayName = "PaginationPrevious";

export const PaginationNext = ({
  className,
  ...props
}: React.ComponentProps<typeof PaginationLink>) => (
  <PaginationLink
    aria-label="Go to next page"
    size="default"
    className={cn("gap-1 pr-2.5", className)}
    {...props}
  >
    <span>Next</span>
    <ChevronRight className="h-4 w-4" />
  </PaginationLink>
);
PaginationNext.displayName = "PaginationNext";

export const PaginationEllipsis = ({
  className,
  ...props
}: React.ComponentProps<"span">) => (
  <span
    aria-hidden
    className={cn("flex h-9 w-9 items-center justify-center", className)}
    {...props}
  >
    <MoreHorizontal className="h-4 w-4" />
    <span className="sr-only">More pages</span>
  </span>
);
PaginationEllipsis.displayName = "PaginationEllipsis";

/* ───── High-level “boxes” paginator ───────── */
interface PaginatorProps {
  currentPage: number;
  totalPages: number;
  onPageChange: (page: number) => void;
  surround?: number; // how many neighbouring page boxes to show
}

export const Paginator: React.FC<PaginatorProps> = ({
  currentPage,
  totalPages,
  onPageChange,
  surround = 1,
}) => {
  if (!totalPages || totalPages < 2) return null;

  const makePageArr = (): (number | "ellipsis")[] => {
    const pages: (number | "ellipsis")[] = [];
    const first = 1;
    const last = totalPages;

    const left = Math.max(first, currentPage - surround);
    const right = Math.min(last, currentPage + surround);

    // always show first
    pages.push(first);

    // left ellipsis
    if (left > first + 1) pages.push("ellipsis");

    // middle pages
    for (let i = left; i <= right; i++) {
      if (i !== first && i !== last) pages.push(i);
    }

    // right ellipsis
    if (right < last - 1) pages.push("ellipsis");

    // always show last
    if (last !== first) pages.push(last);

    return pages;
  };

  const pageArray = makePageArr();

  const handleClick = (p: number) => (e: React.MouseEvent) => {
    e.preventDefault();
    if (p !== currentPage) onPageChange(p);
  };

  return (
    <Pagination>
      <PaginationContent>
        {/* Prev */}
        <PaginationItem>
          <PaginationPrevious
            href="#"
            onClick={handleClick(Math.max(1, currentPage - 1))}
            aria-disabled={currentPage === 1}
            className={
              currentPage === 1 ? "pointer-events-none opacity-50" : ""
            }
          />
        </PaginationItem>

        {/* Number boxes + ellipses */}
        {pageArray.map((p, idx) =>
          p === "ellipsis" ? (
            <PaginationItem key={`e-${idx}`}>
              <PaginationEllipsis />
            </PaginationItem>
          ) : (
            <PaginationItem key={p}>
              <PaginationLink
                href="#"
                isActive={p === currentPage}
                onClick={handleClick(p)}
              >
                {p}
              </PaginationLink>
            </PaginationItem>
          )
        )}

        {/* Next */}
        <PaginationItem>
          <PaginationNext
            href="#"
            onClick={handleClick(Math.min(totalPages, currentPage + 1))}
            aria-disabled={currentPage === totalPages}
            className={
              currentPage === totalPages ? "pointer-events-none opacity-50" : ""
            }
          />
        </PaginationItem>
      </PaginationContent>
    </Pagination>
  );
};
Paginator.displayName = "Paginator";
