import http.server
import socketserver
import os

PORT = 8080
BASE_DIR = os.path.dirname(os.path.abspath(__file__))

class PortfolioPreviewHandler(http.server.SimpleHTTPRequestHandler):
    def translate_path(self, path):
        clean_path = path.split("?", 1)[0].split("#", 1)[0]
        if clean_path.startswith("/assets/") or clean_path.startswith("/files/"):
            return os.path.join(BASE_DIR, "public", clean_path.lstrip("/").replace("/", os.sep))
        return super().translate_path(path)

if __name__ == "__main__":
    os.chdir(BASE_DIR)
    socketserver.TCPServer.allow_reuse_address = True
    with socketserver.TCPServer(("", PORT), PortfolioPreviewHandler) as httpd:
        print(f"Serving Adhitya Portfolio Preview at http://localhost:{PORT}")
        httpd.serve_forever()
