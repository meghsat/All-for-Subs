from flask import Flask, flash, request, redirect, url_for, session, jsonify, render_template, send_file
from werkzeug.utils import secure_filename
from flask_cors import CORS, cross_origin
import transformers
from transformers import M2M100ForConditionalGeneration, M2M100Tokenizer

app=Flask(__name__)
cors=CORS(app,resources={r"/*":{'origins':"https://meghsat.github.io/Textlytics/"}})
# model = M2M100ForConditionalGeneration.from_pretrained("facebook/m2m100_418M")
# tokenizer = M2M100Tokenizer.from_pretrained("facebook/m2m100_418M")


# @app.route('/')
# def result():
#     return render_template('https://meghsat.github.io/Textlytics/')
#route
@app.route('/result', methods=['GET', 'POST'])
def result2():
    if request.method == 'POST':
        json_data = request.files['file']
        translated_file_path=Read_file(json_data,request.form.get('source'),request.form.get('destination'))
        return send_file(translated_file_path, as_attachment=True, mimetype='text/plain')
        #return jsonify(request.form.get('source'))
    elif request.method == 'GET':
        return 'This is the result page'

def Read_file(Sub_file,source,destination):
    langs={'English':'en','Spanish':'es','French':'fr','German':'de','Italian':'it','Chinese':'zh','Japanese':'ja','Russian':'ru','Hindi':'hi'}
    tokenizer.src_lang = langs[source]
    Lines=[]
    for line in Sub_file.readlines():
            # encoded_hi = tokenizer(line.decode('utf-8', errors='ignore').rstrip(), return_tensors="pt")
            # generated_tokens = model.generate(**encoded_hi, forced_bos_token_id=tokenizer.get_lang_id(langs[destination]),max_new_tokens=400, do_sample=False)
            # translated_text=tokenizer.batch_decode(generated_tokens, skip_special_tokens=True)
            Lines.extend("Hi")
            #print(Lines)

    translated_file_path = "translated.txt"  # Modify this to your desired file path
    with open(translated_file_path, 'w', encoding='utf-8') as file:
        file.write('\n'.join(Lines))

    return translated_file_path


if __name__=="__main__":
    app.run(debug=True)

