import { Input } from "@/components/ui/input"

export function Search() {
  return (
    <div>
      <Input
        type="search"
        placeholder="Search coins..."
        className="h-9 md:w-[160px] lg:w-[260px]"
      />
    </div>
  )
}
