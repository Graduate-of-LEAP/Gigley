type PropsChildren = {
  children: React.ReactNode;
  className?: string;
};

export const Container = ({ children, className }: PropsChildren) => {
  return (
    <div className={className}>
      <div className={`max-w-screen-xl m-auto`}>{children}</div>
    </div>
  );
};
