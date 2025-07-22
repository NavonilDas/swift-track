import { cn } from "@/utils/Utility"



export default function Label({ className, ...props }: React.ComponentProps<"label">) {

    return (
        <label
            className={cn("text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70", className)}
            {...props}
        />)

}