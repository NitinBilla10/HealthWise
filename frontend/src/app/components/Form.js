
import Checkbox from '@mui/material/Checkbox';
import TextField from '@mui/material/TextField';
import Autocomplete from '@mui/material/Autocomplete';
import CheckBoxOutlineBlankIcon from '@mui/icons-material/CheckBoxOutlineBlank';
import CheckBoxIcon from '@mui/icons-material/CheckBox';
import { useState } from 'react';
import axios from 'axios';
import { Player, Controls } from "@lottiefiles/react-lottie-player";

const icon = <CheckBoxOutlineBlankIcon fontSize="small" />;
const checkedIcon = <CheckBoxIcon fontSize="small" />;




export default () => {


    const symptoms = [
        { title: 'itching', year: 0 },
        { title: 'skin_rash', year: 1 },
        { title: 'nodal_skin_eruptions', year: 2 },
        { title: 'continuous_sneezing', year: 3 },
        { title: 'shivering', year: 4 },
        { title: 'chills', year: 5 },
        { title: 'joint_pain', year: 6 },
        { title: 'stomach_pain', year: 7 },
        { title: 'acidity', year: 8 },
        { title: 'ulcers_on_tongue', year: 9 },
        { title: 'muscle_wasting', year: 10 },
        { title: 'vomiting', year: 11 },
        { title: 'burning_micturition', year: 12 },
        { title: 'spotting_urination', year: 13 },
        { title: 'fatigue', year: 14 },
        { title: 'weight_gain', year: 15 },
        { title: 'anxiety', year: 16 },
        { title: 'cold_hands_and_feets', year: 17 },
        { title: 'mood_swings', year: 18 },
        { title: 'weight_loss', year: 19 },
        { title: 'restlessness', year: 20 },
        { title: 'lethargy', year: 21 },
        { title: 'patches_in_throat', year: 22 },
        { title: 'irregular_sugar_level', year: 23 },
        { title: 'cough', year: 24 },
        { title: 'high_fever', year: 25 },
        { title: 'sunken_eyes', year: 26 },
        { title: 'breathlessness', year: 27 },
        { title: 'sweating', year: 28 },
        { title: 'dehydration', year: 29 },
        { title: 'indigestion', year: 30 },
        { title: 'headache', year: 31 },
        { title: 'yellowish_skin', year: 32 },
        { title: 'dark_urine', year: 33 },
        { title: 'nausea', year: 34 },
        { title: 'loss_of_appetite', year: 35 },
        { title: 'pain_behind_the_eyes', year: 36 },
        { title: 'back_pain', year: 37 },
        { title: 'constipation', year: 38 },
        { title: 'abdominal_pain', year: 39 },
        { title: 'diarrhoea', year: 40 },
        { title: 'mild_fever', year: 41 },
        { title: 'yellow_urine', year: 42 },
        { title: 'yellowing_of_eyes', year: 43 },
        { title: 'acute_liver_failure', year: 44 },
        { title: 'fluid_overload', year: 45 },
        { title: 'swelling_of_stomach', year: 46 },
        { title: 'swelled_lymph_nodes', year: 47 },
        { title: 'malaise', year: 48 },
        { title: 'blurred_and_distorted_vision', year: 49 },
        { title: 'phlegm', year: 50 },
        { title: 'throat_irritation', year: 51 },
        { title: 'redness_of_eyes', year: 52 },
        { title: 'sinus_pressure', year: 53 },
        { title: 'runny_nose', year: 54 },
        { title: 'congestion', year: 55 },
        { title: 'chest_pain', year: 56 },
        { title: 'weakness_in_limbs', year: 57 },
        { title: 'fast_heart_rate', year: 58 },
        { title: 'pain_during_bowel_movements', year: 59 },
        { title: 'pain_in_anal_region', year: 60 },
        { title: 'bloody_stool', year: 61 },
        { title: 'irritation_in_anus', year: 62 },
        { title: 'neck_pain', year: 63 },
        { title: 'dizziness', year: 64 },
        { title: 'cramps', year: 65 },
        { title: 'bruising', year: 66 },
        { title: 'obesity', year: 67 },
        { title: 'swollen_legs', year: 68 },
        { title: 'swollen_blood_vessels', year: 69 },
        { title: 'puffy_face_and_eyes', year: 70 },
        { title: 'enlarged_thyroid', year: 71 },
        { title: 'brittle_nails', year: 72 },
        { title: 'swollen_extremities', year: 73 },
        { title: 'excessive_hunger', year: 74 },
        { title: 'extra_marital_contacts', year: 75 },
        { title: 'drying_and_tingling_lips', year: 76 },
        { title: 'slurred_speech', year: 77 },
        { title: 'knee_pain', year: 78 },
        { title: 'hip_joint_pain', year: 79 },
        { title: 'muscle_weakness', year: 80 },
        { title: 'stiff_neck', year: 81 },
        { title: 'swelling_joints', year: 82 },
        { title: 'movement_stiffness', year: 83 },
        { title: 'spinning_movements', year: 84 },
        { title: 'loss_of_balance', year: 85 },
        { title: 'unsteadiness', year: 86 },
        { title: 'weakness_of_one_body_side', year: 87 },
        { title: 'loss_of_smell', year: 88 },
        { title: 'bladder_discomfort', year: 89 },
        { title: 'foul_smell_of_urine', year: 90 },
        { title: 'continuous_feel_of_urine', year: 91 },
        { title: 'passage_of_gases', year: 92 },
        { title: 'internal_itching', year: 93 },
        { title: 'toxic_look_(typhos)', year: 94 },
        { title: 'depression', year: 95 },
        { title: 'irritability', year: 96 },
        { title: 'muscle_pain', year: 97 },
        { title: 'altered_sensorium', year: 98 },
        { title: 'red_spots_over_body', year: 99 },
        { title: 'belly_pain', year: 100 },
        { title: 'abnormal_menstruation', year: 101 },
        { title: 'dischromic_patches', year: 102 },
        { title: 'watering_from_eyes', year: 103 },
        { title: 'increased_appetite', year: 104 },
        { title: 'polyuria', year: 105 },
        { title: 'family_history', year: 106 },
        { title: 'mucoid_sputum', year: 107 },
        { title: 'rusty_sputum', year: 108 },
        { title: 'lack_of_concentration', year: 109 },
        { title: 'visual_disturbances', year: 110 },
        { title: 'receiving_blood_transfusion', year: 111 },
        { title: 'receiving_unsterile_injections', year: 112 },
        { title: 'coma', year: 113 },
        { title: 'stomach_bleeding', year: 114 },
        { title: 'distention_of_abdomen', year: 115 },
        { title: 'history_of_alcohol_consumption', year: 116 },
        { title: 'fluid_overload.1', year: 117 },
        { title: 'blood_in_sputum', year: 118 },
        { title: 'prominent_veins_on_calf', year: 119 },
        { title: 'palpitations', year: 120 },
        { title: 'painful_walking', year: 121 },
        { title: 'pus_filled_pimples', year: 122 },
        { title: 'blackheads', year: 123 },
        { title: 'scurrying', year: 124 },
        { title: 'skin_peeling', year: 125 },
        { title: 'silver_like_dusting', year: 126 },
        { title: 'small_dents_in_nails', year: 127 },
        { title: 'inflammatory_nails', year: 128 },
        { title: 'blister', year: 129 },
        { title: 'red_sore_around_nose', year: 130 },
        { title: 'yellow_crust_ooze', year: 131 }
      ]

      
      const [selectedValues, setSelectedValues] = useState([]);
      const [name, setName] = useState('');
      const [email, setEmail] = useState('');
      const [data,setData]=useState();
      const [main, setMain] = useState(true);
      const handleSymptomsChange = (_, newValues) => {
        setSelectedValues(newValues); // Update selected values
      };
    
      // Function to extract titles from selected options
      const getSelectedTitles = () => {
        return selectedValues.map((option) => option.title);
      };



const handleSubmit=async()=>{
    const symdata=getSelectedTitles();
    const body ={
     "symptoms":symdata
    }
    const res = await axios.post('http://127.0.0.1:5000/api',body)
    console.log(res.data)
    setData(res.data)
    setMain(false);
    // setMedication(parsedMedication);

    // console.log(medication)
}


    return (
        <>
       {main && <main className="w-full flex">
        
            <div className="flex-1 flex items-center justify-center h-screen">
                <div className="w-full max-w-md space-y-8 px-4 bg-white text-gray-600 sm:px-0">
                    <form
                        className="space-y-5"
                    >
                        <div>
                            <label className="font-medium">
                                Name
                            </label>
                            <input
                                type="text"
                                required
                                value={name}
                                onChange={(e)=>setName(e.target.value)}
                                className="w-full mt-2 px-3 py-2 text-gray-500 bg-transparent outline-none border focus:border-indigo-600 shadow-sm rounded-lg"
                            />
                        </div>
                        <div>
                            <label className="font-medium">
                                Email
                            </label>
                            <input
                                type="email"
                                required
                                value={email}
                                onChange={(e)=>setEmail(e.target.value)}
                                className="w-full mt-2 px-3 py-2 text-gray-500 bg-transparent outline-none border focus:border-indigo-600 shadow-sm rounded-lg"
                            />
                        </div>
                        <div className='my-10'>
                        <Autocomplete
                             multiple
                             id="checkboxes-tags-demo"
                             options={symptoms}
                             disableCloseOnSelect
                             getOptionLabel={(option) => option.title}
                             renderOption={(props, option, { selected }) => (
                               <li {...props}>
                                 <Checkbox
                                   style={{ marginRight: 8 }}
                                   checked={selected}
                                 />
                                 {option.title}
                               </li>
                             )}
                             style={{ width: 450 }}
                             renderInput={(params) => (
                               <TextField {...params} label="Symptoms"  />
                             )}
                             value={selectedValues}
                             onChange={handleSymptomsChange}
                           />
                           </div>
          
                        <button
                        type="button"
                            className="w-full px-4 py-2 text-white font-medium bg-indigo-600 hover:bg-indigo-500 active:bg-indigo-600 rounded-lg duration-150"
                            onClick={handleSubmit}
                        >
                            Get Report
                        </button>
                    </form>
                </div>
            </div>
            <div className="relative flex-1 hidden items-center justify-center h-screen bg-gray-900 lg:flex">
                <div className="relative z-10 w-full max-w-md">
                 <div className="animatedgif">
                <Player
                   autoplay
                   speed={1.5}
                   loop
                   src="https://lottie.host/9df32e85-40c5-4934-a06f-30f061f2eb81/D9g23k2Usu.json"
                   style={{ height: "400px", width: "400px" }}
                                 /> 
               </div>
                </div>
                <div
                    className="absolute inset-0 my-auto h-[500px]"
                    style={{
                        background: "linear-gradient(152.92deg, rgba(192, 132, 252, 0.2) 4.54%, rgba(232, 121, 249, 0.26) 34.2%, rgba(192, 132, 252, 0.1) 77.55%)", filter: "blur(118px)"
                    }}
                >

                </div>
            </div>
        </main>}
        <div className='py-20'></div>
        {data &&    <div class="max-w-screen-xl mx-auto px-5 bg-white ">
	<div class="flex flex-col items-center">
		{ name && <h2 class="font-bold text-5xl mt-5">
			{name}
		</h2>}
		{email && <p class="text-neutral-500 text-xl mt-3">
			{email}
		</p>}
	</div>
	<div class="grid divide-y divide-neutral-200 max-w-xl mx-auto mt-8">
		 <div class="py-5">
			<details class="group">
				<summary class="flex justify-between items-center font-medium cursor-pointer list-none">
					<span className='font-bold'>Disease :</span>
					<span class="transition group-open:rotate-180">
                <svg fill="none" height="24" shape-rendering="geometricPrecision" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" viewBox="0 0 24 24" width="24"><path d="M6 9l6 6 6-6"></path>
              </svg>
              </span>
				</summary>
				<p class="text-neutral-600 mt-3 group-open:animate-fadeIn">
                   {data.disease}
				</p>
			</details>
		</div>
		 <div class="py-5">
			<details class="group">
				<summary class="flex justify-between items-center font-medium cursor-pointer list-none">
					<span className='font-bold'>Description :</span>
					<span class="transition group-open:rotate-180">
                <svg fill="none" height="24" shape-rendering="geometricPrecision" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" viewBox="0 0 24 24" width="24"><path d="M6 9l6 6 6-6"></path>
              </svg>
              </span>
				</summary>
				<p class="text-neutral-600 mt-3 group-open:animate-fadeIn">
                  {data.description}
				</p>
			</details>
		</div>
		<div class="py-5">
			<details class="group">
				<summary class="flex justify-between items-center font-medium cursor-pointer list-none">
					<span className='font-bold'>Medication List :</span>
					<span class="transition group-open:rotate-180">
                <svg fill="none" height="24" shape-rendering="geometricPrecision" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" viewBox="0 0 24 24" width="24"><path d="M6 9l6 6 6-6"></path>
               </svg>
              </span>
				</summary>
				<p class="text-neutral-600 mt-3 group-open:animate-fadeIn">
                <ol>
                {data.medication?.map((med, index) => (
                     <li key={index}>{index+1}. {med}</li>
                   ))}
                </ol>
				</p>
			</details>
		</div>
		<div class="py-5">
			<details class="group">
				<summary class="flex justify-between items-center font-medium cursor-pointer list-none">
					<span className='font-bold'>Precaution :</span>
					<span class="transition group-open:rotate-180">
                <svg fill="none" height="24" shape-rendering="geometricPrecision" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" viewBox="0 0 24 24" width="24"><path d="M6 9l6 6 6-6"></path>
             </svg>
              </span>
				</summary>
				<p class="text-neutral-600 mt-3 group-open:animate-fadeIn">
                <ol>
                {data.precaution && data.precaution[0]?.map((pre, index) => (
                    <li key={index}>{index+1}. {pre}</li>
                  ))}               
				</ol>
                </p>
			</details>
		</div>
		<div class="py-5">
			<details class="group">
				<summary class="flex justify-between items-center font-medium cursor-pointer list-none">
					<span className='font-bold'> Diet :</span>
					<span class="transition group-open:rotate-180">
                <svg fill="none" height="24" shape-rendering="geometricPrecision" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" viewBox="0 0 24 24" width="24"><path d="M6 9l6 6 6-6"></path>
            </svg>
              </span>
				</summary>
				<p class="text-neutral-600 mt-3 group-open:animate-fadeIn">
                <ul>
                {data.diet?.map((food, index) => (
                     <li key={index}>{index+1}. {food}</li>
                   ))}
                </ul>
				</p>
			</details>
		</div>
		<div class="py-5">
			<details class="group">
				<summary class="flex justify-between items-center font-medium cursor-pointer list-none">
					<span className='font-bold'>Workout :</span>
					<span class="transition group-open:rotate-180">
                <svg fill="none" height="24" shape-rendering="geometricPrecision" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" viewBox="0 0 24 24" width="24"><path d="M6 9l6 6 6-6"></path>
             </svg>
              </span>
				</summary>
				<p class="text-neutral-600 mt-3 group-open:animate-fadeIn">
					<ol>
                    {data.workout?.map((work, index) => (
                    <li key={index}>{index+1}. {work}</li>
                     ))}
                    </ol>
				</p>
			</details>
		</div>

	</div>
</div>}
    


        </>
    )
}