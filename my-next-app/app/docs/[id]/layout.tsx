import RoomProvider from "@/components/RoomProvider";
function Layout({
  children,
  params: { id },
}: {
  children: React.ReactNode;
  params: { id: string };
}) {
  return (
    <div>
     <RoomProvider roomId={id}>
      {children}
      </RoomProvider>
    </div>
  );
}

export default Layout;
