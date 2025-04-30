import sys
import os
import shutil
import re

def main():
    if len(sys.argv) != 2:
        print("Error 2, proper usage: html_copy.py [destination.html]")
        sys.exit(2)

    destination = sys.argv[1]

    if not destination.endswith(".html"):
        print("Error 3, proper usage: html_copy.py [destination.html]")
        sys.exit(3)

    if not re.fullmatch(r'^[a-zA-Z0-9]+\.html$', destination):
        print(f"Error 4, proper usage: [{destination}] must be alphanumeric and not contain spaces")
        sys.exit(4)

    if os.path.exists(destination):
        print("Error 5, Destination file already exists!")
        sys.exit(5)

    template_file = "template.html"
    if not os.path.exists(template_file):
        print(f"Error: '{template_file}' not found in the current directory.")
        sys.exit(1)  # Using a different error code for a missing template

    try:
        shutil.copyfile(template_file, destination)
        print(f"Successfully created {destination}!")
    except Exception as e:
        print(f"An error occurred during file copying: {e}")
        sys.exit(6)

if __name__ == "__main__":
    main()