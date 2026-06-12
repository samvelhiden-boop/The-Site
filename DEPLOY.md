# Деплой сайта Unlimited Games (Step 12+)

Сайт — SPA в одном файле `Public/Index.html` с маршрутами `#/about`, `#/projects`, `#/news/1` и т.д.  
Чат-сервер (Socket.IO) — отдельно, файл `Public/Server js` + `npm start`.
---

## Быстрый просмотр локально

```bash
cd "c:\Users\Victus\Desktop\Site code"
npm run studio
```

Открой: `http://localhost:3000` (или порт из вывода команды).

---

## Вариант A — Vercel (рекомендуется для лендинга)

1. Залей проект на **GitHub**.
2. [vercel.com](https://vercel.com) → **Add New Project** → выбери репозиторий.
3. Настройки:
   - **Root Directory:** `Public`
   - **Framework Preset:** Other
   - **Build Command:** (пусто)
   - **Output Directory:** `.` (текущая папка = Public)
4. Deploy.

HTTPS и CDN включены автоматически.

### Hero video (опционально)

Положи в `Public/assets/`:

- `hero.webm`
- `hero.mp4`
- `hero-poster.jpg`

---

## Вариант B — Netlify

1. GitHub → репозиторий.
2. [netlify.com](https://netlify.com) → **Add new site** → Import.
3. **Publish directory:** `Public`
4. Deploy.

Файл `netlify.toml` в корне уже указывает `publish = "Public"`.

> Если главная не открывается: переименуй `Index.html` → `index.html` (строчными).

---

## Вариант C — Render (статический сайт)

1. **New** → **Static Site**
2. Connect repo
3. **Publish directory:** `Public`
4. Deploy

---

## Вариант D — Node (лендинг + чат на одном сервере)

Уже настроено: `Public/Server js` отдаёт статику из `Public/`.

```bash
npm install
npm start
```

Открой `http://localhost:3000` — и сайт, и Socket.IO на одном порту.

На Render/Railway как **Web Service**:

- **Build:** `npm install`
- **Start:** `npm start`
- **PORT** — из окружения (Render задаёт сам)

---

## Маршруты сайта

| URL | Страница |
|-----|----------|
| `#/` | Главная (hero + hub) |
| `#/about` | О студии |
| `#/news` | Список новостей |
| `#/news/1` | Статья новости |
| `#/projects` | Проекты |
| `#/project/project-a` | Детальная страница проекта |
| `#/explore` | Поиск и фильтры |
| `#/vision` | Видение |
| `#/contact` | Контакты |

---

## Чеклист перед публикацией

- [ ] Проверка на iPhone Safari и Android Chrome
- [ ] Навигация: About / News / Projects открывают отдельные страницы
- [ ] Клик по новости → `#/news/1`, кнопка «← News» возвращает назад
- [ ] Клик по проекту → `#/project/project-a`, кнопка «← Projects» работает
- [ ] Кнопка «Назад» в браузере переключает страницы
- [ ] Hero video (если есть) не грузится при `Save-Data`
- [ ] Ссылка для друга: `https://твой-домен/?room=team1` (для чата через `npm start` + туннель или деплой Node)
