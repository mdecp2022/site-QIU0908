var tipuesearch = {"pages": [{'title': 'About', 'text': '倉儲位置 https://github.com/mdecp2022/site-QIU0908 \n 靜態網頁 https://mdecp2022.github.io/site-QIU0908/content/index.html \n cmsite: wcms use  https://github.com/mdecycu/cmsimde  as submodule \n', 'tags': '', 'url': 'About.html'}, {'title': 'HW', 'text': '', 'tags': '', 'url': 'HW.html'}, {'title': 'W5', 'text': '\n W5亂數 \n import   random (導入 亂數模組程式庫) \n import   string (導入 字串模組程式庫) \n def  password_generator ( size = 4 ,  chars = string . ascii_lowercase   +   string . digits ): (def 定義函數 名稱     (初始值4, 新字串=字串模組程式.英文小寫(屬性)+字串模組程式.數字串(屬性)))  \n      """Generate random password (多行文字註解 生成隨機密碼) \n     """ \n      return   \'\' . join ( random . choice ( chars )  for   _   in   range ( size ))     (傳回  \'\'. 轉成新的字串(亂數模組程式庫.選擇(功能)(新字串) for迴圈 在 新字串 中選4次(初始值))) \n pass_string   =   "abcdefghkmnpqrstuwxyz123456789" (設定 字串模組程式庫="字串") \n for   i   in   range ( 10 ): (for迴圈 選(10)次)\n      print ( password_generator ( 4 ,  pass_string ))     (展示(password_generator(4個字符,字串模組程式庫中)) \n \n', 'tags': '', 'url': 'W5.html'}, {'title': 'W6', 'text': '1a抽點 \n 1a擷取個人靜態網頁 \n 1a抽點程式與擷取個人靜態網頁的程式結合 \n \n', 'tags': '', 'url': 'W6.html'}, {'title': 'W7', 'text': '在電腦教室改版 \n \n 設定電腦輔助設計室專用 IPv6 網路協定環境設定 \n 啟動start_ipv6 \n 打開命令列輸入 \n \xa0cd..\xa0 //退到上一個目錄 \n \xa0cd ss // 移動到 ss 目錄 \n \xa0啟動 ipv6.reg //啟動key \n cms\xa0\xa0 //啟動ss目錄 \n 進入 https://localhost:9443 \n 進行改版 \n 改版完按 generate //動態網頁轉靜態網 \n acp "檔名"//改版推到倉儲 \n \n 在宿舍改版 \n \n 啟動start_ipv4 \n 打開命令列輸入 \n \xa0cd..\xa0 //退到上一個目錄 \n \xa0cd ss // 移動到 ss 目錄 \n \xa0啟動 ipv4.reg //啟動key \n cms\xa0\xa0 //啟動ss目錄 \n 進入 https://localhost:9443 \n 進行改版 \n 改版完按 generate //動態網頁轉靜態網 \n acp "檔名"//改版推到倉儲 \n \n 問題 \n Q:每次更新都要git clone --recurse-submodules 檔名每次都改,有無其他方法? \n A:有 git pull \n \n 感想 \n \xa0 \xa0 \xa0 兩者差異只在於ipv6網路協定的啟用,但在宿舍改版的先決條件是重設 \n \n \n 另做一份ipv4的啟動檔案不用設定 proxy \n \n \n \n home_ipv4中的.gitconfig 不用設定 \n \n \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 [http] \n \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0proxy =  http://p42.cycu.org:312 \n 因為:github.com 網站 只支援 IPv4 連線的，所以 ipv4不需要對外連線的代理主機。 \n \n', 'tags': '', 'url': 'W7.html'}, {'title': 'W10', 'text': 'w10 hw2 \n for i in range(1, 10, 2): // for i 迴圈\xa0整數序列 (起始值, 終止值, 遞增(減)值)  print(i, end=" ")\xa0 \xa0 \xa0 // 輸出 (印出 i 字串, 字串間用空格隔開) \n', 'tags': '', 'url': 'W10.html'}, {'title': 'W12', 'text': 'hw第一個練習 \n \n \n # Brython 的 input() 可以接受輸入提示字串, 跳出瀏覽器輸入表單後, 將輸入內容以字串取回\nuser_input_temp = input("請輸入攝氏溫度值:")\n# 接著列出 user_input_temp 變數的資料型別\nprint(type(user_input_temp)) \n \n hw第二個練習 \n # Brython 的 input() 可以接受輸入提示字串, 跳出瀏覽器輸入表單後, 將輸入內容以字串取回\nuser_input_temp = input("請輸入攝氏溫度值:")\n# 接著列出 user_input_temp 變數的資料型別\nprint(type(user_input_temp))\n# 到這裡已知利用 input() 函式將傳回字串, 接著以 float() 將字串轉為浮點數\nuser_input_temp = float(user_input_temp)\n# 因為攝氏溫度乘上 9/5 之後再加上 32 就可以得到對應的華氏溫度值\nFahrenheit = (user_input_temp*9/5) + 32\n# 到這裡, Fahrenheit 資料型別為浮點數, 而 user_input_temp 在第 8 行也轉為浮點數\n# 要將兩個浮點數與字串相加, 都必須透過 str() 轉為字串\nprint("攝氏 " + str(user_input_temp) + " 度, 等於華氏 " + str(Fahrenheit) + " 度.") \n \n . \n \n', 'tags': '', 'url': 'W12.html'}, {'title': 'W12-1', 'text': '\n \n  以下事先在頁面中加入 id="brython_div" 的 div 標註\n之後可利用 Brython 的 document 模組與此 html 標註對應\n \n  利用 html 建立一個 id="btn1" 的按鈕  \n 取使用者輸入 \n \n', 'tags': '', 'url': 'W12-1.html'}, {'title': 'W13', 'text': 'w13_ex2(攝氏轉華氏) \n \'\'\' //多行文字註解 \n   f = c*9/5 + 32    c = (f-32)*5/9   \'\'\' //多行文字註解 \n   c   =   input //c= 輸入數值 \n #print(type(c))  // 接著列出 c 變數的資料型別 \n   c   =   float ( c ) // 把c轉成浮點數 print ("你輸入的攝氏溫度"+str(c),"等於華氏溫度"+str((c*9/5+32)) //展示數值("文字"後 加上 使用STR()中函數後的字串,同左) \n w13 ex3(華式轉攝式) \n 與上面差f = c*9/5+32 ,c = (f-32)*5/9 \n \n \n \n \n', 'tags': '', 'url': 'W13.html'}, {'title': 'cp2022', 'text': 'https://en.wikipedia.org/wiki/Python_(programming_language) \n Examples: \n https://gist.github.com/mdecycu/d9082d678096bd58378d6afe2c7fa05d \n https://www.geeksforgeeks.org/python-programming-examples/ \n https://www.programiz.com/python-programming/examples \n https://www.freecodecamp.org/news/python-code-examples-sample-script-coding-tutorial-for-beginners/ \n Python Tutorial: \n https://docs.python.org/3/tutorial/ \n An informal introduction to Python \n Indentation \n Variables \n Comments \n Numbers \n Strings \n print \n Python control flow tools \n for \n if \n range \n open \n read \n lists \n tuples \n dictionaries \n functions \n try ... except \n break \n pass \n classes \n 這個頁面 demo 如何在同一頁面下納入多個線上 Ace 編輯器與執行按鈕 ( practice_html.txt  動態頁面超文件). \n practice_html.txt  動態頁面超文件應該可以在啟動 Brython 時, 設定將 .py 檔案放入 downloads/py 目錄中引用. \n 亦即將所有對應的 html 也使用 Brython 產生, 然後寫為  class  後, 在範例導入時透過  instance  引用. \n <!-- 啟動 Brython -->\n<script>\nwindow.onload=function(){\nbrython({debug:1, pythonpath:[\'./../cmsimde/static/\',\'./../downloads/py/\']});\n}\n</script> \n 從 1 累加到 100: \n 1 add to 100 \n 將 iterable 與 iterator  相關說明 , 利用 Brython 與 Ace Editor 整理在這個頁面. \n  導入 brython 程式庫  \n \n \n \n \n  啟動 Brython  \n \n \n \n  導入 FileSaver 與 filereader  \n \n \n \n \n  導入 ace  \n \n \n \n \n \n \n  導入 gearUtils-0.9.js Cango 齒輪繪圖程式庫  \n \n \n \n \n \n \n  請注意, 這裡使用 Javascript 將 localStorage["kw_py_src1"] 中存在近端瀏覽器的程式碼, 由使用者決定存檔名稱 \n \n \n \n \n \n \n  add 1 to 100 開始  \n \n \n  add 1 to 100 結束 \n  editor1 開始  \n  用來顯示程式碼的 editor 區域  \n \n  以下的表單與按鈕與前面的 Javascript doSave 函式以及 FileSaver.min.js 互相配合  \n  存擋表單開始  \n Filename:  .py   \n  存擋表單結束  \n \n  執行與清除按鈕開始  \n Run   Output   清除輸出區 清除繪圖區 Reload \n  執行與清除按鈕結束  \n \n  程式執行 ouput 區  \n \n  Brython 程式執行的結果, 都以 brython_div1 作為切入位置  \n \n  editor1 結束   ##########################################  \n 從 1 累加到 100 part2: \n 1 add to 100 cango_three_gears BSnake AI Tetris Rotating Block \n  請注意, 這裡使用 Javascript 將 localStorage["kw_py_src2"] 中存在近端瀏覽器的程式碼, 由使用者決定存檔名稱 \n \n \n \n  add 1 to 100 part2 開始  \n \n \n  add 1 to 100 part2 結束 \n  editor2 開始  \n  用來顯示程式碼的 editor 區域  \n \n  以下的表單與按鈕與前面的 Javascript doSave 函式以及 FileSaver.min.js 互相配合  \n  存擋表單開始  \n Filename:  .py   \n  存擋表單結束  \n \n  執行與清除按鈕開始  \n Run   Output   清除輸出區 清除繪圖區 Reload \n  執行與清除按鈕結束  \n \n  程式執行 ouput 區  \n \n  Brython 程式執行的結果, 都以 brython_div1 作為切入位置  \n \n  editor2 結束  \n \n \n', 'tags': '', 'url': 'cp2022.html'}, {'title': 'Brython', 'text': 'https://en.wikipedia.org/wiki/Python_(programming_language) \n Examples: \n https://gist.github.com/mdecycu/d9082d678096bd58378d6afe2c7fa05d \n https://www.geeksforgeeks.org/python-programming-examples/ \n https://www.programiz.com/python-programming/examples \n https://www.freecodecamp.org/news/python-code-examples-sample-script-coding-tutorial-for-beginners/ \n Python Tutorial: \n https://docs.python.org/3/tutorial/ \n An informal introduction to Python \n Indentation \n Variables \n Comments \n Numbers \n Strings \n print \n Python control flow tools \n for \n if \n range \n open \n read \n lists \n tuples \n dictionaries \n functions \n try ... except \n break \n pass \n classes \n 這個頁面 demo 如何在同一頁面下納入多個線上 Ace 編輯器與執行按鈕 ( practice_html.txt  動態頁面超文件). \n practice_html.txt  動態頁面超文件應該可以在啟動 Brython 時, 設定將 .py 檔案放入 downloads/py 目錄中引用. \n 亦即將所有對應的 html 也使用 Brython 產生, 然後寫為  class  後, 在範例導入時透過  instance  引用. \n <!-- 啟動 Brython -->\n<script>\nwindow.onload=function(){\nbrython({debug:1, pythonpath:[\'./../cmsimde/static/\',\'./../downloads/py/\']});\n}\n</script> \n 從 1 累加到 100: \n 1 add to 100 \n 將 iterable 與 iterator  相關說明 , 利用 Brython 與 Ace Editor 整理在這個頁面. \n  導入 brython 程式庫  \n \n \n \n \n  啟動 Brython  \n \n \n \n  導入 FileSaver 與 filereader  \n \n \n \n \n  導入 ace  \n \n \n \n \n \n \n  導入 gearUtils-0.9.js Cango 齒輪繪圖程式庫  \n \n \n \n \n \n \n  請注意, 這裡使用 Javascript 將 localStorage["kw_py_src1"] 中存在近端瀏覽器的程式碼, 由使用者決定存檔名稱 \n \n \n \n \n \n \n  add 1 to 100 開始  \n \n \n  add 1 to 100 結束 \n  editor1 開始  \n  用來顯示程式碼的 editor 區域  \n \n  以下的表單與按鈕與前面的 Javascript doSave 函式以及 FileSaver.min.js 互相配合  \n  存擋表單開始  \n Filename:  .py   \n  存擋表單結束  \n \n  執行與清除按鈕開始  \n Run   Output   清除輸出區 清除繪圖區 Reload \n  執行與清除按鈕結束  \n \n  程式執行 ouput 區  \n \n  Brython 程式執行的結果, 都以 brython_div1 作為切入位置  \n \n  editor1 結束   ##########################################  \n 從 1 累加到 100 part2: \n 1 add to 100 cango_three_gears BSnake AI Tetris \n  請注意, 這裡使用 Javascript 將 localStorage["kw_py_src2"] 中存在近端瀏覽器的程式碼, 由使用者決定存檔名稱 \n \n \n \n  add 1 to 100 part2 開始  \n \n \n  add 1 to 100 part2 結束 \n  editor2 開始  \n  用來顯示程式碼的 editor 區域  \n \n  以下的表單與按鈕與前面的 Javascript doSave 函式以及 FileSaver.min.js 互相配合  \n  存擋表單開始  \n Filename:  .py   \n  存擋表單結束  \n \n  執行與清除按鈕開始  \n Run   Output   清除輸出區 清除繪圖區 Reload \n  執行與清除按鈕結束  \n \n  程式執行 ouput 區  \n \n  Brython 程式執行的結果, 都以 brython_div1 作為切入位置  \n \n  editor2 結束  \n', 'tags': '', 'url': 'Brython.html'}]};