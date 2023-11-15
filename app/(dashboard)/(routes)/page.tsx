import { UserButton } from "@clerk/nextjs"

export default function Home() {
  return (
    <UserButton
      afterSignOutUrl="/" // Redirect to home page after sign out
    />
  )
}
