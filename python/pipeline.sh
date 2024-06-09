pandoc $1 -o _tmp.html -F base.py
pandoc _tmp.html -o _tmp.html -F base.py
pandoc _tmp.html -o _tmp.html -F backticks.py
pandoc _tmp.html -o _tmp.html -F footnotes.py
pandoc _tmp.html -o _tmp.html -F equations.py
python footnotes_classes.py _tmp.html _tmp.html
python className.py _tmp.html _tmp.html
python add_spaces.py _tmp.html _tmp.html
mv _tmp.html $2