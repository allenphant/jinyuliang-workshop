import{r as e}from"./rolldown-runtime-S-ySWqyJ.js";import{i as t,r as n}from"./framework-CXnKph_e.js";var r=e(t(),1),i=n(),a={primary:{label:`主要定義`,window:`餐後 4–36 小時`,rule:`四項主要腸胃症狀至少兩項，或嘔吐 ≥2 次，或稀便 ≥3 次`,cases:77,n:278},sensitive:{label:`敏感定義`,window:`餐後 3–48 小時`,rule:`至少一項主要腸胃症狀`,cases:92,n:278},strict:{label:`嚴格定義`,window:`餐後 5–30 小時`,rule:`嘔吐或腹瀉，且伴隨噁心或腹部絞痛`,cases:63,n:278}},o={2:[[`09/16 16:00`,1],[`09/16 18:00`,6],[`09/16 20:00`,14],[`09/16 22:00`,18],[`09/17 00:00`,10],[`09/17 02:00`,9],[`09/17 04:00`,5],[`09/17 06:00`,4],[`09/17 08:00`,4],[`09/17 10:00`,3],[`09/17 12:00`,0],[`09/17 14:00`,1],[`09/17 16:00`,1],[`09/17 18:00`,1]].map(([e,t])=>({label:String(e),count:Number(t)})),4:[[`09/16 16:00`,7],[`09/16 20:00`,32],[`09/17 00:00`,19],[`09/17 04:00`,9],[`09/17 08:00`,7],[`09/17 12:00`,1],[`09/17 16:00`,2],[`09/17 20:00`,0]].map(([e,t])=>({label:String(e),count:Number(t)})),6:[[`09/16 12:00`,1],[`09/16 18:00`,38],[`09/17 00:00`,24],[`09/17 06:00`,11],[`09/17 12:00`,2],[`09/17 18:00`,1]].map(([e,t])=>({label:String(e),count:Number(t)}))},s=[{name:`翡翠凝露羹`,or:10.53,low:4.07,high:27.27},{name:`合歡桂露飲`,or:2.78,low:1.57,high:4.93},{name:`松仁鴨卷`,or:2.39,low:1.35,high:4.24},{name:`金蓮酥`,or:1.76,low:1.02,high:3.03},{name:`御製玄茶`,or:1.64,low:.86,high:3.12},{name:`梅釉鮮根`,or:1.49,low:.86,high:2.58},{name:`香蕈束`,or:1.26,low:.72,high:2.2},{name:`芝麻米糕`,or:.9,low:.53,high:1.55},{name:`雪梨湯`,or:.77,low:.45,high:1.34},{name:`春香草盤`,or:.69,low:.39,high:1.23}],c=[{label:`內廷賓客`,cases:17,n:49,rate:34.7},{label:`膳勤人員`,cases:12,n:33,rate:36.4},{label:`宮廷侍從`,cases:26,n:94,rate:27.7},{label:`宮門護衛`,cases:15,n:56,rate:26.8},{label:`樂舞人員`,cases:7,n:46,rate:15.2}],l=[{label:`承月臺`,n:94,cells:`23／40／2／29`,or:`8.34`},{label:`蘅芳苑`,n:82,cells:`26／26／0／30`,or:`∞＊`},{label:`昭華殿`,n:90,cells:`21／43／3／23`,or:`3.74`}],u={reports:{title:`最初七份急報整理表`,file:`initial_reports.csv`,origin:`疫報司把翌晨收到的七份個別急報，依通報時間、症狀與千秋宴關聯整理成表。`,reason:`先確認相似症狀是否在 48 小時內集中，並逐筆判斷是否符合手冊的群聚啟動條件。`,unit:`一列是一份初始通報；共 7 列，因此完整顯示。`,inlinePreview:{columns:[`report_id`,`report_time`,`vomiting`,`diarrhea_24h`,`attended_banquet`,`clinical_criteria`],rows:[[`IR001`,`05:40`,`1`,`0`,`1`,`1`],[`IR002`,`05:48`,`0`,`4`,`1`,`1`],[`IR003`,`05:55`,`1`,`3`,`1`,`1`],[`IR004`,`06:04`,`1`,`0`,`1`,`1`],[`IR005`,`06:12`,`0`,`5`,`1`,`1`],[`IR006`,`06:18`,`1`,`0`,`0`,`1`],[`IR007`,`06:25`,`0`,`1`,`0`,`0`]]}},manual:{title:`金玉良炎防治工作手冊`,file:`disease_field_manual.md`,origin:`御醫署在本次千秋宴之前已發布的正式疾病手冊，是承熙國既有公衛知識。`,reason:`提供群聚門檻、病例定義、潛伏期、採檢時機與證據判讀規則，讓分析條件在看結果前固定。`,unit:`Markdown 規則文件；預覽時顯示全文。`,previewPath:`/data/disease_field_manual.md`,previewKind:`markdown`},person:{title:`個人層級 Line List`,file:`person_line_list.csv`,origin:`主辦單位的 312 人與會名冊，與調查人員第一輪主動訪談、症狀時間及採檢狀態合併而成。`,reason:`建立完整事件分母，並讓每名參與者都能依同一套規則分類病例及描述 Person／Time／Place。`,unit:`一列是一名參與者；共 312 列，預覽前 10 列。`,previewPath:`/data/person_line_list.csv`,previewKind:`csv`,rowLimit:10},early:{title:`八名早期病例訪談摘要`,file:`early_interviews.csv`,origin:`調查人員先對最早發病的八名參與者進行開放式訪談，整理他們記得的食品與活動。`,reason:`用早期線索形成正式問卷的候選項目；此時只建立假說，尚未估計食品效果。`,unit:`一列是一名早期受訪者；共 8 列，因此完整顯示。`,inlinePreview:{columns:[`person_id`,`onset_order`,`mentioned_foods`,`other_clue`],rows:[[`P0227`,`1`,`凝露羹、桂露飲、金蓮酥`,`承月臺早席`],[`P0306`,`2`,`凝露羹、桂露飲、梅釉鮮根`,`蘅芳苑晚席`],[`P0196`,`3`,`凝露羹、桂露飲、鴨卷`,`承月臺早席`],[`P0016`,`4`,`凝露羹、桂露飲、金蓮酥`,`昭華殿早席`],[`P0197`,`5`,`凝露羹、雪梨湯、梅釉鮮根`,`蘅芳苑早席`],[`P0241`,`6`,`凝露羹、鴨卷、芝麻米糕`,`承月臺早席`],[`P0214`,`7`,`凝露羹、金蓮酥、鴨卷`,`蘅芳苑早席`],[`P0311`,`8`,`凝露羹、桂露飲、金蓮酥`,`昭華殿晚席`]]}},menu:{title:`三場地菜單與供餐批次`,file:`menu_by_site.csv`,origin:`千秋宴主辦單位與尚膳署提供的場地菜單、餐套、供餐批次及實際上菜時間。`,reason:`確認早期病例提到的食品是否真的在其場地供應，並辨識共享食品、場地限定食品與批次結構。`,unit:`一列是一個場地×梯次×餐套×食品組合；共 180 列，完整顯示。`,previewPath:`/data/menu_by_site.csv`,previewKind:`csv`},food:{title:`正式食品暴露問卷長表`,file:`food_exposure.csv`,origin:`依早期訪談與菜單設計標準問卷，再以參與者訪談和可用供餐紀錄完成。`,reason:`為每項食品建立食用／未食用／未知紀錄，才能計算食品別侵襲率、2×2 表、OR 與共食關係。`,unit:`一列是一名參與者×一項食品；共 3,120 列，預覽前 10 列。`,previewPath:`/data/food_exposure.csv`,previewKind:`csv`,rowLimit:10},dictionary:{title:`資料字典`,file:`data_dictionary.csv`,origin:`資料管理人員隨調查資料提供的欄位規格，記錄型別、允許值、缺失規則與繁體中文說明。`,reason:`在請 AI 寫程式前先核對欄位意義，避免把代碼、空白或資料單位解讀錯誤。`,unit:`一列是一個欄位定義；共 67 列，完整顯示。`,previewPath:`/data/data_dictionary.csv`,previewKind:`csv`},caseOutput:{title:`A1 病例分類輸出`,file:`case_classification_summary`,origin:`A1 依 line list 與疾病工作手冊建立病例名單後產生。`,reason:`固定本輪主要病例集合，讓後續流行曲線、侵襲率與食品分析使用同一個 outcome。`,unit:`分析衍生表；完整顯示三種定義結果。`,inlinePreview:{columns:[`definition`,`cases`,`classifiable_n`,`rate`],rows:[[`primary`,`77`,`278`,`27.7%`],[`sensitive`,`92`,`278`,`33.1%`],[`strict`,`63`,`278`,`22.7%`]]}},crudeOutput:{title:`A4 食品粗分析輸出`,file:`food_2x2_primary`,origin:`A4 將病例分類與食品暴露合併，逐項建立 2×2 表後產生。`,reason:`保留粗 OR 與原始四格，供 A5 檢查共食與調整前後效果變化。`,unit:`一列是一項食品；預覽主要候選的完整結果。`,inlinePreview:{columns:[`food`,`n_complete`,`OR`,`95% CI`],rows:[[`翡翠凝露羹`,`266`,`10.53`,`4.07–27.27`],[`合歡桂露飲`,`—`,`2.78`,`1.57–4.93`],[`松仁鴨卷`,`—`,`2.39`,`1.35–4.24`]]}},adjustedOutput:{title:`A5 分層與調整模型輸出`,file:`adjusted_effect_summary`,origin:`A5 將場地分層 2×2、Mantel–Haenszel 與 logistic regression 結果整理後產生。`,reason:`作為 A6 缺失值敏感度分析的基準，檢查不同未知暴露假設是否改變主要效果方向。`,unit:`分析衍生摘要；完整顯示三種估計。`,inlinePreview:{columns:[`estimate`,`jade_dew_OR`,`interpretation`],rows:[[`crude`,`10.53`,`未調整`],[`Mantel–Haenszel`,`9.62`,`依場地分層`],[`logistic adjusted`,`8.91`,`控制共食與場地`]]}},lab:{title:`人體與食品檢驗結果`,file:`lab_results.csv`,origin:`御醫署實驗室對病例檢體、剩餘食品與指定環境樣本完成 YL-NAAT、培養與分型後回報。`,reason:`分開判定檢驗結果、個案分類、群聚病因與食品媒介，並結合採檢時機解讀陰性。`,unit:`一列是一個樣本的一項檢驗；共 63 列，完整顯示。`,previewPath:`/data/lab_results.csv`,previewKind:`csv`},environment:{title:`食品溫度與環境紀錄`,file:`environment_log.csv`,origin:`尚膳署既有溫度表、供餐紀錄與調查人員現場查核結果合併而成。`,reason:`把食品、批次、溫度與保存時間串起來，檢查哪條供餐路徑符合手冊定義的繁殖條件。`,unit:`一列是一筆環境或食品保存紀錄；共 24 列，完整顯示。`,previewPath:`/data/environment_log.csv`,previewKind:`csv`}},d={2:[{title:`個人層級 Spot Map／宮苑疾病地圖`,concept:`把每名參與者的實際位置放回宮苑平面，觀察病例是否靠近特定供餐台、座區或環境來源。`,unavailable:`目前只有 site_id，能比較三個場地，卻沒有個人座位與宮苑內座標。直接散點會創造資料中不存在的空間聚集。`,missing:[`個人所在座區與座位`,`宮苑平面座標`,`供餐台與環境設施位置`],additions:[`dining_zone`,`seat_row`,`seat_column`,`palace_x`,`palace_y`,`serving_station_id`],prompt:`我有 person_line_list_spatial.csv，包含 person_id、primary、site_id、palace_x、palace_y、dining_zone、serving_station_id。請先檢查座標缺失與每場地分母，再以 site_id 分面繪製 Spot Map：病例用朱砂紅實心點、非病例用墨綠空心點、供餐台用金色菱形。請保留相同比例尺，標示每場地病例數／可分類人數，並說明空間聚集仍需結合暴露與環境證據。`,code:`# A2.6｜需先生成 person_line_list_spatial.csv 的個人位置欄位
import pandas as pd
import seaborn as sns
import matplotlib.pyplot as plt

spatial = pd.read_csv("person_line_list_spatial.csv")
required = {"person_id", "primary", "site_id", "palace_x", "palace_y"}
missing = required.difference(spatial.columns)
if missing:
    raise ValueError(f"進階 Spot Map 尚缺欄位: {sorted(missing)}")

# 每個點代表一名實際有座標紀錄的參與者
g = sns.relplot(
    data=spatial.dropna(subset=["palace_x", "palace_y", "primary"]),
    x="palace_x", y="palace_y", col="site_id", hue="primary",
    style="primary", palette={0: "#24594e", 1: "#a94632"},
    kind="scatter", s=55, facet_kws={"sharex": False, "sharey": False}
)
g.set_axis_labels("Palace X", "Palace Y")
g.figure.savefig("palace_spot_map.svg", format="svg", bbox_inches="tight")
print("SVG: palace_spot_map.svg")
plt.show()`},{title:`Kaplan–Meier 餐後發病曲線`,concept:`把餐後至發病視為 time-to-event，比較食用與未食用者累積維持無症狀的比例。`,unavailable:`目前非病例只有『沒有發病時間』，缺少每個人的追蹤截止時間與設限原因，因此無法判定他被觀察了多久。`,missing:[`統一且可稽核的追蹤起點`,`每人追蹤截止時間`,`事件與設限指標`],additions:[`followup_start_datetime`,`followup_end_datetime`,`onset_event`,`censor_reason`],prompt:`我有 outbreak_followup.csv，包含 person_id、jade_dew_custard、followup_start_datetime、followup_end_datetime、symptom_onset_datetime、onset_event、censor_reason。請建立 duration_hours，列出各暴露組樣本數、事件數與設限數，再用 lifelines 畫 Kaplan–Meier 無症狀曲線與 number-at-risk。請解釋這是發病速度的進階描述，不取代流行曲線或主要食品效果分析。`,code:`# A2.7｜需先建立完整追蹤與設限欄位
import pandas as pd
from lifelines import KaplanMeierFitter
import matplotlib.pyplot as plt

followup = pd.read_csv("outbreak_followup.csv", parse_dates=[
    "followup_start_datetime", "followup_end_datetime", "symptom_onset_datetime"
])
required = {"jade_dew_custard", "followup_start_datetime",
            "followup_end_datetime", "onset_event"}
if required.difference(followup.columns):
    raise ValueError("請先補齊追蹤起訖、暴露與設限欄位")

# 發病者用 onset；設限者用 followup_end
event_or_end = followup["symptom_onset_datetime"].fillna(followup["followup_end_datetime"])
followup["duration_hours"] = (event_or_end - followup["followup_start_datetime"]).dt.total_seconds() / 3600

kmf = KaplanMeierFitter()
for exposed, group in followup.groupby("jade_dew_custard"):
    kmf.fit(group["duration_hours"], group["onset_event"], label=f"exposed={int(exposed)}")
    kmf.plot_survival_function()
plt.xlabel("Hours after meal")
plt.ylabel("Probability remaining symptom-free")
plt.tight_layout()
plt.savefig("km_symptom_free_curve.svg", format="svg", bbox_inches="tight")
print("SVG: km_symptom_free_curve.svg")
plt.show()`}],4:[{title:`攝入量與劑量反應`,concept:`比較未食用、少量、中量與大量攝入者的發病率，評估風險是否隨劑量增加。`,unavailable:`現有 serving_amount_category 可作描述，但標準 DGP 沒有設定可驗證的劑量梯度，也缺少一致的實際克數。`,missing:[`可比較的實際攝入量`,`份量測量或供餐紀錄`,`DGP 中明確的劑量效果`],additions:[`estimated_amount_grams`,`number_of_servings`,`portion_source`,`dose_effect_parameter`],prompt:`我有 food_dose_exposure.csv，包含 person_id、primary、food_id、estimated_amount_grams、number_of_servings、portion_source、recall_confidence。請針對 jade_dew_custard 建立未食用／低／中／高劑量分組，輸出各組病例數、分母與侵襲率，畫具 95% CI 的劑量反應點線圖，再以 ordered dose logistic regression 檢查趨勢。請同時呈現原始克數分布與缺失比例。`,code:`# A4.6｜需先有一致的實際攝入量與劑量效果設定
import pandas as pd
import seaborn as sns
import matplotlib.pyplot as plt

dose = pd.read_csv("food_dose_exposure.csv")
required = {"person_id", "primary", "food_id", "estimated_amount_grams"}
if required.difference(dose.columns):
    raise ValueError("進階劑量反應尚缺實際攝入量欄位")

jade = dose.query("food_id == 'jade_dew_custard'").copy()
jade["dose_group"] = pd.cut(
    jade["estimated_amount_grams"], [-.1, 0, 80, 160, float("inf")],
    labels=["none", "low", "medium", "high"]
)
summary = jade.groupby("dose_group", observed=False)["primary"].agg(["count", "sum", "mean"])
print(summary.rename(columns={"count": "n", "sum": "cases", "mean": "attack_rate"}))
sns.pointplot(data=jade, x="dose_group", y="primary", errorbar=("ci", 95), color="#a94632")
plt.ylabel("Attack rate")
plt.tight_layout()
plt.savefig("dose_response.svg", format="svg", bbox_inches="tight")
print("SVG: dose_response.svg")
plt.show()`}],5:[{title:`場地效應修飾與交互作用`,concept:`檢查同一食品的效果是否因場地而改變，而不只是把場地視為需要控制的混雜因子。`,unavailable:`目前一個場地的未暴露病例格數為 0，各層估計偏稀疏；標準 DGP 也沒有設定食品效果會因場地改變。`,missing:[`各場地足夠的暴露與未暴露病例`,`預先設定的場地×食品效果`,`較大的參與人數`],additions:[`site_food_interaction`,`minimum_cell_count`,`interaction_effect_size`],prompt:`這是混雜加強版資料，DGP 已設定不同 site_id 的 jade_dew_custard 效果不同，且各層四格至少 5 人。請先輸出場地分層 2×2 表與 OR，再建立 primary ~ jade_dew_custard * C(site_id) + harmony_osmanthus_drink。輸出交互作用係數、各場地推導 OR、95% CI、模型分母與收斂狀態，並以 interaction plot 呈現。`,code:`# A5.6｜只在進階 DGP 提供足夠層內樣本與交互作用時使用
import numpy as np
import pandas as pd
import statsmodels.formula.api as smf

required = {"primary", "jade_dew_custard", "harmony_osmanthus_drink", "site_id"}
if required.difference(analysis.columns):
    raise ValueError("進階交互作用模型尚缺必要欄位")

model_df = analysis[list(required)].dropna()
interaction_model = smf.logit(
    "primary ~ jade_dew_custard * C(site_id) + harmony_osmanthus_drink",
    data=model_df
).fit()
print(interaction_model.summary())
# 下一步依係數組合推導各 site 的食品 OR 與 95% CI
print(np.exp(interaction_model.params))`}],7:[{title:`二次傳播網絡`,concept:`用接觸關係、發病先後與合理代間距，區分共同食源病例與少量可能的二次病例。`,unavailable:`標準版只有個人症狀與宴會暴露，沒有病例間接觸紀錄、可能感染來源與接觸時間。`,missing:[`病例間接觸對象`,`接觸開始與結束時間`,`可能來源與代間距`],additions:[`source_person_id`,`contact_person_id`,`contact_start_datetime`,`contact_end_datetime`,`contact_type`,`generation_interval_hours`],prompt:`我有 contact_history.csv 與 person_line_list.csv。前者包含 source_person_id、contact_person_id、contact_start_datetime、contact_end_datetime、contact_type；後者包含 primary 與 symptom_onset_datetime。請先依手冊的合理代間距篩選可能傳播邊，再用 networkx 畫有向網絡：共同食源病例用朱砂紅、可能二次病例用金色、接觸邊標示時間。請輸出每條邊的判定依據與不確定性。`,code:`# A7.6｜需先有個人接觸史與可能代間距
import pandas as pd
import networkx as nx
import matplotlib.pyplot as plt

contacts = pd.read_csv("contact_history.csv", parse_dates=[
    "contact_start_datetime", "contact_end_datetime"
])
required = {"source_person_id", "contact_person_id",
            "contact_start_datetime", "contact_end_datetime"}
if required.difference(contacts.columns):
    raise ValueError("進階傳播網絡尚缺接觸對象與接觸時間")

# 篩選步驟還需合併兩人的發病時間與手冊代間距
G = nx.from_pandas_edgelist(
    contacts, "source_person_id", "contact_person_id", create_using=nx.DiGraph
)
nx.draw_networkx(G, node_size=260, arrows=True, with_labels=False)
plt.title("Possible secondary transmission network")
plt.axis("off")
plt.savefig("secondary_transmission_network.svg", format="svg", bbox_inches="tight")
print("SVG: secondary_transmission_network.svg")
plt.show()`}]},f={trigger:[`請先用白話告訴我：每一份急報要符合哪些條件，才算和這場宴會有關的疑似病例。接著幫我把 7 份通報逐筆整理成容易核對的表格。`,`請幫我計算目前有幾人同時符合症狀條件和宴會關聯，並把每個人的判定理由保留在表格裡，讓我可以人工檢查。`,`請把符合人數和工作手冊的 3 人門檻比較，用一句話告訴我是否啟動調查，再說明這個決定目前能代表什麼。`],case:[`請先用白話說明：完整名冊、症狀、發病時間和缺失資料在病例判定中各扮演什麼角色，並告訴我這一幕真正的分母是誰。`,`請依照工作手冊，逐一判斷每位參與者是否符合主要病例定義。也請把時間窗做成之後可以修改的設定，讓我能比較較寬或較嚴格的定義。`,`請把主要病例、排除者和資料不足者分開計數。資料不足者請保留為未知，並告訴我應該抽查哪幾列來確認 AI 沒有誤判。`],time:[`我想知道病例是在什麼時間集中出現。請先告訴我有多少主要病例具有可用的發病時間，再用 Plotly 畫流行曲線。`,`請讓同一張流行曲線可以切換 1、2、4、6 小時分箱，並替我確認四種畫法使用的是同一批病例。時間文字要清楚，不要擠在一起。`,`請再比較不同角色、場地和用餐梯次的病例數、可判定人數與侵襲率，並摘要從用餐到發病的時間。最後用白話告訴我 Person、Time、Place 各看到了什麼。`],hypothesis:[`請先用白話說明早期病例訪談和實際菜單各能告訴我們什麼，再整理出共同食品、場地限定食品、供餐批次和非食品線索。`,`請把這些線索整理成一份所有參與者都能回答的宴會問卷。每題使用有、沒有、不確定三種答案，並說明空白資料後續怎麼處理。`,`請幫我檢查哪些食品常被一起食用，並用 Plotly heatmap 呈現。請直接標示成對相關係數，指出哪些食品存在需要在後續模型共同考慮的共食結構；不要把相關本身解讀為食品媒介證據。`],crude:[`請先用白話解釋一張食品 2×2 表的四格分別是哪些人，並說明為什麼每項食品可能有不同的分析分母。`,`請對十項食品做相同的比較：食用者和未食用者各有多少人發病，並計算侵襲率、OR、95% 信賴區間和 Fisher p 值。再用 Plotly 森林圖排列結果。`,`請替我核對每項食品的四格人數是否加總成正確分母。最後用白話指出兩項值得進一步調查的候選食品，以及目前的粗分析還沒處理什麼。`],adjusted:[`翡翠凝露羹和合歡桂露飲在粗分析都很可疑。請先檢查兩者有多常一起被食用，再用白話解釋為什麼共食會讓兩項食品看起來都和疾病有關。`,`請先分別在三個場地比較翡翠凝露羹與發病，再把三個場地的結果合併。請保留每個場地的原始四格和分析人數，讓我能人工核對。`,`請再用 logistic regression 同時考慮兩項食品和場地。請告訴我模型實際用了多少人、參考場地是哪裡、是否成功完成，並用 Plotly 比較粗分析、分層分析和調整後結果。`],missing:[`主要候選食品仍有一些未知回答。請先用白話解釋三種看法：只分析有回答的人、把未知都當作沒吃、把未知都當作有吃。`,`請在三種看法下重新比較候選食品與發病，列出每次使用的人數、四格人數、OR 和 95% 信賴區間，再用 Plotly 畫在同一張圖上。`,`請告訴我三種結果的方向是否一致、這對結果穩健性代表什麼；再提醒我回覆偏差、回憶偏差和未測量混雜還需要如何判讀。`],evidence:[`請先把人體檢驗和病例資料接在一起，保留原始檢驗結果與採檢時間。請用白話說明一筆陽性或陰性檢驗目前可以代表什麼。`,`請依工作手冊和採檢時機判讀個案。較晚採檢的陰性結果請保留其不確定性，並說明為什麼不會自動把原本的臨床病例改成沒有生病。`,`請把結論分成檢驗結果、個案分類、群聚病因和食品媒介四層，再用 Plotly 整合人體、食品和環境線索。Petalomyces innocua 請依手冊列為背景環境發現。`]},p=`【如果這一步需要畫圖】
請使用 Plotly 製作可以互動的圖，並讓右上角可以下載 SVG。請替最後的調查報告保留這張圖；如何命名與保存由你處理，完成後告訴我即可。圖表要寫清楚分析對象與分母，中文字、日期和食品名稱保持可讀，滑鼠移到圖上時能看到這次真正使用的人數、比例或信賴區間。配色沿用米白、墨綠、朱砂紅與金色。`,m=`【進階圖表與 SVG 規格】
- 優先使用 Plotly，並以 toImageButtonOptions 將工具列下載格式設為 SVG。
- 若 lifelines、networkx 或其他套件的必要功能只能透過 Matplotlib 呈現，必須另外使用 savefig(..., format="svg", bbox_inches="tight") 輸出 SVG，並在程式輸出清楚顯示檔名。
- 圖表須保留分母、事件數、設限數或網絡邊的判定依據；視覺規格沿用米白、墨綠、朱砂紅與金色。`,h={trigger:`# 0.4｜讀取初始通報，將手冊門檻轉成可稽核欄位
import pandas as pd

MANUAL_CLUSTER_THRESHOLD = 3
reports = pd.read_csv("initial_reports.csv", parse_dates=["onset_datetime"])

# 臨床條件與宴會關聯分開判定，方便逐筆核對
reports["meets_clinical_criteria"] = (
    reports["vomiting"].eq(1) | reports["diarrhea_24h_count"].ge(3)
)
reports["has_event_link"] = reports["attended_banquet"].eq(1)
reports["suspected_report"] = (
    reports["meets_clinical_criteria"] & reports["has_event_link"]
)
n_linked = int(reports["suspected_report"].sum())
outbreak_triggered = n_linked >= MANUAL_CLUSTER_THRESHOLD
print(reports[["person_id", "meets_clinical_criteria", "has_event_link", "suspected_report"]])
print({"linked_reports": n_linked, "outbreak_triggered": outbreak_triggered})`,case:`# A1.4｜先盤點固定資料，再依工作手冊建立主要病例分類
import pandas as pd

line_list = pd.read_csv(
    "person_line_list.csv",
    parse_dates=["meal_end_datetime", "symptom_onset_datetime"]
)
food_exposure = pd.read_csv("food_exposure.csv")
menu = pd.read_csv("menu_by_site.csv")
dictionary = pd.read_csv("data_dictionary.csv")

# 最終講師版固定的四張 Release 1 資料表；先確認列數與分析單位
inventory = pd.DataFrame([
    {"table": "people", "rows": len(line_list), "columns": line_list.shape[1]},
    {"table": "exposures", "rows": len(food_exposure), "columns": food_exposure.shape[1]},
    {"table": "menu", "rows": len(menu), "columns": menu.shape[1]},
    {"table": "dictionary", "rows": len(dictionary), "columns": dictionary.shape[1]},
])
print(inventory)

def classify_primary(df, onset_min=4, onset_max=36):
    result = pd.Series(pd.NA, index=df.index, dtype="boolean")
    responded = df["survey_response"].eq(1)

    # 已回覆者的個別空白症狀按未報告該症狀處理；整份未回覆者維持 NA
    major_count = df[["nausea", "vomiting", "diarrhea", "abdominal_cramps"]].fillna(0).sum(axis=1)
    clinical = (
        major_count.ge(2)
        | df["vomiting_count_24h"].fillna(0).ge(2)
        | df["loose_stool_count_24h"].fillna(0).ge(3)
    )
    hours_after_meal = (
        df["symptom_onset_datetime"] - df["meal_end_datetime"]
    ).dt.total_seconds() / 3600

    result.loc[responded] = (
        clinical.loc[responded]
        & hours_after_meal.loc[responded].between(onset_min, onset_max).fillna(False)
    )
    return result, hours_after_meal

line_list["primary"], line_list["hours_after_meal"] = classify_primary(line_list)
print(line_list["primary"].value_counts(dropna=False))`,time:`# A2.4｜完成 Person／Time／Place、潛伏期與可切換分箱的 Plotly 流行曲線
import numpy as np
import pandas as pd
import plotly.graph_objects as go

FIGURES = globals().get("FIGURES", {})

def svg_config(filename):
    return {
        "displaylogo": False,
        "responsive": True,
        "toImageButtonOptions": {
            "format": "svg", "filename": filename,
            "height": None, "width": None, "scale": 1,
        },
    }

if "primary" not in line_list.columns:
    raise ValueError("請先執行 A1.4 建立 primary 與 hours_after_meal")

# Person／Place：各組同時報告病例數、可分類分母與侵襲率
def attack_rate_summary(data, group):
    return (
        data.groupby(group, dropna=False)["primary"]
        .agg(classifiable_n="count", cases="sum")
        .assign(attack_rate=lambda x: x["cases"] / x["classifiable_n"])
        .reset_index()
    )

person_summary = attack_rate_summary(line_list, "role_group")
place_summary = attack_rate_summary(line_list, "site_id")
session_summary = attack_rate_summary(line_list, "meal_session")
print(person_summary)
print(place_summary)

cases = line_list.loc[line_list["primary"].eq(True)].copy()
missing_onset = cases["symptom_onset_datetime"].isna().sum()
print(f"Cases with missing onset: {missing_onset}")

# 潛伏期：以個人用餐結束作為共同定義的時間起點
incubation = cases["hours_after_meal"].describe(percentiles=[.25, .5, .75, .9])
within_manual_core = cases["hours_after_meal"].between(5, 28).mean()
print(incubation)
print(f"Within 5–28 hours: {within_manual_core:.1%}")

def epi_counts(data, bin_hours):
    onset = data["symptom_onset_datetime"].dropna()
    start = onset.min().floor(f"{bin_hours}h")
    end = onset.max().ceil(f"{bin_hours}h")
    edges = pd.date_range(start, end + pd.Timedelta(hours=bin_hours), freq=f"{bin_hours}h")
    counts = pd.cut(onset, bins=edges, right=False).value_counts(sort=False)
    return pd.DataFrame({
        "bin_start": [interval.left for interval in counts.index],
        "bin_end": [interval.right for interval in counts.index],
        "cases": counts.to_numpy(),
    })

bin_options = [1, 2, 4, 6]
epi_tables = {hours: epi_counts(cases, hours) for hours in bin_options}
assert len({int(table["cases"].sum()) for table in epi_tables.values()}) == 1

fig = go.Figure()
for index, hours in enumerate(bin_options):
    table = epi_tables[hours]
    fig.add_bar(
        x=table["bin_start"], y=table["cases"],
        width=hours * 60 * 60 * 1000 * .92,
        visible=index == 2, marker_color="#9c4a36",
        customdata=np.column_stack([
            table["bin_start"].dt.strftime("%m-%d %H:%M"),
            table["bin_end"].dt.strftime("%m-%d %H:%M"),
        ]),
        hovertemplate="%{customdata[0]}–%{customdata[1]}<br>新發病例：%{y:.0f}<extra></extra>",
        name=f"{hours} 小時",
    )

fig.update_layout(
    title="主要病例流行曲線｜4 小時分箱",
    template="plotly_white", paper_bgcolor="#fbf7ee", font_family="Noto Sans TC, Microsoft JhengHei, sans-serif",
    xaxis={"title": "發病日期時間", "tickformat": "%m-%d<br>%H:%M", "nticks": 9},
    yaxis={"title": "新發病例數", "rangemode": "tozero"},
    updatemenus=[{"buttons": [
        {"label": f"{hours} 小時", "method": "update", "args": [
            {"visible": [position == index for position in range(4)]},
            {"title.text": f"主要病例流行曲線｜{hours} 小時分箱"},
        ]} for index, hours in enumerate(bin_options)]}],
)
FIGURES["epi_curve"] = fig
fig.show(config=svg_config("epi_curve"))`,hypothesis:`# 3.4｜由早期訪談形成候選暴露，並以 Plotly 檢查食品共食
import numpy as np
import pandas as pd
import plotly.graph_objects as go

FIGURES = globals().get("FIGURES", {})

def svg_config(filename):
    return {
        "displaylogo": False, "responsive": True,
        "toImageButtonOptions": {"format": "svg", "filename": filename,
                                 "height": None, "width": None, "scale": 1},
    }

menu = pd.read_csv("menu_by_site.csv")
early = pd.read_csv("early_interviews.csv")
food_exposure = pd.read_csv("food_exposure.csv")

# 早期訪談用來形成問卷假說
candidate_foods = (
    early.query("is_early_case == 1")
    .groupby("food_id")["reported_consumed"].mean()
    .sort_values(ascending=False)
)

# 正式問卷回收後，以所有已知暴露資料計算共食相關
wide = food_exposure.pivot(index="person_id", columns="food_id", values="reported_consumed")
corr = wide.corr(min_periods=30)
fig = go.Figure(go.Heatmap(
    z=corr.to_numpy(), x=corr.columns, y=corr.index,
    zmin=-1, zmax=1, zmid=0,
    colorscale=[[0,"#496782"],[.5,"#fbf7ee"],[1,"#9c4a36"]],
    text=np.round(corr.to_numpy(), 2), texttemplate="%{text:.2f}",
    hovertemplate="%{y} × %{x}<br>相關係數：%{z:.2f}<extra></extra>",
))
fig.update_layout(
    title="食品共食相關性", template="plotly_white", height=680,
    paper_bgcolor="#fbf7ee", font_family="Noto Sans TC, Microsoft JhengHei, sans-serif",
)
fig.update_xaxes(tickangle=-35)
FIGURES["food_coexposure_heatmap"] = fig
fig.show(config=svg_config("food_coexposure_heatmap"))`,crude:`# 4.4｜建立可重用的 2×2 表函數
import pandas as pd
import scipy.stats

def two_by_two(data, exposure, outcome="primary"):
    # 每項食品使用暴露與病例狀態皆已知者作為分母
    x = data[[exposure, outcome]].dropna()
    tab = pd.crosstab(x[exposure], x[outcome]).reindex(index=[1,0], columns=[1,0], fill_value=0)
    a, b, c, d = tab.loc[1,1], tab.loc[1,0], tab.loc[0,1], tab.loc[0,0]
    odds_ratio, fisher_p = scipy.stats.fisher_exact([[a,b],[c,d]])
    return {"a":a, "b":b, "c":c, "d":d, "n_complete":len(x),
            "attack_rate_exposed":a/(a+b), "attack_rate_unexposed":c/(c+d),
            "or":odds_ratio, "fisher_p":fisher_p}

# 範例：result = two_by_two(analysis, "jade_dew_custard")`,adjusted:`# A5.4｜先做場地分層與 MH OR，再建立多變項 logistic regression
import numpy as np
import pandas as pd
import statsmodels.formula.api as smf
from statsmodels.stats.contingency_tables import StratifiedTable

# 每個場地建立相同方向的 2×2 表：列為暴露 1/0，欄為病例 1/0
stratum_tables = []
stratum_rows = []
for site_id, group in analysis.groupby("site_id"):
    complete = group[["jade_dew_custard", "primary"]].dropna()
    table = pd.crosstab(
        complete["jade_dew_custard"], complete["primary"]
    ).reindex(index=[1, 0], columns=[1, 0], fill_value=0)
    values = table.to_numpy()
    stratum_tables.append(values)
    a, b, c, d = values.ravel()
    # 原始四格照實輸出；層內零格只在顯示 OR 時使用 0.5 修正
    aa, bb, cc, dd = ([a+.5, b+.5, c+.5, d+.5] if (values == 0).any() else [a, b, c, d])
    stratum_rows.append({"site_id": site_id, "a": a, "b": b, "c": c, "d": d,
                         "n": len(complete), "or_display": aa*dd/(bb*cc)})

mh = StratifiedTable(stratum_tables)
mh_ci_low, mh_ci_high = mh.oddsratio_pooled_confint()
print(pd.DataFrame(stratum_rows))
print({"mh_or": mh.oddsratio_pooled, "ci_low": mh_ci_low, "ci_high": mh_ci_high})

# Logistic 模型分母為四個欄位都有紀錄的完整案例
model_df = analysis[["primary", "jade_dew_custard",
                     "harmony_osmanthus_drink", "site_id"]].dropna()
model = smf.logit(
    "primary ~ jade_dew_custard + harmony_osmanthus_drink + C(site_id)",
    data=model_df
).fit()
adjusted = pd.DataFrame({
    "or": np.exp(model.params),
    "ci_low": np.exp(model.conf_int()[0]),
    "ci_high": np.exp(model.conf_int()[1])
})
print(model.summary())
print(adjusted)`,missing:`# 6.4｜固定病例分類，只改變未知暴露的三種假設
import pandas as pd

exposure = analysis["jade_dew_custard"]
scenarios = {
    "complete_case": exposure,
    "unknown_as_unexposed": exposure.fillna(0),
    "unknown_as_exposed": exposure.fillna(1),
}
rows = []
for name, scenario_exposure in scenarios.items():
    temp = analysis.assign(scenario_exposure=scenario_exposure)
    rows.append({"scenario": name, **two_by_two(temp, "scenario_exposure")})
sensitivity_results = pd.DataFrame(rows)
print(sensitivity_results)`,evidence:`# A7.4｜保留原始檢驗結果，建立採檢時機與證據層級欄位
import pandas as pd

line_list = pd.read_csv("person_line_list.csv", parse_dates=["symptom_onset_datetime"])
lab = pd.read_csv("lab_results.csv", parse_dates=["specimen_datetime"])
evidence = line_list.merge(lab, on="person_id", how="left", validate="one_to_many")
evidence["hours_onset_to_specimen"] = (
    evidence["specimen_datetime"] - evidence["symptom_onset_datetime"]
).dt.total_seconds() / 3600
# test_result 保留 detected / not_detected / invalid / pending / not_tested
# 依手冊規則另建 case_classification_after_lab，原始結果可供稽核
print(evidence[["person_id", "test_result", "hours_onset_to_specimen"]].head())`};function g(e){return`${(e*100).toFixed(1)}%`}function _({text:e,index:t}){let[n,a]=(0,r.useState)(!1);async function o(){await navigator.clipboard.writeText(e),a(!0),window.setTimeout(()=>a(!1),1400)}return(0,i.jsxs)(`article`,{className:`prompt-card`,children:[(0,i.jsx)(`span`,{children:String(t+1).padStart(2,`0`)}),(0,i.jsx)(`pre`,{children:e}),(0,i.jsxs)(`button`,{onClick:o,"aria-label":`複製第 ${t+1} 個 Prompt`,children:[(0,i.jsx)(`i`,{"aria-hidden":`true`,children:`⧉`}),n?`已複製`:`複製 Prompt`]})]})}function v({number:e,files:t,question:n,chart:r,output:a,visual:o,prompts:s}){let c=s.map(e=>`我是負責這場群聚事件的公衛調查學員，目前還不會自己寫 Python。\n\n【目前取得的調查資料】\n${t.map(e=>`- ${e}`).join(`
`)}\n\n【這一階段的公衛問題】\n${n}\n\n【這次想完成的調查工作】\n${e}\n\n【希望得到的調查成果】\n${a}\n\n如果需要圖表，可使用：${r}\n畫面希望採用：${o}\n\n${p}\n\n請先閱讀上述資料與欄位說明，用白話告訴我哪些資料能回答這個問題、應使用誰作為分母，以及你準備怎麼做。確認後，再提供一格可直接在 Colab 執行的完整 Python 程式。程式內部的資料名稱與寫法由你安排；請加入繁體中文註解，完成後告訴我建立了哪些分析成果、要檢查哪些數字，以及下一步可以如何沿用。`);return(0,i.jsxs)(`section`,{className:`prompt-sequence`,children:[(0,i.jsxs)(`div`,{className:`lesson-subhead`,children:[(0,i.jsx)(`span`,{children:e}),(0,i.jsxs)(`div`,{children:[(0,i.jsx)(`b`,{children:`推薦 Prompt`}),(0,i.jsx)(`p`,{children:`用一般人的方式說明手上的資料與想回答的問題，可直接貼給 Gemini。`})]})]}),(0,i.jsxs)(`div`,{className:`prompt-brief-grid`,children:[(0,i.jsxs)(`article`,{children:[(0,i.jsx)(`small`,{children:`現有資料與檔名`}),(0,i.jsx)(`p`,{children:t.join(`、`)})]}),(0,i.jsxs)(`article`,{children:[(0,i.jsx)(`small`,{children:`要探討的問題`}),(0,i.jsx)(`p`,{children:n})]}),(0,i.jsxs)(`article`,{children:[(0,i.jsx)(`small`,{children:`預計圖表`}),(0,i.jsx)(`p`,{children:r})]}),(0,i.jsxs)(`article`,{children:[(0,i.jsx)(`small`,{children:`預期呈現`}),(0,i.jsx)(`p`,{children:a})]}),(0,i.jsxs)(`article`,{className:`wide`,children:[(0,i.jsx)(`small`,{children:`視覺指示`}),(0,i.jsx)(`p`,{children:o})]})]}),(0,i.jsx)(`div`,{className:`prompt-list`,children:c.map((e,t)=>(0,i.jsx)(_,{text:e,index:t},s[t]))})]})}function y({code:e}){let[t,n]=(0,r.useState)(!1);async function a(){await navigator.clipboard.writeText(e),n(!0),window.setTimeout(()=>n(!1),1400)}return(0,i.jsxs)(`div`,{className:`code-sample`,children:[(0,i.jsxs)(`div`,{className:`code-toolbar`,children:[(0,i.jsxs)(`span`,{children:[(0,i.jsx)(`i`,{"aria-hidden":`true`,children:`⌘`}),` Python · Google Colab`]}),(0,i.jsxs)(`button`,{onClick:a,"aria-label":`複製 Python 程式`,children:[(0,i.jsx)(`i`,{"aria-hidden":`true`,children:`⧉`}),t?`已複製`:`複製程式`]})]}),(0,i.jsx)(`pre`,{className:`code-block`,children:(0,i.jsx)(`code`,{children:e})})]})}function b({number:e,title:t,note:n,children:r,tone:a=`code`}){return(0,i.jsxs)(`details`,{className:`sealed-panel ${a}`,children:[(0,i.jsxs)(`summary`,{children:[(0,i.jsx)(`span`,{children:e}),(0,i.jsxs)(`div`,{children:[(0,i.jsx)(`b`,{children:t}),(0,i.jsx)(`small`,{children:n})]}),(0,i.jsx)(`i`,{"aria-hidden":`true`,children:`開封`})]}),(0,i.jsx)(`div`,{className:`sealed-content`,children:r})]})}function x({number:e,time:t,title:n,story:r,question:a}){return(0,i.jsxs)(`header`,{className:`chapter-header`,children:[(0,i.jsxs)(`div`,{className:`chapter-number`,children:[(0,i.jsx)(`small`,{children:`案卷`}),(0,i.jsxs)(`strong`,{children:[`A`,e]})]}),(0,i.jsxs)(`div`,{className:`chapter-copy`,children:[(0,i.jsx)(`span`,{className:`chapter-time`,children:t}),(0,i.jsx)(`h2`,{children:n}),(0,i.jsx)(`p`,{children:r}),(0,i.jsxs)(`blockquote`,{children:[(0,i.jsx)(`b`,{children:`此刻要回答：`}),a]})]})]})}function S({number:e,topics:t}){return t?.length?(0,i.jsx)(`div`,{className:`advanced-topic-stack`,children:t.map((t,n)=>(0,i.jsx)(b,{number:`A${e}.${6+n}`,title:`進階參數版本｜${t.title}`,note:`展開查看概念、目前資料條件、需補欄位，以及擴充後可用的 Prompt 與程式。`,tone:`advanced`,children:(0,i.jsxs)(`div`,{className:`advanced-topic`,children:[(0,i.jsxs)(`div`,{className:`advanced-topic-intro`,children:[(0,i.jsxs)(`article`,{children:[(0,i.jsx)(`small`,{children:`分析概念`}),(0,i.jsx)(`p`,{children:t.concept})]}),(0,i.jsxs)(`article`,{children:[(0,i.jsx)(`small`,{children:`目前資料條件`}),(0,i.jsx)(`p`,{children:t.unavailable})]})]}),(0,i.jsxs)(`div`,{className:`advanced-requirements`,children:[(0,i.jsxs)(`article`,{children:[(0,i.jsx)(`small`,{children:`目前缺少`}),(0,i.jsx)(`ul`,{children:t.missing.map(e=>(0,i.jsx)(`li`,{children:e},e))})]}),(0,i.jsxs)(`article`,{children:[(0,i.jsx)(`small`,{children:`擴充資料需加入`}),(0,i.jsx)(`div`,{children:t.additions.map(e=>(0,i.jsx)(`code`,{children:e},e))})]})]}),(0,i.jsxs)(`section`,{className:`advanced-prompt`,children:[(0,i.jsx)(`small`,{children:`擴充後推薦 Prompt`}),(0,i.jsx)(_,{text:`${t.prompt}\n\n${m}`,index:0})]}),(0,i.jsxs)(`section`,{className:`advanced-code`,children:[(0,i.jsx)(`small`,{children:`擴充後講師程式`}),(0,i.jsx)(y,{code:t.code})]})]})},t.title))}):null}function C({number:e,chart:t,table:n,denominator:r,can:a,scope:o}){return(0,i.jsxs)(`section`,{className:`analysis-brief`,children:[(0,i.jsxs)(`div`,{className:`lesson-subhead`,children:[(0,i.jsx)(`span`,{children:e}),(0,i.jsxs)(`div`,{children:[(0,i.jsx)(`b`,{children:`下一步要做的圖與分析`}),(0,i.jsx)(`p`,{children:`把資料表、分母、產出與判讀範圍寫成分析規格。`})]})]}),(0,i.jsxs)(`div`,{className:`analysis-spec-grid`,children:[(0,i.jsxs)(`article`,{children:[(0,i.jsx)(`small`,{children:`圖表／輸出`}),(0,i.jsx)(`strong`,{children:t})]}),(0,i.jsxs)(`article`,{children:[(0,i.jsx)(`small`,{children:`資料表`}),(0,i.jsx)(`strong`,{children:n})]}),(0,i.jsxs)(`article`,{children:[(0,i.jsx)(`small`,{children:`分母`}),(0,i.jsx)(`strong`,{children:r})]}),(0,i.jsxs)(`article`,{className:`wide`,children:[(0,i.jsx)(`small`,{children:`可以回答`}),(0,i.jsx)(`p`,{children:a})]}),(0,i.jsxs)(`article`,{className:`wide next-scope`,children:[(0,i.jsx)(`small`,{children:`後續接續`}),(0,i.jsx)(`p`,{children:o})]})]})]})}function w(e){let t=[],n=[],r=``,i=!1;for(let a=0;a<e.length;a+=1){let o=e[a],s=e[a+1];if(o===`"`&&i&&s===`"`){r+=`"`,a+=1;continue}if(o===`"`){i=!i;continue}if(o===`,`&&!i){n.push(r),r=``;continue}if((o===`
`||o===`\r`)&&!i){o===`\r`&&s===`
`&&(a+=1),n.push(r),r=``,n.some(e=>e.length)&&t.push(n),n=[];continue}r+=o}return(r.length||n.length)&&(n.push(r),t.push(n)),t}function T({source:e,open:t}){let[n,a]=(0,r.useState)(``),[o,s]=(0,r.useState)(``);if((0,r.useEffect)(()=>{!t||!e.previewPath||n||o||fetch(e.previewPath.replace(/^\//,`./`)).then(e=>{if(!e.ok)throw Error(`HTTP ${e.status}`);return e.text()}).then(a).catch(()=>s(`資料預覽載入失敗，請改用下載資料包開啟原檔。`))},[t,e.previewPath,n,o]),e.inlinePreview)return(0,i.jsx)(E,{columns:e.inlinePreview.columns,rows:e.inlinePreview.rows,note:`顯示全部 ${e.inlinePreview.rows.length} 列`});if(o)return(0,i.jsx)(`p`,{className:`source-preview-state`,children:o});if(!n)return(0,i.jsx)(`p`,{className:`source-preview-state`,children:`正在讀取資料預覽…`});if(e.previewKind===`markdown`)return(0,i.jsx)(`pre`,{className:`source-document-preview`,children:n});let c=w(n),l=c[0]??[],u=c.slice(1);return(0,i.jsx)(E,{columns:l,rows:e.rowLimit?u.slice(0,e.rowLimit):u,note:e.rowLimit?`個人層級資料：顯示前 ${Math.min(e.rowLimit,u.length)}／${u.length} 列`:`小型或非個人層級資料：顯示全部 ${u.length} 列`})}function E({columns:e,rows:t,note:n}){return(0,i.jsxs)(`div`,{className:`source-table-shell`,children:[(0,i.jsxs)(`div`,{className:`source-table-note`,children:[(0,i.jsx)(`span`,{children:n}),(0,i.jsx)(`small`,{children:`可左右捲動查看完整欄位`})]}),(0,i.jsx)(`div`,{className:`source-table-scroll`,children:(0,i.jsxs)(`table`,{children:[(0,i.jsx)(`thead`,{children:(0,i.jsx)(`tr`,{children:e.map(e=>(0,i.jsx)(`th`,{children:e},e))})}),(0,i.jsx)(`tbody`,{children:t.map((t,n)=>(0,i.jsx)(`tr`,{children:e.map((e,r)=>(0,i.jsx)(`td`,{children:t[r]||(0,i.jsx)(`span`,{className:`missing-cell`,children:`NA`})},`${n}-${r}`))},n))})]})})]})}function D({source:e,plannedChart:t}){let[n,a]=(0,r.useState)(!1);return(0,i.jsxs)(`article`,{className:`current-source-card`,children:[(0,i.jsxs)(`header`,{children:[(0,i.jsxs)(`div`,{children:[(0,i.jsx)(`span`,{children:`目前取得`}),(0,i.jsx)(`h3`,{children:e.title})]}),(0,i.jsx)(`code`,{children:e.file})]}),(0,i.jsxs)(`div`,{className:`source-context-grid`,children:[(0,i.jsxs)(`div`,{children:[(0,i.jsx)(`small`,{children:`從哪裡來`}),(0,i.jsx)(`p`,{children:e.origin})]}),(0,i.jsxs)(`div`,{children:[(0,i.jsx)(`small`,{children:`為什麼此刻取得`}),(0,i.jsx)(`p`,{children:e.reason})]}),(0,i.jsxs)(`div`,{children:[(0,i.jsx)(`small`,{children:`本幕要做的圖／輸出`}),(0,i.jsx)(`p`,{children:t})]})]}),(0,i.jsxs)(`p`,{className:`source-unit`,children:[(0,i.jsx)(`b`,{children:`一列代表什麼：`}),e.unit]}),(0,i.jsxs)(`details`,{className:`source-preview`,onToggle:e=>a(e.currentTarget.open),children:[(0,i.jsxs)(`summary`,{children:[(0,i.jsx)(`span`,{children:`預覽資料內容`}),(0,i.jsx)(`small`,{children:n?`收起`:`展開`})]}),(0,i.jsx)(T,{source:e,open:n})]})]})}function O({number:e,time:t,title:n,story:r,question:a,available:o,direction:s,brief:c,prompts:l,code:u,demo:d,advanced:f,next:p}){return(0,i.jsxs)(`article`,{className:`story-chapter ${Number(e)%2?`alternate`:``}`,id:`chapter-${e}`,children:[(0,i.jsx)(x,{number:e,time:t,title:n,story:r,question:a}),(0,i.jsxs)(`div`,{className:`lesson-stack`,children:[(0,i.jsxs)(`section`,{className:`cause-panel`,children:[(0,i.jsxs)(`div`,{className:`lesson-subhead`,children:[(0,i.jsxs)(`span`,{children:[`A`,e,`.1`]}),(0,i.jsxs)(`div`,{children:[(0,i.jsx)(`b`,{children:`目前取得的資料與下一步`}),(0,i.jsx)(`p`,{children:`先確認資料從哪裡來、為什麼此刻出現，再展開查看實際內容。`})]})]}),(0,i.jsx)(`div`,{className:`current-source-list`,children:o.map(e=>(0,i.jsx)(D,{source:e,plannedChart:c.chart},e.file))}),(0,i.jsxs)(`blockquote`,{className:`analysis-direction`,children:[(0,i.jsx)(`b`,{children:`接下來的分析方向`}),(0,i.jsx)(`p`,{children:s})]})]}),(0,i.jsx)(C,{number:`A${e}.2`,...c}),(0,i.jsx)(v,{number:`A${e}.3`,files:o.map(e=>`${e.file}：${e.title}`),question:a,chart:c.chart,output:c.output,visual:c.visual,prompts:l}),(0,i.jsxs)(`div`,{className:`reveal-stack`,children:[(0,i.jsx)(b,{number:`A${e}.4`,title:`講師的示範程式`,note:`完成自己的版本後展開核對；程式含註解並可直接複製到 Google Colab。`,children:(0,i.jsx)(y,{code:u})}),(0,i.jsx)(b,{number:`A${e}.5`,title:`講師的示範`,note:`核對講師產生的圖、表、分母與判讀檢查點。`,tone:`demo`,children:d}),(0,i.jsx)(S,{number:e,topics:f})]})]}),p&&(0,i.jsxs)(`div`,{className:`chapter-transition`,children:[(0,i.jsx)(`span`,{children:`下一階段`}),(0,i.jsx)(`p`,{children:p.body}),(0,i.jsxs)(`strong`,{children:[`進入「`,p.label,`」`]})]})]})}function k(){return(0,i.jsxs)(`div`,{className:`trigger-demo`,children:[(0,i.jsxs)(`div`,{className:`trigger-counts`,children:[(0,i.jsxs)(`div`,{children:[(0,i.jsx)(`span`,{children:`收到通報`}),(0,i.jsx)(`b`,{children:`7`})]}),(0,i.jsxs)(`div`,{children:[(0,i.jsx)(`span`,{children:`符合臨床條件`}),(0,i.jsx)(`b`,{children:`6`})]}),(0,i.jsxs)(`div`,{children:[(0,i.jsx)(`span`,{children:`具宴會關聯`}),(0,i.jsx)(`b`,{children:`5`})]})]}),(0,i.jsxs)(`div`,{className:`trigger-rule`,children:[(0,i.jsx)(`span`,{children:`手冊門檻：同一活動 48 小時內至少 3 名具關聯疑似病例`}),(0,i.jsx)(`strong`,{children:`5 ≥ 3　啟動調查`})]}),(0,i.jsxs)(`p`,{className:`validation-note`,children:[(0,i.jsx)(`b`,{children:`講師判讀：`}),`已達啟動門檻，事件登錄為「疑似金玉良炎群聚」；下一階段以名冊、檢驗與暴露資料確認疾病與媒介。`]})]})}function A(){let[e,t]=(0,r.useState)(`primary`),n=a[e];return(0,i.jsxs)(`section`,{className:`lab-panel`,children:[(0,i.jsxs)(`div`,{className:`lab-panel-heading`,children:[(0,i.jsxs)(`div`,{children:[(0,i.jsx)(`span`,{className:`lab-kicker`,children:`講師示範`}),(0,i.jsx)(`h3`,{children:`病例定義參數化`})]}),(0,i.jsxs)(`span`,{className:`denominator-chip`,children:[`可分類者 n = `,n.n]})]}),(0,i.jsx)(`div`,{className:`segmented`,role:`group`,"aria-label":`病例定義`,children:Object.keys(a).map(n=>(0,i.jsx)(`button`,{className:e===n?`selected`:``,onClick:()=>t(n),children:a[n].label},n))}),(0,i.jsxs)(`div`,{className:`case-result`,children:[(0,i.jsxs)(`div`,{className:`case-metric`,children:[(0,i.jsx)(`strong`,{children:n.cases}),(0,i.jsx)(`span`,{children:`病例數`})]}),(0,i.jsxs)(`div`,{className:`case-metric`,children:[(0,i.jsx)(`strong`,{children:g(n.cases/n.n)}),(0,i.jsx)(`span`,{children:`病例比例`})]}),(0,i.jsxs)(`div`,{className:`case-definition-copy`,children:[(0,i.jsx)(`b`,{children:n.window}),(0,i.jsx)(`p`,{children:n.rule})]})]}),(0,i.jsxs)(`p`,{className:`validation-note`,children:[(0,i.jsx)(`b`,{children:`檢查點：`}),`切換定義時分母維持 278；資訊不足者保留為 NA，並在結果中另列人數。`]})]})}function j(){let[e,t]=(0,r.useState)(4),n=o[e],a=Math.max(...n.map(e=>e.count)),s=n.reduce((e,t)=>e+t.count,0);return(0,i.jsxs)(`div`,{children:[(0,i.jsxs)(`section`,{className:`lab-panel`,children:[(0,i.jsxs)(`div`,{className:`lab-panel-heading`,children:[(0,i.jsxs)(`div`,{children:[(0,i.jsx)(`span`,{className:`lab-kicker`,children:`講師示範`}),(0,i.jsx)(`h3`,{children:`流行曲線分箱`})]}),(0,i.jsxs)(`span`,{className:`denominator-chip`,children:[`柱高合計：`,s,` 例`]})]}),(0,i.jsx)(`div`,{className:`bin-controls`,role:`group`,"aria-label":`分箱寬度`,children:[2,4,6].map(n=>(0,i.jsxs)(`button`,{className:e===n?`selected`:``,onClick:()=>t(n),children:[n,` 小時`]},n))}),(0,i.jsx)(`div`,{className:`epi-chart`,role:`img`,"aria-label":`${e} 小時分箱流行曲線，共 ${s} 例`,children:n.map((e,t)=>(0,i.jsxs)(`div`,{className:`epi-bar-wrap`,children:[(0,i.jsx)(`span`,{className:`epi-value`,children:e.count||``}),(0,i.jsx)(`div`,{className:`epi-bar`,style:{height:`${Math.max(2,e.count/a*100)}%`}}),(n.length<=8||t%2==0)&&(0,i.jsx)(`time`,{children:e.label.replace(` `,`
`)})]},e.label))})]}),(0,i.jsxs)(`div`,{className:`place-evidence`,children:[(0,i.jsxs)(`div`,{children:[(0,i.jsx)(`span`,{children:`Place｜昭華殿`}),(0,i.jsx)(`b`,{children:`24 / 93`}),(0,i.jsx)(`small`,{children:`25.8%`})]}),(0,i.jsxs)(`div`,{children:[(0,i.jsx)(`span`,{children:`Place｜蘅芳苑`}),(0,i.jsx)(`b`,{children:`27 / 86`}),(0,i.jsx)(`small`,{children:`31.4%`})]}),(0,i.jsxs)(`div`,{children:[(0,i.jsx)(`span`,{children:`Place｜承月臺`}),(0,i.jsx)(`b`,{children:`26 / 99`}),(0,i.jsx)(`small`,{children:`26.3%`})]}),(0,i.jsx)(`p`,{children:`三處皆有病例，支持共享暴露假說；場地差異將納入後續分層與調整分析。`})]}),(0,i.jsxs)(`div`,{className:`person-time-place-grid`,children:[(0,i.jsxs)(`section`,{className:`person-summary-card`,children:[(0,i.jsxs)(`div`,{children:[(0,i.jsx)(`span`,{className:`lab-kicker`,children:`PERSON`}),(0,i.jsx)(`h3`,{children:`角色別侵襲率`})]}),(0,i.jsx)(`div`,{className:`role-bars`,children:c.map(e=>(0,i.jsxs)(`div`,{children:[(0,i.jsx)(`span`,{children:e.label}),(0,i.jsx)(`i`,{children:(0,i.jsx)(`b`,{style:{width:`${e.rate/40*100}%`}})}),(0,i.jsxs)(`strong`,{children:[e.cases,`/`,e.n,`・`,e.rate.toFixed(1),`%`]})]},e.label))})]}),(0,i.jsxs)(`section`,{className:`incubation-summary-card`,children:[(0,i.jsxs)(`div`,{children:[(0,i.jsx)(`span`,{className:`lab-kicker`,children:`TIME`}),(0,i.jsx)(`h3`,{children:`餐後潛伏期摘要`})]}),(0,i.jsxs)(`div`,{className:`incubation-metrics`,children:[(0,i.jsxs)(`article`,{children:[(0,i.jsx)(`small`,{children:`中位數`}),(0,i.jsx)(`b`,{children:`10.25 h`})]}),(0,i.jsxs)(`article`,{children:[(0,i.jsx)(`small`,{children:`IQR`}),(0,i.jsx)(`b`,{children:`7.75–14.25 h`})]}),(0,i.jsxs)(`article`,{children:[(0,i.jsx)(`small`,{children:`範圍`}),(0,i.jsx)(`b`,{children:`4–28.75 h`})]}),(0,i.jsxs)(`article`,{children:[(0,i.jsx)(`small`,{children:`手冊主要區間 5–28 h`}),(0,i.jsx)(`b`,{children:`74/77・96.1%`})]})]}),(0,i.jsx)(`p`,{children:`以每人用餐結束時間為起點；摘要和流行曲線共同描述時間型態。`})]})]})]})}function M(){let e=[`凝露羹`,`桂露飲`,`鴨卷`,`金蓮酥`,`玄茶`];return(0,i.jsxs)(`div`,{className:`questionnaire-demo`,children:[(0,i.jsxs)(`div`,{className:`interview-strip`,children:[(0,i.jsx)(`span`,{children:`早期病例訪談`}),(0,i.jsx)(`i`,{children:`＋`}),(0,i.jsx)(`span`,{children:`三場地菜單`}),(0,i.jsx)(`i`,{children:`＋`}),(0,i.jsx)(`span`,{children:`供餐批次`}),(0,i.jsx)(`b`,{children:`→ 宴會專用問卷`})]}),(0,i.jsxs)(`div`,{className:`matrix-wrap`,children:[(0,i.jsx)(`div`,{className:`matrix-labels`,children:e.map(e=>(0,i.jsx)(`span`,{children:e},e))}),(0,i.jsx)(`div`,{className:`matrix`,children:[[1,.375,.2,.25,.11],[.375,1,.1,.24,.02],[.2,.1,1,.27,.01],[.25,.24,.27,1,0],[.11,.02,.01,0,1]].flatMap((t,n)=>t.map((t,r)=>(0,i.jsx)(`i`,{title:`${e[n]} × ${e[r]}: ${t}`,style:{background:`rgba(169,70,50,${Math.abs(t)})`}},`${n}-${r}`)))})]}),(0,i.jsxs)(`p`,{className:`validation-note`,children:[(0,i.jsx)(`b`,{children:`講師判讀：`}),`最終講師版中，凝露羹與桂露飲的成對 Pearson 相關係數為 0.375，顯示足以檢查混雜的部分共食；兩項食品仍須分開詢問，並共同放入後續分層與調整模型。`]})]})}function N(){let[e,t]=(0,r.useState)({a:``,b:``,c:``,d:``}),n=Object.fromEntries(Object.entries(e).map(([e,t])=>[e,Number(t)])),a=(0,r.useMemo)(()=>{let{a:e,b:t,c:r,d:i}=n;if(![e,t,r,i].every(e=>Number.isFinite(e)&&e>=0)||e+t+r+i===0)return null;let[a,o,s,c]=[e,t,r,i].some(e=>e===0)?[e+.5,t+.5,r+.5,i+.5]:[e,t,r,i],l=a*c/(o*s),u=Math.sqrt(1/a+1/o+1/s+1/c);return{n:e+t+r+i,exposed:e/(e+t),unexposed:r/(r+i),or:l,low:Math.exp(Math.log(l)-1.96*u),high:Math.exp(Math.log(l)+1.96*u)}},[n.a,n.b,n.c,n.d]),o=(e,n)=>t(t=>({...t,[e]:n}));return(0,i.jsxs)(`section`,{className:`lab-panel calculator-lab`,children:[(0,i.jsxs)(`div`,{className:`lab-panel-heading`,children:[(0,i.jsxs)(`div`,{children:[(0,i.jsx)(`span`,{className:`lab-kicker`,children:`講師示範工具`}),(0,i.jsx)(`h3`,{children:`2×2 表驗算器`})]}),(0,i.jsx)(`button`,{className:`text-button`,onClick:()=>t({a:``,b:``,c:``,d:``}),children:`清除`})]}),(0,i.jsxs)(`div`,{className:`table-two-by-two`,children:[(0,i.jsx)(`div`,{}),(0,i.jsx)(`b`,{children:`病例`}),(0,i.jsx)(`b`,{children:`非病例`}),(0,i.jsx)(`b`,{children:`暴露`}),[`a`,`b`].map(t=>(0,i.jsxs)(`label`,{children:[t,(0,i.jsx)(`input`,{"aria-label":t,inputMode:`numeric`,value:e[t],onChange:e=>o(t,e.target.value)})]},t)),(0,i.jsx)(`b`,{children:`未暴露`}),[`c`,`d`].map(t=>(0,i.jsxs)(`label`,{children:[t,(0,i.jsx)(`input`,{"aria-label":t,inputMode:`numeric`,value:e[t],onChange:e=>o(t,e.target.value)})]},t))]}),(0,i.jsx)(`div`,{className:`calculator-results`,children:a?(0,i.jsxs)(i.Fragment,{children:[(0,i.jsxs)(`div`,{children:[(0,i.jsx)(`span`,{children:`完整分母`}),(0,i.jsx)(`strong`,{children:a.n})]}),(0,i.jsxs)(`div`,{children:[(0,i.jsx)(`span`,{children:`暴露者侵襲率`}),(0,i.jsx)(`strong`,{children:g(a.exposed)})]}),(0,i.jsxs)(`div`,{children:[(0,i.jsx)(`span`,{children:`未暴露者侵襲率`}),(0,i.jsx)(`strong`,{children:g(a.unexposed)})]}),(0,i.jsxs)(`div`,{children:[(0,i.jsx)(`span`,{children:`OR（95% CI）`}),(0,i.jsxs)(`strong`,{children:[a.or.toFixed(2),`（`,a.low.toFixed(2),`–`,a.high.toFixed(2),`）`]})]})]}):(0,i.jsx)(`p`,{children:`輸入 a、b、c、d，核對 AI 輸出的分母、侵襲率與 OR。`})})]})}function P({name:e,value:t,low:n,high:r}){let a=e=>Math.max(0,Math.min(100,(Math.log(e)-Math.log(.3))/(Math.log(30)-Math.log(.3))*100));return(0,i.jsxs)(`div`,{className:`forest-row`,children:[(0,i.jsx)(`span`,{className:`forest-name`,children:e}),(0,i.jsxs)(`div`,{className:`forest-track`,children:[(0,i.jsx)(`i`,{className:`null-line`,style:{left:`${a(1)}%`}}),(0,i.jsx)(`i`,{className:`ci-line`,style:{left:`${a(n)}%`,width:`${a(r)-a(n)}%`}}),(0,i.jsx)(`i`,{className:`or-dot`,style:{left:`${a(t)}%`}})]}),(0,i.jsx)(`b`,{children:t.toFixed(2)})]})}function F(){return(0,i.jsxs)(`div`,{className:`dual-demo`,children:[(0,i.jsx)(N,{}),(0,i.jsxs)(`section`,{className:`lab-panel`,children:[(0,i.jsx)(`div`,{className:`lab-panel-heading`,children:(0,i.jsxs)(`div`,{children:[(0,i.jsx)(`span`,{className:`lab-kicker`,children:`講師示範`}),(0,i.jsx)(`h3`,{children:`十項食品粗 OR`})]})}),(0,i.jsxs)(`div`,{className:`forest-chart`,children:[(0,i.jsxs)(`div`,{className:`forest-axis`,children:[(0,i.jsx)(`span`,{children:`0.3`}),(0,i.jsx)(`span`,{children:`1`}),(0,i.jsx)(`span`,{children:`3`}),(0,i.jsx)(`span`,{children:`10`}),(0,i.jsx)(`span`,{children:`30`})]}),s.map(e=>(0,i.jsx)(P,{name:e.name,value:e.or,low:e.low,high:e.high},e.name))]}),(0,i.jsxs)(`p`,{className:`validation-note`,children:[(0,i.jsx)(`b`,{children:`講師判讀：`}),`翡翠凝露羹是主要候選，合歡桂露飲也呈粗關聯；下一幕用共食矩陣與調整模型拆分兩者訊號。`]})]})]})}function I(){let[e,t]=(0,r.useState)(`crude`),n=e===`crude`?s.slice(0,2):[{name:`翡翠凝露羹`,or:8.91,low:3.32,high:23.93},{name:`合歡桂露飲`,or:1.59,low:.85,high:2.98}];return(0,i.jsxs)(`section`,{className:`lab-panel`,children:[(0,i.jsxs)(`div`,{className:`lab-panel-heading`,children:[(0,i.jsxs)(`div`,{children:[(0,i.jsx)(`span`,{className:`lab-kicker`,children:`講師示範`}),(0,i.jsx)(`h3`,{children:`分層、粗分析與調整效果`})]}),(0,i.jsx)(`span`,{className:`denominator-chip`,children:`模型 n = 258・病例 73・已收斂`})]}),(0,i.jsxs)(`div`,{className:`stratified-summary`,children:[(0,i.jsxs)(`div`,{className:`stratified-head`,children:[(0,i.jsx)(`b`,{children:`場地`}),(0,i.jsx)(`b`,{children:`n`}),(0,i.jsx)(`b`,{children:`a／b／c／d`}),(0,i.jsx)(`b`,{children:`層內 OR`})]}),l.map(e=>(0,i.jsxs)(`div`,{children:[(0,i.jsx)(`span`,{children:e.label}),(0,i.jsx)(`span`,{children:e.n}),(0,i.jsx)(`code`,{children:e.cells}),(0,i.jsx)(`strong`,{children:e.or})]},e.label))]}),(0,i.jsx)(`p`,{className:`stratified-note`,children:`＊蘅芳苑未暴露病例格為 0，因此原始層內 OR 為 ∞；原始四格仍完整呈現，而 Mantel–Haenszel 合併估計與主要 logistic model 仍可估計。`}),(0,i.jsxs)(`div`,{className:`estimate-path`,children:[(0,i.jsxs)(`span`,{children:[`粗 OR `,(0,i.jsx)(`b`,{children:`10.53`})]}),(0,i.jsx)(`i`,{children:`→`}),(0,i.jsxs)(`span`,{children:[`Mantel–Haenszel OR `,(0,i.jsx)(`b`,{children:`9.62`})]}),(0,i.jsx)(`i`,{children:`→`}),(0,i.jsxs)(`span`,{children:[`Logistic 調整 OR `,(0,i.jsx)(`b`,{children:`8.91`})]})]}),(0,i.jsxs)(`div`,{className:`segmented compact`,children:[(0,i.jsx)(`button`,{className:e===`crude`?`selected`:``,onClick:()=>t(`crude`),children:`粗 OR`}),(0,i.jsx)(`button`,{className:e===`adjusted`?`selected`:``,onClick:()=>t(`adjusted`),children:`調整 OR`})]}),(0,i.jsxs)(`div`,{className:`forest-chart`,children:[(0,i.jsxs)(`div`,{className:`forest-axis`,children:[(0,i.jsx)(`span`,{children:`0.3`}),(0,i.jsx)(`span`,{children:`1`}),(0,i.jsx)(`span`,{children:`3`}),(0,i.jsx)(`span`,{children:`10`}),(0,i.jsx)(`span`,{children:`30`})]}),n.map(e=>(0,i.jsx)(P,{name:e.name,value:e.or,low:e.low,high:e.high},e.name))]}),(0,i.jsxs)(`div`,{className:`comparison-callout`,children:[(0,i.jsxs)(`div`,{children:[(0,i.jsx)(`span`,{children:`凝露羹`}),(0,i.jsx)(`b`,{children:`10.53 → 8.91`}),(0,i.jsx)(`small`,{children:`調整後訊號仍強`})]}),(0,i.jsxs)(`div`,{children:[(0,i.jsx)(`span`,{children:`桂露飲`}),(0,i.jsx)(`b`,{children:`2.78 → 1.59`}),(0,i.jsx)(`small`,{children:`調整後 CI 包含 1`})]})]})]})}function L(){let e=[{id:`complete`,label:`完整案例`,assumption:`只分析暴露已知者`,n:266,or:10.53,ci:`4.07–27.27`},{id:`zero`,label:`未知→未食用`,assumption:`未知暴露全視為 0`,n:278,or:8.44,ci:`3.70–19.26`},{id:`one`,label:`未知→食用`,assumption:`未知暴露全視為 1`,n:278,or:9.92,ci:`3.84–25.63`}],[t,n]=(0,r.useState)(e[0]);return(0,i.jsxs)(`section`,{className:`lab-panel`,children:[(0,i.jsxs)(`div`,{className:`lab-panel-heading`,children:[(0,i.jsxs)(`div`,{children:[(0,i.jsx)(`span`,{className:`lab-kicker`,children:`講師示範`}),(0,i.jsx)(`h3`,{children:`暴露缺失敏感度`})]}),(0,i.jsx)(`span`,{className:`denominator-chip`,children:`固定病例・改變暴露假設`})]}),(0,i.jsx)(`div`,{className:`missing-scenario-list`,children:e.map(e=>(0,i.jsxs)(`button`,{className:t.id===e.id?`selected`:``,onClick:()=>n(e),children:[(0,i.jsx)(`span`,{children:e.label}),(0,i.jsx)(`small`,{children:e.assumption})]},e.id))}),(0,i.jsxs)(`div`,{className:`missing-result`,children:[(0,i.jsxs)(`div`,{children:[(0,i.jsx)(`span`,{children:`分析分母`}),(0,i.jsx)(`strong`,{children:t.n})]}),(0,i.jsxs)(`div`,{children:[(0,i.jsx)(`span`,{children:`OR`}),(0,i.jsx)(`strong`,{children:t.or.toFixed(2)})]}),(0,i.jsxs)(`div`,{children:[(0,i.jsx)(`span`,{children:`95% CI`}),(0,i.jsx)(`strong`,{children:t.ci})]})]}),(0,i.jsxs)(`p`,{className:`validation-note`,children:[(0,i.jsx)(`b`,{children:`講師判讀：`}),`三種暴露假設下方向一致，支持結果的缺失值穩健性；回覆模式與調查設計將承接偏差評估。`]})]})}function R(){let[e,t]=(0,r.useState)(2);return(0,i.jsxs)(`div`,{className:`evidence-demo`,children:[(0,i.jsxs)(`div`,{className:`release-controls light-controls`,children:[(0,i.jsxs)(`button`,{className:e>=1?`open`:``,onClick:()=>t(1),children:[(0,i.jsx)(`b`,{children:`1`}),(0,i.jsx)(`span`,{children:`名冊與暴露`})]}),(0,i.jsxs)(`button`,{className:e>=2?`open`:``,onClick:()=>t(2),children:[(0,i.jsx)(`b`,{children:`2`}),(0,i.jsx)(`span`,{children:`人體檢驗`})]}),(0,i.jsxs)(`button`,{className:e>=3?`open`:``,onClick:()=>t(3),children:[(0,i.jsx)(`b`,{children:`3`}),(0,i.jsx)(`span`,{children:`食品與環境`})]})]}),e>=2&&(0,i.jsxs)(`div`,{className:`lab-result-strip`,children:[(0,i.jsxs)(`div`,{children:[(0,i.jsx)(`span`,{children:`YL-NAAT`}),(0,i.jsx)(`b`,{children:`27 / 28`}),(0,i.jsx)(`small`,{children:`陽性檢驗／檢驗數`})]}),(0,i.jsxs)(`div`,{children:[(0,i.jsx)(`span`,{children:`YL-Culture`}),(0,i.jsx)(`b`,{children:`16 / 20`}),(0,i.jsx)(`small`,{children:`陽性檢驗／檢驗數`})]}),(0,i.jsxs)(`div`,{children:[(0,i.jsx)(`span`,{children:`食品培養`}),(0,i.jsx)(`b`,{children:`3 / 3 場地`}),(0,i.jsx)(`small`,{children:`凝露羹皆為 YL-4`})]})]}),(0,i.jsx)(`div`,{className:`evidence-table`,children:[[`人體檢體`,`多名臨床病例 YL-NAAT detected`,`支持群聚病因`],[`延遲採檢`,`一名病例 YL-NAAT not_detected`,`保留病例分類並標記採檢時機`],[`食品檢體`,`翡翠凝露羹檢出相符 YL-4`,`支持食品媒介`],[`器皿檢體`,`桂露飲器皿檢出 P. innocua`,`歸類為背景環境發現`]].filter((t,n)=>e===1?!1:e===2?n<2:!0).map(([e,t,n])=>(0,i.jsxs)(`article`,{children:[(0,i.jsx)(`span`,{children:e}),(0,i.jsx)(`b`,{children:t}),(0,i.jsx)(`p`,{children:n})]},e))}),(0,i.jsxs)(`div`,{className:`evidence-levels`,children:[(0,i.jsxs)(`div`,{children:[(0,i.jsx)(`small`,{children:`① 檢驗結果`}),(0,i.jsx)(`b`,{children:`detected／not detected`})]}),(0,i.jsxs)(`div`,{children:[(0,i.jsx)(`small`,{children:`② 個案分類`}),(0,i.jsx)(`b`,{children:`probable／confirmed`})]}),(0,i.jsxs)(`div`,{children:[(0,i.jsx)(`small`,{children:`③ 群聚病因`}),(0,i.jsx)(`b`,{children:`是否確認金玉良炎`})]}),(0,i.jsxs)(`div`,{children:[(0,i.jsx)(`small`,{children:`④ 食品媒介`}),(0,i.jsx)(`b`,{children:`是否確認原因食品`})]})]})]})}function z(){let e=[`啟動調查`,`建立病例`,`時間與地點`,`形成問卷`,`食品粗分析`,`調整模型`,`缺失挑戰`,`證據整合`],[t,n]=(0,r.useState)(0);return(0,r.useEffect)(()=>{let t=e.map((e,t)=>document.getElementById(`chapter-${t}`)).filter(Boolean),r=new IntersectionObserver(e=>{let t=e.filter(e=>e.isIntersecting).sort((e,t)=>t.intersectionRatio-e.intersectionRatio)[0];t&&n(Number(t.target.id.replace(`chapter-`,``)))},{rootMargin:`-24% 0px -58% 0px`,threshold:[0,.15,.35]});return t.forEach(e=>r.observe(e)),()=>r.disconnect()},[]),(0,i.jsxs)(`section`,{className:`investigation-section`,id:`investigation`,"aria-label":`A0 至 A7 群聚調查分析實作`,children:[(0,i.jsxs)(`div`,{className:`chapter-navigation`,children:[(0,i.jsxs)(`div`,{className:`current-stage`,"aria-live":`polite`,children:[(0,i.jsx)(`span`,{children:`目前案卷`}),(0,i.jsxs)(`strong`,{children:[`A`,t,`／A7`]}),(0,i.jsx)(`b`,{children:e[t]})]}),(0,i.jsx)(`nav`,{className:`chapter-rail`,"aria-label":`調查章節`,children:e.map((e,r)=>(0,i.jsxs)(`a`,{className:t===r?`active`:``,"aria-current":t===r?`step`:void 0,onClick:()=>n(r),href:`#chapter-${r}`,children:[(0,i.jsxs)(`b`,{children:[`A`,r]}),(0,i.jsx)(`span`,{children:e})]},e))})]}),(0,i.jsx)(O,{number:`0`,time:`翌日 06:40・七份急報在案`,title:`用手冊門檻決定是否啟動調查`,story:`金玉良炎是承熙國既有通報疾病。調查小組目前持有七份疑似通報與疾病工作手冊，任務是判定是否投入群聚調查資源。`,question:`目前通報是否達到《金玉良炎防治工作手冊》的群聚啟動門檻？`,available:[u.reports,u.manual],direction:`把手冊的臨床條件與宴會關聯轉成逐筆判定欄位，再將符合人數與群聚門檻比較。`,brief:{chart:`通報時間條＋啟動條件判定表`,table:`initial_reports.csv`,denominator:`目前收到的 7 份通報`,can:`判定每筆通報是否符合疑似條件，並決定是否啟動群聚調查。`,scope:`啟動後索取完整宴會名冊與訪談資料，建立事件分母與病例名單。`,output:`逐筆條件判定表、符合人數、手冊門檻與 outbreak_triggered 布林值。`,visual:`米白底、朱砂紅標記符合通報、墨綠標記啟動；標題寫明 48 小時門檻，表格保留逐筆 ID。`},prompts:f.trigger,code:h.trigger,demo:(0,i.jsx)(k,{}),next:{label:`建立病例`,body:`門檻判定完成後，調查小組索取完整名冊並展開第一輪訪談，建立事件分母與病例分類。`,href:`#chapter-1`}}),(0,i.jsx)(O,{number:`1`,time:`翌日 08:00・第一批固定資料送達`,title:`先核對資料與分母，再依手冊建立病例`,story:`主辦單位交出 312 人名冊、3,120 列食品暴露、180 列菜單與 67 列資料字典。學員先確認每張表的分析單位、主鍵與列數，再處理完整回覆、資訊不足與宴前發病，建立可稽核的病例分類。`,question:`固定資料是否完整連接？312 名參與者中，誰符合主要病例定義，哪些人仍無法分類？`,available:[u.person,u.food,u.menu,u.dictionary,u.manual],direction:`先盤點四張 Release 1 資料表與分析單位，再固定臨床門檻和發病時間窗，把每名參與者分類並保留 unknown。`,brief:{chart:`資料盤點表＋病例分類流程圖＋定義敏感度長條圖`,table:`person_line_list.csv、food_exposure.csv、menu_by_site.csv、data_dictionary.csv`,denominator:`名冊 312 人；病例主要分析為可分類者 278 人，另列 34 名 unknown`,can:`確認固定資料列數與關聯，估計主要病例數，並觀察病例定義參數改變帶來的病例數差異。`,scope:`完成病例名單後，以 symptom_onset_datetime、role_group 與 site_id 描述人、時、地分布。`,output:`資料盤點、各病例分類人數、unknown 人數，以及主要 77／278、敏感 92／278、嚴格 63／278 的結果。`,visual:`資料盤點先列每表列數；三種病例定義使用同一座標軸，標題同時標示病例數、可分類分母與時間窗。`},prompts:f.case,code:h.case,demo:(0,i.jsx)(A,{}),next:{label:`Person／Time／Place`,body:`資料與病例名單固定後，下一卷把 77 名主要病例放回角色、時間與三處宮苑。`,href:`#chapter-2`}}),(0,i.jsx)(O,{number:`2`,time:`翌日 08:40・77 名主要病例定位完成`,title:`以 Person／Time／Place 描述群聚`,story:`主要病例名單已固定。太醫院需要同時理解哪些角色發病、何時形成波峰、三處宮苑的疾病負擔，以及餐後潛伏期是否符合手冊。`,question:`人、時、地分布是否與單次共同來源暴露相容？`,available:[u.person,u.caseOutput],direction:`用同一批主要病例繪製可切換分箱的流行曲線，並以各群組可分類者計算角色、場地、梯次侵襲率，再摘要餐後潛伏期。`,brief:{chart:`角色別侵襲率＋可切換 1／2／4／6 小時分箱的 Plotly 流行曲線＋潛伏期摘要＋場地別侵襲率`,table:`person_line_list.csv`,denominator:`流行曲線與潛伏期採有發病時間的主要病例；分組侵襲率採各組病例狀態可分類者`,can:`描述病例在人、時、地的分布，檢查時間集中程度與手冊潛伏期相容性，評估共同來源假說。`,scope:`共同來源型態成立後，以早期訪談、菜單與供餐流程建立正式暴露問卷。`,output:`角色／場地／梯次病例數與分母、單張可切換分箱的互動流行曲線、發病時間缺失數、潛伏期中位數／IQR／範圍與手冊主要區間比例；圖表工具列下載 SVG。`,visual:`Person 使用墨綠水平條；Time 使用朱砂紅直方柱；Place 使用三欄數字卡；每項結果標示病例數與可分類分母。`},prompts:f.time,code:h.time,demo:(0,i.jsx)(j,{}),advanced:d[2],next:{label:`形成問卷`,body:`發病時間集中且三場地皆有病例，調查小組開始整理早期訪談與供餐紀錄。`,href:`#chapter-3`}}),(0,i.jsx)(O,{number:`3`,time:`翌日 09:05・早期訪談、菜單與正式問卷會合`,title:`由早期線索形成問卷，再檢查食品共食`,story:`八名早期病例的開放式訪談與三場地菜單先形成候選暴露；正式問卷回收後，再用 3,120 列食品暴露資料檢查十項食品的共食結構。`,question:`正式問卷應詢問哪些暴露？候選食品是否存在足以造成混雜的共食關係？`,available:[u.early,u.menu,u.food,u.dictionary],direction:`整理共同與場地限定食品，固定 yes／no／unknown 編碼，再以正式問卷建立人×食品矩陣；最終講師版中凝露羹與桂露飲的相關係數為 0.375。`,brief:{chart:`十項食品共食 heatmap＋問卷欄位藍圖`,table:`early_interviews.csv、menu_by_site.csv、food_exposure.csv`,denominator:`8 名早期病例只用於形成假說；共食係數採每一對食品皆有回答者`,can:`形成標準問卷，並辨識需在後續模型共同納入的共食結構；相關不直接確認食品媒介。`,scope:`每項食品使用自己的已知暴露分母建立 2×2 表，再以分層與模型拆分候選訊號。`,output:`候選暴露、問卷 schema、yes／no／unknown 規則、十項食品相關矩陣，以及凝露羹×桂露飲 r=0.375。`,visual:`heatmap 使用發散色階、格內標成對 Pearson 相關係數；問卷藍圖標示檔名、欄位與缺失規則。`},prompts:f.hypothesis,code:h.hypothesis,demo:(0,i.jsx)(M,{}),next:{label:`食品粗分析`,body:`共食結構已記錄；下一卷讓每項食品以自己的已知暴露分母進入粗分析。`,href:`#chapter-4`}}),(0,i.jsx)(O,{number:`4`,time:`翌日 10:00・正式問卷陸續回收`,title:`以每項食品自己的分母建立 2×2 表`,story:`回覆者可能跳過個別題目，也可能記錄 unknown。每道食品因此擁有自己的完整案例分母。`,question:`哪些食品在粗分析中和發病呈現關聯？`,available:[u.food,u.person,u.dictionary],direction:`對十項食品重複同一套 2×2 分析，逐項核對四格、完整分母、侵襲率、OR、CI 與 Fisher exact test。`,brief:{chart:`食品別 2×2 表＋log 尺度 forest plot`,table:`food_exposure.csv、person_line_list.csv`,denominator:`每項食品暴露與病例狀態皆有紀錄者；例如凝露羹 n=266`,can:`比較食用與未食用者的發病情形；凝露羹 70／179 對 5／87，粗 OR 10.53（95% CI 4.07–27.27）。`,scope:`將凝露羹、桂露飲與場地共同納入分層及模型，比較獨立訊號。`,output:`每項食品的 a／b／c／d、n_complete、兩組侵襲率、OR、95% CI、Fisher p 與 forest plot。`,visual:`forest plot 使用 log x 軸，OR=1 畫垂直參考線；朱砂紅標主要候選、墨綠標其他食品；右側列 OR 與 CI。`},prompts:f.crude,code:h.crude,demo:(0,i.jsx)(F,{}),advanced:d[4],next:{label:`調整模型`,body:`凝露羹粗 OR 最高；它與桂露飲的相關係數為 0.375，下一卷以分層和模型拆分兩者訊號。`,href:`#chapter-5`}}),(0,i.jsx)(O,{number:`5`,time:`翌日 10:40・粗分析呈交會議`,title:`先分層，再用調整模型拆分共食訊號`,story:`兩項候選存在部分共食（r=0.375）。調查小組先在場地層內比較，再以模型共同納入兩項食品與場地，觀察候選暴露在其他條件相同時保留的訊號。`,question:`場地分層與控制共食後，哪一個效果仍然保留？`,available:[u.person,u.food,u.crudeOutput],direction:`先建立場地分層 2×2 表與 Mantel–Haenszel 合併估計，再以 258 個完整案例（73 例）建立 logistic model，核對參考組與收斂，最後並列粗、分層與調整效果。`,brief:{chart:`場地分層 2×2 表＋Mantel–Haenszel OR＋粗／調整 OR forest plot`,table:`person_line_list.csv、food_exposure.csv 合併表`,denominator:`分層分析依各場地完整暴露；logistic regression 完整案例 n=258、病例 73`,can:`比較粗 OR 10.53、MH OR 9.62 與凝露羹調整 OR 8.91（95% CI 3.32–23.93），同時確認桂露飲調整後 CI 包含 1。`,scope:`主要訊號確認後，設定極端缺失假設，評估暴露缺失對效果方向的影響。`,output:`各場地原始四格與層內 OR、MH OR／95% CI、模型 n=258、收斂檢查、調整 OR／95% CI 與對照圖。`,visual:`先用宮苑分層表保留原始四格，再以同一 log x 軸比較粗與調整效果；圖下注明 n=258、病例 73 與參考組。`},prompts:f.adjusted,code:h.adjusted,demo:(0,i.jsx)(I,{}),advanced:d[5],next:{label:`缺失挑戰`,body:`調整後翡翠凝露羹保留強訊號；下一卷檢查問卷缺失假設是否改變方向。`,href:`#chapter-6`}}),(0,i.jsx)(O,{number:`6`,time:`翌日 11:15・調查會議提出質疑`,title:`以三個缺失情境檢查結果穩健性`,story:`部分食品題目記錄為 unknown。調查小組設定完整案例、未知視為未食用、未知視為食用三個透明假設。`,question:`在不同缺失假設下，主要候選食品的效果方向是否一致？`,available:[u.food,u.person,u.adjustedOutput],direction:`三個情境共用同一份病例分類，只改變未知暴露的編碼，再比較分母、OR 與 95% CI。`,brief:{chart:`三情境 OR 與 95% CI 對照圖`,table:`food_exposure.csv、person_line_list.csv`,denominator:`完整案例採已知暴露者；兩個極端情境採病例狀態已知者`,can:`觀察效果方向與估計幅度對極端缺失假設的敏感程度。`,scope:`以問卷回覆模式與調查設計描述剩餘偏差，再整合人體、食品與環境證據。`,output:`三情境假設表、分析分母、原始四格、OR、95% CI 與方向一致性摘要。`,visual:`三列點線圖共用 log x 軸；完整案例用朱砂紅，兩個極端情境用金色與墨綠；每列直接標示 n。`},prompts:f.missing,code:h.missing,demo:(0,i.jsx)(L,{}),next:{label:`證據整合`,body:`觀察性證據指向主要候選食品；最後一卷整合人體檢驗、食品檢體與環境紀錄。`,href:`#chapter-7`}}),(0,i.jsx)(O,{number:`7`,time:`翌日午後・檢驗與環境案卷送達`,title:`分四層整合檢驗與環境證據`,story:`人體檢體先送達，食品與環境結果隨後補上。每筆 detected、not_detected 與環境發現依手冊進入相應證據層級。`,question:`哪些證據確認疾病身分、支持食品媒介，或屬於背景環境發現？`,available:[u.lab,u.environment,u.manual,u.adjustedOutput],direction:`保留原始檢驗值與採檢時機：人體 YL-NAAT 27／28 陽性、YL-Culture 16／20 陽性；三處宮苑的凝露羹食品培養皆檢出相符 YL-4，再分層判定結果。`,brief:{chart:`四層證據表＋人體／食品／環境三角驗證圖`,table:`lab_results.csv、environment_log.csv 與前階段分析表`,denominator:`YL-NAAT 28 次、YL-Culture 20 次；三場地食品樣本與各場地暴露分母分開報告`,can:`判定個案與群聚病因，並評估凝露羹媒介證據和統計、分型、候膳溫度與時間是否一致；P. innocua 僅列背景發現。`,scope:`將固定分析結果先輸出 publication PNG／SVG、Word 與列印 PDF，最後再建立互動 HTML 延伸。`,output:`分時段檢驗陽性數／檢驗數、採檢時機、四層證據表、三場地凝露羹 YL-4 結果與環境三角驗證。`,visual:`以人體、食品、環境三欄排版；detected 用朱砂紅，supporting 用墨綠，背景發現用灰金；每欄直接標示樣本分母。`},prompts:f.evidence,code:h.evidence,demo:(0,i.jsx)(R,{}),advanced:d[7],next:{label:`成果報告`,body:`先交付 publication 圖、Word 與列印 PDF，再把 Plotly 與互動 HTML 保留為延伸版本。`,href:`#report`}}),(0,i.jsxs)(`div`,{className:`release-drawer`,children:[(0,i.jsxs)(`div`,{children:[(0,i.jsx)(`span`,{children:`固定資料與兩份標準教材`}),(0,i.jsx)(`h3`,{children:`資料分批釋出；學生版與講師版使用同一套分析定義`})]}),(0,i.jsxs)(`div`,{className:`release-downloads`,children:[(0,i.jsx)(`a`,{href:`./downloads/jinyuliang_student_release_1.zip`,download:!0,children:`第一批・名冊與問卷 ↓`}),(0,i.jsx)(`a`,{href:`./downloads/jinyuliang_student_release_2.zip`,download:!0,children:`第二批・人體檢驗 ↓`}),(0,i.jsx)(`a`,{href:`./downloads/jinyuliang_student_release_3.zip`,download:!0,children:`第三批・食品與環境 ↓`}),(0,i.jsx)(`a`,{href:`./downloads/jinyuliang_student_plotly_prompt.ipynb`,download:!0,children:`學生 Prompt 版 ↓`}),(0,i.jsx)(`a`,{href:`./downloads/jinyuliang_instructor_publication_workbench.ipynb`,download:!0,children:`講師 publication 版 ↓`})]})]})]})}var B=[{id:`top`,code:`S0`,title:`封面與任務`},{id:`incident`,code:`S1`,title:`事件通報時間線`},{id:`investigation`,code:`A0–A7`,title:`分析實作`},{id:`report`,code:`S3`,title:`成果報告`},{id:`conclusion`,code:`S4`,title:`結案與後續追蹤`}];function V(){let[e,t]=(0,r.useState)(`top`);return(0,r.useEffect)(()=>{let e=B.map(({id:e})=>document.getElementById(e)).filter(Boolean),n=new IntersectionObserver(e=>{let n=e.filter(e=>e.isIntersecting).sort((e,t)=>t.intersectionRatio-e.intersectionRatio)[0];n&&t(n.target.id)},{rootMargin:`-26% 0px -58% 0px`,threshold:[0,.1,.3]});return e.forEach(e=>n.observe(e)),()=>n.disconnect()},[]),(0,i.jsx)(`aside`,{className:`floating-section-nav`,"aria-label":`主章快速跳轉`,children:B.map(t=>(0,i.jsxs)(`a`,{href:`#${t.id}`,className:e===t.id?`active`:``,"aria-current":e===t.id?`location`:void 0,"aria-label":`${t.code} ${t.title}`,children:[(0,i.jsx)(`i`,{"aria-hidden":`true`}),(0,i.jsxs)(`span`,{children:[t.code,` · `,t.title]})]},t.id))})}var H=[{time:`宴日 12:00`,title:`千秋宴在三處宮苑開席`,body:`昭華殿、蘅芳苑與承月臺共用部分菜單，也各有不同供餐批次。這個時間點成為後續計算潛伏期的共同參考。`,tag:`可能暴露`},{time:`翌日 05:40`,title:`金玉良的急報送進疫報司`,body:`她提供本案第一個通報訊號；調查小組將用完整發病時間與訪談資料重建病例順序。`,tag:`第一份通報`},{time:`翌日 06:25`,title:`短時間內累積七份相似通報`,body:`七人有嘔吐或腹瀉，其中五人提到曾參加千秋宴。這批零散敘述將用於群聚啟動判定。`,tag:`異常訊號`},{time:`翌日 06:40`,title:`調查小組翻開既有疾病手冊`,body:`金玉良炎是承熙國已知疾病，手冊提供通報條件、採檢時機、病例定義與群聚啟動門檻；調查資料用來判定本次事件。`,tag:`依規判定`},{time:`翌日 07:00`,title:`達到疑似群聚門檻，調查正式啟動`,body:`事件登錄為疑似金玉良炎群聚。團隊立即保留檢體與剩餘食品，同時向主辦單位索取名冊、菜單與供餐紀錄。`,tag:`啟動調查`},{time:`翌日 08:00 起`,title:`調查逐步建立可分析資料`,body:`名冊形成分母，主動訪談形成 line list，早期訪談與菜單形成正式問卷；檢驗與環境調查則在另一條線上同步進行。`,tag:`資料生成`}];function U(){return(0,i.jsxs)(`main`,{children:[(0,i.jsx)(V,{}),(0,i.jsxs)(`header`,{className:`site-header`,children:[(0,i.jsxs)(`a`,{className:`brand`,href:`#top`,"aria-label":`回到頁首`,children:[(0,i.jsx)(`span`,{className:`brand-seal`,"aria-hidden":`true`,children:`金`}),(0,i.jsxs)(`span`,{children:[(0,i.jsx)(`strong`,{children:`金玉良炎`}),(0,i.jsx)(`small`,{children:`AI 公衛資料分析工作坊`})]})]}),(0,i.jsxs)(`nav`,{"aria-label":`主要導覽`,children:[(0,i.jsx)(`a`,{href:`#incident`,children:`事件通報`}),(0,i.jsx)(`a`,{href:`#investigation`,children:`A0–A7 分析`}),(0,i.jsx)(`a`,{href:`#report`,children:`成果報告`})]})]}),(0,i.jsxs)(`section`,{className:`hero story-hero`,id:`top`,children:[(0,i.jsxs)(`div`,{className:`palace-rule`,"aria-hidden":`true`,children:[(0,i.jsx)(`span`,{}),(0,i.jsx)(`i`,{}),(0,i.jsx)(`span`,{})]}),(0,i.jsxs)(`div`,{className:`hero-copy`,children:[(0,i.jsx)(`div`,{className:`section-code hero-section-code`,children:`S0 · 封面與任務`}),(0,i.jsxs)(`p`,{className:`eyebrow`,children:[(0,i.jsx)(`span`,{}),` 承熙十七年・千秋宴翌晨`]}),(0,i.jsx)(`div`,{className:`status-ribbon`,children:`目前階段　疑似群聚啟動判定・等待多源證據`}),(0,i.jsxs)(`h1`,{children:[`七封急報，`,(0,i.jsx)(`br`,{}),`開啟一場`,(0,i.jsx)(`span`,{children:`群聚調查`}),`。`]}),(0,i.jsx)(`p`,{className:`hero-lead`,children:`金玉良炎早已載入承熙國的疫防醫典，得名於早年第一位留下疾病紀錄的金玉良。 如今千秋宴後出現相似通報，你帶領一支現代團隊穿越而來，依既有手冊判斷是否啟動群聚調查。`}),(0,i.jsxs)(`blockquote`,{className:`opening-dispatch`,children:[(0,i.jsx)(`b`,{children:`你的任務`}),(0,i.jsx)(`p`,{children:`依疾病手冊判定啟動條件，逐步建立名冊、病例、暴露與檢驗證據，再請 Gemini 把每項分析規格寫成可解釋、可檢查的 Python。`})]}),(0,i.jsx)(`div`,{className:`hero-actions`,children:(0,i.jsx)(`a`,{className:`button primary`,href:`#incident`,children:`進入事件通報階段`})}),(0,i.jsx)(`p`,{className:`fiction-note`,children:`疾病、病原、檢驗、人物、國家、場所與事件均為本課程原創的虛構合成設定。`})]}),(0,i.jsxs)(`aside`,{className:`case-file urgent-file`,"aria-label":`太醫院第一批通報摘要`,children:[(0,i.jsxs)(`div`,{className:`case-file-top`,children:[(0,i.jsx)(`span`,{children:`太醫院・疫報司`}),(0,i.jsx)(`span`,{children:`辰字第七號`})]}),(0,i.jsx)(`div`,{className:`case-mark`,"aria-hidden":`true`,children:`疑`}),(0,i.jsx)(`p`,{className:`dispatch-copy`,children:`「三宮苑赴宴者陸續嘔吐、腹瀉，五人自述同赴千秋宴。請依金玉良炎通報條件逐筆查驗，判定是否啟動群聚調查。」`}),(0,i.jsxs)(`dl`,{children:[(0,i.jsxs)(`div`,{children:[(0,i.jsx)(`dt`,{children:`初始通報`}),(0,i.jsx)(`dd`,{children:`7 份`})]}),(0,i.jsxs)(`div`,{children:[(0,i.jsx)(`dt`,{children:`提及千秋宴`}),(0,i.jsx)(`dd`,{children:`5 人`})]}),(0,i.jsxs)(`div`,{children:[(0,i.jsx)(`dt`,{children:`下一份資料`}),(0,i.jsx)(`dd`,{children:`宴會完整名冊`})]})]}),(0,i.jsx)(`div`,{className:`case-file-foot`,children:`通報門檻啟動調查・多源證據確認病因`})]})]}),(0,i.jsxs)(`section`,{className:`incident-section`,id:`incident`,children:[(0,i.jsxs)(`div`,{className:`section-heading narrative-heading`,children:[(0,i.jsx)(`div`,{className:`section-code`,children:`S1 · 事件通報時間線`}),(0,i.jsxs)(`p`,{className:`eyebrow`,children:[(0,i.jsx)(`span`,{}),` 宮中疫報紀事`]}),(0,i.jsx)(`h2`,{children:`先有異常訊號，才有調查資料`}),(0,i.jsx)(`p`,{children:`這條時間線呈現資料如何隨調查行動逐步形成，學員會依序取得每一階段真正需要的案卷。`})]}),(0,i.jsx)(`div`,{className:`incident-timeline`,children:H.map((e,t)=>(0,i.jsxs)(`article`,{children:[(0,i.jsx)(`div`,{className:`timeline-marker`,children:(0,i.jsx)(`span`,{children:String(t+1).padStart(2,`0`)})}),(0,i.jsxs)(`div`,{className:`timeline-time`,children:[(0,i.jsx)(`time`,{children:e.time}),(0,i.jsx)(`small`,{children:e.tag})]}),(0,i.jsxs)(`div`,{className:`timeline-copy`,children:[(0,i.jsx)(`h3`,{children:e.title}),(0,i.jsx)(`p`,{children:e.body})]})]},e.time))}),(0,i.jsxs)(`div`,{className:`timeline-question`,children:[(0,i.jsx)(`span`,{children:`第一個決策點`}),(0,i.jsx)(`p`,{children:`七份通報中只有五人提到千秋宴。這足以啟動金玉良炎群聚調查嗎？`}),(0,i.jsx)(`a`,{href:`#investigation`,children:`進入 A0・群聚啟動判定 →`})]})]}),(0,i.jsx)(z,{}),(0,i.jsx)(`section`,{className:`report-section`,id:`report`,children:(0,i.jsxs)(`div`,{className:`report-scroll`,children:[(0,i.jsxs)(`div`,{className:`report-copy`,children:[(0,i.jsx)(`div`,{className:`section-code`,children:`S3 · 成果報告`}),(0,i.jsxs)(`p`,{className:`eyebrow`,children:[(0,i.jsx)(`span`,{}),` 終章・御前奏報`]}),(0,i.jsx)(`h2`,{children:`先完成可交付的正式報告，再保留互動版本作延伸`}),(0,i.jsx)(`p`,{children:`講師版工作台把同一套分析結果製成 publication PNG／SVG、可編輯 Word 與列印版 PDF；學生 Prompt 版則保留空白程式格與人工驗收點。Plotly hover 與互動 HTML 放在最後，作為探索與展示的延伸。`}),(0,i.jsxs)(`ol`,{children:[(0,i.jsxs)(`li`,{children:[(0,i.jsx)(`b`,{children:`固定分析結果`}),(0,i.jsx)(`span`,{children:`保留病例定義、分析分母、原始計數、估計值與限制`})]}),(0,i.jsxs)(`li`,{children:[(0,i.jsx)(`b`,{children:`輸出 publication 圖`}),(0,i.jsx)(`span`,{children:`每張正式圖同時產生 PNG 與可編輯 SVG`})]}),(0,i.jsxs)(`li`,{children:[(0,i.jsx)(`b`,{children:`組裝正式文件`}),(0,i.jsx)(`span`,{children:`生成可編輯 Word 與適合列印、交付的 PDF`})]}),(0,i.jsxs)(`li`,{children:[(0,i.jsx)(`b`,{children:`延伸互動版本`}),(0,i.jsx)(`span`,{children:`最後再輸出含 Plotly hover 的離線 HTML，供探索與展示`})]})]}),(0,i.jsxs)(`div`,{className:`report-actions`,children:[(0,i.jsx)(`a`,{className:`button primary`,href:`./downloads/jinyuliang_student_plotly_prompt.ipynb`,download:!0,children:`下載學生 Prompt 版`}),(0,i.jsx)(`a`,{className:`button ghost`,href:`./downloads/jinyuliang_instructor_publication_workbench.ipynb`,download:!0,children:`下載講師 publication 版`}),(0,i.jsx)(`span`,{children:`兩份教材使用同一批固定資料與分析定義：學生版練習向 AI 下規格並驗收；講師版提供完整程式、正式圖表與 Word／PDF／HTML 匯出。`})]})]}),(0,i.jsxs)(`aside`,{className:`report-preview`,"aria-label":`調查報告章節示意`,children:[(0,i.jsxs)(`div`,{className:`report-preview-head`,children:[(0,i.jsx)(`span`,{children:`御醫署群聚調查奏報`}),(0,i.jsx)(`b`,{children:`完全虛構案例`})]}),(0,i.jsx)(`h3`,{children:`千秋宴疑似金玉良炎群聚`}),(0,i.jsx)(`p`,{children:`事件摘要、調查時間線、病例定義、Person／Time／Place、食品分析、調整模型、檢驗與環境證據、限制及結論。`}),(0,i.jsxs)(`div`,{className:`mini-report-chart`,children:[(0,i.jsx)(`i`,{}),(0,i.jsx)(`i`,{}),(0,i.jsx)(`i`,{}),(0,i.jsx)(`i`,{}),(0,i.jsx)(`i`,{}),(0,i.jsx)(`i`,{}),(0,i.jsx)(`i`,{})]}),(0,i.jsxs)(`div`,{className:`mini-report-lines`,children:[(0,i.jsx)(`span`,{}),(0,i.jsx)(`span`,{}),(0,i.jsx)(`span`,{}),(0,i.jsx)(`span`,{})]}),(0,i.jsx)(`small`,{children:`主要交付：publication PNG／SVG、可編輯 Word、列印版 PDF。延伸交付：Plotly 互動 HTML。`})]})]})}),(0,i.jsxs)(`section`,{className:`release-section conclusion-section`,id:`conclusion`,children:[(0,i.jsxs)(`div`,{className:`section-heading`,children:[(0,i.jsx)(`div`,{className:`section-code`,children:`S4 · 結案與後續追蹤`}),(0,i.jsxs)(`p`,{className:`eyebrow`,children:[(0,i.jsx)(`span`,{}),` 結案原則`]}),(0,i.jsx)(`h2`,{children:`最後交付是一條可稽核的證據鏈`}),(0,i.jsx)(`p`,{children:`每個數字都能回到資料表、分母與程式輸出；每段結論也標示適用範圍與下一步證據需求。`})]}),(0,i.jsxs)(`div`,{className:`release-grid`,children:[(0,i.jsxs)(`article`,{className:`release-card active`,children:[(0,i.jsx)(`div`,{className:`release-label`,children:`第一層`}),(0,i.jsx)(`h3`,{children:`確認群聚`}),(0,i.jsx)(`p`,{children:`說清楚通報門檻、事件分母、病例定義、病例數與時間地點型態。`}),(0,i.jsx)(`span`,{className:`lock`,children:`確認發生什麼`})]}),(0,i.jsxs)(`article`,{className:`release-card active`,children:[(0,i.jsx)(`div`,{className:`release-label`,children:`第二層`}),(0,i.jsx)(`h3`,{children:`比較病因假說`}),(0,i.jsx)(`p`,{children:`整合暴露率、粗與調整效果、缺失敏感度及食品共現。`}),(0,i.jsx)(`span`,{className:`lock`,children:`比較哪個解釋較合理`})]}),(0,i.jsxs)(`article`,{className:`release-card active`,children:[(0,i.jsx)(`div`,{className:`release-label`,children:`第三層`}),(0,i.jsx)(`h3`,{children:`分開確認層級`}),(0,i.jsx)(`p`,{children:`檢驗結果、個案分類、群聚病因與食品媒介分層判定。`}),(0,i.jsx)(`span`,{className:`lock`,children:`讓每項證據停在正確層級`})]})]}),(0,i.jsxs)(`section`,{className:`future-outlook`,children:[(0,i.jsxs)(`header`,{children:[(0,i.jsx)(`span`,{children:`後續追蹤`}),(0,i.jsx)(`h3`,{children:`另開新案例時，再加入三種方法`}),(0,i.jsx)(`p`,{children:`這些方法各自回答不同研究設計的問題；主案例的單日封閉群聚缺少它們所需的追蹤結構或比較母體。`})]}),(0,i.jsxs)(`div`,{children:[(0,i.jsxs)(`article`,{children:[(0,i.jsx)(`small`,{children:`長期個人追蹤`}),(0,i.jsx)(`h4`,{children:`Kaplan–Meier 與 Cox proportional hazards model`}),(0,i.jsx)(`p`,{children:`適用於每人追蹤長度不同、具有事件時間與設限資料的研究，可比較發病或存活速度並估計 hazard ratio。`})]}),(0,i.jsxs)(`article`,{children:[(0,i.jsx)(`small`,{children:`跨人口率比較`}),(0,i.jsx)(`h4`,{children:`直接或間接年齡標準化`}),(0,i.jsx)(`p`,{children:`適用於比較不同國家、年代或地區的率，且各群體年齡結構不同；需要年齡別事件數、人口時間與標準人口。`})]}),(0,i.jsxs)(`article`,{children:[(0,i.jsx)(`small`,{children:`多研究證據整合`}),(0,i.jsx)(`h4`,{children:`Meta-analysis 與森林圖`}),(0,i.jsx)(`p`,{children:`適用於多篇相互獨立研究，需取得各研究效果量、標準誤、研究設計與異質性資訊；一場群聚內的十項食品並不是十篇研究。`})]})]})]}),(0,i.jsxs)(`div`,{className:`closing-line`,children:[(0,i.jsx)(`span`,{className:`brand-seal`,"aria-hidden":`true`,children:`結`}),(0,i.jsx)(`p`,{children:`你用一套可重跑、可質疑、可驗證的調查流程，把每張圖組成完整證據鏈。`})]})]}),(0,i.jsxs)(`footer`,{children:[(0,i.jsxs)(`div`,{children:[(0,i.jsx)(`span`,{className:`brand-seal small`,"aria-hidden":`true`,children:`金`}),(0,i.jsx)(`strong`,{children:`金玉良炎`})]}),(0,i.jsx)(`p`,{children:`完全虛構的 AI Code 協作與公共衛生資料分析教學案例`})]})]})}export{U as default};