import SelectProfile from "../components/auth/select-profile";

export default function Page({
  searchParams
}: {
  searchParams: { idSession: string }
}) {
  return (
    <div>
      <SelectProfile searchParams={searchParams} />
    </div>
  )
}