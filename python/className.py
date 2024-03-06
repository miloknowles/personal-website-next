import sys

if __name__ == "__main__":
  if len(sys.argv) != 3:
    raise ValueError("You must provide two arguments: the file to read and the file to write to.")

  with open(sys.argv[1], "r") as f:
    raw = f.read()
    out = raw.replace("class=", "className=")
    out = out.replace("mathjax.node", "MathJax.Node")
    out = out.replace("<ol>", "<ol className=\"list-decimal pl-4 flex flex-col gap-3\">")
  
  with open(sys.argv[2], "w") as f:
    f.write(out)