const form = document.getElementById('form').addEventListener('submit', submit => {

	const div = document.querySelector("#contenido")
	let driver = document.getElementById("driver").value//Traemos desde el HTMl el piloto que se desea consultar

	submit.preventDefault()
	
	const datosApi = async () => {
		try{
			const respuesta = await fetch(`https://v1.formula-1.api-sports.io/drivers?search=${driver}`, {
				"method": "GET",
				"headers": {
					"x-rapidapi-host": "v1.formula-1.api-sports.io",
					"x-rapidapi-key": "4d83cea5868cb157a83ff598cac5ba8f"
				}
			})//Aca guardamos el link del api junto con lo que queremos buscar (search=${driver})
			
			const data = await respuesta.json()
			//console.log(data)
			
			let teams = []
			for(let i=0; i<data.response[0].teams.length; i++) {
				teams.push(data.response[0].teams[i])
			}
	
			let profile = {
				name : data.response[0].name,
				image : data.response[0].image,
				nationality : data.response[0].nationality,
				nameCountry : data.response[0].country.name,
				codeCountry : data.response[0].country.code,
				birthplace : data.response[0].birthplace,
				birthdate : data.response[0].birthdate,
				abbr : data.response[0].abbr,
				number : data.response[0].number,
				podiums : data.response[0].podiums,
				careerPoints : data.response[0].career_points,
				grandsPrixEntered : data.response[0].grands_prix_entered,
				highestGridPosition : data.response[0].highest_grid_position,
				highestRaceFinishNumber : data.response[0].highest_race_finish.number,
				highestRaceFinishPosition : data.response[0].highest_race_finish.position,
				worldChampionships : data.response[0].world_championships,
				teams
			}
	
			setTimeout(() => {
				div.innerHTML =
				`
				<h2>${profile.name}</h2>
				<h3>${profile.teams[0].team.name}</h3>
				<div class="containerImg">
					<img src="${profile.image}" alt="${profile.name}">
				</div>
		
				<h2>Personal</h2>
		
				<div class="containerDiv cMargin">
					<div class="contentDiv1 content" style="z-index:1">
						<h3>Nationality</h3><p>${profile.nationality}</p>
						<h3>Country</h3><p>${profile.nameCountry}(${profile.codeCountry})</p>
					</div>
					<div class="contentDiv2 content" style="z-index:2">
						<h3>Birthplace</h3><p>${profile.birthplace}</p>
						<h3>Birthdate</h3><p>${profile.birthdate}</p>
					</div>
				</div>
		
				<h2>Professional</h2>
		
				<div class="containerDiv cMargin">
					<div class="contentDiv1 content" style="z-index:1">
						<h3>Number</h3><p>${profile.number}</p>
						<h3>Podiums</h3><p>${profile.podiums}</p>
						<h3>Career Points</h3><p>${profile.careerPoints}</p>
						<h3>Grand Prix Entered</h3><p>${profile.grandsPrixEntered}</p>
					</div>
					<div class="contentDiv2 content raceFinish" style="z-index:2">
						<h3 class="tAR">Highest Grid Position</h3><p>${profile.highestGridPosition}</p>
						<h3 class="tAR">Highest Race Finish Number</h3><p>${profile.highestRaceFinishNumber}</p>
						<h3 class="tAR">Highest Race Finish Position</h3><p>${profile.highestRaceFinishPosition}</p>
						<h3 class="tAR">World Championships</h3><p>${profile.worldChampionships}</p>
					</div>
				</div>
				`
			}, 1000)
			const p = document.createElement("p")
            p.classList.add("informationSeasonP")
            p.innerHTML = `${(profile.name).toUpperCase()} INFORMATION`
            informationSeason.appendChild(p)
		}
		catch(error){
			console.error(error)//En caso de no podes ejecutar bien el try, saltara un error por consola 
		}
	}
	datosApi()
})