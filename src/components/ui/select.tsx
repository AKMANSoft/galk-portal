import * as React from "react"
import { CaretDownIcon, CaretUpIcon, CheckIcon } from "@radix-ui/react-icons"
import * as SelectPrimitive from "@radix-ui/react-select"

import { cn } from "@/lib/utils"
import { Button } from "./button"
import { DropdownMenu, DropdownMenuContent, DropdownMenuTrigger } from "./dropdown-menu"

const Select = SelectPrimitive.Root

const SelectGroup = SelectPrimitive.Group

const SelectValue = SelectPrimitive.Value

const SelectTrigger = React.forwardRef<
  React.ElementRef<typeof SelectPrimitive.Trigger>,
  React.ComponentPropsWithoutRef<typeof SelectPrimitive.Trigger>
>(({ className, children, ...props }, ref) => (
  <SelectPrimitive.Trigger
    ref={ref}
    className={cn(
      "flex h-9 w-full items-center justify-between rounded border border-slate-200 bg-transparent px-3 py-2 text-sm shadow-sm ring-offset-white placeholder:text-slate-500 focus:outline-none focus:ring-1 focus:ring-blue-500 disabled:cursor-not-allowed disabled:opacity-50",
      className
    )}
    {...props}
  >
    {children}
    <SelectPrimitive.Icon asChild>
      <CaretDownIcon className="h-4 w-4 opacity-50" />
    </SelectPrimitive.Icon>
  </SelectPrimitive.Trigger>
))
SelectTrigger.displayName = SelectPrimitive.Trigger.displayName

const SelectContent = React.forwardRef<
  React.ElementRef<typeof SelectPrimitive.Content>,
  React.ComponentPropsWithoutRef<typeof SelectPrimitive.Content>
>(({ className, children, position = "popper", ...props }, ref) => (
  <SelectPrimitive.Portal>
    <SelectPrimitive.Content
      ref={ref}
      className={cn(
        "relative z-50 min-w-[8rem] overflow-hidden rounded border border-slate-200 bg-white text-slate-950 shadow-md data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2 dark:border-slate-800 dark:bg-slate-950 dark:text-slate-50",
        position === "popper" &&
        "data-[side=bottom]:translate-y-1 data-[side=left]:-translate-x-1 data-[side=right]:translate-x-1 data-[side=top]:-translate-y-1",
        className
      )}
      position={position}
      {...props}
    >
      <SelectPrimitive.Viewport
        className={cn(
          "p-1",
          position === "popper" &&
          "h-[var(--radix-select-trigger-height)] w-full min-w-[var(--radix-select-trigger-width)]"
        )}
      >
        {children}
      </SelectPrimitive.Viewport>
    </SelectPrimitive.Content>
  </SelectPrimitive.Portal>
))
SelectContent.displayName = SelectPrimitive.Content.displayName

const SelectLabel = React.forwardRef<
  React.ElementRef<typeof SelectPrimitive.Label>,
  React.ComponentPropsWithoutRef<typeof SelectPrimitive.Label>
>(({ className, ...props }, ref) => (
  <SelectPrimitive.Label
    ref={ref}
    className={cn("px-2 py-1.5 text-sm font-semibold", className)}
    {...props}
  />
))
SelectLabel.displayName = SelectPrimitive.Label.displayName

const SelectItem = React.forwardRef<
  React.ElementRef<typeof SelectPrimitive.Item>,
  React.ComponentPropsWithoutRef<typeof SelectPrimitive.Item>
>(({ className, children, ...props }, ref) => (
  <SelectPrimitive.Item
    ref={ref}
    className={cn(
      "relative flex w-full cursor-default gap-3 select-none items-center rounded-sm py-1.5 pl-2 pr-8 text-sm font-medium outline-none focus:text-blue-500 hover:text-blue-500 data-[disabled]:pointer-events-none data-[disabled]:opacity-50",
      className
    )}
    {...props}
  >
    <SelectPrimitive.ItemText>{children}</SelectPrimitive.ItemText>
  </SelectPrimitive.Item>
))
SelectItem.displayName = SelectPrimitive.Item.displayName

const SelectSeparator = React.forwardRef<
  React.ElementRef<typeof SelectPrimitive.Separator>,
  React.ComponentPropsWithoutRef<typeof SelectPrimitive.Separator>
>(({ className, ...props }, ref) => (
  <SelectPrimitive.Separator
    ref={ref}
    className={cn("-mx-1 my-1 h-px bg-slate-100 dark:bg-slate-800", className)}
    {...props}
  />
))
SelectSeparator.displayName = SelectPrimitive.Separator.displayName




export default function useComponentVisible(initialIsVisible: boolean) {
  const [isComponentVisible, setIsComponentVisible] = React.useState(initialIsVisible);
  const ref = React.useRef<HTMLDivElement>(null);

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const handleClickOutside = (event: any) => {
    if (ref.current && !ref.current.contains(event.target)) {
      setIsComponentVisible(false);
    }
  };

  React.useEffect(() => {
    document.addEventListener('click', handleClickOutside, true);
    return () => {
      document.removeEventListener('click', handleClickOutside, true);
    };
  }, []);

  return { ref, isComponentVisible, setIsComponentVisible };
}



type SelectOption = {
  label: (active: boolean) => string | React.ReactNode;
  value: string;
}

type SelectElProps = {
  options: Array<SelectOption>;
  className?: string;
}

const SelectEl = React.forwardRef<React.ElementRef<typeof Select>, SelectElProps>(({ options }) => {
  // const { isComponentVisible: open, ref, setIsComponentVisible: setOpen } = useComponentVisible(false)
  const [open, setOpen] = React.useState(false);
  const [selectedOpt, setSelectedOpt] = React.useState<SelectOption | null>();
  const buttonRef = React.useRef<HTMLButtonElement>(null)

  const onSelectedOptChange = (opt: SelectOption) => {
    setSelectedOpt(opt)
    setOpen(false);
  }

  console.log()


  return (
    <DropdownMenu open={open} onOpenChange={setOpen}>
      <DropdownMenuTrigger asChild>
        <button type="button"
          ref={buttonRef}
          className="bg-white h-[42px] text-sm font-medium focus:outline-blue-500 rounded flex items-center px-3 w-full justify-between">
          <span>
            {selectedOpt ? selectedOpt.label(true) : <span className="text-silver select-none">Select Projects</span>}
          </span>
          {
            open ?
              <CaretUpIcon className={cn(
                "h-5 w-5 text-blue-500"
              )} />
              :
              <CaretDownIcon className={cn(
                "h-5 w-5",
                selectedOpt ? "text-blue-500" : "text-secondary"
              )} />
          }
        </button>
      </DropdownMenuTrigger>

      <DropdownMenuContent className="w-full min-w-full p-0 rounded" style={{ minWidth: buttonRef.current?.clientWidth }}>
        <div className="divide-y divide-gray-mute w-full rounded px-4">
          {
            options?.map((opt) => (
              <div
                key={opt.value} role="button"
                onClick={() => onSelectedOptChange(opt)}
                className="flex items-center gap-3 w-full h-auto group py-[18px]">
                <span className={cn(
                  "w-5 aspect-square rounded-full flex items-center justify-center",
                  opt.value === selectedOpt?.value ? "bg-blue-500" : "border border-gray-mute"
                )}>
                  {opt.value === selectedOpt?.value && <CheckIcon className="w-4 h-4 text-white" />}
                </span>
                {opt.label(selectedOpt?.value === opt.value)}
                <Button variant="secondary" className="h-[22px] px-2 sticky end-0 z-[1]">Detail</Button>
              </div>
            ))
          }
        </div>
      </DropdownMenuContent>

    </DropdownMenu>
  )
})
SelectEl.displayName = "SelectEl"
// const SelectEl = React.forwardRef<React.ElementRef<typeof Select>, SelectElProps>(({ options }) => {
//   const { isComponentVisible: open, ref, setIsComponentVisible: setOpen } = useComponentVisible(false)
//   const [selectedOpt, setSelectedOpt] = React.useState<SelectOption | null>();


//   const onSelectedOptChange = (opt: SelectOption) => {
//     setSelectedOpt(opt)
//     setOpen(false);
//   }


//   return (
//     <div ref={ref} className="relative">
//       <div role="button"
//         onClick={() => setOpen(!open)}
//         className="bg-white h-[42px] text-sm font-medium rounded flex items-center px-3 w-full justify-between">
//         <span>
//           {selectedOpt ? selectedOpt.label(true) : <span className="text-silver">Select Projects</span>}
//         </span>
//         {
//           open ?
//             <CaretUpIcon className={cn(
//               "h-5 w-5 text-blue-500"
//             )} />
//             :
//             <CaretDownIcon className={cn(
//               "h-5 w-5",
//               selectedOpt ? "text-blue-500" : "text-secondary"
//             )} />
//         }
//       </div>
//       {
//         open &&
//         <div className="divide-y divide-gray-mute w-full absolute top-full mt-2 bg-white rounded px-4 shadow-lg shadow-gray-400 z-50">
//           {
//             options?.map((opt) => (
//               <div
//                 key={opt.value} role="button"
//                 onClick={() => onSelectedOptChange(opt)}
//                 className="flex items-center gap-3 w-full h-auto group py-[18px]">
//                 <span className={cn(
//                   "w-5 aspect-square rounded-full flex items-center justify-center",
//                   opt.value === selectedOpt?.value ? "bg-blue-500" : "border border-gray-mute"
//                 )}>
//                   {opt.value === selectedOpt?.value && <CheckIcon className="w-4 h-4 text-white" />}
//                 </span>
//                 {opt.label(selectedOpt?.value === opt.value)}
//                 <Button variant="secondary" className="h-[22px] px-2 sticky end-0 z-[1]">Detail</Button>
//               </div>
//             ))
//           }
//         </div>
//       }
//     </div>
//   )
// })
// SelectEl.displayName = "SelectEl"



export {
  Select,
  SelectEl,
  SelectGroup,
  SelectValue,
  SelectTrigger,
  SelectContent,
  SelectLabel,
  SelectItem,
  SelectSeparator,
}
