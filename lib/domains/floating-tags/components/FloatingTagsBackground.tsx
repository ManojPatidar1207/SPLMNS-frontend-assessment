const FloatingTagBackground: React.FC = () => {
  return (
    <div className="absolute inset-0 pointer-events-none w-full h-full z-0">
      <video
        src="/particles/bg-particles.mp4"
        muted
        autoPlay
        loop
        controls={false}
        className="h-full w-full"
      />
    </div>
  );
};

export default FloatingTagBackground;
