// This data structure stores all the questions and answers with some additional information
const questionsDataStore = [
	{
		question: '政府機關(構)、學校或法人因執行業務需於禁、限航區及航空站或 飛行場四周㇐定距離範圍內從事遙控無人機飛航活動者，應申請何者 會商目的事業主管機關同意後，始得為之? ',
		answers: ['鄉鎮區公所','衛福部','民航局','科技部'],
		correctAnswer: '民航局',
		feedback: 'The force runs strong with you.',
		imageSrc: 'img/sw.jpg',
		alt: 'The force runs strong with you.'
	},
	{
		question: '從事休閒娛樂用途之遙控無人機不得於下列哪個時間進行飛航活動?',
		answers: ['日落後至日出前','日出後','正中午','無特別規定'],
		correctAnswer: '日落後至日出前',
		feedback: 'The force runs strong with you.',
		imageSrc: 'img/sw.jpg',
		alt: 'The force runs strong with you.'
	},
	{
		question: '遙控無人機和遙控設備間為操作飛行管理目的之資料鏈接，稱之?',
		answers: ['網路鏈路','通訊及控制信號鏈路','電信鏈路','光纖鏈路'],
		correctAnswer: '通訊及控制信號鏈路',
		feedback: 'The force runs strong with you.',
		imageSrc: 'img/sw.jpg',
		alt: 'The force runs strong with you.'
	},
	{
		question: '遙控無人機所有人將其遙控無人機交由他人進行操作而不慎墜落傷 人，應由何人負連帶賠償責任? ',
		answers: ['所有人及旁觀人','所有人及設計者','所有人及操作人',' 所有人及製造者'],
		correctAnswer: '所有人及操作人',
		feedback: 'The force runs strong with you.',
		imageSrc: 'img/sw.jpg',
		alt: 'The force runs strong with you.'
	},
	{
		question: '實體檢驗合格證或特種實體檢驗合格證之記載事項如有變更時，下列 敘述何者正確?',
		answers: ['製造者應於事實發生日起 15 日內申請換發','設計者應於事實發生日起 10 日內申請換發','操作人應於事實發生日起 7 日內申請換發','所有人應於事實發生日起 15 日內申請換發'],
		correctAnswer: '所有人應於事實發生日起 15 日內申請換發',
		feedback: 'The force runs strong with you.',
		imageSrc: 'img/sw.jpg',
		alt: 'The force runs strong with you.'
	},
	{
		question: '申請遙控無人機專業操作證者，其術科測驗應於學科測驗通過日起多 久內完成，否則應重新申請學科測驗?',
		answers: [' 3 個月內',' 6 個月內',' 9 個月內','1 年內'],
		correctAnswer: '1 年內',
		feedback: 'The force runs strong with you.',
		imageSrc: 'img/sw.jpg',
		alt: 'The force runs strong with you.'
	},
	{
		question: '某公司無人機團隊正執行飛航任務，突接獲上層電話指示須臨時將無 人機飛至前方人群密集之住宅區拍攝所需影像，並表示公司先前已獲 得民航局相關安全能力審查通過，可放心飛入執行拍攝。請問該團隊 應有下列何種正確認知? ',
		answers: ['當然是聽從上層的要求，直接飛入住宅區進行拍攝','活動前仍應依規定向民航局申請執行許可後，使得進行拍攝','只要臨時通知所在地轄區派出所後，即可進行拍攝 ','只要臨時通知所在地轄區里長辦公室後，即可進行拍攝 '],
		correctAnswer: '活動前仍應依規定向民航局申請執行許可後，使得進行拍攝',
		feedback: 'The force runs strong with you.',
		imageSrc: 'img/sw.jpg',
		alt: 'The force runs strong with you.'
	},
	{
		question: '某大學校慶活動，預計於該校室內體育館舉行㇐場無人機競技比賽， 請問有關該比賽之適法性問題，下列何者為非? ',
		answers: ['該比賽舉辦地點於室內，非屬民航法無人機專章規範範圍 ','該比賽舉辦地點雖於室內，仍屬民航法無人機專章規範範圍 ','操作人於比賽過程中仍須注意在場人員之安全 ','比賽過程中如因操作人操作不當而傷及他人者，操作人仍可能須負相關法律責任 '],
		correctAnswer: '該比賽舉辦地點雖於室內，仍屬民航法無人機專章規範範圍 ',
		feedback: 'The force runs strong with you.',
		imageSrc: 'img/sw.jpg',
		alt: 'The force runs strong with you.'
	},
	{
		question: '無人機團隊因任務需要，為其所有之㇐架已取得型式檢驗合格證之無 人機進行改裝行為，請問該團隊針對無人機改裝後之應有認知，下列 何者正確? ',
		answers: ['改裝者應檢附申請書向民航局再次申請型式檢驗 ','改裝行為並不影響型式檢驗之效力，無須再進行任何檢驗 ','該團隊能擔保改裝行為不影響無人機飛航性能及安全，即不須再進行任何檢驗 ','由主管機關自由判定改裝行為是否須進行重新檢驗 '],
		correctAnswer: '改裝者應檢附申請書向民航局再次申請型式檢驗 ',
		feedback: 'The force runs strong with you.',
		imageSrc: 'img/sw.jpg',
		alt: 'The force runs strong with you.'
	},
	{
		question: '遙控無人機系統之地面控制站的硬體設備，包括下列哪個項目? ',
		answers: ['訊號傳輸設備 ','指令傳輸設備。 ','資訊接收分析設備 ','以上皆是。 '],
		correctAnswer: '以上皆是。 ',
		feedback: 'The force runs strong with you.',
		imageSrc: 'img/sw.jpg',
		alt: 'The force runs strong with you.'
	},
	{
		question: '遙控無人機非自主(如 GPS)導航系統有下列哪個缺點?',
		answers: ['操作困難 ','易受干擾。',' 誤差積累增大 ','以上皆是 '],
		correctAnswer: '易受干擾。',
		feedback: 'The force runs strong with you.',
		imageSrc: 'img/sw.jpg',
		alt: 'The force runs strong with you.'
	},
	{
		question: '若無人飛機在地面上靜止，依牛頓運動定律，下列哪個特性會使得飛 機保持靜止? ',
		answers: ['慣性','磁性 ','氣壓 ','空氣濕度 '],
		correctAnswer: '慣性',
		feedback: 'The force runs strong with you.',
		imageSrc: 'img/sw.jpg',
		alt: 'The force runs strong with you.'
	},
	{
		question: '對於高速遙控無人機而言，除了摩擦阻力、形狀阻力、誘導阻力和干 擾阻力外，還會另外產生下列哪種阻力?',
		answers: ['震波阻力','布斯曼阻力 ','達倫伯特阻力 ','雷諾阻力 '],
		correctAnswer: '震波阻力',
		feedback: 'The force runs strong with you.',
		imageSrc: 'img/sw.jpg',
		alt: 'The force runs strong with you.'
	},
	{
		question: '操作遙控無人飛機時，當副翼控制右下左上，機體相對於「機體中 心」作下列哪種動作? ',
		answers: ['向上俯仰 ','右偏航 ','左滾 ','右滾 '],
		correctAnswer: '左滾 ',
		feedback: 'The force runs strong with you.',
		imageSrc: 'img/sw.jpg',
		alt: 'The force runs strong with you.'
	},
	{
		question: '空氣可藉由外界的作功達到下列哪種效果?',
		answers: ['加工成形 ','染色 ','壓縮及膨脹 ','以上皆是 '],
		correctAnswer: '壓縮及膨脹 ',
		feedback: 'The force runs strong with you.',
		imageSrc: 'img/sw.jpg',
		alt: 'The force runs strong with you.'
	},
	{
		question: '航空例行天氣報告中，所觀測盛行能見度值，其編報方式及單位為 何? ',
		answers: ['4 碼(公尺) ','6 碼(公尺) ','8 碼(公尺) ','10 碼(公尺) '],
		correctAnswer: '4 碼(公尺) ',
		feedback: 'The force runs strong with you.',
		imageSrc: 'img/sw.jpg',
		alt: 'The force runs strong with you.'
	},
	{
		question: '一定量空氣於一定溫度下，所能容納之下列何者亦有其限度?',
		answers: ['PM2.5 ','微生物 ','水氣量 ','細菌 '],
		correctAnswer: '水氣量 ',
		feedback: 'The force runs strong with you.',
		imageSrc: 'img/sw.jpg',
		alt: 'The force runs strong with you.'
	},
	{
		question: '疲勞可分為下列哪幾種?',
		answers: ['生理性疲勞 ','心理性疲勞 ','急性與慢性疲勞 ','以上皆是 '],
		correctAnswer: '以上皆是 ',
		feedback: 'The force runs strong with you.',
		imageSrc: 'img/sw.jpg',
		alt: 'The force runs strong with you.'
	},
	{
		question: '無人機團隊受某媒體委託執行空拍任務，執行任務過程中委託單位要 求無人機飛出核准區域以取得更好的畫面，無人機團隊其他成員認為 該要求合理，應予執行，但是操作人認為該要求有安全疑慮，應予拒 絕，請問操作人對此情形應有下列哪㇐項認知? ',
		answers: ['聽從無人機團隊領隊的指示，領隊說執行就執行，到時有問題 由領隊負責。 ','聽從無人機團隊大多數人的意見，到時有問題大家㇐起負責 ','無人機於飛航活動期間，操作人對無人機之處置有最後決定權','如果委託單位願意負責就執行該要求，否則就拒絕該要求 '],
		correctAnswer: '無人機於飛航活動期間，操作人對無人機之處置有最後決定權',
		feedback: 'The force runs strong with you.',
		imageSrc: 'img/sw.jpg',
		alt: 'The force runs strong with you.'
	},
	{
		question: '遙控無人機所有人或操作人違反「不得逾距地面或水面高度 400 呎從 事飛航活動」之規定者，民航局除廢止其操作證並得沒入遙控無人機 外，另處多少新臺幣之罰鍰? ',
		answers: ['30 萬元以上 150 萬元以下','1 萬元以上 10 萬元以下','20 萬元以上 50 萬元以下','5 萬元以上 30 萬元以下'],
		correctAnswer: '30 萬元以上 150 萬元以下',
		feedback: 'The force runs strong with you.',
		imageSrc: 'img/sw.jpg',
		alt: 'The force runs strong with you.'
	}
];

// This data structure stores the final feedback strings and images
const finalFeedbackStore = [
	{ 
		feedback:	' ',
		imageSrc:	'img/sad_face.jpg',
		alt: ' '
	},
	{
		feedback: ' ',
		imageSrc: 'img/happy-face.jpg',
		alt: ' '
	},
	{
		feedback: ' ',
		imageSrc: 'img/good_job.jpg',
		alt: ' '
	},
	{
		feedback: ' ',
		imageSrc: 'img/thumbs_up.jpg',
		alt: ' '
	}
];