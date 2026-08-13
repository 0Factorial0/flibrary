import json

#Editing JSON From My JSON Editor Then Converting
#The Data From JSON To JS Because CORS Policy
def convert_json_to_js_array(
    json_filepath: str, js_filepath: str, var_name: str
):
    with open(json_filepath, "r", encoding="utf-8") as f:
        content = json.load(f)
    if not isinstance(content, list):
        content = [content]
    filtered_data = []
    for item in content:
        # Stop processing if any key contains an empty string value
        if isinstance(item, dict) and any(
            isinstance(v, str) and v.strip() == "" for v in item.values()
        ):
            break
        filtered_data.append(item)
    js_content = f"const {var_name} = {json.dumps(filtered_data, indent=2)};\n"
    with open(js_filepath, "w", encoding="utf-8") as f:
        f.write(js_content)

#Run The Function For Files
convert_json_to_js_array("./data/json/games.json", "./data/games.js", "gamesData")
convert_json_to_js_array("./data/json/comics.json", "./data/comics.js", "comicsData")
convert_json_to_js_array("./data/json/movies.json", "./data/movies.js", "moviesData")
convert_json_to_js_array("./data/json/series.json", "./data/series.js", "seriesData")