from flask import Flask, render_template
from About import keySkills, ProfileInfo

app = Flask(__name__)


@app.route("/")
def main():
    return render_template("main.html", keySkills=keySkills, ProfileInfo= ProfileInfo)


if __name__ == "__main__":
    app.run(host="0.0.0.0", port=8000, debug=True)
