import { Card } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import Icon from "@/components/ui/icon";

export const DefinitionSlide = () => (
  <div className="h-full animate-fade-in">
    <h2 className="text-4xl font-bold mb-8 text-gradient">Определение вины</h2>
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
      <Card className="p-6 gradient-card border-l-4 border-purple-500 hover:shadow-lg transition-all">
        <div className="flex items-start gap-4">
          <div className="p-3 rounded-full bg-purple-100">
            <Icon name="BookOpen" size={24} className="text-purple-600" />
          </div>
          <div>
            <h3 className="text-xl font-bold mb-2 text-purple-700">Гражданское право</h3>
            <p className="text-gray-700">
              Вина — психическое отношение лица к своему противоправному поведению и его
              последствиям в форме умысла или неосторожности (ст. 401 ГК РФ).
            </p>
          </div>
        </div>
      </Card>

      <Card className="p-6 gradient-card border-l-4 border-pink-500 hover:shadow-lg transition-all">
        <div className="flex items-start gap-4">
          <div className="p-3 rounded-full bg-pink-100">
            <Icon name="Gavel" size={24} className="text-pink-600" />
          </div>
          <div>
            <h3 className="text-xl font-bold mb-2 text-pink-700">Уголовное право</h3>
            <p className="text-gray-700">
              Вина — психическое отношение лица к совершаемому общественно опасному деянию
              и его последствиям (ст. 24-27 УК РФ).
            </p>
          </div>
        </div>
      </Card>
    </div>

    <div className="mt-8">
      <Card className="p-6 bg-gradient-to-r from-blue-50 to-purple-50 border-2 border-blue-200">
        <div className="flex items-start gap-4">
          <Icon name="Lightbulb" size={32} className="text-blue-600 flex-shrink-0" />
          <div>
            <h4 className="text-lg font-bold mb-2 text-blue-800">Ключевые элементы</h4>
            <ul className="space-y-2 text-gray-700">
              <li className="flex items-center gap-2">
                <div className="w-2 h-2 rounded-full bg-blue-500" />
                Субъективное отношение правонарушителя
              </li>
              <li className="flex items-center gap-2">
                <div className="w-2 h-2 rounded-full bg-blue-500" />
                Осознание противоправности действий
              </li>
              <li className="flex items-center gap-2">
                <div className="w-2 h-2 rounded-full bg-blue-500" />
                Предвидение или возможность предвидения последствий
              </li>
            </ul>
          </div>
        </div>
      </Card>
    </div>
  </div>
);

export const TypesSlide = () => (
  <div className="h-full animate-fade-in">
    <h2 className="text-4xl font-bold mb-8 text-gradient">
      Виды вины: сравнительный анализ
    </h2>
    <Tabs defaultValue="civil" className="w-full">
      <TabsList className="grid w-full grid-cols-2 mb-6">
        <TabsTrigger value="civil" className="text-lg">
          Гражданское право
        </TabsTrigger>
        <TabsTrigger value="criminal" className="text-lg">
          Уголовное право
        </TabsTrigger>
      </TabsList>

      <TabsContent value="civil" className="space-y-4 animate-fade-in">
        <Card className="p-6 border-l-4 border-purple-500">
          <div className="flex items-start gap-4">
            <div className="p-3 rounded-full bg-purple-100">
              <Icon name="AlertCircle" size={24} className="text-purple-600" />
            </div>
            <div className="flex-1">
              <h3 className="text-xl font-bold mb-2 text-purple-700">Умысел</h3>
              <p className="text-gray-700 mb-3">
                Лицо осознавало противоправность своих действий и желало наступления вредных
                последствий или сознательно их допускало.
              </p>
              <div className="bg-purple-50 p-3 rounded-lg">
                <p className="text-sm font-medium text-purple-800">
                  Пример: Намеренное повреждение чужого имущества
                </p>
              </div>
            </div>
          </div>
        </Card>

        <Card className="p-6 border-l-4 border-blue-500">
          <div className="flex items-start gap-4">
            <div className="p-3 rounded-full bg-blue-100">
              <Icon name="AlertTriangle" size={24} className="text-blue-600" />
            </div>
            <div className="flex-1">
              <h3 className="text-xl font-bold mb-2 text-blue-700">Неосторожность</h3>
              <p className="text-gray-700 mb-3">
                Лицо не предвидело возможности наступления вредных последствий, хотя должно
                было и могло их предвидеть (простая и грубая неосторожность).
              </p>
              <div className="bg-blue-50 p-3 rounded-lg">
                <p className="text-sm font-medium text-blue-800">
                  Пример: ДТП вследствие превышения скорости
                </p>
              </div>
            </div>
          </div>
        </Card>
      </TabsContent>

      <TabsContent value="criminal" className="space-y-4 animate-fade-in">
        <Card className="p-6 border-l-4 border-pink-500">
          <div className="flex items-start gap-4">
            <div className="p-3 rounded-full bg-pink-100">
              <Icon name="Flame" size={24} className="text-pink-600" />
            </div>
            <div className="flex-1">
              <h3 className="text-xl font-bold mb-2 text-pink-700">Прямой умысел (ст. 25 УК РФ)</h3>
              <p className="text-gray-700 mb-3">
                Лицо осознавало общественную опасность, предвидело возможность или неизбежность
                наступления последствий и желало их наступления.
              </p>
            </div>
          </div>
        </Card>

        <Card className="p-6 border-l-4 border-red-500">
          <div className="flex items-start gap-4">
            <div className="p-3 rounded-full bg-red-100">
              <Icon name="Zap" size={24} className="text-red-600" />
            </div>
            <div className="flex-1">
              <h3 className="text-xl font-bold mb-2 text-red-700">Косвенный умысел</h3>
              <p className="text-gray-700 mb-3">
                Лицо осознавало общественную опасность, предвидело возможность наступления
                последствий, не желало, но сознательно допускало их или относилось безразлично.
              </p>
            </div>
          </div>
        </Card>

        <Card className="p-6 border-l-4 border-orange-500">
          <div className="flex items-start gap-4">
            <div className="p-3 rounded-full bg-orange-100">
              <Icon name="Wind" size={24} className="text-orange-600" />
            </div>
            <div className="flex-1">
              <h3 className="text-xl font-bold mb-2 text-orange-700">Легкомыслие (ст. 26 УК РФ)</h3>
              <p className="text-gray-700 mb-3">
                Лицо предвидело возможность наступления последствий, но без достаточных оснований
                рассчитывало на их предотвращение.
              </p>
            </div>
          </div>
        </Card>

        <Card className="p-6 border-l-4 border-yellow-500">
          <div className="flex items-start gap-4">
            <div className="p-3 rounded-full bg-yellow-100">
              <Icon name="CloudFog" size={24} className="text-yellow-600" />
            </div>
            <div className="flex-1">
              <h3 className="text-xl font-bold mb-2 text-yellow-700">Небрежность</h3>
              <p className="text-gray-700 mb-3">
                Лицо не предвидело возможности наступления последствий, хотя при необходимой
                внимательности и предусмотрительности должно было и могло их предвидеть.
              </p>
            </div>
          </div>
        </Card>
      </TabsContent>
    </Tabs>
  </div>
);

export const StatisticsSlide = () => (
  <div className="h-full animate-fade-in">
    <h2 className="text-4xl font-bold mb-8 text-gradient">
      Статистика судебной практики РФ
    </h2>
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
      <Card className="p-6 gradient-card">
        <h3 className="text-xl font-bold mb-4 text-purple-700">Гражданские дела (2023)</h3>
        <div className="space-y-4">
          <div>
            <div className="flex justify-between mb-2">
              <span className="text-gray-700">Умышленное причинение вреда</span>
              <span className="font-bold text-purple-600">23%</span>
            </div>
            <div className="w-full bg-gray-200 rounded-full h-3">
              <div className="bg-gradient-to-r from-purple-500 to-pink-500 h-3 rounded-full" style={{ width: "23%" }} />
            </div>
          </div>

          <div>
            <div className="flex justify-between mb-2">
              <span className="text-gray-700">Грубая неосторожность</span>
              <span className="font-bold text-purple-600">41%</span>
            </div>
            <div className="w-full bg-gray-200 rounded-full h-3">
              <div className="bg-gradient-to-r from-purple-500 to-pink-500 h-3 rounded-full" style={{ width: "41%" }} />
            </div>
          </div>

          <div>
            <div className="flex justify-between mb-2">
              <span className="text-gray-700">Простая неосторожность</span>
              <span className="font-bold text-purple-600">36%</span>
            </div>
            <div className="w-full bg-gray-200 rounded-full h-3">
              <div className="bg-gradient-to-r from-purple-500 to-pink-500 h-3 rounded-full" style={{ width: "36%" }} />
            </div>
          </div>
        </div>
        <p className="text-xs text-gray-500 mt-4">Источник: Судебная статистика РФ</p>
      </Card>

      <Card className="p-6 gradient-card">
        <h3 className="text-xl font-bold mb-4 text-pink-700">Уголовные дела (2023)</h3>
        <div className="space-y-4">
          <div>
            <div className="flex justify-between mb-2">
              <span className="text-gray-700">Прямой умысел</span>
              <span className="font-bold text-pink-600">58%</span>
            </div>
            <div className="w-full bg-gray-200 rounded-full h-3">
              <div className="bg-gradient-to-r from-pink-500 to-purple-500 h-3 rounded-full" style={{ width: "58%" }} />
            </div>
          </div>

          <div>
            <div className="flex justify-between mb-2">
              <span className="text-gray-700">Косвенный умысел</span>
              <span className="font-bold text-pink-600">19%</span>
            </div>
            <div className="w-full bg-gray-200 rounded-full h-3">
              <div className="bg-gradient-to-r from-pink-500 to-purple-500 h-3 rounded-full" style={{ width: "19%" }} />
            </div>
          </div>

          <div>
            <div className="flex justify-between mb-2">
              <span className="text-gray-700">Легкомыслие</span>
              <span className="font-bold text-pink-600">14%</span>
            </div>
            <div className="w-full bg-gray-200 rounded-full h-3">
              <div className="bg-gradient-to-r from-pink-500 to-purple-500 h-3 rounded-full" style={{ width: "14%" }} />
            </div>
          </div>

          <div>
            <div className="flex justify-between mb-2">
              <span className="text-gray-700">Небрежность</span>
              <span className="font-bold text-pink-600">9%</span>
            </div>
            <div className="w-full bg-gray-200 rounded-full h-3">
              <div className="bg-gradient-to-r from-pink-500 to-purple-500 h-3 rounded-full" style={{ width: "9%" }} />
            </div>
          </div>
        </div>
        <p className="text-xs text-gray-500 mt-4">Источник: Судебная статистика РФ</p>
      </Card>

      <Card className="p-6 col-span-1 md:col-span-2 bg-gradient-to-r from-blue-50 to-purple-50 border-2 border-blue-200">
        <div className="flex items-start gap-4">
          <Icon name="TrendingUp" size={32} className="text-blue-600" />
          <div>
            <h4 className="text-lg font-bold mb-2 text-blue-800">Тенденции 2020-2023</h4>
            <ul className="space-y-2 text-gray-700">
              <li className="flex items-center gap-2">
                <Icon name="ArrowUp" size={16} className="text-green-600" />
                Рост дел с установлением грубой неосторожности (+12%)
              </li>
              <li className="flex items-center gap-2">
                <Icon name="ArrowDown" size={16} className="text-red-600" />
                Снижение дел с прямым умыслом в гражданских спорах (-7%)
              </li>
              <li className="flex items-center gap-2">
                <Icon name="Minus" size={16} className="text-gray-600" />
                Стабильное количество дел по небрежности в УП
              </li>
            </ul>
          </div>
        </div>
      </Card>
    </div>
  </div>
);

export const ConsequencesSlide = () => (
  <div className="h-full animate-fade-in">
    <h2 className="text-4xl font-bold mb-8 text-gradient">Правовые последствия</h2>
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
      <Card className="p-6 border-l-4 border-green-500 hover:shadow-lg transition-all">
        <div className="flex items-start gap-4">
          <div className="p-3 rounded-full bg-green-100">
            <Icon name="ShieldCheck" size={24} className="text-green-600" />
          </div>
          <div>
            <h3 className="text-xl font-bold mb-3 text-green-700">Отсутствие вины</h3>
            <p className="text-gray-700 mb-3">
              По общему правилу лицо освобождается от ответственности при доказанности
              отсутствия вины (ст. 401 ГК РФ, ст. 5 УК РФ).
            </p>
            <div className="bg-green-50 p-3 rounded-lg">
              <p className="text-sm font-medium text-green-800">
                Бремя доказывания: истец доказывает вину в ГП, обвинение — в УП
              </p>
            </div>
          </div>
        </div>
      </Card>

      <Card className="p-6 border-l-4 border-red-500 hover:shadow-lg transition-all">
        <div className="flex items-start gap-4">
          <div className="p-3 rounded-full bg-red-100">
            <Icon name="AlertOctagon" size={24} className="text-red-600" />
          </div>
          <div>
            <h3 className="text-xl font-bold mb-3 text-red-700">Ответственность без вины</h3>
            <p className="text-gray-700 mb-3">
              Исключения из общего правила — случаи объективного вменения в гражданском праве.
            </p>
            <div className="bg-red-50 p-3 rounded-lg space-y-2">
              <p className="text-sm font-medium text-red-800">
                ✓ Источник повышенной опасности (ст. 1079 ГК РФ)
              </p>
              <p className="text-sm font-medium text-red-800">
                ✓ Вред, причиненный несовершеннолетними (ст. 1073-1074 ГК РФ)
              </p>
              <p className="text-sm font-medium text-red-800">
                ✓ Неисполнение денежного обязательства (ст. 401 ГК РФ)
              </p>
            </div>
          </div>
        </div>
      </Card>
    </div>

    <Card className="p-6 bg-gradient-to-r from-purple-50 to-blue-50">
      <h3 className="text-xl font-bold mb-4 text-purple-700">
        Принцип презумпции невиновности
      </h3>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div className="flex items-start gap-3">
          <Icon name="Scale" size={20} className="text-purple-600 mt-1" />
          <div>
            <p className="font-medium text-gray-800 mb-1">Гражданское право</p>
            <p className="text-sm text-gray-600">
              Презумпция вины причинителя вреда (он обязан доказать отсутствие вины)
            </p>
          </div>
        </div>
        <div className="flex items-start gap-3">
          <Icon name="Gavel" size={20} className="text-pink-600 mt-1" />
          <div>
            <p className="font-medium text-gray-800 mb-1">Уголовное право</p>
            <p className="text-sm text-gray-600">
              Презумпция невиновности (обвинение обязано доказать вину, ст. 14 УПК РФ)
            </p>
          </div>
        </div>
      </div>
    </Card>
  </div>
);

export const EvidenceSlide = () => (
  <div className="h-full animate-fade-in">
    <h2 className="text-4xl font-bold mb-8 text-gradient">Требования к доказательствам вины</h2>
    <Tabs defaultValue="civil" className="w-full">
      <TabsList className="grid w-full grid-cols-2 mb-6">
        <TabsTrigger value="civil">Гражданские дела</TabsTrigger>
        <TabsTrigger value="criminal">Уголовные дела</TabsTrigger>
      </TabsList>

      <TabsContent value="civil" className="space-y-4 animate-fade-in">
        <Card className="p-6 border-l-4 border-purple-500">
          <h3 className="text-lg font-bold mb-4 text-purple-700">Стандарт доказывания</h3>
          <p className="text-gray-700 mb-4">
            Баланс вероятностей — достаточно доказать, что существование факта более вероятно,
            чем его отсутствие (вероятность более 50%).
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="bg-purple-50 p-4 rounded-lg">
              <div className="flex items-center gap-2 mb-2">
                <Icon name="FileText" size={20} className="text-purple-600" />
                <p className="font-medium text-purple-800">Допустимые доказательства</p>
              </div>
              <ul className="text-sm text-gray-700 space-y-1 ml-7">
                <li>• Письменные документы</li>
                <li>• Свидетельские показания</li>
                <li>• Заключения экспертов</li>
                <li>• Аудио/видео материалы</li>
              </ul>
            </div>
            <div className="bg-purple-50 p-4 rounded-lg">
              <div className="flex items-center gap-2 mb-2">
                <Icon name="Search" size={20} className="text-purple-600" />
                <p className="font-medium text-purple-800">Презумпции</p>
              </div>
              <ul className="text-sm text-gray-700 space-y-1 ml-7">
                <li>• Презумпция вины (ст. 401 ГК РФ)</li>
                <li>• Ответчик опровергает вину</li>
                <li>• Истец доказывает ущерб</li>
              </ul>
            </div>
          </div>
        </Card>

        <Card className="p-6 bg-gradient-to-r from-blue-50 to-purple-50">
          <h3 className="text-lg font-bold mb-3 text-blue-800">Пример из практики</h3>
          <p className="text-gray-700 text-sm leading-relaxed">
            <strong>Дело №2-456/2023, Московский районный суд:</strong> Истец доказал факт
            повреждения автомобиля ответчиком. Ответчик не смог доказать отсутствие своей вины.
            Суд взыскал ущерб в размере 450 000 руб. на основании презумпции вины.
          </p>
        </Card>
      </TabsContent>

      <TabsContent value="criminal" className="space-y-4 animate-fade-in">
        <Card className="p-6 border-l-4 border-pink-500">
          <h3 className="text-lg font-bold mb-4 text-pink-700">Стандарт доказывания</h3>
          <p className="text-gray-700 mb-4">
            <strong>Вне разумных сомнений</strong> — обвинение должно быть доказано с высокой
            степенью достоверности, исключающей разумные сомнения (ст. 14 УПК РФ).
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="bg-pink-50 p-4 rounded-lg">
              <div className="flex items-center gap-2 mb-2">
                <Icon name="Fingerprint" size={20} className="text-pink-600" />
                <p className="font-medium text-pink-800">Требования к доказательствам</p>
              </div>
              <ul className="text-sm text-gray-700 space-y-1 ml-7">
                <li>• Относимость</li>
                <li>• Допустимость</li>
                <li>• Достоверность</li>
                <li>• Достаточность</li>
              </ul>
            </div>
            <div className="bg-pink-50 p-4 rounded-lg">
              <div className="flex items-center gap-2 mb-2">
                <Icon name="Brain" size={20} className="text-pink-600" />
                <p className="font-medium text-pink-800">Установление вины</p>
              </div>
              <ul className="text-sm text-gray-700 space-y-1 ml-7">
                <li>• Интеллектуальный момент</li>
                <li>• Волевой момент</li>
                <li>• Мотив и цель</li>
                <li>• Субъективная сторона</li>
              </ul>
            </div>
          </div>
        </Card>

        <Card className="p-6 bg-gradient-to-r from-red-50 to-pink-50">
          <h3 className="text-lg font-bold mb-3 text-red-800">Пример из практики</h3>
          <p className="text-gray-700 text-sm leading-relaxed">
            <strong>Приговор Верховного суда РФ №45-АПУ22-19:</strong> Обвиняемый был оправдан
            по делу о причинении смерти по неосторожности, так как следствие не доказало вне
            разумных сомнений, что он мог и должен был предвидеть наступление тяжких последствий.
          </p>
        </Card>
      </TabsContent>
    </Tabs>
  </div>
);
