const translation = {
  apiServer: 'APIサーバー',
  apiKey: 'APIキー',
  status: 'ステータス',
  disabled: '無効',
  ok: '稼働中',
  copy: 'コピー',
  copied: 'コピー済み',
  play: '再生',
  pause: '一時停止',
  playing: '再生中',
  merMaind: {
    rerender: '再レンダリング',
  },
  never: 'なし',
  apiKeyModal: {
    apiSecretKey: 'APIシークレットキー',
    apiSecretKeyTips: 'APIの悪用を防ぐために、APIキーを保護してください。フロントエンドのコードで平文として使用しないでください。:)',
    createNewSecretKey: '新しいシークレットキーを作成',
    secretKey: 'シークレットキー',
    created: '作成日時',
    lastUsed: '最終使用日時',
    generateTips: 'このキーを安全でアクセス可能な場所に保管してください。',
  },
  actionMsg: {
    deleteConfirmTitle: 'このシークレットキーを削除しますか？',
    deleteConfirmTips: 'この操作は元に戻すことはできません。',
    ok: 'OK',
  },
  completionMode: {
    title: '補完アプリAPI',
    info: '記事、要約、翻訳などの高品質なテキスト生成には、ユーザーの入力を使用した補完メッセージAPIを使用します。テキスト生成は、Hyseim Prompt Engineeringで設定されたモデルパラメータとプロンプトテンプレートに依存しています。',
    createCompletionApi: '補完メッセージの作成',
    createCompletionApiTip: '質疑応答モードをサポートするために、補完メッセージを作成します。',
    inputsTips: '（オプション）Prompt Engの変数に対応するキーと値のペアとしてユーザー入力フィールドを提供します。キーは変数名で、値はパラメータの値です。フィールドのタイプがSelectの場合、送信される値は事前に設定された選択肢のいずれかである必要があります。',
    queryTips: 'ユーザーの入力テキスト内容。',
    blocking: 'ブロッキングタイプで、実行が完了して結果が返されるまで待機します。（処理が長い場合、リクエストは中断される場合があります）',
    streaming: 'ストリーミングの返却。SSE（Server-Sent Events）に基づいたストリーミングの返却の実装。',
    messageFeedbackApi: 'メッセージフィードバック（いいね）',
    messageFeedbackApiTip: 'エンドユーザーの代わりに受信したメッセージを「いいね」または「いいね」で評価します。このデータはログ＆注釈ページで表示され、将来のモデルの微調整に使用されます。',
    messageIDTip: 'メッセージID',
    ratingTip: 'いいねまたはいいね、nullは元に戻す',
    parametersApi: 'アプリケーションパラメータ情報の取得',
    parametersApiTip: '変数名、フィールド名、タイプ、デフォルト値を含む設定済みの入力パラメータを取得します。通常、これらのフィールドをフォームに表示したり、クライアントの読み込み後にデフォルト値を入力したりするために使用されます。',
  },
  chatMode: {
    title: 'チャットアプリAPI',
    info: '質疑応答形式を使用した多目的の対話型アプリケーションには、チャットメッセージAPIを呼び出して対話を開始します。返されたconversation_idを渡すことで、継続的な会話を維持します。応答パラメータとテンプレートは、Hyseim Prompt Engの設定に依存します。',
    createChatApi: 'チャットメッセージの作成',
    createChatApiTip: '新しい会話メッセージを作成するか、既存の対話を継続します。',
    inputsTips: '（オプション）Prompt Engの変数に対応するキーと値のペアとしてユーザー入力フィールドを提供します。キーは変数名で、値はパラメータの値です。フィールドのタイプがSelectの場合、送信される値は事前に設定された選択肢のいずれかである必要があります。',
    queryTips: 'ユーザーの入力/質問内容',
    blocking: 'ブロッキングタイプで、実行が完了して結果が返されるまで待機します。（処理が長い場合、リクエストは中断される場合があります）',
    streaming: 'ストリーミングの返却。SSE（Server-Sent Events）に基づいたストリーミングの返却の実装。',
    conversationIdTip: '（オプション）会話ID：初回の会話の場合は空白のままにしておき、継続する場合はコンテキストからconversation_idを渡します。',
    messageFeedbackApi: 'メッセージ端末ユーザーフィードバック、いいね',
    messageFeedbackApiTip: 'エンドユーザーの代わりに受信したメッセージを「いいね」または「いいね」で評価します。このデータはログ＆注釈ページで表示され、将来のモデルの微調整に使用されます。',
    messageIDTip: 'メッセージID',
    ratingTip: 'いいねまたはいいね、nullは元に戻す',
    chatMsgHistoryApi: 'チャット履歴メッセージの取得',
    chatMsgHistoryApiTip: '最初のページは最新の「limit」バーを返します。逆順です。',
    chatMsgHistoryConversationIdTip: '会話ID',
    chatMsgHistoryFirstId: '現在のページの最初のチャットレコードのID。デフォルトはなし。',
    chatMsgHistoryLimit: '1回のリクエストで返されるチャットの数',
    conversationsListApi: '会話リストの取得',
    conversationsListApiTip: '現在のユーザーのセッションリストを取得します。デフォルトでは、最後の20のセッションが返されます。',
    conversationsListFirstIdTip: '現在のページの最後のレコードのID、デフォルトはなし。',
    conversationsListLimitTip: '1回のリクエストで返されるチャットの数',
    conversationRenamingApi: '会話の名前変更',
    conversationRenamingApiTip: '会話の名前を変更します。名前はマルチセッションクライアントインターフェースに表示されます。',
    conversationRenamingNameTip: '新しい名前',
    parametersApi: 'アプリケーションパラメータ情報の取得',
    parametersApiTip: '変数名、フィールド名、タイプ、デフォルト値を含む設定済みの入力パラメータを取得します。通常、これらのフィールドをフォームに表示したり、クライアントの読み込み後にデフォルト値を入力したりするために使用されます。',
  },
  develop: {
    requestBody: 'リクエストボディ',
    pathParams: 'パスパラメータ',
    query: 'クエリ',
  },
}

export default translation
