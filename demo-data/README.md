# Demo 資料(虛構資料)

本資料夾的內容**全部是虛構資料**,與任何真實訊息、帳號、伺服器、檔案無關;人名、伺服器名稱、ID、網址(`example.com`)都是編造的。

內容是一份標準的 MsgDrive 資料 repo(格式見 `docs/spec/data-format.md`),網頁的「Demo 模式」直接讀取它,所有修改只存在記憶體,重新整理就消失。

- **不要手動編輯**:這些檔案由 `npm run demo:build` 產生(來源:`packages/importer/test/fixtures/dce`、`apps/web/demo-assets/`,以及 `scripts/demo-build.ts` 內程式產生的對話)。重新執行會清空並重建本資料夾(只保留這個 README)。
- `index.json`:檔案清單 `{ files: [{ path, size }] }`,Demo 儲存層用它得知有哪些檔案(靜態網站無法列目錄)。
- 音訊附件(`test-tone.wav`)是程式產生的測試音(1.5 秒的正弦波,由 `scripts/demo-build.ts` 以運算產生,不是錄音),用來讓 Demo 模式看得到音訊播放列。Demo 沒有影片:沒有編碼器產生不了合法的影片檔。

不要把真實資料放進這個資料夾。
