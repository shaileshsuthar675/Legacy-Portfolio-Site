from flask import Flask, render_template
from About import keySkills, ProfileInfo

app = Flask(__name__)


@app.route("/")
def main():
    return render_template(
        "/main/main.html",
        keySkills=keySkills,
        ProfileInfo=ProfileInfo,
    )


# this is for research paper page
@app.route("/research-paper")
def research_paper():
    return render_template("/research-paper/main.html")


#
@app.route("/jpmc-project")
def JPMC_Project():
    return render_template("/jpmc-project/main.html")


if __name__ == "__main__":
    app.run(host="0.0.0.0", port=9000, debug=True)
