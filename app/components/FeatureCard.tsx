type FeatureCardProps = {
  icon: React.ReactNode;
  title: string;
  description: string;
};

export default function FeatureCard({ icon, title, description }: FeatureCardProps) {
  return (
    <div className="flex flex-col text-center items-center gap-3 bg-amber-900/10 rounded-lg px-5 py-10 w-[260px] shadow-sm">
      
      {/* Icon */}
      <div className="w-11 h-11 flex items-center justify-center rounded-full bg-amber-900/30 flex-shrink-0">
        {icon}
      </div>

      {/* Title */}
      <h4 className="font-semibold text-amber-950">
        {title}
      </h4>

      {/* Description */}
      <p className="text-[12px] text-gray-700 leading-normal">
        {description}
      </p>

    </div>
  );
}