import os
import re

def generate_sitemap():
    print("Generating sitemap.xml...")
    sitemap = '<?xml version="1.0" encoding="UTF-8"?>\n'
    sitemap += '<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n'

    html_files = []
    for root, dirs, files in os.walk("."):
        for file in files:
            if file.endswith(".html"):
                path = os.path.join(root, file)
                if "navbar.html" in path or "footer.html" in path or "google" in path or "404.html" in path:
                    continue
                
                url_path = path.replace("./", "/").replace("index.html", "")
                if url_path == "/": url_path = ""
                
                full_url = "https://arthcalculator.in" + url_path
                sitemap += f'  <url>\n    <loc>{full_url}</loc>\n  </url>\n'

    sitemap += '</urlset>'

    with open("sitemap.xml", "w", encoding="utf-8") as f:
        f.write(sitemap)
    print("✓ sitemap.xml updated successfully.")

def update_search_index():
    print("\nUpdating search.js catalog...")
    
    # Files to parse for search index (expanding on core manually added ones)
    target_dirs = ["blog", "money-transfer"]
    html_files = []
    for d in target_dirs:
        if os.path.exists(d):
            for root, _, files in os.walk(d):
                for f in files:
                    if f.endswith("index.html"):
                        html_files.append(os.path.join(root, f))

    search_js_path = "js/search.js"
    if not os.path.exists(search_js_path):
        print("✗ search.js not found.")
        return

    with open(search_js_path, "r", encoding="utf-8") as f:
        js_content = f.read()

    new_entries = []
    added_count = 0
    for filepath in html_files:
        url = "/" + filepath.replace("index.html", "")
        # Prevent duplicates
        if url in js_content or (url + '"') in js_content or (url + "'") in js_content:
            continue
            
        try:
            with open(filepath, "r", encoding="utf-8") as f:
                content = f.read()
            
            title_match = re.search(r"<title>(.*?)</title>", content, re.IGNORECASE)
            title = title_match.group(1).split("–")[0].split("-")[0].strip() if title_match else "ArthCalculator Hub"
            
            icon = "🌍"
            if "blog" in filepath: icon = "📚"
            if "exchange-rates" in filepath: icon = "💱"
            if "comparisons" in filepath: icon = "⚖️"
            
            keys = " ".join(re.findall(r"[a-z0-9]+", title.lower()))
            keys += " " + " ".join(re.findall(r"[a-z0-9]+", filepath.lower()))
            
            entry = f"        {{ name: \"{title}\", url: \"{url}\", icon: \"{icon}\", keys: \"{keys}\" }}"
            new_entries.append(entry)
            added_count += 1
        except Exception as e:
            print(f"Error processing {filepath}: {e}")

    if added_count > 0:
        insertion_marker = "    ];"
        parts = js_content.split(insertion_marker)
        if len(parts) == 2:
            new_content = parts[0]
            if not new_content.strip().endswith(","):
                new_content = new_content.rstrip() + ",\n"
            new_content += ",\n".join(new_entries) + "\n" + insertion_marker + parts[1]
            
            with open(search_js_path, "w", encoding="utf-8") as f:
                f.write(new_content)
            print(f"✓ Successfully added {added_count} new entries to search.js.")
        else:
            print("✗ Could not find insertion marker in search.js")
    else:
        print("✓ No new pages to index in search.js.")

if __name__ == "__main__":
    print("=== ArthCalculator Build Script ===")
    generate_sitemap()
    update_search_index()
    print("=== Build Complete ===")
