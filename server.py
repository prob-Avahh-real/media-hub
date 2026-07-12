#!/usr/bin/env python3
"""MediaHub - Simple HTTP Server
Usage: python3 server.py [port]
Default port: 8899
"""
import http.server, socketserver, sys
from pathlib import Path
PORT = int(sys.argv[1]) if len(sys.argv) > 1 else 8899
DIR = Path(__file__).parent
class Handler(http.server.SimpleHTTPRequestHandler):
    def __init__(self, *args, **kwargs):
        super().__init__(*args, directory=str(DIR), **kwargs)
    def log_message(self, format, *args):
        print(f"[MediaHub] {args[0]} {args[1]} {args[2]}")
with socketserver.TCPServer(("", PORT), Handler) as httpd:
    print(f"\n  MediaHub - 多平台内容管家\n  http://localhost:{PORT}\n  Ctrl+C 停止\n")
    try: httpd.serve_forever()
    except KeyboardInterrupt: print("\n已停止\n")
