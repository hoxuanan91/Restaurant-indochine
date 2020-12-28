# restaurant
Chạy code ở local:
  + npm install
  + npm run serve
Các bước deploy:
  + Bước 1: Tạo một instance EC2 với public key trên AWS
  + Bước 2: Chỉnh inbound security của instance đó(Mở port HTTP, HTTPs)
  + Bước 3: Dùng putty để Genarator private key
  + Bước 4: Dùng putty để SSH vào instance vừa mới tạo(private key vừa mới generator)
  + Bước 5: Cài môi trường cho nó:
      - Git
      - Node 12
      - Nginx
  + Bước 6: Clone source code về:
      - sudo cd /var/www
      - sudo mkdir restaurant
      - sudo git clone https://github.com/hoaidien93/restaurant.git
  + Bước 7: Run source code
      - npm install
      - npm run build
  + Bước 8: Cấu hình nginx để trỏ về source code vừa mới build:
      - sudo vim /etc/nginx/sites-enabled/default
      - Chỉnh sửa source trỏ về thư mục dist vừa mới build (/var/www/restaurant/dist)
 
