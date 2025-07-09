import { AuthProvider } from "@/context/auth-provider";

export default function MainLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <AuthProvider>
      <main className='w-full'>{children}</main>
    </AuthProvider>
  );
}
