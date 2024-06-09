import sys
import re


def add_spaces_after_newlines(input_file: str, output_file: str):
  with open(input_file, "r") as f:
    lines = f.readlines()

  output_lines = []
  for line in lines:
    # line.replace(r"/<*\/>\\n/", "")
    # sanitized = re.sub(r'(<\/[a-zA-Z]*>)\\n', r'\1\{\" \"\}\\n', line)
    sanitized = line.replace(">\n", ">{\" \"}\n")
    output_lines.append(sanitized)

  with open(output_file, "w") as f:
    for line in output_lines:
      f.write(line)


if __name__ == "__main__":
  """Add spaces after HTML closing tags on the end of a line.
  
  This prevents missing spaces between things like links and paragraphs.
  """
  if len(sys.argv) != 3:
    raise ValueError("You must provide two arguments: the file to read and the file to write to.")

  add_spaces_after_newlines(sys.argv[1], sys.argv[2])