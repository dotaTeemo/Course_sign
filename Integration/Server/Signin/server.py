# 导入应用的语法：
# from app import application
# 示范：

from controller import app

# 导入 CherryPy
import cherrypy

if __name__ == '__main__':

    # 挂载应用
    cherrypy.tree.graft(app, "/")

    # 从默认服务器上分离
    cherrypy.server.unsubscribe()

    # 实例化一个新的服务器对象
    server = cherrypy._cpserver.Server()

    # 配置该服务器对象
    server.socket_host = "0.0.0.0"
    server.socket_port = 80
    server.thread_pool = 30

    # SSL相关配置
    # server.ssl_module            = 'pyopenssl'
    # server.ssl_certificate       = 'ssl/certificate.crt'
    # server.ssl_private_key       = 'ssl/private.key'
    # server.ssl_certificate_chain = 'ssl/bundle.crt'

    # 订阅这个服务器对象
    server.subscribe()

    # 启动服务器引擎

    cherrypy.engine.start()
    cherrypy.engine.block()