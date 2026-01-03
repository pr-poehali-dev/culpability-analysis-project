import { Card } from "@/components/ui/card";
import Icon from "@/components/ui/icon";

export const ImpactSlide = () => (
  <div className="h-full animate-fade-in">
    <h2 className="text-4xl font-bold mb-8 text-gradient">
      Влияние вида вины на ответственность
    </h2>
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
      <Card className="p-6 hover:shadow-lg transition-all group cursor-pointer gradient-card">
        <div className="flex items-start gap-4">
          <div className="p-3 rounded-full bg-purple-100 group-hover:bg-purple-200 transition-colors">
            <Icon name="CircleDollarSign" size={28} className="text-purple-600" />
          </div>
          <div>
            <h3 className="text-xl font-bold mb-2 text-purple-700">Размер компенсации</h3>
            <p className="text-gray-700 mb-3">
              В гражданском праве форма вины влияет на возможность снижения размера компенсации.
            </p>
            <div className="space-y-2">
              <div className="flex items-center gap-2 text-sm">
                <div className="w-3 h-3 rounded-full bg-red-500" />
                <span className="text-gray-700">
                  <strong>Умысел:</strong> полное возмещение, моральный вред
                </span>
              </div>
              <div className="flex items-center gap-2 text-sm">
                <div className="w-3 h-3 rounded-full bg-orange-500" />
                <span className="text-gray-700">
                  <strong>Грубая неосторожность:</strong> полное возмещение
                </span>
              </div>
              <div className="flex items-center gap-2 text-sm">
                <div className="w-3 h-3 rounded-full bg-yellow-500" />
                <span className="text-gray-700">
                  <strong>Простая неосторожность:</strong> возможно снижение
                </span>
              </div>
            </div>
          </div>
        </div>
      </Card>

      <Card className="p-6 hover:shadow-lg transition-all group cursor-pointer gradient-card">
        <div className="flex items-start gap-4">
          <div className="p-3 rounded-full bg-pink-100 group-hover:bg-pink-200 transition-colors">
            <Icon name="Lock" size={28} className="text-pink-600" />
          </div>
          <div>
            <h3 className="text-xl font-bold mb-2 text-pink-700">Вид наказания</h3>
            <p className="text-gray-700 mb-3">
              В уголовном праве форма вины существенно влияет на квалификацию и наказание.
            </p>
            <div className="space-y-2">
              <div className="flex items-center gap-2 text-sm">
                <div className="w-3 h-3 rounded-full bg-red-600" />
                <span className="text-gray-700">
                  <strong>Прямой умысел:</strong> максимальное наказание
                </span>
              </div>
              <div className="flex items-center gap-2 text-sm">
                <div className="w-3 h-3 rounded-full bg-orange-500" />
                <span className="text-gray-700">
                  <strong>Косвенный умысел:</strong> строгое наказание
                </span>
              </div>
              <div className="flex items-center gap-2 text-sm">
                <div className="w-3 h-3 rounded-full bg-yellow-500" />
                <span className="text-gray-700">
                  <strong>Неосторожность:</strong> значительно мягче
                </span>
              </div>
            </div>
          </div>
        </div>
      </Card>

      <Card className="p-6 hover:shadow-lg transition-all group cursor-pointer gradient-card">
        <div className="flex items-start gap-4">
          <div className="p-3 rounded-full bg-blue-100 group-hover:bg-blue-200 transition-colors">
            <Icon name="Users" size={28} className="text-blue-600" />
          </div>
          <div>
            <h3 className="text-xl font-bold mb-2 text-blue-700">Смешанная вина</h3>
            <p className="text-gray-700 mb-3">
              Вина потерпевшего учитывается при определении размера возмещения (ст. 1083 ГК РФ).
            </p>
            <div className="bg-blue-50 p-3 rounded-lg">
              <p className="text-sm text-blue-800">
                <strong>Пример:</strong> При ДТП потерпевший не пристегнул ремень безопасности —
                суд может снизить компенсацию на 25-50%.
              </p>
            </div>
          </div>
        </div>
      </Card>

      <Card className="p-6 hover:shadow-lg transition-all group cursor-pointer gradient-card">
        <div className="flex items-start gap-4">
          <div className="p-3 rounded-full bg-green-100 group-hover:bg-green-200 transition-colors">
            <Icon name="Award" size={28} className="text-green-600" />
          </div>
          <div>
            <h3 className="text-xl font-bold mb-2 text-green-700">Смягчающие обстоятельства</h3>
            <p className="text-gray-700 mb-3">
              Форма вины учитывается при назначении наказания (ст. 61 УК РФ, ст. 1083 ГК РФ).
            </p>
            <div className="space-y-1 text-sm text-gray-700">
              <p>• Раскаяние и возмещение ущерба</p>
              <p>• Совершение впервые по неосторожности</p>
              <p>• Активное способствование расследованию</p>
            </div>
          </div>
        </div>
      </Card>
    </div>
  </div>
);

export const PracticeSlide = () => (
  <div className="h-full animate-fade-in overflow-y-auto">
    <h2 className="text-4xl font-bold mb-6 text-gradient">Судебная практика: примеры</h2>
    <div className="space-y-4">
      <Card className="p-6 border-l-4 border-purple-500 hover:shadow-lg transition-all">
        <div className="flex items-start gap-4">
          <div className="p-3 rounded-full bg-purple-100 flex-shrink-0">
            <Icon name="FileText" size={24} className="text-purple-600" />
          </div>
          <div>
            <h3 className="text-lg font-bold mb-2 text-purple-700">
              Определение ВС РФ №18-КГ19-152 (2019)
            </h3>
            <p className="text-sm text-gray-600 mb-2">
              <strong>Суть дела:</strong> Причинение смерти по неосторожности в результате ДТП
            </p>
            <p className="text-gray-700 text-sm mb-3">
              Верховный суд указал, что для квалификации по ч.3 ст. 264 УК РФ необходимо
              установить грубое нарушение ПДД, находящееся в причинной связи с наступлением
              смерти. Простое превышение скорости не является достаточным основанием.
            </p>
            <div className="bg-purple-50 p-3 rounded-lg">
              <p className="text-xs font-medium text-purple-800">
                Правовая позиция: Форма вины должна устанавливаться с учетом всех обстоятельств дела
              </p>
            </div>
          </div>
        </div>
      </Card>

      <Card className="p-6 border-l-4 border-pink-500 hover:shadow-lg transition-all">
        <div className="flex items-start gap-4">
          <div className="p-3 rounded-full bg-pink-100 flex-shrink-0">
            <Icon name="Scale" size={24} className="text-pink-600" />
          </div>
          <div>
            <h3 className="text-lg font-bold mb-2 text-pink-700">
              Постановление Пленума ВС РФ №25 (2015)
            </h3>
            <p className="text-sm text-gray-600 mb-2">
              <strong>Тема:</strong> О применении судами положений о возмещении вреда
            </p>
            <p className="text-gray-700 text-sm mb-3">
              Пленум разъяснил, что бремя доказывания отсутствия вины лежит на причинителе вреда.
              При этом грубая неосторожность потерпевшего может служить основанием для снижения
              размера возмещения или отказа в нем (кроме случаев причинения вреда жизни/здоровью).
            </p>
            <div className="bg-pink-50 p-3 rounded-lg">
              <p className="text-xs font-medium text-pink-800">
                Ключевой вывод: Презумпция вины в гражданском праве — общее правило
              </p>
            </div>
          </div>
        </div>
      </Card>

      <Card className="p-6 border-l-4 border-blue-500 hover:shadow-lg transition-all">
        <div className="flex items-start gap-4">
          <div className="p-3 rounded-full bg-blue-100 flex-shrink-0">
            <Icon name="Gavel" size={24} className="text-blue-600" />
          </div>
          <div>
            <h3 className="text-lg font-bold mb-2 text-blue-700">
              Дело №88-КГ21-3 (Кассация, 2021)
            </h3>
            <p className="text-sm text-gray-600 mb-2">
              <strong>Суть дела:</strong> Возмещение ущерба от затопления квартиры
            </p>
            <p className="text-gray-700 text-sm mb-3">
              Ответчик не смог доказать отсутствие своей вины в причинении затопления. Суд
              установил грубую неосторожность и взыскал полную сумму ущерба 1,2 млн руб.,
              включая упущенную выгоду от невозможности сдачи квартиры в аренду.
            </p>
            <div className="bg-blue-50 p-3 rounded-lg">
              <p className="text-xs font-medium text-blue-800">
                Практическое значение: Вина влияет на объем возмещаемого ущерба
              </p>
            </div>
          </div>
        </div>
      </Card>

      <Card className="p-6 border-l-4 border-green-500 hover:shadow-lg transition-all">
        <div className="flex items-start gap-4">
          <div className="p-3 rounded-full bg-green-100 flex-shrink-0">
            <Icon name="TrendingUp" size={24} className="text-green-600" />
          </div>
          <div>
            <h3 className="text-lg font-bold mb-2 text-green-700">
              Постановление КС РФ №18-П (2020)
            </h3>
            <p className="text-sm text-gray-600 mb-2">
              <strong>Тема:</strong> О конституционности ответственности без вины
            </p>
            <p className="text-gray-700 text-sm mb-3">
              Конституционный суд признал соответствующими Конституции нормы об ответственности
              владельцев источников повышенной опасности независимо от вины (ст. 1079 ГК РФ), но
              указал на необходимость учета всех обстоятельств дела.
            </p>
            <div className="bg-green-50 p-3 rounded-lg">
              <p className="text-xs font-medium text-green-800">
                Конституционно-правовой аспект: Баланс прав причинителя и потерпевшего
              </p>
            </div>
          </div>
        </div>
      </Card>
    </div>
  </div>
);

export const DifficultiesSlide = () => (
  <div className="h-full animate-fade-in overflow-y-auto">
    <h2 className="text-4xl font-bold mb-6 text-gradient">Трудности квалификации вины</h2>
    <div className="space-y-4">
      <Card className="p-6 border-l-4 border-red-500 hover:shadow-lg transition-all">
        <div className="flex items-start gap-4">
          <div className="p-3 rounded-full bg-red-100">
            <Icon name="AlertCircle" size={24} className="text-red-600" />
          </div>
          <div>
            <h3 className="text-lg font-bold mb-2 text-red-700">
              1. Разграничение умысла и неосторожности
            </h3>
            <p className="text-gray-700 text-sm mb-3">
              Установление интеллектуального и волевого момента вины часто вызывает сложности.
              Особенно в делах о причинении тяжкого вреда здоровью.
            </p>
            <div className="bg-red-50 p-3 rounded-lg">
              <p className="text-xs font-medium text-red-800">
                <strong>Проблема:</strong> Отсутствие четких критериев отграничения косвенного
                умысла от легкомыслия
              </p>
            </div>
          </div>
        </div>
      </Card>

      <Card className="p-6 border-l-4 border-orange-500 hover:shadow-lg transition-all">
        <div className="flex items-start gap-4">
          <div className="p-3 rounded-full bg-orange-100">
            <Icon name="HelpCircle" size={24} className="text-orange-600" />
          </div>
          <div>
            <h3 className="text-lg font-bold mb-2 text-orange-700">
              2. Доказывание психического отношения
            </h3>
            <p className="text-gray-700 text-sm mb-3">
              Вина — субъективная категория, которую невозможно непосредственно наблюдать.
              Доказывается через объективные признаки поведения.
            </p>
            <div className="bg-orange-50 p-3 rounded-lg">
              <p className="text-xs font-medium text-orange-800">
                <strong>Решение:</strong> Использование психологических экспертиз, анализ поведения
                до и после деяния
              </p>
            </div>
          </div>
        </div>
      </Card>

      <Card className="p-6 border-l-4 border-yellow-500 hover:shadow-lg transition-all">
        <div className="flex items-start gap-4">
          <div className="p-3 rounded-full bg-yellow-100">
            <Icon name="GitBranch" size={24} className="text-yellow-600" />
          </div>
          <div>
            <h3 className="text-lg font-bold mb-2 text-yellow-700">
              3. Смешанная вина в гражданском праве
            </h3>
            <p className="text-gray-700 text-sm mb-3">
              Определение степени вины каждой из сторон и ее влияния на размер компенсации —
              оценочная категория, что порождает разную судебную практику.
            </p>
            <div className="bg-yellow-50 p-3 rounded-lg">
              <p className="text-xs font-medium text-yellow-800">
                <strong>Спорный момент:</strong> В каких пропорциях снижать компенсацию при
                смешанной вине?
              </p>
            </div>
          </div>
        </div>
      </Card>

      <Card className="p-6 border-l-4 border-purple-500 hover:shadow-lg transition-all">
        <div className="flex items-start gap-4">
          <div className="p-3 rounded-full bg-purple-100">
            <Icon name="Users" size={24} className="text-purple-600" />
          </div>
          <div>
            <h3 className="text-lg font-bold mb-2 text-purple-700">
              4. Вина юридических лиц
            </h3>
            <p className="text-gray-700 text-sm mb-3">
              В гражданском праве установлена вина организаций, но механизм ее определения через
              вину работников порождает дискуссии.
            </p>
            <div className="bg-purple-50 p-3 rounded-lg">
              <p className="text-xs font-medium text-purple-800">
                <strong>Доктрина:</strong> Вина юрлица = вина его работников + организационные
                упущения
              </p>
            </div>
          </div>
        </div>
      </Card>

      <Card className="p-6 border-l-4 border-blue-500 hover:shadow-lg transition-all">
        <div className="flex items-start gap-4">
          <div className="p-3 rounded-full bg-blue-100">
            <Icon name="Layers" size={24} className="text-blue-600" />
          </div>
          <div>
            <h3 className="text-lg font-bold mb-2 text-blue-700">
              5. Двойная форма вины (ст. 27 УК РФ)
            </h3>
            <p className="text-gray-700 text-sm mb-3">
              Одно деяние совершено умышленно, но повлекло тяжкие последствия по неосторожности.
              Сложность квалификации и разграничения с другими составами.
            </p>
            <div className="bg-blue-50 p-3 rounded-lg">
              <p className="text-xs font-medium text-blue-800">
                <strong>Пример:</strong> Умышленное причинение тяжкого вреда здоровью, повлекшее
                смерть по неосторожности (ч.4 ст. 111 УК РФ)
              </p>
            </div>
          </div>
        </div>
      </Card>

      <Card className="p-6 bg-gradient-to-r from-green-50 to-blue-50 border-2 border-green-200">
        <div className="flex items-start gap-4">
          <Icon name="BookOpen" size={28} className="text-green-600" />
          <div>
            <h3 className="text-lg font-bold mb-2 text-green-800">
              Пути решения проблем квалификации
            </h3>
            <ul className="space-y-2 text-sm text-gray-700">
              <li className="flex items-start gap-2">
                <Icon name="Check" size={16} className="text-green-600 mt-1 flex-shrink-0" />
                <span>
                  Использование психолого-психиатрических экспертиз для установления субъективной
                  стороны
                </span>
              </li>
              <li className="flex items-start gap-2">
                <Icon name="Check" size={16} className="text-green-600 mt-1 flex-shrink-0" />
                <span>
                  Разработка единообразных разъяснений Верховного суда по спорным вопросам
                </span>
              </li>
              <li className="flex items-start gap-2">
                <Icon name="Check" size={16} className="text-green-600 mt-1 flex-shrink-0" />
                <span>Применение сравнительно-правового анализа зарубежного опыта</span>
              </li>
              <li className="flex items-start gap-2">
                <Icon name="Check" size={16} className="text-green-600 mt-1 flex-shrink-0" />
                <span>
                  Повышение квалификации судей в области психологии и доказывания вины
                </span>
              </li>
            </ul>
          </div>
        </div>
      </Card>
    </div>
  </div>
);
