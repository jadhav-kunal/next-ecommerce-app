import { UserButton } from '@clerk/nextjs';

export default function SetupPage() {
  return (
    <div className="p-4">
      <p>This is protected route!</p>
      <UserButton afterSignOutUrl="/" />
    </div>
  );
}
