/* eslint-disable react-hooks/exhaustive-deps */

// data flow
// myKj >{}> apiKj >{}>firebase>{}>View > test > view
// ReadTxt -> fetchApi -> crateFireStore -> lazyLoad -> useDataView() > doTest > View
// 
import { createAsyncThunk, createEntityAdapter, createSlice } from "@reduxjs/toolkit"
import MaterialTable from "material-table";
import { useEffect, useState } from "react";
import axios, { Axios } from 'axios';
import Papa from "papaparse";
import { Icon } from "@material-ui/core";
// translateApi :https://www.freecodecamp.org/news/react-tutorial-build-a-text-translation-pwa/

// doc - kanjiApi
//https://kanjiapi.dev/v1/
  // https://kanjiapi.dev/v1/kanji/蛍
  //
//data test
const DataTestAPI = {
  "kanji":"蛍",
  "grade":8,
  "stroke_count":11,
  "meanings":[
     "lightning-bug",
     "firefly"
  ],
  "kun_readings":[
     "ほたる"
  ],
  "on_readings":[
     "ケイ"
  ],
  "name_readings":[
     
  ],
  "jlpt":1,
  "unicode":"86cd",
  "heisig_en":"lightning-bug",
}

const DataTestFIRE = {
  "kanji":"蛍",
  "grade":8,
  "stroke_count":11,
  "meanings":[
     "lightning-bug",
     "firefly"
  ],
  // 1
  "meanings_vn":[
    "con dom dom",
  ],
  "kun_readings":[
     "ほたる"
  ],
  "on_readings":[
     "ケイ"
  ],
  "name_readings":[
     
  ],
  "jlpt":1,
  "unicode":"86cd",
  "heisig_en":"lightning-bug",
  //2
  "heisig_vn":""
}

// firebase related

// redux related

const txtAdapter = createEntityAdapter();
const initTxt = {
  id: 0,
  kanji: "",
  heisig_vn: "",
  check: false
}
const readCsv = createAsyncThunk("text/readCsv", (txt)=>{


})
const txtSlice = createSlice({
  name: "txt",
  initialState: txtAdapter.getInitialState({
    state: "idle",
  }),
  reducers:{
  },
  extraReducers: (build) => { build
    .addCase()
  },
})
//https://redux.js.org/tutorials/essentials/part-5-async-logic
  //
const apiAdapter = createEntityAdapter();
const initApi = {
  kanji:"",
  grade:0,
  stroke_count:0,
  meanings:["",""],
  kun_readings:[""],
  on_readings:[""],
  name_readings:[],
  jlpt:0,
  unicode:"",
  heisig_en:"",
}
const apiSlice = createSlice({
  name: "api",
  initialState: apiAdapter.getInitialState({state: "idle"}),
  reducers:{},
  extraReducers:{},
})

  //
const fireAdapter = createEntityAdapter();
const initFire = {
  id: 0,
  jlpt:100,
  grade:0,
  stroke_count:0,
  check: false,

  kanji: "",
  meanings_en:["","",],
  meanings_vn:["","",],
  meanings_jp:["","",],

  kun_readings:["",""],
  kun_sample:["",""],
  kun_meanings:["",""],
  kun_pharses:["",""],

  on_pharse:["", ""],
  on_sample:["",""],
  on_meaning:["",""],
  on_readings:["",""],

  name_readings:["",""],
  unicode:"",
  heisig_en:"",
  heisig_vn: "",
}
const fireSlice = createSlice({
  name: "fire",
  initialState: fireAdapter.getInitialState({state: "idle"}),
  reducers:{},
  extraReducers: (build)=>{build
    .addCase()
  }
})

const filterAdapter = createEntityAdapter();
const filterSlice = createSlice({
  name: "filter",
  initialState: filterAdapter.getInitialState({
    state: "idle"
  }),
  reducers:{},
  extraReducers:{},
});

// material-table related

// detail related

// calculate related

//read csv function
//allowed extensions for input file
const allowedExtensions = ["csv"];
const TableTxt = () => {
  
  //state will store the parsed data
  const [data, setData] = useState([]);

  //it state will contain the error when correct file extension is not used
  const [error, setError] = useState("");

  //it will store the file uploaded by the user
  const  [file, setFile] = useState("");

  //will be call whene the file input changes
  const handleFileChange = (e) => {
    setError("");
         
    // Check if user has entered the file
    if (e.target.files.length) {
        const inputFile = e.target.files[0];
         
        // Check the file extensions, if it not
        // included in the allowed extensions
        // we show the error
        const fileExtension = inputFile?.type.split("/")[1];
        if (!allowedExtensions.includes(fileExtension)) {
            setError("Please input a csv file");
            return;
        }

        // If input type is correct set the state
        setFile(inputFile);
    }
  }
  const handleFileParse = () => {
// If user clicks the parse button without
        // a file we show a error
        if (!file) return setError("Enter a valid file");
 
        // Initialize a reader which allows user
        // to read any file or blob.
        const reader = new FileReader();
         
        // Event listener on reader when the file
        // loads, we parse it and set the data.
        reader.onload = async ({ target }) => {
            const csv = Papa.parse(target.result, { header: true });
            const parsedData = csv?.data;
            console.log("parsedData:",parsedData);
            // const rowKey = Object.keys(parsedData[1]);
            // console.log("rowKey:",rowKey);
            // const rowValue = Object.values(parsedData[8]);
            // console.log("rowValue:",rowValue);

            // const dataArr = [];
            // parsedData.map((item, idx)=>dataArr.push(item));          
            setData(parsedData);
        };
        reader.readAsText(file);
  }
  const columns = [
    {title: 'id',       field: 'id'},
    {title: 'kanji',    field: 'kanji'},
    {title: 'heisig',   field: 'heisig_vn',},
    {title: 'meanings', field: 'meanings_vn', },
  ]
  return(
    <div>
      <label htmlFor="csvInput" style={{display: "block"}}>
        Enter CSV File
      </label>
      <input
        onChange={handleFileChange}
        id={"csvInput"}
        name={"file"}
        type="File"
      />
      <div>
        <button onClick={handleFileParse}>Parse</button>
      </div>
      <div>
        {error? error: data.map((row,idx) => <div key={idx}>{row.kanji}</div>)}
      </div>
      <MaterialTable
        columns={columns}
        data={data}
      />
      <MaterialTable
      title="Remote Data Preview"
      columns={[
        {
          title: 'Avatar',
          field: 'avatar',
          render: rowData => (
            <img  style={{ height: 36, borderRadius: '50%' }} src={rowData.avatar}/>
          ),
        },
        { title: 'Id', field: 'id' },
        { title: 'First Name', field: 'first_name' },
        { title: 'Last Name', field: 'last_name' },
      ]}
      data={query =>
        new Promise((resolve, reject) => {
          let url = 'https://reqres.in/api/users?'
          url += 'per_page=' + query.pageSize
          url += '&page=' + (query.page + 1)
          fetch(url)
            .then(response => response.json())
            .then(result => {
              resolve({
                data: result.data,
                page: result.page - 1,
                totalCount: result.total,
              })
            })
        })
      }
    />
    </div>
  )
}

  //fetchApi data
const ApiDataView = () => {

  const [charac, setCharac] = useState('行');
  const [data, setData] = useState(initApi);
  const baseUrl = 'https://kanjiapi.dev/v1/kanji/';
  useEffect(()=>{
    console.log(baseUrl+charac);
    fetch(baseUrl+charac)
      .then((res)=>res.json())
      .then((json)=>setData(json))
      .catch((err)=>console.log(err));
    
  },[charac]);
  const {kanji, grade, meanings, heisig_en} = data;

  const columns = [
    {title: 'grade',    field: 'grade'},
    {title: 'kanji',    field: 'kanji'},
    {title: 'heisig',   field: 'heisig_en',},
    {title: 'meanings', field: 'meanings', },
  ]
  return(
    <div>
      <MaterialTable
        columns={columns}
        data={[data]}
      />
      <input name="kanji" value={charac} onChange={({currentTarget})=>setCharac(currentTarget.value)}/>
      <label>kanji: {kanji}</label>
      <label>grade: {grade}</label>
      {Object.values(data).map((item, index)=>{
        return(
          <div key={index}>
            <label>{item}</label>
            {/* <label>{item.length}</label> */}
          </div>
        )
      })
        
      }
    </div>
  )
}

const CRUDFireView = () => {

  const [data, setData] = useState({initFire});
  const columns = [
    {title: 'grade',    field: 'grade'},
    {title: 'kanji',    field: 'kanji'},
    {title: 'heisig',   field: 'heisig_en',},
    {title: 'meanings', field: 'meanings', },
  ]

  return(
    <div>
      <MaterialTable
        columns={columns}
        data={[data]}
      />
    </div>
  )
}

const TranslateView = () => {

  const [inputText, setInputText] = useState('text');
  const [resultTest, setResultText] = useState('');
  const [languageList, setLanguagesList] = useState([])
  const [selectedLanguageKey, setLanguagesKey] = useState('');
  const [detectLanguageKey, setDetectLanguagesKey] = useState('');


  const getLanguageSrc = () => {
    axios.post('https://libretranslate.de/detect',{
      q: inputText
    })
    .then((response)=>{setDetectLanguagesKey(response.data[0].language)})
    .catch((err)=>{console.log(err)})
  }
  const translateText = () => {
    console.log("inputText",inputText)
    setResultText(inputText);

    getLanguageSrc();

    let data = {
      q: inputText,
      source: detectLanguageKey,
      target: selectedLanguageKey
    }
    
    axios.post('https://libretranslate.de/translate', data)
      .then((response)=>{
        console.log("translatedtext", response.data.translateText)
        setResultText(response.data.translatedText)
        
      })
      .catch((err)=>{console.log(err)})
  }
  const languageKey = (selectedLanguage) => {
    setLanguagesKey(selectedLanguage.target.value)
  }

  useEffect(()=>{
    axios.get('https://libretranslate.de/languages')
      .then((response)=>{setLanguagesList(response.data)})
      .catch((err)=>{console.log(err)})
    getLanguageSrc();
  },[inputText, getLanguageSrc]);

  return(
    <div>
      <h2>TranslateView</h2>
      <form onSubmit={translateText}>
        <input 
          type={"text"} 
          placeholder={"type text to translate.."}
          value={inputText}
          name=""
          onChange={(e)=>setInputText(e.target.value)}
          />
        <select onChange={languageKey}>
          <option>Please Select Language..</option>
          {languageList.map((language) => {
              return (
                  <option value={language.code} key={language.code}>
                      {language.name}
                  </option>
              )
          })}
        </select>
        <label placeholder="your result translate">{resultTest}</label>
        {/* <input 
          type={"text"}
          placeholder={"your result translate.."}
          
          value={resultTest}
          /> */}
        <button color="orange" type="submit">
          translate
        </button>
      </form>
    </div>
  )
}
function Translate() {
  const [inputText, setInputText] = useState('');
  const [resultText, setResultText] = useState('');
  const [selectedLanguageKey, setLanguageKey] = useState('')
  const [languagesList, setLanguagesList] = useState([])
  const [detectLanguageKey, setdetectedLanguageKey] = useState('')
  const getLanguageSource = async () => {
      await axios.post(`https://libretranslate.de/detect`, {
          q: inputText
      })
      .then((response) => {
          console.log(response.data);
          setdetectedLanguageKey(response.data[0].language)
      })
      .catch((err)=>console.log(err));
  }
  const translateText = () => {
      setResultText(inputText)

      getLanguageSource();

      let data = {
          q : inputText,
          source: detectLanguageKey,
          target: selectedLanguageKey
      }
      axios.post(`https://libretranslate.de/translate`, data)
      .then((response) => {
          setResultText(response.data.translatedText)
      })
  }

  const languageKey = (selectedLanguage) => {
      setLanguageKey(selectedLanguage.target.value)
  }

  useEffect(() => {
     axios.get(`https://libretranslate.de/languages`)
     .then((response) => {
      setLanguagesList(response.data)
     })

     getLanguageSource()
  }, [inputText]);




  return (
      <div>
          <div className="app-header">
              <h2 className="header">Sanjeet's Translator</h2>
          </div>

          <div className='app-body'>
              <div>
                  <form>
                      <textarea
                          placeholder='Type Text to Translate..'
                          onChange={(e) => setInputText(e.target.value)}
                      />

                      <select className="language-select" onChange={languageKey}>
                          <option>Please Select Language..</option>
                          {languagesList.map((language) => {
                              return (
                                  <option key={language.code} value={language.code}>
                                      {language.name}
                                  </option>
                              )
                          })}
                      </select>

                      <textarea
                          placeholder='Your Result Translation..'
                          defaultValue={resultText}
                      />

                      <button 
                          color="orange" 
                          size="large" 
                          onClick={translateText}
                      >
                          <Icon name='translate' />
                          Translate</button>
                  </form>
              </div>
          </div>
      </div>
  )
}
// main
const KanjiFeature = () => {
  const [wordThai, setWordThai] = useState("road");

  const translate = async () => {
    // `https://translate.googleapis.com/translate_a/single?client=gtx&sl=${from_lang}&tl=${to_lang}&dt=t&ie=UTF-8&oe=UTF-8&q=${encodeURIComponent(sentences)}`
    axios.get({
      url: "https://translate.googleapis.com/translate_a/single?client=gtx",
      // method: "GET",
      params: {
        sl: "th",
        tl: "en",
        dt: "t"
      }
    })
      .then((res) => {
        console.log("res", res);
      })
      .catch((err) => console.log(err));
    
  };

  useEffect(() => {
    translate();
  }, []);
  return(
    <div>
      <label> kanjiFeature </label>
      {/* read-write table txt view*/}
      {/* <TableTxt /> */}
      {/* fetchApi data view*/}
      {/* <ApiDataView /> */}
      {/* create-get firestore view */}
      {/* <CRUDFireView/> */}
      {/* exp calculator view */}
      {/* <TranslateView /> */}
      <label>{wordThai}</label>
      {/* <Translate/> */}
      {/* // */}
    </div>
  )
}
export default KanjiFeature;

