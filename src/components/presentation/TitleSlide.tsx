import Icon from "@/components/ui/icon";

const TitleSlide = () => (
  <div className="h-full flex flex-col items-center justify-center text-center gradient-purple p-12 rounded-2xl">
    <div className="animate-scale-in">
      <Icon name="Scale" size={80} className="text-white mb-6 mx-auto" />
      <h1 className="text-6xl font-bold text-white mb-4">
        Вина как условие ответственности
      </h1>
      <h2 className="text-3xl font-semibold text-white/90 mb-8">
        за причинение вреда
      </h2>
      <div className="bg-white/20 backdrop-blur-sm rounded-xl p-6 max-w-2xl mx-auto">
        <p className="text-white text-lg">
          Комплексный анализ института вины в гражданском и уголовном праве РФ
        </p>
      </div>
    </div>
  </div>
);

export default TitleSlide;
