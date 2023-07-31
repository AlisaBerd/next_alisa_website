Для desktop версии:
В файле /var/www/alisa_next_desktop/public_html/src/config.js
нужно поправить тип сайта с mobile на desktop.

Запуск:
pm2 start npm --name "alisa_next_desktop" -- run start -- --port=3005


Для мобильной версии:
1. В файле /var/www/alisa_next_mobile/public_html/packahe.json заменить 3005 на 3006
2. Запуск:
   pm2 start npm --name "alisa_next_mobile" -- run start -- --port=3006
