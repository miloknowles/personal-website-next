import bs4
import sys

if __name__ == "__main__":
  if len(sys.argv) != 3:
    raise ValueError("You must provide two arguments: the file to read and the file to write to.")

  soup = bs4.BeautifulSoup(open(sys.argv[1]), 'html.parser')

  fn = soup.find_all('section', id='footnotes')[0]

  if len(fn) == 0:
    raise ValueError("No footnotes section found.")

  ols: bs4.ResultSet = fn.find_all('ol')

  for ol in ols:
    ol['class'] = ["list-decimal pl-4 flex flex-col gap-3"]

  # html = soup.prettify()
  html = str(soup)
  with open(sys.argv[2], 'w') as f:
    f.write(html)