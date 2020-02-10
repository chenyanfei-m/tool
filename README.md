# tool

  开启bbr
  
  `echo "net.core.default_qdisc=fq" >> /etc/sysctl.conf`
  
  `echo "net.ipv4.tcp_congestion_control=bbr" >> /etc/sysctl.conf`
  
  `sysctl -p`
  
  查看内核是否已开启BBR
  
  `sysctl net.ipv4.tcp_available_congestion_control`
  
  查看bbr是否已经启用
  
  `lsmod | grep bbr`
  
  安装 ss
  
  `sudo apt-get install python-pip`
  
  `sudo pip install shadowsocks`
  
  `vim /usr/local/lib/python2.7/dist-packages/shadowsocks/crypto/openssl.py`
  
  `:%s/cleanup/reset/`
  
  `:x`
  
  `vim /etc/ss.json`
  
  copy
  ```
  {
    "server": "0.0.0.0",
    "server_port": 443,
    "local_address": "127.0.0.1",
    "local_port": 1080,
    "password": "123123",
    "timeout": 300,
    "method": "aes-256-cfb",
    "fast_open": true,
  }
  ```
  
  `ssserver -d start -c /etc/ss.json`
  
