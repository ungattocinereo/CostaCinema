# 🚀 Инструкция по установке Costiera Cinema

## ✅ Проблема исправлена!

Ошибка сборки Docker была вызвана экспериментальной версией Tailwind CSS 4.0.
Проект обновлен до стабильной версии Tailwind CSS 3.4.x.

---

## 📋 Вариант 1: Docker (Рекомендуется для продакшена)

### Шаг 1: Клонируйте репозиторий
```bash
git clone <url-вашего-репозитория>
cd CostaCinema
```

### Шаг 2: Убедитесь, что Docker установлен
```bash
docker --version
docker compose version
```

Если Docker не установлен: https://docs.docker.com/get-docker/

### Шаг 3: Соберите и запустите контейнер

**Вариант A: С помощью скрипта (проще всего)**
```bash
chmod +x docker-run.sh    # Сделать скрипт исполняемым (только первый раз)
./docker-run.sh build     # Собрать образ
./docker-run.sh start     # Запустить контейнер
```

Скрипт автоматически покажет порт и URL для доступа к приложению!

**Вариант B: С помощью Make**
```bash
make build    # Собрать образ
make start    # Запустить контейнер и показать порт
```

**Вариант C: Напрямую через Docker Compose**
```bash
docker compose up -d --build
docker compose port costiera-cinema 3000   # Узнать порт
```

### Шаг 4: Откройте приложение в браузере

После запуска вы увидите сообщение вроде:
```
✅ Costiera Cinema is running on:
🌐 http://localhost:32768
```

Откройте указанный URL в браузере!

### Полезные команды:

```bash
# Посмотреть логи
./docker-run.sh logs
# или
make logs

# Остановить контейнер
./docker-run.sh stop
# или
make down

# Перезапустить
./docker-run.sh restart
# или
make restart

# Проверить на каком порту запущен
./docker-run.sh port
# или
make port

# Очистить контейнер и образ
./docker-run.sh clean
# или
make clean
```

---

## 💻 Вариант 2: Локальная разработка (без Docker)

### Шаг 1: Установите Node.js
Требуется Node.js 18 или выше: https://nodejs.org/

```bash
node --version   # Проверить версию (должно быть 18+)
```

### Шаг 2: Установите pnpm
```bash
npm install -g pnpm
pnpm --version
```

### Шаг 3: Клонируйте репозиторий
```bash
git clone <url-вашего-репозитория>
cd CostaCinema
```

### Шаг 4: Установите зависимости
```bash
pnpm install
```

Это займет несколько минут при первой установке.

### Шаг 5: (Опционально) Настройте переменные окружения
```bash
cp .env.example .env.local
# Отредактируйте .env.local если нужно
```

### Шаг 6: Запустите сервер разработки
```bash
pnpm dev
```

### Шаг 7: Откройте браузер
```
http://localhost:3000
```

### Другие команды для разработки:

```bash
pnpm build    # Собрать production версию
pnpm start    # Запустить production сервер
pnpm lint     # Проверить код
```

---

## ❓ Решение проблем

### "Docker command not found"
**Решение:** Установите Docker Desktop: https://docs.docker.com/get-docker/

### "pnpm command not found"
**Решение:**
```bash
npm install -g pnpm
```

### "Port 3000 already in use"
**Решение (только для локальной разработки):**
```bash
PORT=3001 pnpm dev
```

### Контейнер не запускается
**Решение:**
```bash
# Посмотрите логи для диагностики
./docker-run.sh logs

# Полная пересборка
./docker-run.sh clean
./docker-run.sh build
./docker-run.sh start
```

### Ошибка при сборке Docker образа
**Решение:** Убедитесь что у вас последние изменения:
```bash
git pull origin claude/costiera-cinema-setup-011CUu5jmcuSB9kyBG6wr2zs
pnpm install
```

---

## 📦 Что установлено?

После успешной установки проект включает:

### Технологии
- ✅ Next.js 15.5.6 (App Router)
- ✅ React 19
- ✅ TypeScript 5
- ✅ Tailwind CSS 3.4.18 (стабильная версия)
- ✅ shadcn/ui компоненты
- ✅ Framer Motion для анимаций
- ✅ React Hook Form + Zod для форм

### Страницы
- ✅ Главная страница (/)
- ✅ О проекте (/about)
- ✅ Магазин (/shop)
- ✅ Локации съемок (/locations)
- ✅ Контакты (/contact)

### Дизайн
- ✅ Винтажная итальянская кинематографическая палитра
- ✅ Кастомные шрифты (Playfair Display, Outfit, Inter)
- ✅ Адаптивная верстка
- ✅ Готовые UI компоненты

---

## 🎨 Что вы увидите после запуска?

1. **Шапка сайта** с навигацией: Shop, Locations, About, Contact
2. **Заголовок** "Costiera Cinema - Where Cinema Meets The Coast"
3. **Кнопка** "Join Waitlist" в хедере
4. **Футер** с информацией и ссылками
5. **Все страницы** с базовой структурой

---

## 🔧 Изменения которые были сделаны

### Что было исправлено:
1. ❌ **Было:** Tailwind CSS 4.0.0 (экспериментальная версия)
   ✅ **Стало:** Tailwind CSS 3.4.18 (стабильная версия)

2. ❌ **Было:** `@import` для Google Fonts в CSS (вызывало ошибки webpack)
   ✅ **Стало:** Шрифты загружаются через `next/font` (оптимизировано)

3. ✅ Все конфигурации обновлены для стабильной работы

---

## 📝 Следующие шаги

После успешной установки можете:

1. **Изучить код** в папках `src/app` и `src/components`
2. **Изменить дизайн** в `tailwind.config.ts`
3. **Добавить контент** на страницах
4. **Создать новые компоненты** в `src/components`

---

## 📞 Нужна помощь?

Если что-то не работает:
1. Проверьте, что используете последнюю версию кода
2. Удалите `node_modules` и `pnpm-lock.yaml`, переустановите зависимости
3. Для Docker: попробуйте `./docker-run.sh clean` и затем пересоберите

---

**Готово! Проект должен успешно запуститься! 🎉**
