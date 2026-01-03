import { useState } from "react";
import { Card } from "@/components/ui/card";
import Icon from "@/components/ui/icon";
import { Button } from "@/components/ui/button";
import TitleSlide from "@/components/presentation/TitleSlide";
import { 
  DefinitionSlide, 
  TypesSlide, 
  StatisticsSlide, 
  ConsequencesSlide, 
  EvidenceSlide 
} from "@/components/presentation/ContentSlides";
import { 
  ImpactSlide, 
  PracticeSlide, 
  DifficultiesSlide 
} from "@/components/presentation/PracticeSlides";

const Index = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const slides = [
    { id: 0, title: "Титульный слайд" },
    { id: 1, title: "Определение вины" },
    { id: 2, title: "Виды вины" },
    { id: 3, title: "Статистика" },
    { id: 4, title: "Последствия" },
    { id: 5, title: "Доказательства" },
    { id: 6, title: "Влияние на ответственность" },
    { id: 7, title: "Судебная практика" },
    { id: 8, title: "Трудности квалификации" },
  ];

  const nextSlide = () => {
    if (currentSlide < slides.length - 1) setCurrentSlide(currentSlide + 1);
  };

  const prevSlide = () => {
    if (currentSlide > 0) setCurrentSlide(currentSlide - 1);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 via-pink-50 to-blue-50">
      <div className="container mx-auto px-4 py-8 max-w-7xl">
        <div className="mb-6 flex items-center justify-between">
          <div className="flex gap-2 overflow-x-auto pb-2">
            {slides.map((slide) => (
              <button
                key={slide.id}
                onClick={() => setCurrentSlide(slide.id)}
                className={`px-3 py-1 rounded-full text-xs font-medium transition-all whitespace-nowrap ${
                  currentSlide === slide.id
                    ? "bg-gradient-to-r from-purple-500 to-pink-500 text-white"
                    : "bg-white text-gray-600 hover:bg-gray-100"
                }`}
              >
                {slide.id + 1}. {slide.title}
              </button>
            ))}
          </div>
        </div>

        <div className="relative">
          <Card className="min-h-[600px] p-8 shadow-2xl border-0 overflow-hidden animate-fade-in">
            {currentSlide === 0 && <TitleSlide />}
            {currentSlide === 1 && <DefinitionSlide />}
            {currentSlide === 2 && <TypesSlide />}
            {currentSlide === 3 && <StatisticsSlide />}
            {currentSlide === 4 && <ConsequencesSlide />}
            {currentSlide === 5 && <EvidenceSlide />}
            {currentSlide === 6 && <ImpactSlide />}
            {currentSlide === 7 && <PracticeSlide />}
            {currentSlide === 8 && <DifficultiesSlide />}
          </Card>

          <div className="flex justify-between mt-6">
            <Button
              onClick={prevSlide}
              disabled={currentSlide === 0}
              variant="outline"
              size="lg"
              className="gap-2"
            >
              <Icon name="ChevronLeft" size={20} />
              Назад
            </Button>
            <div className="text-sm text-gray-600 flex items-center gap-2">
              <span className="font-medium">{currentSlide + 1}</span>
              <span>/</span>
              <span>{slides.length}</span>
            </div>
            <Button
              onClick={nextSlide}
              disabled={currentSlide === slides.length - 1}
              size="lg"
              className="gap-2 gradient-purple text-white"
            >
              Далее
              <Icon name="ChevronRight" size={20} />
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Index;
