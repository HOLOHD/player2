/*! pisignage 25-07-2022 */
angular.module("piConfig", []).constant("piUrls", function () {
    var e;
    return window.location.origin || (window.location.origin = window.location.protocol + "//" + window.location.hostname + (window.location.port ? ":" + window.location.port : "")), e = -1 != window.location.protocol.toLowerCase().indexOf("http") ? window.location.origin + "/" : "http://localhost/", console.log("api base: ", e), {
        files: e + "api/files/",
        userfiles: e + "api/userfiles/",
        filespostupload: e + "api/postupload",
        playlistfiles: e + "api/playlistfiles",
        labels: e + "api/labels/",
        notices: e + "api/notices/",
        links: e + "api/links/",
        calendars: e + "api/calendars/",
        calendarsPreview: e + "api/calendarsPreview/",
        zipPreview: e + "api/zipPreview/",
        playlists: e + "api/playlists/",
        playlistMedia: e + "api/playlistmedia/",
        setPlaylist: e + "api/setplaylist/",
        play: e + "api/play/playlists/",
        fileplay: e + "api/play/files/",
        getStatus: e + "api/status/",
        debug: e + "api/debug/",
        getStats: e + "api/getstats/",
        getActivityReports: e + "api/getactivityreports/",
        getStatsDetails: e + "api/getstatsdetails/",
        getConnectStats: e + "api/getconnectstats/",
        getEvents: e + "api/getevents/",
        settings: e + "api/settings/",
        settingsfile: e + "api/settingsfile/",
        piswupdate: e + "api/piswupdate/",
        screens: e + "api/screens/",
        players: e + "api/players/",
        groups: e + "api/groups/",
        exportStatus: e + "api/exportstatus",
        pishell: e + "api/pishell/",
        snapshot: e + "api/snapshot/",
        pitv: e + "api/pitv/",
        swupdate: e + "api/swupdate/",
        usernames: e + "api/usernames/",
        collaborators: e + "api/collaborators/",
        getlicensedetails: e + "api/licensedetails/",
        getLicenseList: e + "api/licenselist/",
        downloadauth: e + "api/downloadauth",
        installationsettings: e + "api/installationsettings",
        rssfeed: e + "api/rssfeed/",
        users: e + "api/users",
        submitquery: e + "api/submitquery",
        knowledgebase: e + "api/knowledgebase",
        querylist: e + "api/querylist",
        pricing: e + "api/pricingdetails",
        createpaypalorder: e + "api/createpaypalorder",
        capturepaypalorder: e + "api/capturepaypalorder",
        createStripePaymentIntent: e + "api/createstripepaymentintent",
        getStripeKey: e + "api/getstripekey",
        razorpayorder: e + "api/razorpayorder",
        razorpaypayment: e + "api/razorpaypayment",
        customTemplate: e + "api/customtemplate/"
    }
}()).constant("piFeatures", {
    groupEditFeature: !0,
    groupRenameFeature: !0,
    playlistEditFeature: !0,
    playlistRenameFeature: !0,
    assetRenameFeature: !0
}).constant("piCollaboratorRights", {
    settings: !1,
    payer: !1,
    asset: {
        create: !0,
        edit: !0,
        restrict: !1,
        restrictAdmin: !1
    },
    playlist: {
        edit: !0,
        settings: !0
    },
    group: {
        settings: !0,
        default: !0,
        schedule: !0,
        viewOnly: !1
    },
    player: {
        create: !0,
        settings: !0,
        shell: !0
    },
    template: {
        edit: !0
    },
    groupIds: null
}).constant("piConstants", {
    videoRegex: /(mp4|mov|m4v|avi|webm|wmv|flv|mkv|mpg|mpeg|3gp)$/i,
    audioRegex: /(mp3|m4a|mp4a|aac)$/i,
    imageRegex: /(jpg|jpeg|png|gif|bmp)$/i,
    noticeRegex: /\.html$/i,
    zipfileRegex: /(.zip|.gz|.bz2)$/i,
    repofileRegex: /\.repo$/i,
    liveStreamRegex: /\.tv$/i,
    omxStreamRegex: /\.stream$/i,
    linkURL: /\.link$/i,
    CORSLink: /\.weblink$/i,
    mediaRss: /\.mrss$/i,
    nestedPlaylist: /^__/i,
    groupNameRegEx: /[&\/\\#,+()$~%'":*?<>{}\^]/g,
    pdffileRegex: /\.pdf$/i,
    txtFileRegex: /\.txt$/i,
    radioFileRegex: /\.radio$/i
}).constant("layoutOtherZones", {
    1: [],
    "2a": ["side"],
    "2b": ["side"],
    "2c": ["side"],
    "2d": ["side"],
    "3a": ["side", "bottom"],
    "3b": ["side", "bottom"],
    "3c": ["side", "bottom"],
    "3d": ["side", "bottom"],
    "4a": ["side", "bottom"],
    "4b": ["side", "bottom"],
    "4c": ["side", "bottom"],
    "4d": ["side", "bottom"],
    "2ap": [],
    "2bp": ["bottom"],
    "2ap270": [],
    "2bp270": ["bottom"],
    custom: ["side", "bottom", "zone4", "zone5", "zone6"],
    customp: ["side", "bottom", "zone4", "zone5", "zone6"],
    customp270: ["side", "bottom", "zone4", "zone5", "zone6"]
}).constant("piLanguages", [{
    code: "en",
    language: "en_English"
}, {
    code: "fr",
    language: "fr_French"
}, {
    code: "de",
    language: "de_German"
}, {
    code: "es",
    language: "es_Spanish"
}, {
    code: "ca",
    language: "ca_Catalan"
}, {
    code: "it",
    language: "it_Italian"
}, {
    code: "nb",
    language: "nb_Norwegian_Bokm??l"
}, {
    code: "nl_NL",
    language: "nl_Dutch"
}, {
    code: "pt-br",
    language: "pt_BR_Brazilian_Portuguese"
}, {
    code: "sv_SE",
    language: "Sweden"
}, {
    code: "cs_CZ",
    language: "Czech"
}, {
    code: "vi",
    language: "Vietnamese"
}]).constant("weeks", ["All Days", "Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"]).constant("days", ["All Dates", "1", "2", "3", "4", "5", "6", "7", "8", "9", "10", "11", "12", "13", "14", "15", "16", "17", "18", "19", "20", "21", "22", "23", "24", "25", "26", "27", "28", "29", "30", "31"]).factory("weeksObject", ["gettext", function (e) {
    return [{
        id: 1,
        label: e("Sunday")
    }, {
        id: 2,
        label: e("Monday")
    }, {
        id: 3,
        label: e("Tuesday")
    }, {
        id: 4,
        label: e("Wednesday")
    }, {
        id: 5,
        label: e("Thursday")
    }, {
        id: 6,
        label: e("Friday")
    }, {
        id: 7,
        label: e("Saturday")
    }]
}]).constant("daysObject", [{
    id: 1,
    label: "1"
}, {
    id: 2,
    label: "2"
}, {
    id: 3,
    label: "3"
}, {
    id: 4,
    label: "4"
}, {
    id: 5,
    label: "5"
}, {
    id: 6,
    label: "6"
}, {
    id: 7,
    label: "7"
}, {
    id: 8,
    label: "8"
}, {
    id: 9,
    label: "9"
}, {
    id: 10,
    label: "10"
}, {
    id: 11,
    label: "11"
}, {
    id: 12,
    label: "12"
}, {
    id: 13,
    label: "13"
}, {
    id: 14,
    label: "14"
}, {
    id: 15,
    label: "15"
}, {
    id: 16,
    label: "16"
}, {
    id: 17,
    label: "17"
}, {
    id: 18,
    label: "18"
}, {
    id: 19,
    label: "19"
}, {
    id: 20,
    label: "20"
}, {
    id: 21,
    label: "21"
}, {
    id: 22,
    label: "22"
}, {
    id: 23,
    label: "23"
}, {
    id: 24,
    label: "24"
}, {
    id: 25,
    label: "25"
}, {
    id: 26,
    label: "26"
}, {
    id: 27,
    label: "27"
}, {
    id: 28,
    label: "28"
}, {
    id: 29,
    label: "29"
}, {
    id: 30,
    label: "30"
}, {
    id: 31,
    label: "31"
}]).constant("TZNames", ["Africa/Abidjan", "Africa/Accra", "Africa/Addis_Ababa", "Africa/Algiers", "Africa/Asmara", "Africa/Asmera", "Africa/Bamako", "Africa/Bangui", "Africa/Banjul", "Africa/Bissau", "Africa/Blantyre", "Africa/Brazzaville", "Africa/Bujumbura", "Africa/Cairo", "Africa/Casablanca", "Africa/Ceuta", "Africa/Conakry", "Africa/Dakar", "Africa/Dar_es_Salaam", "Africa/Djibouti", "Africa/Douala", "Africa/El_Aaiun", "Africa/Freetown", "Africa/Gaborone", "Africa/Harare", "Africa/Johannesburg", "Africa/Juba", "Africa/Kampala", "Africa/Khartoum", "Africa/Kigali", "Africa/Kinshasa", "Africa/Lagos", "Africa/Libreville", "Africa/Lome", "Africa/Luanda", "Africa/Lubumbashi", "Africa/Lusaka", "Africa/Malabo", "Africa/Maputo", "Africa/Maseru", "Africa/Mbabane", "Africa/Mogadishu", "Africa/Monrovia", "Africa/Nairobi", "Africa/Ndjamena", "Africa/Niamey", "Africa/Nouakchott", "Africa/Ouagadougou", "Africa/Porto-Novo", "Africa/Sao_Tome", "Africa/Timbuktu", "Africa/Tripoli", "Africa/Tunis", "Africa/Windhoek", "AKST9AKDT", "America/Adak", "America/Anchorage", "America/Anguilla", "America/Antigua", "America/Araguaina", "America/Argentina/Buenos_Aires", "America/Argentina/Catamarca", "America/Argentina/ComodRivadavia", "America/Argentina/Cordoba", "America/Argentina/Jujuy", "America/Argentina/La_Rioja", "America/Argentina/Mendoza", "America/Argentina/Rio_Gallegos", "America/Argentina/Salta", "America/Argentina/San_Juan", "America/Argentina/San_Luis", "America/Argentina/Tucuman", "America/Argentina/Ushuaia", "America/Aruba", "America/Asuncion", "America/Atikokan", "America/Atka", "America/Bahia", "America/Bahia_Banderas", "America/Barbados", "America/Belem", "America/Belize", "America/Blanc-Sablon", "America/Boa_Vista", "America/Bogota", "America/Boise", "America/Buenos_Aires", "America/Cambridge_Bay", "America/Campo_Grande", "America/Cancun", "America/Caracas", "America/Catamarca", "America/Cayenne", "America/Cayman", "America/Chicago", "America/Chihuahua", "America/Coral_Harbour", "America/Cordoba", "America/Costa_Rica", "America/Creston", "America/Cuiaba", "America/Curacao", "America/Danmarkshavn", "America/Dawson", "America/Dawson_Creek", "America/Denver", "America/Detroit", "America/Dominica", "America/Edmonton", "America/Eirunepe", "America/El_Salvador", "America/Ensenada", "America/Fort_Wayne", "America/Fortaleza", "America/Glace_Bay", "America/Godthab", "America/Goose_Bay", "America/Grand_Turk", "America/Grenada", "America/Guadeloupe", "America/Guatemala", "America/Guayaquil", "America/Guyana", "America/Halifax", "America/Havana", "America/Hermosillo", "America/Indiana/Indianapolis", "America/Indiana/Knox", "America/Indiana/Marengo", "America/Indiana/Petersburg", "America/Indiana/Tell_City", "America/Indiana/Vevay", "America/Indiana/Vincennes", "America/Indiana/Winamac", "America/Indianapolis", "America/Inuvik", "America/Iqaluit", "America/Jamaica", "America/Jujuy", "America/Juneau", "America/Kentucky/Louisville", "America/Kentucky/Monticello", "America/Knox_IN", "America/Kralendijk", "America/La_Paz", "America/Lima", "America/Los_Angeles", "America/Louisville", "America/Lower_Princes", "America/Maceio", "America/Managua", "America/Manaus", "America/Marigot", "America/Martinique", "America/Matamoros", "America/Mazatlan", "America/Mendoza", "America/Menominee", "America/Merida", "America/Metlakatla", "America/Mexico_City", "America/Miquelon", "America/Moncton", "America/Monterrey", "America/Montevideo", "America/Montreal", "America/Montserrat", "America/Nassau", "America/New_York", "America/Nipigon", "America/Nome", "America/Noronha", "America/North_Dakota/Beulah", "America/North_Dakota/Center", "America/North_Dakota/New_Salem", "America/Ojinaga", "America/Panama", "America/Pangnirtung", "America/Paramaribo", "America/Phoenix", "America/Port_of_Spain", "America/Port-au-Prince", "America/Porto_Acre", "America/Porto_Velho", "America/Puerto_Rico", "America/Rainy_River", "America/Rankin_Inlet", "America/Recife", "America/Regina", "America/Resolute", "America/Rio_Branco", "America/Rosario", "America/Santa_Isabel", "America/Santarem", "America/Santiago", "America/Santo_Domingo", "America/Sao_Paulo", "America/Scoresbysund", "America/Shiprock", "America/Sitka", "America/St_Barthelemy", "America/St_Johns", "America/St_Kitts", "America/St_Lucia", "America/St_Thomas", "America/St_Vincent", "America/Swift_Current", "America/Tegucigalpa", "America/Thule", "America/Thunder_Bay", "America/Tijuana", "America/Toronto", "America/Tortola", "America/Vancouver", "America/Virgin", "America/Whitehorse", "America/Winnipeg", "America/Yakutat", "America/Yellowknife", "Antarctica/Casey", "Antarctica/Davis", "Antarctica/DumontDUrville", "Antarctica/Macquarie", "Antarctica/Mawson", "Antarctica/McMurdo", "Antarctica/Palmer", "Antarctica/Rothera", "Antarctica/South_Pole", "Antarctica/Syowa", "Antarctica/Vostok", "Arctic/Longyearbyen", "Asia/Aden", "Asia/Almaty", "Asia/Amman", "Asia/Anadyr", "Asia/Aqtau", "Asia/Aqtobe", "Asia/Ashgabat", "Asia/Ashkhabad", "Asia/Baghdad", "Asia/Bahrain", "Asia/Baku", "Asia/Bangkok", "Asia/Beirut", "Asia/Bishkek", "Asia/Brunei", "Asia/Calcutta", "Asia/Choibalsan", "Asia/Chongqing", "Asia/Chungking", "Asia/Colombo", "Asia/Dacca", "Asia/Damascus", "Asia/Dhaka", "Asia/Dili", "Asia/Dubai", "Asia/Dushanbe", "Asia/Gaza", "Asia/Harbin", "Asia/Hebron", "Asia/Ho_Chi_Minh", "Asia/Hong_Kong", "Asia/Hovd", "Asia/Irkutsk", "Asia/Istanbul", "Asia/Jakarta", "Asia/Jayapura", "Asia/Jerusalem", "Asia/Kabul", "Asia/Kamchatka", "Asia/Karachi", "Asia/Kashgar", "Asia/Kathmandu", "Asia/Katmandu", "Asia/Kolkata", "Asia/Krasnoyarsk", "Asia/Kuala_Lumpur", "Asia/Kuching", "Asia/Kuwait", "Asia/Macao", "Asia/Macau", "Asia/Magadan", "Asia/Makassar", "Asia/Manila", "Asia/Muscat", "Asia/Nicosia", "Asia/Novokuznetsk", "Asia/Novosibirsk", "Asia/Omsk", "Asia/Oral", "Asia/Phnom_Penh", "Asia/Pontianak", "Asia/Pyongyang", "Asia/Qatar", "Asia/Qyzylorda", "Asia/Rangoon", "Asia/Riyadh", "Asia/Saigon", "Asia/Sakhalin", "Asia/Samarkand", "Asia/Seoul", "Asia/Shanghai", "Asia/Singapore", "Asia/Taipei", "Asia/Tashkent", "Asia/Tbilisi", "Asia/Tehran", "Asia/Tel_Aviv", "Asia/Thimbu", "Asia/Thimphu", "Asia/Tokyo", "Asia/Ujung_Pandang", "Asia/Ulaanbaatar", "Asia/Ulan_Bator", "Asia/Urumqi", "Asia/Vientiane", "Asia/Vladivostok", "Asia/Yakutsk", "Asia/Yekaterinburg", "Asia/Yerevan", "Atlantic/Azores", "Atlantic/Bermuda", "Atlantic/Canary", "Atlantic/Cape_Verde", "Atlantic/Faeroe", "Atlantic/Faroe", "Atlantic/Jan_Mayen", "Atlantic/Madeira", "Atlantic/Reykjavik", "Atlantic/South_Georgia", "Atlantic/St_Helena", "Atlantic/Stanley", "Australia/ACT", "Australia/Adelaide", "Australia/Brisbane", "Australia/Broken_Hill", "Australia/Canberra", "Australia/Currie", "Australia/Darwin", "Australia/Eucla", "Australia/Hobart", "Australia/LHI", "Australia/Lindeman", "Australia/Lord_Howe", "Australia/Melbourne", "Australia/North", "Australia/NSW", "Australia/Perth", "Australia/Queensland", "Australia/South", "Australia/Sydney", "Australia/Tasmania", "Australia/Victoria", "Australia/West", "Australia/Yancowinna", "Brazil/Acre", "Brazil/DeNoronha", "Brazil/East", "Brazil/West", "Canada/Atlantic", "Canada/Central", "Canada/Eastern", "Canada/East-Saskatchewan", "Canada/Mountain", "Canada/Newfoundland", "Canada/Pacific", "Canada/Saskatchewan", "Canada/Yukon", "Europe/Amsterdam", "Europe/Andorra", "Europe/Athens", "Europe/Belfast", "Europe/Belgrade", "Europe/Berlin", "Europe/Bratislava", "Europe/Brussels", "Europe/Bucharest", "Europe/Budapest", "Europe/Chisinau", "Europe/Copenhagen", "Europe/Dublin", "Europe/Gibraltar", "Europe/Guernsey", "Europe/Helsinki", "Europe/Isle_of_Man", "Europe/Istanbul", "Europe/Jersey", "Europe/Kaliningrad", "Europe/Kiev", "Europe/Lisbon", "Europe/Ljubljana", "Europe/London", "Europe/Luxembourg", "Europe/Madrid", "Europe/Malta", "Europe/Mariehamn", "Europe/Minsk", "Europe/Monaco", "Europe/Moscow", "Europe/Nicosia", "Europe/Oslo", "Europe/Paris", "Europe/Podgorica", "Europe/Prague", "Europe/Riga", "Europe/Rome", "Europe/Samara", "Europe/San_Marino", "Europe/Sarajevo", "Europe/Simferopol", "Europe/Skopje", "Europe/Sofia", "Europe/Stockholm", "Europe/Tallinn", "Europe/Tirane", "Europe/Tiraspol", "Europe/Uzhgorod", "Europe/Vaduz", "Europe/Vatican", "Europe/Vienna", "Europe/Vilnius", "Europe/Volgograd", "Europe/Warsaw", "Europe/Zagreb", "Europe/Zaporozhye", "Europe/Zurich", "Iceland", "Indian/Antananarivo", "Indian/Chagos", "Indian/Christmas", "Indian/Cocos", "Indian/Comoro", "Indian/Kerguelen", "Indian/Mahe", "Indian/Maldives", "Indian/Mauritius", "Indian/Mayotte", "Indian/Reunion", "Iran", "Israel", "Jamaica", "Japan", "Kwajalein", "Libya", "Mexico/BajaNorte", "Mexico/BajaSur", "Mexico/General", "MST7MDT", "Navajo", "Pacific/Apia", "Pacific/Auckland", "Pacific/Chatham", "Pacific/Chuuk", "Pacific/Easter", "Pacific/Efate", "Pacific/Enderbury", "Pacific/Fakaofo", "Pacific/Fiji", "Pacific/Funafuti", "Pacific/Galapagos", "Pacific/Gambier", "Pacific/Guadalcanal", "Pacific/Guam", "Pacific/Honolulu", "Pacific/Johnston", "Pacific/Kiritimati", "Pacific/Kosrae", "Pacific/Kwajalein", "Pacific/Majuro", "Pacific/Marquesas", "Pacific/Midway", "Pacific/Nauru", "Pacific/Niue", "Pacific/Norfolk", "Pacific/Noumea", "Pacific/Pago_Pago", "Pacific/Palau", "Pacific/Pitcairn", "Pacific/Pohnpei", "Pacific/Ponape", "Pacific/Port_Moresby", "Pacific/Rarotonga", "Pacific/Saipan", "Pacific/Samoa", "Pacific/Tahiti", "Pacific/Tarawa", "Pacific/Tongatapu", "Pacific/Truk", "Pacific/Wake", "Pacific/Wallis", "Pacific/Yap", "Poland", "Portugal", "Singapore", "Turkey", "Universal", "US/Alaska", "US/Aleutian", "US/Arizona", "US/Central", "US/Eastern", "US/East-Indiana", "US/Hawaii", "US/Indiana-Starke", "US/Michigan", "US/Mountain", "US/Pacific", "US/Pacific-New", "US/Samoa", "UTC", "EST", "GMT"]).constant("COUNTRIES", [{
    code: "AF",
    name: "Afghanistan"
}, {
    code: "AX",
    name: "Aland Islands"
}, {
    code: "AL",
    name: "Albania"
}, {
    code: "DZ",
    name: "Algeria"
}, {
    code: "AS",
    name: "American Samoa"
}, {
    code: "AD",
    name: "Andorra"
}, {
    code: "AO",
    name: "Angola"
}, {
    code: "AI",
    name: "Anguilla"
}, {
    code: "AQ",
    name: "Antarctica"
}, {
    code: "AG",
    name: "Antigua And Barbuda"
}, {
    code: "AR",
    name: "Argentina"
}, {
    code: "AM",
    name: "Armenia"
}, {
    code: "AW",
    name: "Aruba"
}, {
    code: "AU",
    name: "Australia"
}, {
    code: "AT",
    name: "Austria"
}, {
    code: "AZ",
    name: "Azerbaijan"
}, {
    code: "BS",
    name: "Bahamas"
}, {
    code: "BH",
    name: "Bahrain"
}, {
    code: "BD",
    name: "Bangladesh"
}, {
    code: "BB",
    name: "Barbados"
}, {
    code: "BY",
    name: "Belarus"
}, {
    code: "BE",
    name: "Belgium"
}, {
    code: "BZ",
    name: "Belize"
}, {
    code: "BJ",
    name: "Benin"
}, {
    code: "BM",
    name: "Bermuda"
}, {
    code: "BT",
    name: "Bhutan"
}, {
    code: "BO",
    name: "Bolivia"
}, {
    code: "BA",
    name: "Bosnia And Herzegovina"
}, {
    code: "BW",
    name: "Botswana"
}, {
    code: "BV",
    name: "Bouvet Island"
}, {
    code: "BR",
    name: "Brazil"
}, {
    code: "IO",
    name: "British Indian Ocean Territory"
}, {
    code: "BN",
    name: "Brunei Darussalam"
}, {
    code: "BG",
    name: "Bulgaria"
}, {
    code: "BF",
    name: "Burkina Faso"
}, {
    code: "BI",
    name: "Burundi"
}, {
    code: "KH",
    name: "Cambodia"
}, {
    code: "CM",
    name: "Cameroon"
}, {
    code: "CA",
    name: "Canada"
}, {
    code: "CV",
    name: "Cape Verde"
}, {
    code: "KY",
    name: "Cayman Islands"
}, {
    code: "CF",
    name: "Central African Republic"
}, {
    code: "TD",
    name: "Chad"
}, {
    code: "CL",
    name: "Chile"
}, {
    code: "CN",
    name: "China"
}, {
    code: "CX",
    name: "Christmas Island"
}, {
    code: "CC",
    name: "Cocos (Keeling) Islands"
}, {
    code: "CO",
    name: "Colombia"
}, {
    code: "KM",
    name: "Comoros"
}, {
    code: "CG",
    name: "Congo"
}, {
    code: "CD",
    name: "Congo}, Democratic Republic"
}, {
    code: "CK",
    name: "Cook Islands"
}, {
    code: "CR",
    name: "Costa Rica"
}, {
    code: "CI",
    name: "Cote D'Ivoire"
}, {
    code: "HR",
    name: "Croatia"
}, {
    code: "CU",
    name: "Cuba"
}, {
    code: "CY",
    name: "Cyprus"
}, {
    code: "CZ",
    name: "Czech Republic"
}, {
    code: "DK",
    name: "Denmark"
}, {
    code: "DJ",
    name: "Djibouti"
}, {
    code: "DM",
    name: "Dominica"
}, {
    code: "DO",
    name: "Dominican Republic"
}, {
    code: "EC",
    name: "Ecuador"
}, {
    code: "EG",
    name: "Egypt"
}, {
    code: "SV",
    name: "El Salvador"
}, {
    code: "GQ",
    name: "Equatorial Guinea"
}, {
    code: "ER",
    name: "Eritrea"
}, {
    code: "EE",
    name: "Estonia"
}, {
    code: "ET",
    name: "Ethiopia"
}, {
    code: "FK",
    name: "Falkland Islands (Malvinas)"
}, {
    code: "FO",
    name: "Faroe Islands"
}, {
    code: "FJ",
    name: "Fiji"
}, {
    code: "FI",
    name: "Finland"
}, {
    code: "FR",
    name: "France"
}, {
    code: "GF",
    name: "French Guiana"
}, {
    code: "PF",
    name: "French Polynesia"
}, {
    code: "TF",
    name: "French Southern Territories"
}, {
    code: "GA",
    name: "Gabon"
}, {
    code: "GM",
    name: "Gambia"
}, {
    code: "GE",
    name: "Georgia"
}, {
    code: "DE",
    name: "Germany"
}, {
    code: "GH",
    name: "Ghana"
}, {
    code: "GI",
    name: "Gibraltar"
}, {
    code: "GR",
    name: "Greece"
}, {
    code: "GL",
    name: "Greenland"
}, {
    code: "GD",
    name: "Grenada"
}, {
    code: "GP",
    name: "Guadeloupe"
}, {
    code: "GU",
    name: "Guam"
}, {
    code: "GT",
    name: "Guatemala"
}, {
    code: "GG",
    name: "Guernsey"
}, {
    code: "GN",
    name: "Guinea"
}, {
    code: "GW",
    name: "Guinea-Bissau"
}, {
    code: "GY",
    name: "Guyana"
}, {
    code: "HT",
    name: "Haiti"
}, {
    code: "HM",
    name: "Heard Island & Mcdonald Islands"
}, {
    code: "VA",
    name: "Holy See (Vatican City State)"
}, {
    code: "HN",
    name: "Honduras"
}, {
    code: "HK",
    name: "Hong Kong"
}, {
    code: "HU",
    name: "Hungary"
}, {
    code: "IS",
    name: "Iceland"
}, {
    code: "IN",
    name: "India"
}, {
    code: "ID",
    name: "Indonesia"
}, {
    code: "IR",
    name: "Iran, Islamic Republic Of"
}, {
    code: "IQ",
    name: "Iraq"
}, {
    code: "IE",
    name: "Ireland"
}, {
    code: "IM",
    name: "Isle Of Man"
}, {
    code: "IL",
    name: "Israel"
}, {
    code: "IT",
    name: "Italy"
}, {
    code: "JM",
    name: "Jamaica"
}, {
    code: "JP",
    name: "Japan"
}, {
    code: "JE",
    name: "Jersey"
}, {
    code: "JO",
    name: "Jordan"
}, {
    code: "KZ",
    name: "Kazakhstan"
}, {
    code: "KE",
    name: "Kenya"
}, {
    code: "KI",
    name: "Kiribati"
}, {
    code: "KR",
    name: "Korea"
}, {
    code: "KW",
    name: "Kuwait"
}, {
    code: "KG",
    name: "Kyrgyzstan"
}, {
    code: "LA",
    name: "Lao People's Democratic Republic"
}, {
    code: "LV",
    name: "Latvia"
}, {
    code: "LB",
    name: "Lebanon"
}, {
    code: "LS",
    name: "Lesotho"
}, {
    code: "LR",
    name: "Liberia"
}, {
    code: "LY",
    name: "Libyan Arab Jamahiriya"
}, {
    code: "LI",
    name: "Liechtenstein"
}, {
    code: "LT",
    name: "Lithuania"
}, {
    code: "LU",
    name: "Luxembourg"
}, {
    code: "MO",
    name: "Macao"
}, {
    code: "MK",
    name: "Macedonia"
}, {
    code: "MG",
    name: "Madagascar"
}, {
    code: "MW",
    name: "Malawi"
}, {
    code: "MY",
    name: "Malaysia"
}, {
    code: "MV",
    name: "Maldives"
}, {
    code: "ML",
    name: "Mali"
}, {
    code: "MT",
    name: "Malta"
}, {
    code: "MH",
    name: "Marshall Islands"
}, {
    code: "MQ",
    name: "Martinique"
}, {
    code: "MR",
    name: "Mauritania"
}, {
    code: "MU",
    name: "Mauritius"
}, {
    code: "YT",
    name: "Mayotte"
}, {
    code: "MX",
    name: "Mexico"
}, {
    code: "FM",
    name: "Micronesia, Federated States Of"
}, {
    code: "MD",
    name: "Moldova"
}, {
    code: "MC",
    name: "Monaco"
}, {
    code: "MN",
    name: "Mongolia"
}, {
    code: "ME",
    name: "Montenegro"
}, {
    code: "MS",
    name: "Montserrat"
}, {
    code: "MA",
    name: "Morocco"
}, {
    code: "MZ",
    name: "Mozambique"
}, {
    code: "MM",
    name: "Myanmar"
}, {
    code: "NA",
    name: "Namibia"
}, {
    code: "NR",
    name: "Nauru"
}, {
    code: "NP",
    name: "Nepal"
}, {
    code: "NL",
    name: "Netherlands"
}, {
    code: "AN",
    name: "Netherlands Antilles"
}, {
    code: "NC",
    name: "New Caledonia"
}, {
    code: "NZ",
    name: "New Zealand"
}, {
    code: "NI",
    name: "Nicaragua"
}, {
    code: "NE",
    name: "Niger"
}, {
    code: "NG",
    name: "Nigeria"
}, {
    code: "NU",
    name: "Niue"
}, {
    code: "NF",
    name: "Norfolk Island"
}, {
    code: "MP",
    name: "Northern Mariana Islands"
}, {
    code: "NO",
    name: "Norway"
}, {
    code: "OM",
    name: "Oman"
}, {
    code: "PK",
    name: "Pakistan"
}, {
    code: "PW",
    name: "Palau"
}, {
    code: "PS",
    name: "Palestinian Territory}, Occupied"
}, {
    code: "PA",
    name: "Panama"
}, {
    code: "PG",
    name: "Papua New Guinea"
}, {
    code: "PY",
    name: "Paraguay"
}, {
    code: "PE",
    name: "Peru"
}, {
    code: "PH",
    name: "Philippines"
}, {
    code: "PN",
    name: "Pitcairn"
}, {
    code: "PL",
    name: "Poland"
}, {
    code: "PT",
    name: "Portugal"
}, {
    code: "PR",
    name: "Puerto Rico"
}, {
    code: "QA",
    name: "Qatar"
}, {
    code: "RE",
    name: "Reunion"
}, {
    code: "RO",
    name: "Romania"
}, {
    code: "RU",
    name: "Russian Federation"
}, {
    code: "RW",
    name: "Rwanda"
}, {
    code: "BL",
    name: "Saint Barthelemy"
}, {
    code: "SH",
    name: "Saint Helena"
}, {
    code: "KN",
    name: "Saint Kitts And Nevis"
}, {
    code: "LC",
    name: "Saint Lucia"
}, {
    code: "MF",
    name: "Saint Martin"
}, {
    code: "PM",
    name: "Saint Pierre And Miquelon"
}, {
    code: "VC",
    name: "Saint Vincent And Grenadines"
}, {
    code: "WS",
    name: "Samoa"
}, {
    code: "SM",
    name: "San Marino"
}, {
    code: "ST",
    name: "Sao Tome And Principe"
}, {
    code: "SA",
    name: "Saudi Arabia"
}, {
    code: "SN",
    name: "Senegal"
}, {
    code: "RS",
    name: "Serbia"
}, {
    code: "SC",
    name: "Seychelles"
}, {
    code: "SL",
    name: "Sierra Leone"
}, {
    code: "SG",
    name: "Singapore"
}, {
    code: "SK",
    name: "Slovakia"
}, {
    code: "SI",
    name: "Slovenia"
}, {
    code: "SB",
    name: "Solomon Islands"
}, {
    code: "SO",
    name: "Somalia"
}, {
    code: "ZA",
    name: "South Africa"
}, {
    code: "GS",
    name: "South Georgia And Sandwich Isl."
}, {
    code: "ES",
    name: "Spain"
}, {
    code: "LK",
    name: "Sri Lanka"
}, {
    code: "SD",
    name: "Sudan"
}, {
    code: "SR",
    name: "Suriname"
}, {
    code: "SJ",
    name: "Svalbard And Jan Mayen"
}, {
    code: "SZ",
    name: "Swaziland"
}, {
    code: "SE",
    name: "Sweden"
}, {
    code: "CH",
    name: "Switzerland"
}, {
    code: "SY",
    name: "Syrian Arab Republic"
}, {
    code: "TW",
    name: "Taiwan"
}, {
    code: "TJ",
    name: "Tajikistan"
}, {
    code: "TZ",
    name: "Tanzania"
}, {
    code: "TH",
    name: "Thailand"
}, {
    code: "TL",
    name: "Timor-Leste"
}, {
    code: "TG",
    name: "Togo"
}, {
    code: "TK",
    name: "Tokelau"
}, {
    code: "TO",
    name: "Tonga"
}, {
    code: "TT",
    name: "Trinidad And Tobago"
}, {
    code: "TN",
    name: "Tunisia"
}, {
    code: "TR",
    name: "Turkey"
}, {
    code: "TM",
    name: "Turkmenistan"
}, {
    code: "TC",
    name: "Turks And Caicos Islands"
}, {
    code: "TV",
    name: "Tuvalu"
}, {
    code: "UG",
    name: "Uganda"
}, {
    code: "UA",
    name: "Ukraine"
}, {
    code: "AE",
    name: "United Arab Emirates"
}, {
    code: "GB",
    name: "United Kingdom"
}, {
    code: "US",
    name: "United States"
}, {
    code: "UM",
    name: "United States Outlying Islands"
}, {
    code: "UY",
    name: "Uruguay"
}, {
    code: "UZ",
    name: "Uzbekistan"
}, {
    code: "VU",
    name: "Vanuatu"
}, {
    code: "VE",
    name: "Venezuela"
}, {
    code: "VN",
    name: "Vietnam"
}, {
    code: "VG",
    name: "Virgin Islands, British"
}, {
    code: "VI",
    name: "Virgin Islands, U.S."
}, {
    code: "WF",
    name: "Wallis And Futuna"
}, {
    code: "EH",
    name: "Western Sahara"
}, {
    code: "YE",
    name: "Yemen"
}, {
    code: "ZM",
    name: "Zambia"
}, {
    code: "ZW",
    name: "Zimbabwe"
}]).constant("STRIPE_COUNTRIES", [{
    code: "AF",
    name: "Afghanistan"
}, {
    code: "AX",
    name: "??land Islands"
}, {
    code: "AL",
    name: "Albania"
}, {
    code: "DZ",
    name: "Algeria"
}, {
    code: "AS",
    name: "American Samoa"
}, {
    code: "AD",
    name: "Andorra"
}, {
    code: "AO",
    name: "Angola"
}, {
    code: "AI",
    name: "Anguilla"
}, {
    code: "AQ",
    name: "Antarctica"
}, {
    code: "AG",
    name: "Antigua and Barbuda"
}, {
    code: "AR",
    name: "Argentina"
}, {
    code: "AM",
    name: "Armenia"
}, {
    code: "AW",
    name: "Aruba"
}, {
    code: "AU",
    name: "Australia"
}, {
    code: "AT",
    name: "Austria"
}, {
    code: "AZ",
    name: "Azerbaijan"
}, {
    code: "BS",
    name: "Bahamas"
}, {
    code: "BH",
    name: "Bahrain"
}, {
    code: "BD",
    name: "Bangladesh"
}, {
    code: "BB",
    name: "Barbados"
}, {
    code: "BY",
    name: "Belarus"
}, {
    code: "BE",
    name: "Belgium"
}, {
    code: "BZ",
    name: "Belize"
}, {
    code: "BJ",
    name: "Benin"
}, {
    code: "BM",
    name: "Bermuda"
}, {
    code: "BT",
    name: "Bhutan"
}, {
    code: "BO",
    name: "Bolivia, Plurinational State of"
}, {
    code: "BQ",
    name: "Bonaire, Sint Eustatius and Saba"
}, {
    code: "BA",
    name: "Bosnia and Herzegovina"
}, {
    code: "BW",
    name: "Botswana"
}, {
    code: "BV",
    name: "Bouvet Island"
}, {
    code: "BR",
    name: "Brazil"
}, {
    code: "IO",
    name: "British Indian Ocean Territory"
}, {
    code: "BN",
    name: "Brunei Darussalam"
}, {
    code: "BG",
    name: "Bulgaria"
}, {
    code: "BF",
    name: "Burkina Faso"
}, {
    code: "BI",
    name: "Burundi"
}, {
    code: "KH",
    name: "Cambodia"
}, {
    code: "CM",
    name: "Cameroon"
}, {
    code: "CA",
    name: "Canada"
}, {
    code: "CV",
    name: "Cape Verde"
}, {
    code: "KY",
    name: "Cayman Islands"
}, {
    code: "CF",
    name: "Central African Republic"
}, {
    code: "TD",
    name: "Chad"
}, {
    code: "CL",
    name: "Chile"
}, {
    code: "CN",
    name: "China"
}, {
    code: "CX",
    name: "Christmas Island"
}, {
    code: "CC",
    name: "Cocos (Keeling) Islands"
}, {
    code: "CO",
    name: "Colombia"
}, {
    code: "KM",
    name: "Comoros"
}, {
    code: "CG",
    name: "Congo"
}, {
    code: "CD",
    name: "Congo, the Democratic Republic of the"
}, {
    code: "CK",
    name: "Cook Islands"
}, {
    code: "CR",
    name: "Costa Rica"
}, {
    code: "CI",
    name: "C??te d'Ivoire"
}, {
    code: "HR",
    name: "Croatia"
}, {
    code: "CU",
    name: "Cuba"
}, {
    code: "CW",
    name: "Cura??ao"
}, {
    code: "CY",
    name: "Cyprus"
}, {
    code: "CZ",
    name: "Czech Republic"
}, {
    code: "DK",
    name: "Denmark"
}, {
    code: "DJ",
    name: "Djibouti"
}, {
    code: "DM",
    name: "Dominica"
}, {
    code: "DO",
    name: "Dominican Republic"
}, {
    code: "EC",
    name: "Ecuador"
}, {
    code: "EG",
    name: "Egypt"
}, {
    code: "SV",
    name: "El Salvador"
}, {
    code: "GQ",
    name: "Equatorial Guinea"
}, {
    code: "ER",
    name: "Eritrea"
}, {
    code: "EE",
    name: "Estonia"
}, {
    code: "ET",
    name: "Ethiopia"
}, {
    code: "FK",
    name: "Falkland Islands (Malvinas)"
}, {
    code: "FO",
    name: "Faroe Islands"
}, {
    code: "FJ",
    name: "Fiji"
}, {
    code: "FI",
    name: "Finland"
}, {
    code: "FR",
    name: "France"
}, {
    code: "GF",
    name: "French Guiana"
}, {
    code: "PF",
    name: "French Polynesia"
}, {
    code: "TF",
    name: "French Southern Territories"
}, {
    code: "GA",
    name: "Gabon"
}, {
    code: "GM",
    name: "Gambia"
}, {
    code: "GE",
    name: "Georgia"
}, {
    code: "DE",
    name: "Germany"
}, {
    code: "GH",
    name: "Ghana"
}, {
    code: "GI",
    name: "Gibraltar"
}, {
    code: "GR",
    name: "Greece"
}, {
    code: "GL",
    name: "Greenland"
}, {
    code: "GD",
    name: "Grenada"
}, {
    code: "GP",
    name: "Guadeloupe"
}, {
    code: "GU",
    name: "Guam"
}, {
    code: "GT",
    name: "Guatemala"
}, {
    code: "GG",
    name: "Guernsey"
}, {
    code: "GN",
    name: "Guinea"
}, {
    code: "GW",
    name: "Guinea-Bissau"
}, {
    code: "GY",
    name: "Guyana"
}, {
    code: "HT",
    name: "Haiti"
}, {
    code: "HM",
    name: "Heard Island and McDonald Islands"
}, {
    code: "VA",
    name: "Holy See (Vatican City State)"
}, {
    code: "HN",
    name: "Honduras"
}, {
    code: "HK",
    name: "Hong Kong"
}, {
    code: "HU",
    name: "Hungary"
}, {
    code: "IS",
    name: "Iceland"
}, {
    code: "IN",
    name: "India"
}, {
    code: "ID",
    name: "Indonesia"
}, {
    code: "IR",
    name: "Iran, Islamic Republic of"
}, {
    code: "IQ",
    name: "Iraq"
}, {
    code: "IE",
    name: "Ireland"
}, {
    code: "IM",
    name: "Isle of Man"
}, {
    code: "IL",
    name: "Israel"
}, {
    code: "IT",
    name: "Italy"
}, {
    code: "JM",
    name: "Jamaica"
}, {
    code: "JP",
    name: "Japan"
}, {
    code: "JE",
    name: "Jersey"
}, {
    code: "JO",
    name: "Jordan"
}, {
    code: "KZ",
    name: "Kazakhstan"
}, {
    code: "KE",
    name: "Kenya"
}, {
    code: "KI",
    name: "Kiribati"
}, {
    code: "KP",
    name: "Korea, Democratic People's Republic of"
}, {
    code: "KR",
    name: "Korea, Republic of"
}, {
    code: "KW",
    name: "Kuwait"
}, {
    code: "KG",
    name: "Kyrgyzstan"
}, {
    code: "LA",
    name: "Lao People's Democratic Republic"
}, {
    code: "LV",
    name: "Latvia"
}, {
    code: "LB",
    name: "Lebanon"
}, {
    code: "LS",
    name: "Lesotho"
}, {
    code: "LR",
    name: "Liberia"
}, {
    code: "LY",
    name: "Libya"
}, {
    code: "LI",
    name: "Liechtenstein"
}, {
    code: "LT",
    name: "Lithuania"
}, {
    code: "LU",
    name: "Luxembourg"
}, {
    code: "MO",
    name: "Macao"
}, {
    code: "MK",
    name: "Macedonia, the Former Yugoslav Republic of"
}, {
    code: "MG",
    name: "Madagascar"
}, {
    code: "MW",
    name: "Malawi"
}, {
    code: "MY",
    name: "Malaysia"
}, {
    code: "MV",
    name: "Maldives"
}, {
    code: "ML",
    name: "Mali"
}, {
    code: "MT",
    name: "Malta"
}, {
    code: "MH",
    name: "Marshall Islands"
}, {
    code: "MQ",
    name: "Martinique"
}, {
    code: "MR",
    name: "Mauritania"
}, {
    code: "MU",
    name: "Mauritius"
}, {
    code: "YT",
    name: "Mayotte"
}, {
    code: "MX",
    name: "Mexico"
}, {
    code: "FM",
    name: "Micronesia, Federated States of"
}, {
    code: "MD",
    name: "Moldova, Republic of"
}, {
    code: "MC",
    name: "Monaco"
}, {
    code: "MN",
    name: "Mongolia"
}, {
    code: "ME",
    name: "Montenegro"
}, {
    code: "MS",
    name: "Montserrat"
}, {
    code: "MA",
    name: "Morocco"
}, {
    code: "MZ",
    name: "Mozambique"
}, {
    code: "MM",
    name: "Myanmar"
}, {
    code: "NA",
    name: "Namibia"
}, {
    code: "NR",
    name: "Nauru"
}, {
    code: "NP",
    name: "Nepal"
}, {
    code: "NL",
    name: "Netherlands"
}, {
    code: "NC",
    name: "New Caledonia"
}, {
    code: "NZ",
    name: "New Zealand"
}, {
    code: "NI",
    name: "Nicaragua"
}, {
    code: "NE",
    name: "Niger"
}, {
    code: "NG",
    name: "Nigeria"
}, {
    code: "NU",
    name: "Niue"
}, {
    code: "NF",
    name: "Norfolk Island"
}, {
    code: "MP",
    name: "Northern Mariana Islands"
}, {
    code: "NO",
    name: "Norway"
}, {
    code: "OM",
    name: "Oman"
}, {
    code: "PK",
    name: "Pakistan"
}, {
    code: "PW",
    name: "Palau"
}, {
    code: "PS",
    name: "Palestine, State of"
}, {
    code: "PA",
    name: "Panama"
}, {
    code: "PG",
    name: "Papua New Guinea"
}, {
    code: "PY",
    name: "Paraguay"
}, {
    code: "PE",
    name: "Peru"
}, {
    code: "PH",
    name: "Philippines"
}, {
    code: "PN",
    name: "Pitcairn"
}, {
    code: "PL",
    name: "Poland"
}, {
    code: "PT",
    name: "Portugal"
}, {
    code: "PR",
    name: "Puerto Rico"
}, {
    code: "QA",
    name: "Qatar"
}, {
    code: "RE",
    name: "R??union"
}, {
    code: "RO",
    name: "Romania"
}, {
    code: "RU",
    name: "Russian Federation"
}, {
    code: "RW",
    name: "Rwanda"
}, {
    code: "BL",
    name: "Saint Barth??lemy"
}, {
    code: "SH",
    name: "Saint Helena, Ascension and Tristan da Cunha"
}, {
    code: "KN",
    name: "Saint Kitts and Nevis"
}, {
    code: "LC",
    name: "Saint Lucia"
}, {
    code: "MF",
    name: "Saint Martin (French part)"
}, {
    code: "PM",
    name: "Saint Pierre and Miquelon"
}, {
    code: "VC",
    name: "Saint Vincent and the Grenadines"
}, {
    code: "WS",
    name: "Samoa"
}, {
    code: "SM",
    name: "San Marino"
}, {
    code: "ST",
    name: "Sao Tome and Principe"
}, {
    code: "SA",
    name: "Saudi Arabia"
}, {
    code: "SN",
    name: "Senegal"
}, {
    code: "RS",
    name: "Serbia"
}, {
    code: "SC",
    name: "Seychelles"
}, {
    code: "SL",
    name: "Sierra Leone"
}, {
    code: "SG",
    name: "Singapore"
}, {
    code: "SX",
    name: "Sint Maarten (Dutch part)"
}, {
    code: "SK",
    name: "Slovakia"
}, {
    code: "SI",
    name: "Slovenia"
}, {
    code: "SB",
    name: "Solomon Islands"
}, {
    code: "SO",
    name: "Somalia"
}, {
    code: "ZA",
    name: "South Africa"
}, {
    code: "GS",
    name: "South Georgia and the South Sandwich Islands"
}, {
    code: "SS",
    name: "South Sudan"
}, {
    code: "ES",
    name: "Spain"
}, {
    code: "LK",
    name: "Sri Lanka"
}, {
    code: "SD",
    name: "Sudan"
}, {
    code: "SR",
    name: "Suriname"
}, {
    code: "SJ",
    name: "Svalbard and Jan Mayen"
}, {
    code: "SZ",
    name: "Swaziland"
}, {
    code: "SE",
    name: "Sweden"
}, {
    code: "CH",
    name: "Switzerland"
}, {
    code: "SY",
    name: "Syrian Arab Republic"
}, {
    code: "TW",
    name: "Taiwan, Province of China"
}, {
    code: "TJ",
    name: "Tajikistan"
}, {
    code: "TZ",
    name: "Tanzania, United Republic of"
}, {
    code: "TH",
    name: "Thailand"
}, {
    code: "TL",
    name: "Timor-Leste"
}, {
    code: "TG",
    name: "Togo"
}, {
    code: "TK",
    name: "Tokelau"
}, {
    code: "TO",
    name: "Tonga"
}, {
    code: "TT",
    name: "Trinidad and Tobago"
}, {
    code: "TN",
    name: "Tunisia"
}, {
    code: "TR",
    name: "Turkey"
}, {
    code: "TM",
    name: "Turkmenistan"
}, {
    code: "TC",
    name: "Turks and Caicos Islands"
}, {
    code: "TV",
    name: "Tuvalu"
}, {
    code: "UG",
    name: "Uganda"
}, {
    code: "UA",
    name: "Ukraine"
}, {
    code: "AE",
    name: "United Arab Emirates"
}, {
    code: "GB",
    name: "United Kingdom"
}, {
    code: "US",
    name: "United States"
}, {
    code: "UM",
    name: "United States Minor Outlying Islands"
}, {
    code: "UY",
    name: "Uruguay"
}, {
    code: "UZ",
    name: "Uzbekistan"
}, {
    code: "VU",
    name: "Vanuatu"
}, {
    code: "VE",
    name: "Venezuela, Bolivarian Republic of"
}, {
    code: "VN",
    name: "Viet Nam"
}, {
    code: "VG",
    name: "Virgin Islands, British"
}, {
    code: "VI",
    name: "Virgin Islands, U.S."
}, {
    code: "WF",
    name: "Wallis and Futuna"
}, {
    code: "EH",
    name: "Western Sahara"
}, {
    code: "YE",
    name: "Yemen"
}, {
    code: "ZM",
    name: "Zambia"
}, {
    code: "ZW",
    name: "Zimbabwe"
}]), angular.module("pisignage", ["piConfig", "pisignage.controllers", "pisignage.services", "pisignage.directives", "pisignage.filters", "piassets.controllers", "piplaylist.controllers", "pinotice.controllers", "ui.bootstrap", "dndLists", "ui.router", "ngSanitize", "ngAnimate", "gettext"]).config(["$stateProvider", "$urlRouterProvider", "$locationProvider", "$httpProvider", function (e, a, t, s) {
    s.interceptors.push("onlineStatusInterceptor"), a.otherwise("/"), e.state("home", {
        url: "/",
        templateUrl: "/app/partials/home/_pihome.html",
        controller: "HomeCtrl"
    }).state("playlists", {
        url: "/playlists",
        templateUrl: "/app/partials/playlists/_list.html",
        controller: "PlaylistsCtrl"
    }).state("playlists_edit", {
        url: "/playlists/edit",
        templateUrl: "/app/partials/playlists/_edit.html",
        controller: "PlaylistsEditCtrl",
        showBackButton: !0
    }).state("playlists_details", {
        url: "/playlists/details/:file",
        templateUrl: "/app/partials/playlists/_playlist.html",
        controller: "PlaylistViewCtrl",
        showBackButton: !0
    }).state("playlists_schedule", {
        url: "/playlists/schedules/:file",
        templateUrl: "/app/partials/playlists/_calendar.html",
        controller: "PlaylistCalendarCtrl",
        showBackButton: !0
    }).state("settings", {
        url: "/settings",
        templateUrl: "/app/partials/_settings.html",
        controller: "SettingsCtrl"
    }).state("reports", {
        url: "/reports",
        templateUrl: "/app/partials/_reports.html",
        controller: "ReportsCtrl"
    }).state("assets", {
        url: "/assets",
        templateUrl: "/app/partials/assets/_assets.html",
        controller: "AssetsCtrl"
    }).state("assets_edit", {
        url: "/assets/edit",
        templateUrl: "/app/partials/assets/_edit.html",
        controller: "AssetsEditCtrl",
        showBackButton: !0
    }).state("assets_notice", {
        url: "/assets/notices/:file",
        templateUrl: "/app/partials/assets/_notice.html",
        controller: "NoticeCtrl",
        showBackButton: !0
    }).state("assets_links", {
        url: "/assets/links/:file",
        templateUrl: "/app/partials/assets/_linkFile.html",
        controller: "LinksCtrl",
        showBackButton: !0
    }).state("assets_details", {
        url: "/assets/details/:file",
        templateUrl: "/app/partials/assets/_details.html",
        controller: "AssetViewCtrl",
        showBackButton: !0
    }), t.html5Mode({
        enabled: !0,
        requireBase: !1
    }), angular.lowercase = function (e) {
        return e.toLowerCase()
    }, String.prototype.trunc = String.prototype.trunc || function (e) {
        return this.length > e ? this.substr(0, e - 1) + "..." : this.toString()
    }
}]).run(["$rootScope", "piCollaboratorRights", function (e, a) {
    e.collaborator = {
        rights: a
    }
}]), angular.module("pisignage.controllers", []).controller("NavbarCtrl", ["$scope", "$rootScope", "$http", "$location", "$window", "$state", "$uibModal", "piUrls", function (s, e, a, t, l, n, i, o) {
    l.navigator.userAgent.toLowerCase();
    s.goBack = function () {
        l.history.back()
    }, s.goHome = function () {
        t.path("/")
    }, s.doSearch = function () {
        s.showSearchField = !s.showSearchField, s.showSearchField || (s.search = null)
    }, e.$on("$stateChangeStart", function (e, a, t) {
        s.showSearchButton = !1, s.showBackButton = a.showBackButton
    }), a.get(o.getStatus, {}).then(function (e) {
        e = e.data;
        s.cpuSerialNumber = e.data.cpuSerialNumber.slice(0, 4) + "-" + e.data.cpuSerialNumber.slice(4, 8) + "-" + e.data.cpuSerialNumber.slice(8, 12) + "-" + e.data.cpuSerialNumber.slice(12, 16)
    }, function (e) { })
}]).controller("HomeCtrl", ["$scope", "$http", "$uibModal", "commands", "piUrls", "gettextCatalog", "$interval", "gettext", function (t, a, e, s, l, n, i, o) {
    function r() {
        a.get(l.getStatus, {}).then(function (e) {
            e = e.data;
            t.diskSpaceUsed = e.data.diskSpaceUsed, t.diskSpaceAvailable = e.data.diskSpaceAvailable, t.playlistOn = e.data.playlistOn, t.duration = e.data.duration, t.tvStatus = e.data.tvStatus, t.currentPlaylist = e.data.currentPlaylist, t.currentPlayingFile = e.data.currentPlayingFile, t.currentDebugLevel = e.data.currentDebugLevel
        }, function (e) { })
    }
    n.setCurrentLanguage("en"), t.operationInProgress = !1, a.get(l.playlists, {}).then(function (e) {
        e = e.data;
        e.success && (t.playlists = e.data, t.playlistsNames = t.playlists.map(function (e) {
            return e.name
        }))
    }, function (e) { }), r(), t.interval = i(function () {
        r()
    }, 3e4), t.pausePlayButtonPaused = !1, t.playlistMedia = function (e) {
        a.post(l.playlistMedia + e).then(function (e) {
            t.pausePlayButtonPaused = e.data.data.isPaused
        }, function (e) {
            console.log("Error:" + JSON.stringify(e, null, 2))
        })
    }, t.play = function (e) {
        t.operationInProgress = !0, a.post(l.play + (e || "default"), {
            play: !0,
            pltype: "play-once"
        }).then(function (e) {
            e.data;
            r(), t.operationInProgress = !1
        }, function (e) { })
    }, t.stop = function () {
        t.operationInProgress = !0, a.post(l.play + (t.currentPlaylist || "default"), {
            stop: !0
        }).then(function (e) {
            e.data;
            r(), t.operationInProgress = !1
        }, function (e) { })
    }, t.debugLevels = ["error", "warn", "info", "debug"], t.selectDebugLevel = function (e) {
        a.post(l.debug, {
            level: e
        }).then(function (e) {
            t.currentDebugLevel = e.data.data
        }, function (e) { })
    }, t.downloadLog = function (e) {
        t.statusMessage = o("Request sent , Please wait... "), a.get(l.settings + "log?file=" + (e = e || "forever_out.log"), {
            responseType: "blob"
        }).then(function (e) {
            var a = e.data;
            a && !1 === a.success ? t.statusMessage = o(a.stat_message) : (t.statusMessage = o("Saving the file"), a = new Blob([a], {
                type: "text/plain"
            }), e = e.headers("content-disposition"), saveAs(a, e))
        }, function (e) {
            t.statusMessage = o("Error in Downloading log files, ") + e.status
        })
    }, t.shellPopup = function () {
        t.msg = {
            cmd: "",
            err: ""
        }, t.modal = e.open({
            templateUrl: "/app/templates/playerShellPopup.html",
            scope: t
        }), t.snapshot(), t.execute = function () {
            t.msg.err = o("Please wait..."), t.msg.stderr = null, t.msg.stdout = null, s.save(t.msg.cmd), a.post(l.pishell, {
                cmd: t.msg.cmd
            }).then(function (e) {
                e = e.data;
                t.msg.err = e.data.err, t.msg.stderr = e.data.stderr, t.msg.stdout = e.data.stdout
            }, function (e) { })
        }, t.disable = function () {
            t.msg.cmd.length
        }, t.getOldEntry = function (e) {
            38 == e.keyCode ? t.msg.cmd = s.previous() : 40 == e.keyCode && (t.msg.cmd = s.next())
        }, t.modal.result.finally(function () {
            t.modal = null
        })
    }, t.snapshot = function () {
        a.get(l.snapshot).then(function (e) {
            var a = e.data.data.data,
                e = e.data.data.lastTaken;
            t.lastTaken = e, t.img64 = a
        })
    }
}]).controller("ReportsCtrl", ["$scope", function (e) { }]).controller("SettingsCtrl", ["$scope", "$rootScope", "$location", "piUrls", "$http", "$uibModal", "$stateParams", "$state", "gettext", "piPopup", "$timeout", "$window", "COUNTRIES", function (t, e, a, s, l, n, i, o, r, d, c, m, u) {
    t.countries = u, t.settings = {
        localName: "",
        note: ""
    }, t.disableButtons = {}, t.statusMessage = {}, l.get(s.settings, {}).then(function (e) {
        var a, e = e.data;
        e.success && (t.settings = e.data, t.settings.localName = t.settings.localName || t.settings.name, t.availableInterfaces = [t.settings.ipsettings], t.settings.ipsettingsWifi && t.availableInterfaces.push(t.settings.ipsettingsWifi), t.settings.selectedInterface = t.settings.ipsettings, t.settings.wifi.country = t.countries.find(function (e) {
            return e.code === t.settings.wifi.countryCode
        }), e = function (e) {
            e = e.split(":");
            return 2 == e.length ? {
                h: parseInt(e[0]),
                m: parseInt(e[1])
            } : 1 == e.length ? {
                h: 0,
                m: parseInt(e[0])
            } : 2 < e.length ? {
                h: parseInt(e[e.length - 2]),
                m: parseInt(e[e.length - 1])
            } : void 0
        }, t.settings.sleep && t.settings.sleep.ontime && (t.settings.sleep.ontimeObj = new Date(0), a = e(t.settings.sleep.ontime), t.settings.sleep.ontimeObj.setHours(a.h), t.settings.sleep.ontimeObj.setMinutes(a.m)), t.settings.sleep && t.settings.sleep.offtime && (t.settings.sleep.offtimeObj = new Date(0), a = e(t.settings.sleep.offtime), t.settings.sleep.offtimeObj.setHours(a.h), t.settings.sleep.offtimeObj.setMinutes(a.m)))
    }, function (e) {
        d.status({
            msg: r("No response, player may be rebooting to change settings: ") + e.status
        })
    }), t.saveName = function () {
        l.post(s.settings + "hostname", t.settings).then(function (e) {
            e.data.success && (t.settings_name.$setPristine(), t.statusMessage.saveName = r("Changes have been saved"))
        }, function (e) {
            t.statusMessage.saveName = r("No response, player may be rebooting to change settings: ") + e.status
        })
    }, t.pbHandler = function (e) {
        "DONE" == e && a.path("/")
    }, t.swUpdate = function () {
        t.msg = {
            curVer: t.settings.version,
            newVer: t.settings.currentVersion.version
        }, t.currentVersion = {
            version: t.settings.currentVersion.version
        }, t.modal = n.open({
            templateUrl: "/app/templates/swUpdatePopup.html",
            scope: t
        })
    }, t.confirmUpdate = function () {
        l.post(s.piswupdate, {}).then(function (e) {
            e.data;
            t.disableButtons.swUpdate = !0, t.statusMessage.swUpdate = r("Player will update the software & reboot"), t.modal.close(), c(function () {
                m.location.reload()
            }, 5e3)
        }, function (e) {
            t.statusMessage.swUpdate = r("No response, player may be rebooting to change settings: ") + e.status, t.modal.close()
        })
    }, t.saveIp = function () {
        t.networkform.$setPristine(), t.statusMessage.saveIp = r("Network update in Progress ...."), l.post(s.settings + "ethernet", t.settings).then(function (e) {
            e.data.success ? (t.statusMessage.saveIp = r("Player will update the IP settings & reboot"), c(function () {
                m.location.reload()
            }, 5e3)) : (t.networkform.$setDirty(), t.statusMessage.saveIp = r("Network interface file I/O error"))
        }, function (e) {
            t.networkform.$setDirty(), t.statusMessage.saveIp = r("No response, player may be rebooting to change settings: ") + e.status
        })
    }, t.saveWifi = function () {
        t.wifiform.$setPristine(), t.statusMessage.saveWifi = r("WiFi update in Progress ...."), t.settings.wifi.countryCode = t.settings.wifi.country && t.settings.wifi.country.code, l.post(s.settings + "wifi", t.settings).then(function (e) {
            e.data.success ? t.statusMessage.saveWifi = r("Player has updated the wifi settings") : (t.wifiform.$setDirty(), t.statusMessage.saveWifi = r("Wifi interface file I/O error"))
        }, function (e) {
            t.wifiform.$setDirty(), t.statusMessage.saveWifi = r("No response, player may be rebooting to change settings: ") + e.status
        })
    }, t.serverChange = function () {
        t.settings.server.media = t.settings.server.config, l.post(s.settings + "servername", t.settings).then(function (e) {
            e.data.success ? (t.serverform.$setPristine(), t.statusMessage.serverChange = r("Server name has been reconfigured, player will reload the program"), c(function () {
                m.location.reload()
            }, 5e3)) : t.statusMessage.serverChange = r("Error in writing to configuration file")
        }, function (e) {
            t.statusMessage.serverChange = r("No response, player may be rebooting to change settings: ") + e.status
        })
    }, t.resize = function (e) {
        t.settings.overscan.horizontal = parseInt(t.settings.overscan.horizontal, 10), t.settings.overscan.vertical = parseInt(t.settings.overscan.vertical, 10), l.post(s.settings + "overscan", t.settings).then(function (e) {
            e.data.success ? (t.overscanform.$setPristine(), t.statusMessage.resize = r("Player will reboot to effect the changes"), c(function () {
                m.location.reload()
            }, 5e3)) : t.statusMessage.resize = r("Error in writing to configuration file")
        }, function (e) {
            t.statusMessage.resize = r("No response, player may be rebooting to change settings: ") + e.status
        })
    }, t.orientation = function () {
        l.post(s.settings + "orientation", t.settings).then(function (e) {
            e.data.success ? (t.displayform.$setPristine(), t.statusMessage.orientation = r("Player will reboot to effect the changes"), c(function () {
                m.location.reload()
            }, 5e3)) : t.statusMessage.orientation = r("Error in writing to configuration file")
        }, function (e) {
            t.statusMessage.orientation = r("No response, player may be rebooting to change settings: ") + e.status
        })
    }, t.userChange = function () {
        l.post(s.settings + "user", t.settings).then(function (e) {
            e.data.success ? (t.userform.$setPristine(), t.statusMessage.userChange = r("User settings has been written, player will reload the program"), c(function () {
                m.location.reload()
            }, 5e3)) : t.statusMessage.userChange = r("Error in writing to configuration file")
        }, function (e) {
            t.statusMessage.userChange = r("No response, player may be rebooting to change settings: ") + e.status
        })
    }, t.sleepEnable = function () {
        var e, a;
        t.settings.sleep && t.settings.sleep.ontimeObj && (a = t.settings.sleep.ontimeObj.getHours(), t.settings.sleep.ontime = a < 10 ? "0" + a : "" + a, e = t.settings.sleep.ontimeObj.getMinutes(), t.settings.sleep.ontime += e < 10 ? ":0" + e : ":" + e), t.settings.sleep && t.settings.sleep.offtimeObj && (a = t.settings.sleep.offtimeObj.getHours(), t.settings.sleep.offtime = a < 10 ? "0" + a : "" + a, e = t.settings.sleep.offtimeObj.getMinutes(), t.settings.sleep.offtime += e < 10 ? ":0" + e : ":" + e), l.post(s.settings + "sleep", t.settings).then(function (e) {
            e.data;
            t.scheduleform.$setPristine(), t.statusMessage.sleepEnable = r("Settings have been saved")
        }, function (e) {
            t.statusMessage.sleepEnable = r("No response, player may be rebooting to change settings: ") + e.status
        })
    }, t.scanNetwork = function () {
        t.modalmsg = "searching networks ... ", t.wifiform.$pristine = !1, t.modal = n.open({
            templateUrl: "/app/templates/wifiNetworks.html",
            scope: t
        }), l.get(s.settings + "wifiscan").then(function (e) {
            e = e.data;
            e.success ? (t.modalmsg = null, t.networks = e.data) : t.modalmsg = "An error occured while searching"
        }, function (e) {
            console.log(e.status)
        })
    }, t.clearApMode = function () {
        t.settings.wifi.ssid && (t.settings.wifi.apmode = "NO")
    }, t.clearWifiName = function () {
        t.settings.wifi.ssid = null
    }, t.changeOmxVolume = function () {
        t.settings.omxVolume = parseInt(t.settings.omxVolume, 10), l.post(s.settings + "omxVolume", t.settings).then(function (e) {
            e.data;
            t.volumeform.$setPristine(), t.statusMessage.changeOmxVolume = r("Settings have been saved")
        }, function (e) {
            t.statusMessage.changeOmxVolume = r("No response, player may be rebooting to change settings: ") + e.status
        })
    }, t.close = function () {
        t.modal.close()
    }, t.seleted = function (e) {
        t.settings.wifi = t.settings.wifi || {}, t.settings.wifi.ssid = e, t.settings.wifi.pass = null, t.modal.close()
    }, t.factoryReset = function () {
        t.modal = n.open({
            templateUrl: "/app/templates/factoryResetPopUp.html",
            scope: t
        }), t.ok = function () {
            l.post(s.settings + "reset", {}).then(function (e) {
                e.data.success ? (t.modal.close(), t.statusMessage.factoryReset = r("Changed settings to factory default & rebooting the player"), c(function () {
                    m.location.reload()
                }, 5e3)) : t.statusMessage.factoryReset = r("Error in executing factory reset command")
            }, function (e) {
                t.statusMessage.factoryReset = r("No response, player may be rebooting to change settings: ") + e.status
            })
        }
    }, t.editSettingsFile = function () {
        t.isObject = angular.isObject, l.get(s.settingsfile, {}).then(function (e) {
            e = e.data;
            e.success && (t.settingsData = e.data)
        }, function (e) {
            d.status({
                msg: r("No response, player may be rebooting to change settings: ") + e.status
            })
        })
    }, t.saveSettingsFile = function () {
        l.post(s.settingsfile, t.settingsData).then(function (e) {
            e.data;
            t.statusMessage.settingsFile = r("Settings file has been saved and server will restart")
        }, function (e) {
            t.statusMessage.settingsFile = r("No response, player may be rebooting to change settings: ") + e.status
        })
    }
}]), angular.module("piassets.controllers", []).controller("AssetsCtrl", ["$scope", "$rootScope", "$location", "piUrls", "$http", "$uibModal", "selectedLabel", "pipopover", "piConstants", "fileUploader", "$window", "gettext", "filterFilter", "assignToPlaylist", "piPopup", "$state", function (o, e, s, l, n, t, i, a, r, d, c, m, u, p, f, g) {
    o.userIsAdmin = e.currentUser && e.currentUser.superRole, (o.selLabel = i).selectedLabel = null, o.dragStatus = {
        inProgress: !1,
        transferItem: ""
    }, o.hideGcal = !0, o.status = {
        plainView: !0,
        plainViewAlpha: !0,
        unassignedView: !0
    }, o.adminServer = !1, o.filteredFiles = {
        items: []
    };
    var b = null;

    function v(e) {
        e.forEach(function (e) {
            e.isIntersecting && (e.target.src = e.target.dataset.src, b.unobserve(e.target))
        })
    }

    function h() {
        n.get(l.files, {}).then(function (e) {
            e = e.data;
            if (e.success) {
                if (o.sizes = e.data.sizes, o.sizes.total && o.sizes.used > o.sizes.total && (o.sizes.maxSizeExceeded = !0), o.files = e.data.files, y(), e.data.dbdata && 1 != e.data.player) {
                    for (var a in o.adminServer = !0, o.filesDetails = {}, Object.keys(i.labelsCount).forEach(function (e) {
                        i.labelsCount[e] = 0
                    }), e.data.dbdata.forEach(function (e) {
                        0 <= o.files.indexOf(e.name) && (o.filesDetails[e.name] = e)
                    }), o.filesDetails) o.filesDetails[a].labels.forEach(function (e) {
                        i.labelsCount[e] = (i.labelsCount[e] || 0) + 1
                    });
                    o.infiniteScrollLength = 1e4
                }
                o.adminServer && n.get(l.groups).then(function (e) {
                    e = e.data;
                    if (e.success)
                        for (var a in e.data.forEach(function (e) {
                            o.groups[e._id] = e.name
                        }), o.filesDetails) o.filesDetails[a].groupNames = function (e) {
                            var a;
                            if (e) return a = " ", e.forEach(function (e) {
                                o.groups[e] && (a += o.groups[e] + ",")
                            }), a.slice(0, -1)
                        }(o.filesDetails[a].groupIds)
                }, function (e) { }), o.files.forEach(function (t) {
                    o.filesDetails[t] && (t.includes(".weblink") || t.includes(".link") || t.includes(".tv") || t.includes(".mrss") || t.includes(".local") || t.includes(".txt")) && (t.includes(".txt") || (o.filesDetails[t].type = t.split(".")[1]), n.get(l.links + t).then(function (e) {
                        if (e.data) try {
                            var a = JSON.parse(e.data.data.data);
                            t.includes("txt") ? o.filesDetails[t].message = a.message : o.filesDetails[t].link = a.link
                        } catch (e) {
                            console.log("error in parsing link file: " + e)
                        }
                    }))
                })
            }
        }, function (e) { })
    }
    o.$on("$destroy", function () {
        b.disconnect()
    }), o.$watchCollection("filteredFiles.items", function () {
        console.log("asset list changed due to filter"), b && b.disconnect(), b = new IntersectionObserver(v), angular.element(document).ready(function () {
            document.querySelectorAll(".lazy-load").forEach(function (e) {
                b.observe(e)
            })
        })
    }), h(), o.upload = {}, o.newLabel = {
        mode: g.current.data && g.current.data.labelMode
    }, o.upload.started = function (e) {
        o.msg = {
            title: m("Upload"),
            msg: m("Please Wait"),
            disable: !0,
            btnTxt: m("Uploading"),
            dismiss: !0
        }, o.modal = t.open({
            templateUrl: "/app/templates/uploadPopup.html",
            scope: o,
            backdrop: "static",
            keyboard: !1
        })
    }, o.upload.progress = function (e) {
        o.msg.msg = e + m("% done")
    }, o.upload.done = function (e, a) {
        o.uploadedFiles = e, a.data && a.data.forEach(function (e, a) {
            o.uploadedFiles[a].name = e.name, -1 == o.files.indexOf(e.name) && o.files.push(e.name)
        }), a.success ? o.msg = {
            title: m("Upload"),
            msg: m("Upload Complete"),
            disable: !1,
            btnTxt: m("Continue"),
            dismiss: !1
        } : o.msg = {
            title: m("Upload Error "),
            msg: a.stat_message,
            disable: !1,
            btnTxt: m("Dismiss"),
            dismiss: !0
        }
    }, o.upload.selectedLabels = [], o.upload.labels = [], o.addLabel = function () {
        n.post(l.labels, o.newLabel).then(function (e) {
            e = e.data;
            e.success ? (o.upload.selectedLabels.push(e.data.name), o.upload.labels.push(e.data), o.newLabel = {
                mode: g.current.data && g.current.data.labelMode
            }, o.msg.error = null) : o.msg.error = m("Category exists")
        }, function (e) { })
    }, o.upload.modalOk = function () {
        if (o.msg.dismiss) return o.modal.close(), void h();
        o.msg = {
            title: m("Upload"),
            msg: m("Processing in Progress..."),
            disable: !0,
            btnTxt: m("Please Wait"),
            dismiss: !0
        }, n.post(l.filespostupload, {
            files: o.uploadedFiles,
            categories: o.upload.selectedLabels
        }).then(function (e) {
            e = e.data;
            e.success ? o.msg = {
                title: m("Queued in for Processing"),
                msg: m("If there is a need for conversion, it will take few minutes to appear in assets"),
                disable: !1,
                btnTxt: m("OK"),
                dismiss: !0
            } : o.msg = {
                title: m("Upload"),
                msg: m("Processing Error..."),
                disable: !1,
                btnTxt: m("Dismiss"),
                error: e.stat_message,
                dismiss: !0
            }
        }, function (e) {
            o.msg = {
                title: m("Upload"),
                msg: m("HTTP Post Error"),
                disable: !1,
                btnTxt: m("Dismiss"),
                dismiss: !0
            }
        })
    }, o.upload.error = function (e, a, t) {
        o.modal || o.upload.started(), o.msg = {
            title: m("Upload"),
            msg: m("Upload Error"),
            disable: !1,
            btnTxt: m("Dismiss"),
            error: a + ": " + t,
            dismiss: !0
        }
    }, o.upload.abort = function () {
        d.cancel()
    }, o.loadAsset = function (e) {
        e.match(/.gcal$/i) && o.hideGcal || (e.match(/^custom_layout.*html$/) ? f.status({
            msg: e + " is a custom layout template file, preview is not available"
        }) : e.match(/.html$/i) ? s.path("/assets/notices/" + e) : e.match(/.(tv|stream|link|weblink|mrss|txt|radio|local)$/i) ? s.path("/assets/links/" + e) : e.match(/.(zip)/i) ? f.status({
            msg: e + " - preview is not available"
        }) : s.path("/assets/details/" + e))
    }, o.pbHandler = function (e) {
        "EDIT" == e && s.path("/assets/edit")
    }, o.label_search = function (e) {
        return !i.selectedLabel || o.filesDetails[e.filename || e] && 0 <= o.filesDetails[e.filename || e].labels.indexOf(i.selectedLabel)
    }, o.sortingFn = function (e) {
        return new Date(o.filesDetails[e.filename || e] ? o.filesDetails[e.filename || e].createdAt : 0).getTime()
    }, o.loadMore = function () {
        o.infiniteScrollLength += 25
    }, o.customPl = {
        plfiles: [],
        playlist: []
    };
    var y = function () {
        n.get(l.playlists, {}).then(function (e) {
            e = e.data;
            e.success && (o.unassigned = [], o.customPl.playlist = e.data)
        }, function (e) { })
    };
    o.ext = "", o.setExt = function (e) {
        o.ext = e
    }, o.extension = function (e) {
        switch (e = e.filename || e, o.ext) {
            case "v":
                return e.match(r.videoRegex);
            case "i":
                return e.match(r.imageRegex);
            case "n":
                return e.match(r.noticeRegex);
            case "t":
                return e.match(r.txtFileRegex);
            case "p":
                return e.match(r.pdffileRegex);
            default:
                return e
        }
    }, o.linkTypes = [{
        name: m("Livestreaming or YouTube"),
        ext: ".tv"
    }, {
        name: m("Streaming"),
        ext: ".stream"
    }, {
        name: m("Audio Streaming"),
        ext: ".radio"
    }, {
        name: m("Web Link(embedded, shows in an iframe)"),
        ext: ".link"
    }, {
        name: m("Web Page (opens a new browser for CORS support)"),
        ext: ".weblink"
    }, {
        name: m("Media RSS"),
        ext: ".mrss"
    }, {
        name: m("Message"),
        ext: ".txt"
    }, {
        name: m("Local Folder/File"),
        ext: ".local"
    }], o.urlLink = {
        name: "",
        type: o.linkTypes[0],
        link: "",
        duration: null,
        hideTitle: "title"
    }, o.linksPopUp = function (a) {
        o.urlLink.type = a ? _.find(o.linkTypes, function (e) {
            return e.ext.slice(1) == a
        }) : o.linkTypes[0], o.urlLink.zoom = 1, o.linkCategories = [], o.modal = t.open({
            templateUrl: "/app/templates/linkPopUp.html",
            scope: o
        })
    }, o.saveDetails = function () {
        o.urlLink.type = o.urlLink.type.ext, n.post(l.links, {
            details: o.urlLink,
            categories: o.linkCategories
        }).then(function (e) {
            e.data.success && (o.modal.close(), c.location.reload())
        }, function (e) {
            o.errorMessage = e.status
        })
    }, o.delete = function (a) {
        f.confirm(a, function () {
            n.delete(l.files + encodeURIComponent(a)).then(function (e) {
                e.data.success && o.files.splice(o.files.indexOf(a), 1)
            }, function (e) { })
        })
    }, o.filtered = {
        selectAll: !1,
        selected: {},
        msg: ""
    }, o.toggleSelection = function () {
        o.files.forEach(function (e) {
            o.label_search(e) && (!o.search || -1 < e.indexOf(o.search)) && o.extension(e) && (o.filtered.selected[e] = o.filtered.selectAll)
        })
    }, o.groups = {}, o.selectedGroups = [], o.getCsvAssets = function () {
        o.assetsFile = "Assets" + (new Date).toISOString().replace(/T/, "").replace(/\..+/, "") + ".csv";
        var i = [];
        return i.push(["Name", "Details", "Type", "size", "Resolution", "Playlists", "uploaded"]), o.files.forEach(function (e) {
            var a, t, s, l, n;
            n = o.filesDetails[e] ? (n = o.filesDetails[e].type || " ", a = o.filesDetails[e].size, t = o.filesDetails[e].resolution ? o.filesDetails[e].resolution.width + "X" + o.filesDetails[e].resolution.height : " ", s = o.filesDetails[e].playlists.join(",") || " ", l = o.filesDetails[e].createdAt.split("T")[0] || " ", [e, "text" == n ? o.filesDetails[e].message : o.filesDetails[e].link || " ", n, a, t, s, l]) : [e], i.push(n)
        }), i
    }, o.doBulkOperation = function (e) {
        o.bulkSelectedFiles = [], o.adminServer && 1 === Object.keys(o.filtered.selected).length ? o.upload.selectedLabels = o.filesDetails[Object.keys(o.filtered.selected)[0]].labels.slice() : o.upload.selectedLabels = [], Object.keys(o.filtered.selected).forEach(function (e) {
            o.filtered.selected[e] && o.bulkSelectedFiles.push(e)
        }), o.filtered = {
            selectAll: !1,
            selected: {},
            msg: ""
        }, o.bulkSelectedFiles.length ? o.operation = e : o.operation = null, o.newLabel = {
            mode: g.current.data && g.current.data.labelMode
        }, o.msg = {}, o.bulkModal = t.open({
            templateUrl: "/app/templates/bulkAssetsOperation.html",
            scope: o
        })
    }, o.groupToggle = function (e) {
        var a = o.selectedGroups.indexOf(e); - 1 < a ? o.selectedGroups.splice(a, 1) : o.selectedGroups.push(e)
    }, o.proceed = function () {
        var s = 0;
        async.eachSeries(o.bulkSelectedFiles, function (a, t) {
            switch (o.operation) {
                case "delete":
                    n.delete(l.files + encodeURIComponent(a)).then(function (e) {
                        e.data.success && (o.files.splice(o.files.indexOf(a), 1), s += 1), t()
                    }, function (e) {
                        t()
                    });
                    break;
                case "assign":
                    if (!o.adminServer) return t("not admin");
                    o.filesDetails[a].labels = o.upload.selectedLabels, n.post(l.files + encodeURIComponent(a), {
                        dbdata: o.filesDetails[a]
                    }).then(function (e) {
                        e = e.data;
                        e.success && (o.filesDetails[a] = e.data, s += 1), t()
                    }, function (e) {
                        t()
                    });
                    break;
                case "group":
                    if (!o.adminServer) return t("not admin");
                    o.filesDetails[a] ? (o.filesDetails[a].groupIds = o.selectedGroups, n.post(l.files + encodeURIComponent(a), {
                        dbdata: o.filesDetails[a]
                    }).then(function (e) {
                        e = e.data;
                        e.success && (o.filesDetails[a] = e.data, s += 1), t()
                    }, function (e) {
                        t()
                    })) : t()
            }
        }, function () {
            for (var e in Object.keys(i.labelsCount).forEach(function (e) {
                i.labelsCount[e] = 0
            }), o.filesDetails) o.filesDetails[e].labels.forEach(function (e) {
                i.labelsCount[e] = (i.labelsCount[e] || 0) + 1
            });
            o.filtered.msg = s + " files processed"
        })
    }, o.assignAsset = function (e) {
        p.popUp(e, o.customPl.playlist, o.filesDetails && o.filesDetails[e] ? o.filesDetails[e].duration : null)
    }, o.scheduleValidity = function (e) {
        o.forAsset = e;
        e = o.filesDetails[o.forAsset] && o.filesDetails[o.forAsset].validity || {
            enable: !1
        };
        e.startdate && (e.startdate = new Date(e.startdate)), e.enddate && (e.enddate = new Date(e.enddate)), o.today = (new Date).toISOString().split("T")[0], o.$watch("filesDetails[forAsset].validity.startdate", function (e, a) {
            !e || a && e.getTime() == a.getTime() || (o.filesDetails[o.forAsset].validity.starthour = 0, a = new Date(e), o.endday = a.toISOString().split("T")[0], (!o.filesDetails[o.forAsset].validity.enddate || e > o.filesDetails[o.forAsset].validity.enddate) && (o.filesDetails[o.forAsset].validity.enddate = a, o.filesDetails[o.forAsset].validity.endhour = 24))
        }), o.scheduleValidityModal = t.open({
            templateUrl: "/app/templates/scheduleValidity.html",
            scope: o,
            keyboard: !1
        })
    }, o.saveValidity = function () {
        n.post(l.files + encodeURIComponent(o.forAsset), {
            dbdata: o.filesDetails[o.forAsset]
        }).then(function (e) {
            e.data.success && o.scheduleValidityModal.close()
        }, function (e) { })
    }, o.loadCategory = function () {
        o.labelModal = t.open({
            templateUrl: "/app/partials/home/_labels.html",
            controller: "LabelsCtrl",
            scope: o
        })
    }, o.playAsset = function (e) {
        a.showPlayPopover(e, !1)
    }, o.download = function (t, e) {
        t.match(/.(tv|stream|link|weblink|mrss|radio|local)$/i) && f.status({
            msg: "Links can not be downloaded"
        }).result.finally(function () { }), n.get(l.files + t, {}).then(function (e) {
            var a, e = e.data;
            e.success ? ((a = document.createElement("a")).setAttribute("href", e.data.path), a.setAttribute("download", t), a.style.display = "none", document.body.appendChild(a), a.click(), document.body.removeChild(a)) : f.status({
                msg: "Unable to fetch the Asset"
            }).result.finally(function () {
                s.path("/assets")
            })
        }, function (e) { })
    }
}]).controller("AssetViewCtrl", ["$scope", "$rootScope", "$http", "piUrls", "$stateParams", "$location", "piPopup", "assignToPlaylist", "$window", function (a, e, t, s, l, n, i, o, r) {
    function d(e) {
        e.preventDefault()
    }
    1 == e.disableDownload ? r.addEventListener("contextmenu", d) : r.removeEventListener("contextmenu", d), t.get(s.files + l.file).then(function (e) {
        e = e.data;
        e.success ? (a.filedetails = e.data, t.get(s.playlists, {}).then(function (e) {
            e = e.data;
            e.success && (a.playlists = e.data)
        }, function (e) {
            console.log("Error in fetching playlist List")
        })) : i.status({
            msg: "Unable to fetch the asset"
        }).result.finally(function () {
            n.path("/assets")
        })
    }, function (e) { }), a.save = function () {
        t.post(s.files + encodeURIComponent(l.file), {
            dbdata: a.filedetails.dbdata
        }).then(function (e) {
            e = e.data;
            e.success && (a.filedetails.dbdata = e.data, n.path("/assets"))
        }, function (e) { })
    }, a.delete = function () {
        i.confirm("File", function () {
            t.delete(s.files + encodeURIComponent(a.filedetails.name)).then(function (e) {
                e.data.success && n.path("/assets")
            }, function (e) { })
        })
    }, a.assignAsset = function (e) {
        o.popUp(l.file, a.playlists, a.filesDetails && a.filesDetails.dbdata ? a.filedetails.dbdata.duration : null)
    }, a.$on("$destroy", function () {
        r.removeEventListener("contextmenu", d)
    })
}]).controller("AssetsEditCtrl", ["$scope", "$rootScope", "$http", "piUrls", "$location", "$filter", "piFeatures", "piPopup", "gettext", "selectedLabel", "$uibModal", function (t, e, s, l, a, n, i, o, r, d, c) {
    t.userIsAdmin = e.currentUser && e.currentUser.superRole, t.renameFeature = i.assetRenameFeature, t.adminServer = !1, (t.selLabel = d).selectedLabel = null, s.get(l.files, {}).then(function (e) {
        e = e.data;
        e.success && (t.files = n("orderBy")(e.data.files, t.sortingFn), t.names = [], t.files.forEach(function (e) {
            t.names.push({
                name: e.slice(0, e.lastIndexOf(".")),
                ext: e.slice(e.lastIndexOf("."))
            })
        }), e.data.dbdata && 1 != e.data.player && (t.adminServer = !0, Object.keys(d.labelsCount).forEach(function (e) {
            d.labelsCount[e] = 0
        }), e.data.dbdata.forEach(function (e) {
            var a = t.files.indexOf(e.name);
            0 <= a && (t.names[a].thumbnail = e.thumbnail || null, t.names[a].playlists = e.playlists, t.names[a].labels = e.labels, e.labels.forEach(function (e) {
                d.labelsCount[e] = (d.labelsCount[e] || 0) + 1
            }))
        })))
    }, function (e) { }), t.sortingFn = function (e) {
        return e.toLowerCase()
    }, t.label_search = function (e) {
        return !d.selectedLabel || e && e.labels && 0 <= e.labels.indexOf(d.selectedLabel)
    }, t.loadCategory = function () {
        t.labelModal = c.open({
            templateUrl: "/app/partials/home/_labels.html",
            controller: "LabelsCtrl",
            scope: t
        })
    }, t.delete = function (e) {
        var a = t.names.indexOf(e);
        o.confirm(t.files[a], function () {
            s.delete(l.files + encodeURIComponent(t.files[a])).then(function (e) {
                e.data.success && (t.files.splice(a, 1), t.names.splice(a, 1))
            }, function (e) { })
        })
    }, t.pbHandler = function (e) {
        "DONE" == e && a.path("/assets")
    }
}]).controller("AssetsItemCtrl", ["$scope", "$http", "piUrls", "gettext", function (s, l, n, i) {
    s.rename = function (e) {
        var a = s.names.indexOf(e),
            e = s.files[a],
            t = s.names[a].name + s.names[a].ext;
        !s.names[a].name || 0 <= s.files.indexOf(t) ? (s.names[a].name = i("File name exists or empty name"), s.editform.$setPristine(), s.fieldStatus = "has-error") : l.post(n.files + encodeURIComponent(e), {
            newname: t
        }).then(function (e) {
            e.data.success && (s.files[a] = t, s.editform.$setPristine(), s.fieldStatus = "has-success")
        }, function (e) { })
    }
}]).controller("AssetViewPopupCtrl", ["$scope", "$rootScope", "piUrls", "$http", "gettext", "piConstants", "$window", function (a, e, t, s, l, n, i) {
    var o;

    function r(e) {
        e.preventDefault()
    }
    if (1 == e.disableDownload ? i.addEventListener("contextmenu", r) : i.removeEventListener("contextmenu", r), !a.fileToShow || a.fileToShow.match(/.gcal$/)) a.modal.close();
    else {
        switch ((o = a.fileToShow).match(/.(tv|stream|link|weblink|mrss|radio|local)$/i) ? a.fileType = "link" : o.match(/.html$/i) ? a.fileType = "notice" : o.match(/.zip/i) ? a.fileType = "zip" : o.match(/.local/i) ? a.fileType = "local" : o.match(/\.txt$/i) ? a.fileType = "text" : n.pdffileRegex ? a.fileType = "pdf" : a.fileType = "default", a.fileType) {
            case "notice":
                s.get(t.notices + encodeURIComponent(o)).then(function (e) {
                    var e = e.data;
                    e.success ? (e = e.data.data, a.notice = {
                        title: e.title,
                        description: e.description,
                        footer: e.footer
                    }, a.previewimagepath = e.image ? decodeURIComponent("/media/" + e.image) : null) : (a.fileType = "missing", a.warningMsg = "Information regarding " + o + " could not be found")
                }, function (e) { });
                break;
            case "link":
            case "text":
                s.get(t.links + encodeURIComponent(o)).then(function (e) {
                    e = e.data;
                    e.success ? a.urlLink = JSON.parse(e.data.data) : (a.fileType = "missing", a.warningMsg = "Information regarding " + o + " could not be found")
                }, function (e) {
                    console.log(e.status)
                });
                break;
            default:
                s.get(t.files + encodeURIComponent(o)).then(function (e) {
                    e = e.data;
                    e.success && (a.filedetails = e.data)
                }, function (e) { })
        }
        a.$on("$destroy", function () {
            i.removeEventListener("contextmenu", r)
        })
    }
}]), angular.module("pinotice.controllers", []).controller("NoticeCtrl", ["$scope", "$http", "piUrls", "$location", "$rootScope", "$stateParams", "$sce", "piPopup", function (t, s, l, e, a, n, i, o) {
    t.noticename = n.file, t.noticePreview = !1, "new" != n.file ? s.get(l.notices + n.file).then(function (e) {
        var a, e = e.data;
        e.success ? (a = e.data.data, t.notice = {
            title: a.title,
            description: a.description,
            footer: a.footer,
            labels: e.data.dbdata && e.data.dbdata.labels || []
        }, t.previewimagepath = a.image ? decodeURIComponent("/media/" + a.image) : null) : (o.status({
            msg: "Information regarding " + n.file + " could not be found"
        }), window.history.back())
    }, function (e) { }) : t.notice = {
        title: "",
        description: "",
        footer: "",
        image: null,
        labels: []
    }, t.noticedone = function (e, a) {
        t.previewimagepath && s.delete(l.notices + t.previewimagepath.split("/")[2]).then(function (e) {
            e = e.data;
            e.success && console.log(e.stat_message)
        }, function (e) { }), t.errmsg = null, t.previewimagepath = "/media/" + encodeURIComponent(a.data[0].name)
    }, t.saveNotice = function () {
        var e = "new" != n.file ? n.file : "",
            a = {
                title: t.notice.title,
                description: t.notice.description,
                imagepath: encodeURIComponent(t.previewimagepath) || "",
                image: t.previewimagepath ? t.previewimagepath.split("/")[2] : "",
                footer: t.notice.footer
            };
        s.post(l.notices + e, {
            formdata: a,
            categories: t.notice.labels
        }).then(function (e) {
            var a, e = e.data;
            e.success && (t.noticePreview = !0, a = e.data.indexOf("img src="), e = e.data.slice(0, a + 9) + "/media/" + e.data.slice(a + 9), t.serverPreview = i.trustAsHtml(e))
        }, function (e) { })
    }, t.err = function (e, a) {
        t.errorMessage = a + " (" + e + ")"
    }, t.closePreview = function () {
        t.noticePreview = !1, e.path("/assets")
    }
}]).controller("CalendarCtrl", ["$scope", "$http", "piUrls", "$location", "$rootScope", "$stateParams", function (a, t, s, e, l, n) {
    a.calendarname = n.file, "new" != n.file && t.get(s.calendars + n.file).then(function (e) {
        e = e.data;
        e.success && (a.calendar = e.data)
    }, function (e) { }), a.selectedCalendar = function (e) {
        t.post(s.calendars + n.file, {
            email: e
        }).then(function (e) {
            e = e.data;
            e.success && console.log(e)
        }, function (e) { })
    }
}]).controller("LinksCtrl", ["$scope", "$http", "piUrls", "$location", "$stateParams", "$window", "gettext", "piPopup", "assignToPlaylist", function (a, t, s, l, n, i, e, o, r) {
    t.get(s.files + n.file).then(function (e) {
        e = e.data;
        e.success && (a.filedetails = e.data, t.get(s.playlists, {}).then(function (e) {
            e = e.data;
            e.success && (a.playlists = e.data)
        }, function (e) {
            console.log("Error in fetching playlist List")
        }))
    }, function (e, a) { }), a.saveTags = function () {
        t.post(s.files + n.file, {
            dbdata: a.filedetails.dbdata
        }).then(function (e) {
            e = e.data;
            e.success && (a.filedetails.dbdata = e.data, l.path("/assets"))
        }, function (e) { })
    }, t.get(s.links + n.file).then(function (e) {
        e = e.data;
        e.success ? (a.urlLink = JSON.parse(e.data.data), a.urlLink.hideTitle = a.urlLink.hideTitle || "title") : (o.status({
            msg: "Information regarding " + n.file + " could not be obtained"
        }), i.history.back())
    }, function (e) {
        console.log(e.status)
    }), a.linkTypes = [{
        name: e("Livestreaming or YouTube"),
        ext: ".tv"
    }, {
        name: e("Streaming"),
        ext: ".stream"
    }, {
        name: e("Audio Streaming"),
        ext: ".radio"
    }, {
        name: e("Web Link(embedded)"),
        ext: ".link"
    }, {
        name: e("Web Page (needs v1.6.0+)"),
        ext: ".weblink"
    }, {
        name: e("Media RSS"),
        ext: ".mrss"
    }, {
        name: e("Message"),
        ext: ".txt"
    }, {
        name: e("Local Folder/File"),
        ext: ".local"
    }], a.saveNewChanges = function () {
        t.post(s.links, {
            details: a.urlLink
        }).then(function (e) {
            e.data;
            a.linkform.$setPristine()
        }, function (e) {
            console.log(e)
        })
    }, a.delete = function () {
        o.confirm("File", function () {
            t.delete(s.files + a.filedetails.name).then(function (e) {
                e.data.success && l.path("/assets")
            }, function (e) { })
        })
    }, a.assignAsset = function (e) {
        r.popUp(n.file, a.playlists, a.filesDetails && a.filesDetails.dbdata ? a.filedetails.dbdata.duration : null)
    }
}]), angular.module("piplaylist.controllers", []).factory("miscMethods", function () {
    return {
        toPlJsonExt: function (e) {
            return "__" + e + ".json"
        }
    }
}).controller("PlaylistsCtrl", ["$scope", "$http", "$location", "$state", "miscMethods", "piUrls", "piFeatures", "gettext", "piPopup", "piConstants", "selectedLabel", "$uibModal", "$rootScope", "$window", "SchedulePlaylist", function (n, i, a, t, e, o, s, l, r, d, c, m, u, p, f) {
    function g() {
        i.get(o.playlists, {}).then(function (e) {
            e = e.data;
            e.success && (n.playlists = e.data, Object.keys(c.labelsCount).forEach(function (e) {
                c.labelsCount[e] = 0
            }), n.playlists.forEach(function (e) {
                n.adminServer && n.groups && e.groupIds && e.groupIds.length && (n.groupLists[e.name] = n.showGroupNames(e.groupIds)), "TV_OFF" !== e.name && e.labels && Array.isArray(e.labels) && e.labels.forEach(function (e) {
                    c.labelsCount[e] = (c.labelsCount[e] || 0) + 1
                }), Array.isArray(e.belongsTo) && e.belongsTo.length ? e.belongsTo = e.belongsTo.join(", ") : e.belongsTo = ""
            })), n.adminServer = !1, i.get(o.getStatus, {}).then(function (e) {
                e = e.data;
                e.data && e.data.server && (n.adminServer = !0, i.get(o.groups).then(function (e) {
                    e = e.data;
                    e.success && (e.data.forEach(function (e) {
                        n.groups[e._id] = e.name
                    }), n.groups && n.playlists.length && n.playlists.forEach(function (e) {
                        e.groupIds && e.groupIds.length && (n.groupLists[e.name] = n.showGroupNames(e.groupIds))
                    })), n.showDates()
                }, function (e) { }))
            }, function (e) { })
        }, function (e) { })
    }
    n.userIsAdmin = u.currentUser && u.currentUser.superRole, n.selLabel = c, n.playlists = [], n.upload = {}, n.groupLists = {}, n.label_search = function (e) {
        return !c.selectedLabel || e && e.labels && 0 <= e.labels.indexOf(c.selectedLabel)
    }, n.loadCategory = function () {
        n.labelModal = m.open({
            templateUrl: "/app/partials/home/_labels.html",
            controller: "LabelsCtrl",
            scope: n
        }), n.labelModal.result.finally(function () {
            g()
        })
    }, g(), n.newPlaylist = null, n.newLabel = {
        mode: t.current.data && t.current.data.labelMode
    }, n.add = function () {
        if (!n.newPlaylist) return n.statusText = l("Empty name not allowed"), n.addform.$setPristine(), void (n.fieldStatus = "has-error");
        n.newPlaylist = n.newPlaylist.replace(d.groupNameRegEx, "");
        for (var e = 0; e < n.playlists.length; e++)
            if (n.playlists[e].name == n.newPlaylist) return n.statusText = l("Playlist exists already"), n.addform.$setPristine(), void (n.fieldStatus = "has-error");
        i.post(o.playlists, {
            file: n.newPlaylist
        }).then(function (e) {
            e.data.success && (n.playlists.unshift({
                name: n.newPlaylist,
                settings: ""
            }), n.addform.$setPristine(), n.fieldStatus = "has-success", n.loadPlaylist(n.newPlaylist))
        }, function (e) { })
    }, n.pbHandler = function (e) {
        a.path("/playlists/edit")
    }, n.loadPlaylist = function (e) {
        a.path("/playlists/details/" + e)
    }, n.makeCopy = function (a) {
        for (var t, e = a.name + "-copy", s = 0; s < n.playlists.length; s++)
            if (n.playlists[s].name == e) return void r.status({
                msg: l("A copy exists already")
            });
        "TV_OFF" == a.name ? r.status({
            msg: l("System playlist, can not be duplicated")
        }) : (t = {
            name: e,
            layout: a.layout || "1",
            templateName: a.templateName,
            videoWindow: angular.copy(a.videoWindow) || null,
            zoneVideoWindow: angular.copy(a.zoneVideoWindow) || {},
            assets: angular.copy(a.assets) || [],
            schedule: angular.copy(a.schedule) || {},
            groupIds: angular.copy(a.groupIds),
            settings: angular.copy(a.settings) || {
                ticker: {
                    enable: !1,
                    behavior: "scroll",
                    textSpeed: 3,
                    rss: {
                        enable: !1,
                        link: null,
                        feedDelay: 10
                    }
                },
                ads: {
                    adPlaylist: !1,
                    adCount: 1,
                    adInterval: 60
                },
                audio: {
                    enable: !1,
                    random: !1,
                    volume: 50
                }
            }
        }, i.post(o.playlists, {
            file: t.name
        }).then(function (e) {
            e.data.success && (e = n.playlists.indexOf(a), n.playlists.splice(e + 1, 0, t), i.post(o.playlists + t.name, t).then(function (e) {
                e.data.success
            }, function (e) {
                console.log(e.status)
            }))
        }, function (e) { }))
    }, n.delete = function (a, t) {
        t = t || function () { };

        function s() {
            i.post(o.playlistfiles, {
                playlist: a.name,
                assets: []
            }).then(function (e) {
                e.data;
                t()
            }, function (e) {
                console.log(e.status), t()
            })
        }
        r.confirm(a.name, function () {
            i.delete(o.files + "__" + a.name + ".json").then(function (e) {
                e.data.success && (e = n.playlists.indexOf(a), n.playlists.splice(e, 1), n.weekDaysText[a.name] = "", n.monthDaysText[a.name] = "", delete n.groupLists[a.name]), s()
            }, function (e) {
                s()
            })
        })
    }, n.filtered = {
        selectAll: !1,
        selected: {},
        msg: ""
    }, n.toggleSelection = function () {
        n.playlists.forEach(function (e) {
            "TV_OFF" !== e.name && n.label_search(e) && (!n.search || -1 < e.name.indexOf(n.search)) && (n.filtered.selected[e.name] = n.filtered.selectAll)
        })
    }, n.groups = {}, n.selectedGroups = [], n.showGroupNames = function (e) {
        var a;
        if (e) return a = " ", e.forEach(function (e) {
            n.groups[e] && (a += n.groups[e] + ", ")
        }), a.slice(0, -2)
    }, n.doBulkOperation = function (e) {
        if (n.bulkSelectedFiles = [], n.upload.selectedLabels = [], n.upload.labels = [], 1 === Object.keys(n.filtered.selected).length) {
            for (var a = 0; a < n.playlists.length && ("TV_OFF" === n.playlists[a].name || n.playlists[a].name !== Object.keys(n.filtered.selected)[0]); a++);
            a < n.playlists.length && (n.upload.selectedLabels = n.playlists[a].labels.slice())
        }
        Object.keys(n.filtered.selected).forEach(function (e) {
            n.filtered.selected[e] && "TV_OFF" !== e && n.bulkSelectedFiles.push(e)
        }), n.filtered = {
            selectAll: !1,
            selected: {},
            msg: {}
        }, n.bulkSelectedFiles.length ? n.operation = e : n.operation = null, n.filtered.msg = "", n.newLabel = {
            mode: t.current.data && t.current.data.labelMode
        }, n.msg = {}, n.bulkModal = m.open({
            templateUrl: "/app/templates/bulkAssetsOperation.html",
            scope: n
        })
    }, n.groupToggle = function (e) {
        var a = n.selectedGroups.indexOf(e); - 1 < a ? n.selectedGroups.splice(a, 1) : n.selectedGroups.push(e)
    }, n.upload.selectedLabels = [], n.upload.labels = [], n.addLabel = function () {
        i.post(o.labels, n.newLabel).then(function (e) {
            e = e.data;
            e.success ? (n.upload.selectedLabels.push(e.data.name), n.upload.labels.push(e.data), n.newLabel = {
                mode: t.current.data && t.current.data.labelMode
            }, n.msg.error = null) : n.msg.error = l("Category exists")
        }, function (e) { })
    }, n.proceed = function () {
        var l = 0;
        async.eachSeries(n.bulkSelectedFiles, function (e, a) {
            for (var t, s = 0; s < n.playlists.length; s++)
                if (n.playlists[s].name == e) {
                    t = n.playlists[s];
                    break
                }
            if (!t) return a();
            switch (n.operation) {
                case "delete":
                    n.delete(t, a), l += 1;
                    break;
                case "assign":
                    if (!n.adminServer) return a("not admin");
                    i.post(o.playlists + e, {
                        labels: n.upload.selectedLabels
                    }).then(function (e) {
                        e.data.success && (t.labels = e.data.data.labels, l += 1), a()
                    }, function (e) {
                        console.log(e.status), a()
                    });
                    break;
                case "group":
                    if (!n.adminServer) return a("not admin");
                    i.post(o.playlists + e, {
                        groupIds: n.selectedGroups
                    }).then(function (e) {
                        e.data.success && (t.groupIds = n.selectedGroups, n.groupLists[t.name] = n.showGroupNames(n.selectedGroups), l += 1), a()
                    }, function (e) {
                        console.log(e.status), a()
                    })
            }
        }, function () {
            Object.keys(c.labelsCount).forEach(function (e) {
                c.labelsCount[e] = 0
            }), n.playlists.forEach(function (e) {
                n.adminServer && n.groups && e.groupIds && e.groupIds.length && (n.groupLists[e.name] = n.showGroupNames(e.groupIds)), "TV_OFF" !== e.name && e.labels && Array.isArray(e.labels) && e.labels.forEach(function (e) {
                    c.labelsCount[e] = (c.labelsCount[e] || 0) + 1
                })
            }), n.filtered.msg = l + " playlists processed"
        })
    }, n.weekDaysText = {}, n.monthDaysText = {}, n.weeknumbersText = {}, n.showDates = function () {
        n.weekDaysText = {}, n.monthDaysText = {}, n.weeknumbersText = {};
        for (var e = 0, a = n.playlists.length; e < a; e++) {
            var t = f.getWeekAndDayText(n.playlists[e].schedule);
            n.weekDaysText[n.playlists[e].name] = t.weekDaysText, n.monthDaysText[n.playlists[e].name] = t.monthDaysText, n.weeknumbersText[n.playlists[e].name] = t.weeknumbersText, n.playlists[e].scheduleExists = n.playlists[e].schedule && 0 < Object.keys(n.playlists[e].schedule).length
        }
    }, n.scheduleCalendar = function (a, e) {
        f.scheduleValidation(n);

        function t() {
            i.post(o.playlists + a.name, {
                schedule: a.schedule
            }).then(function (e) {
                e.data.success
            }, function (e) {
                console.log(e.status)
            });
            var e = f.getWeekAndDayText(a.schedule);
            n.weekDaysText[a.name] = e.weekDaysText, n.monthDaysText[a.name] = e.monthDaysText, n.weeknumbersText[a.name] = e.weeknumbersText, a.scheduleExists = a.schedule && 0 < Object.keys(a.schedule).length
        }
        e ? (a.schedule = {}, t()) : (a.schedule = a.schedule || {}, f.scheduleCalendar(a.name, a.schedule, n, t))
    }
}]).controller("PlaylistViewCtrl", ["$scope", "$http", "$rootScope", "piUrls", "$location", "$document", "$window", "$state", "$stateParams", "$uibModal", "selectedLabel", "saveChangesPrompt", "piConstants", "piPopup", "filterFilter", "gettext", "layoutOtherZones", "$timeout", "AssetValidityCheck", "$interval", function (o, l, r, n, i, t, e, a, d, s, c, m, u, p, f, g, b, v, h, y) {
    o.userIsAdmin = r.currentUser && r.currentUser.superRole, (o.selLabel = c).selectedLabel = null, o.navbar = {}, o.filtered = {}, o.status = {
        plainView: !0
    };

    function w() {
        r.uiDefaults && (o.status.plainView = !r.uiDefaults.playlistView || "list" === r.uiDefaults.playlistView, o.multiSelect = "dnd-multi" === r.uiDefaults.playlistView)
    }
    w(), o.$watch("uiDefaults", function (e, a) {
        w()
    }), o.changeView = function (e) {
        var a;
        o.filtered.playlistForDisplay = o.status.plainView ? o.filtered.playlistItemsFiltered : o.filtered.customPlPlaylistFiltered, (a = r.uiDefaults).playlistView = o.status.plainView ? "list" : o.multiSelect ? "dnd-multi" : "dnd", l.post(n.installationsettings, {
            settings: {
                uiDefaults: a
            }
        }).then(function (e) { }, function (e) { })
    }, o.warnUser = !1, o.navbar.showPrimaryButton = !0, o.adminServer = !1, l.get(n.getStatus, {}).then(function (e) {
        e = e.data;
        if (e.data.server) return o.navbar.showPrimaryButton = !1, void (o.adminServer = !0);
        e.data.playlistOn ? (o.navbar.primaryButtonText = g("STOP"), o.navbar.primaryButtonId = "STOP", o.navbar.primaryButtonTypeClass = "btn-danger") : (o.navbar.primaryButtonText = g("PLAY"), o.navbar.primaryButtonId = "PLAY", o.navbar.primaryButtonTypeClass = "btn-info")
    }, function (e) { }), o.title = d.file, o.playlistItems = [], o.assets = [], o.customPl = {
        unassigned: [],
        playlist: []
    }, o.layout = {
        type: "1",
        templateName: "custom_layout.html",
        videoWindow: null,
        zoneVideoWindow: {},
        mainzoneOnly: !1
    };

    function k(e) {
        return o.filesDetails && o.filesDetails[e.filename] && o.filesDetails[e.filename].labels && 0 <= o.filesDetails[e.filename].labels.indexOf(c.selectedLabel)
    }

    function x(e) {
        return 0 <= e.filename.toLowerCase().indexOf(o.search.toLowerCase())
    }

    function A() {
        if (o.playlistLoaded && o.assetsLoaded) {
            var e, a = [];
            for (e in o.customPl.unassigned = [], o.customPl.playlist = [], o.infiniteScrollLength1 = 25, o.infiniteScrollLength2 = 25, o.infiniteScrollLength3 = 25, o.playlistItems) a.push(o.playlistItems[e].filename), o.playlistItems[e].filename.match(u.videoRegex) && (o.playlistItems[e].isVideo = !0), o.playlistItems[e].option = o.playlistItems[e].option || {
                main: !1
            }, (o.playlistItems[e].selected ? o.customPl.playlist : o.customPl.unassigned).push(o.playlistItems[e]);
            o.selectedItemsLength = o.customPl.playlist.length;
            for (var t, s, l = 0, n = o.assets.length; l < n; l++) - 1 == a.indexOf(o.assets[l]) && ((t = o.filesDetails && o.filesDetails[o.assets[l]] ? parseInt(o.filesDetails[o.assets[l]].duration) : t) || (t = r.defaultDuration || 10, (o.assets[l].match(u.zipfileRegex) || o.assets[l].match(u.liveStreamRegex) || o.assets[l].match(u.omxStreamRegex) || o.assets[l].match(u.linkURL) || o.assets[l].match(u.CORSLink) || o.assets[l].match(u.mediaRss)) && t < 20 && (t = 20)), s = {
                filename: o.assets[l],
                duration: t,
                selected: !1,
                option: {
                    main: !1
                }
            }, o.assets[l].match(u.videoRegex) && (s.isVideo = !0), o.playlistItems.push(s), o.customPl.unassigned.push(s));
            for (var i = [], l = 0, n = o.playlistItems.length; l < n; l++) o.playlistItems[l].selected && 0 != o.playlistItems[l].filename.indexOf("_system") ? -1 == o.assets.indexOf(o.playlistItems[l].filename) ? (o.playlistItems[l].deleted = !0, o.filesDetails[o.playlistItems[l].filename] = {
                type: "Deleted"
            }) : o.filesDetails[o.playlistItems[l].filename] && !h.isValid(o.filesDetails[o.playlistItems[l].filename]) && (o.playlistItems[l].expired = !0, o.filesDetails[o.playlistItems[l].filename] = {
                type: "Expired"
            }) : o.filesDetails[o.playlistItems[l].filename] && !h.isValid(o.filesDetails[o.playlistItems[l].filename]) && i.push(l);
            for (l = i.length - 1; 0 <= l; l--) o.playlistItems.splice(i[l], 1);
            P(), o.layout.templateName && 0 === o.layout.type.indexOf("custom") && 0 <= o.assets.indexOf(o.layout.templateName) ? C(o.layout.templateName) : (o.aliasNames = {}, b.custom.forEach(function (e) {
                o.aliasNames[e] = r.zoneAliases && r.zoneAliases[e] || e
            }))
        }
    }
    var S, D, P = function () {
        var e, a, t, s = new RegExp("custom_layout.*.html?", "i");
        o.playlistItems = o.playlistItems.filter(function (e) {
            return !e.filename.match(s)
        }), t = c.selectedLabel ? (e = f(o.playlistItems, k), a = o.customPl.playlist, f(o.customPl.unassigned, k)) : (e = o.playlistItems, a = o.customPl.playlist, o.customPl.unassigned), o.search ? (o.filtered.playlistItemsFiltered = f(e, x), o.filtered.customPlPlaylistFiltered = a, o.filtered.customPlUnassignedFiltered = f(t, x)) : (o.filtered.playlistItemsFiltered = e, o.filtered.customPlPlaylistFiltered = a, o.filtered.customPlUnassignedFiltered = t), o.filtered.playlistForDisplay = o.status.plainView ? o.filtered.playlistItemsFiltered : o.filtered.customPlPlaylistFiltered
    },
        C = (o.applyFilter = function () {
            P()
        }, o.loadMore1 = function () {
            o.infiniteScrollLength1 += 25
        }, o.loadMore2 = function () {
            o.infiniteScrollLength2 += 25
        }, o.loadMore3 = function () {
            o.infiniteScrollLength3 += 25
        }, function (e) {
            o.customZonesPresent = {}, o.aliasNames = {}, r.installation && l.get(n.customTemplate + e, {}).then(function (e) {
                var a = e.data;
                a.success && a.data.properties && b.custom.forEach(function (e) {
                    a.data.properties[e] && a.data.properties[e].enable && (o.customZonesPresent[e] = !0, o.aliasNames[e] = a.data.properties[e].aliasName || e)
                })
            }, function (e) { })
        }),
        M = (o.$watch("playlist.form.$dirty", function (e, a) {
            if (e) {
                for (var t = o.customPl.playlist.length, s = 0; s < t; s++) {
                    var l = o.customPl.playlist[s];
                    if (!l.selected) {
                        o.customPl.unassigned.push(l), o.customPl.playlist.splice(s, 1);
                        break
                    }
                }
                o.selectedItemsLength = 0, o.playlistItems.forEach(function (e) {
                    e.selected && o.selectedItemsLength++
                }), o.pbHandler("SAVE")
            }
            P()
        }), o.$watch(function () {
            return c.selectedLabel
        }, function (e, a) {
            P()
        }), l.get(n.playlists + d.file, {}).then(function (e) {
            var a, e = e.data;
            e.success ? (a = e, o.settings = a.data.settings, o.settings.ticker = o.settings.ticker || {
                enable: !1
            }, o.settings.ticker.behavior = o.settings.ticker.behavior || "scroll", o.settings.ticker.textSpeed = o.settings.ticker.textSpeed || 3, o.settings.ticker.rss = o.settings.ticker.rss || {
                enable: !1,
                link: null,
                feedDelay: 10
            }, o.settings.ads = o.settings.ads || {
                adPlaylist: !1,
                adInterval: 60
            }, o.settings.ads.adCount = o.settings.ads.adCount || 1, o.settings.audio = o.settings.audio || {
                enable: !1,
                random: !1,
                volume: 50
            }, o.playlistItems = a.data.assets || [], o.layout = {
                type: a.data.layout,
                templateName: a.data.templateName,
                videoWindow: a.data.videoWindow,
                zoneVideoWindow: a.data.zoneVideoWindow,
                mainzoneOnly: a.data.videoWindow && a.data.videoWindow.mainzoneOnly || !1
            }, o.playlistLoaded = !0, A()) : p.status({
                msg: e.stat_message
            }).result.finally(function () {
                i.path("/playlists")
            })
        }, function (e) { }), l.get(n.files, {}).then(function (e) {
            e = e.data;
            if (e.success) {
                if (o.assets = e.data.files || [], e.data.systemAssets && (o.assets = o.assets.concat(e.data.systemAssets)), e.data.dbdata)
                    for (var a in o.filesDetails = {}, Object.keys(c.labelsCount).forEach(function (e) {
                        c.labelsCount[e] = 0
                    }), e.data.dbdata.forEach(function (e) {
                        0 <= o.assets.indexOf(e.name) && (o.filesDetails[e.name] = e)
                    }), o.filesDetails) o.filesDetails[a].muteButtonEnable = a.match(u.videoRegex) || a.match(u.omxStreamRegex) || a.match(u.liveStreamRegex), o.filesDetails[a].labels.forEach(function (e) {
                        c.labelsCount[e] = (c.labelsCount[e] || 0) + 1
                    });
                else o.filesDetails = {}, o.assets.forEach(function (e) {
                    o.filesDetails[e] = {}, e.match(u.videoRegex) && (o.filesDetails[e].type = "video"), e.match(u.imageRegex) && (o.filesDetails[e].type = "image"), e.match(u.noticeRegex) && (o.filesDetails[e].type = "notice"), o.filesDetails[e].muteButtonEnable = e.match(u.videoRegex) || e.match(u.omxStreamRegex) || e.match(u.liveStreamRegex)
                });
                o.assetsLoaded = !0, A()
            }
        }, function (e) { }), null),
        T = {
            x: 0,
            y: 0
        };

    function L(e) {
        T = {
            x: e.clientX,
            y: e.clientY
        }
    }

    function I(e) {
        for (var a, t, s = e.length; s; s--) a = Math.floor(Math.random() * s), t = e[s - 1], e[s - 1] = e[a], e[a] = t
    }
    o.dragStart = function (e, a) {
        e.dragging = !0, S = a, M || (M = y(function () {
            var e, a;
            e = {
                y: parseInt(.1 * window.innerHeight)
            }, a = {
                y: parseInt(.9 * window.innerHeight)
            }, 0 < T.y && T.y < e.y ? document.getElementById(S).scrollBy(0, -30) : T.y > a.y && document.getElementById(S).scrollBy(0, 30)
        }, 50), t.on("drag", L))
    }, o.dragListChange = function (e) {
        return S = e, !0
    }, o.dragEnd = function (e) {
        e.dragging = !1, M && (y.cancel(M), t.off("drag", L), M = null)
    }, o.dndSelect = function (e, a) {
        o.multiSelect ? a.dragSelected = !a.dragSelected : (angular.forEach(e, function (e) {
            e.dragSelected = !1
        }), a.dragSelected = !0)
    }, o.getSelectedItemsIncluding = function (e, a) {
        return a.dragSelected = !0, e.filter(function (e) {
            return e.dragSelected
        })
    }, o.dndDrop = function (a, e, t, s) {
        return angular.forEach(e, function (e) {
            e.dragSelected = !1, e.selected = s, a.splice(t, 0, e)
        }), !0
    }, o.dndMoved = function (e, a) {
        for (var t = e.length - 1; 0 <= t; t--) e[t].dragSelected && e.splice(t, 1);
        return o.playlist.form.$setDirty(), o.pbHandler("SAVE", function (e) {
            e && (o.playlistItems = e.data.assets || [], A())
        }), !0
    }, o.removeFromPlaylist = function (e, a, t) {
        a.stopPropagation(), e.selected = !1, o.filtered.playlistForDisplay.splice(t, 1), o.playlist.form.$setDirty(), o.pbHandler("SAVE", function (e) {
            e && (o.playlistItems = e.data.assets || [], A())
        })
    }, o.linkFile = function (e, a) {
        (o.selectedAsset = e)[o.selectedZone = a] && 0 == e[a].indexOf("__") ? o.tabIndex = 1 : o.tabIndex = 0, l.get(n.playlists, {}).then(function (e) {
            e = e.data;
            e.success && Array.isArray(e.data) && (o.playlistsList = e.data.map(function (e) {
                return {
                    displayName: e.name,
                    plName: "__" + e.name + ".json"
                }
            }))
        }, function (e) { }), o.filteredAssets = o.assets.filter(function (e) {
            return !e.match(u.liveStreamRegex)
        }), o.modal = s.open({
            templateUrl: "/app/templates/linkFilePopup.html",
            scope: o
        }), o.modal.result.finally(function () {
            o.playlist.form.$setDirty()
        })
    }, o.linkFileSave = function (e) {
        o.selectedAsset[o.selectedZone] = e
    }, o.layoutOtherZones = b, o.openLayout = function () {
        for (var e = !1, a = 0, t = o.assets.length; a < t; a++)
            if (o.customTemplates(o.assets[a])) {
                e = !0;
                break
            }
        o.layouts = [{
            type: "1",
            title: g("Single Zone Display"),
            description: g("main Zone:1280x720")
        }, {
            type: "2a",
            title: g("Two Zones with Main Zone on right"),
            description: g("main Zone:960x720, side Zone:320x720")
        }, {
            type: "2b",
            title: g("Two Zones with Main Zone on left"),
            description: g("main Zone:960x720, side Zone:320x720")
        }, {
            type: "2c",
            title: g("Two Equal Size Zones with Main Zone on left"),
            description: g("main Zone:640x720, side Zone:640x720")
        }, {
            type: "2d",
            title: g("Two Equal Size Zones with Main Zone on right"),
            description: g("main Zone:640x720, side Zone:640x720")
        }, {
            type: "3a",
            title: g("Three Zones(full bottom) with Main Zone on right"),
            description: g("main Zone:960x540, side Zone:320x540, bottom Zone:1280x180")
        }, {
            type: "3b",
            title: g("Three Zones(full bottom) with Main Zone on left"),
            description: g("main Zone:960x540, side Zone:320x540, bottom Zone:1280x180")
        }, {
            type: "3c",
            title: g("Three Zones(full top) with Main Zone on right (enable in settings)"),
            description: g("main Zone:960x540, side Zone:320x540, top Zone:1280x180")
        }, {
            type: "3d",
            title: g("Three Zones(full top) with Main Zone on left (enable in settings)"),
            description: g("main Zone:960x540, side Zone:320x540, top Zone:1280x180")
        }, {
            type: "4a",
            title: g("Three Zones(full side) with Main Zone on right"),
            description: g("main Zone:960x540, side Zone:320x720, bottom Zone:960x180")
        }, {
            type: "4b",
            title: g("Three Zones(full side) with Main Zone on left"),
            description: g("main Zone:960x540, side Zone:320x720, bottom Zone:960x180")
        }, {
            type: "4c",
            title: g("Three Zones(full side) with Main Zone on right (enable in settings)"),
            description: g("main Zone:960x540, side Zone:320x720, top Zone:960x180")
        }, {
            type: "4d",
            title: g("Three Zones(full side) with Main Zone on left (enable in settings)"),
            description: g("main Zone:960x540, side Zone:320x720, top Zone:960x180")
        }, {
            type: "2ap",
            title: g("Single Zone Portrait Mode, Orient clockwise"),
            description: g("main Zone: 720x1280 ")
        }, {
            type: "2bp",
            title: g("Two Zones Portrait Mode, Orient clockwise"),
            description: g("top Zone:720x540,bottom zone:720x740")
        }, {
            type: "2ap270",
            title: g("Single Zone Portrait Mode,Orient anti-clockwise"),
            description: g("main Zone: 720x1280 ")
        }, {
            type: "2bp270",
            title: g("Two Zone Portrait Mode,Orient anti-clockwise"),
            description: g("top Zone:720x540,bottom zone:720x740")
        }, {
            type: "custom",
            title: g("Custom Layout in Landscape Mode (v1.6.0+)"),
            disabled: !e,
            description: g("Upload custom_layout.html under Assets Tab(otherwise this option is disabled), Use #main,#side, #bottom, #ticker html ID tags for content")
        }, {
            type: "customp",
            title: g("Custom Layout in Portrait Mode, Orient clockwise"),
            disabled: !e,
            description: g("Upload custom_layout.html under Assets Tab(otherwise this option is disabled), Use #main,#side, #bottom, #ticker html ID tags for content")
        }, {
            type: "customp270",
            title: g("Custom Layout in Portrait Mode,Orient anti-clockwise"),
            disabled: !e,
            description: g("Upload custom_layout.html under Assets Tab(otherwise this option is disabled), Use #main,#side, #bottom, #ticker html ID tags for content")
        }], o.modal = s.open({
            templateUrl: "/app/templates/layoutPopup.html",
            scope: o
        })
    }, o.customTemplates = function (e) {
        return e.match(/^custom_layout.*html$/i)
    }, o.selectTemplate = function (e, a) {
        e && (o.layout.templateName = e, o.layout.type = a, o.saveLayout(), C(e))
    }, o.saveLayout = function () {
        0 == o.layout.type.indexOf("custom") && (o.msg = {
            title: "Please adjust video window sizes to match custom layout ",
            msg: "For videos to have right sizes, adjust the video window sizes under layout popup screen for main/side/bottom zones"
        }, p.status(o.msg)), o.layout.videoWindow && (o.layout.videoWindow.mainzoneOnly = o.layout.mainzoneOnly), l.post(n.playlists + d.file, {
            layout: o.layout.type,
            templateName: o.layout.templateName,
            videoWindow: o.layout.videoWindow,
            zoneVideoWindow: o.layout.zoneVideoWindow
        }).then(function (e) {
            e.data.success && (o.warnUser = !0, o.modal.close())
        }, function (e) {
            console.log(e.status)
        })
    }, o.clearVideoWindow = function () {
        o.layout.videoWindow = null, o.saveLayout()
    }, o.clearZoneVideoWindow = function (e) {
        o.layout.zoneVideoWindow[e] = null, o.saveLayout()
    }, o.ticker = function () {
        o.tickerModal = s.open({
            templateUrl: "/app/templates/tickerPopup.html",
            scope: o
        })
    }, o.tickerSave = function () {
        if (o.settings.ticker.rss && o.settings.ticker.rss.enable && !o.settings.ticker.rss.link) return o.tickerPopupErrMessage = "Please enter RSS link address", void v(function () {
            o.tickerPopupErrMessage = ""
        }, 3e3);
        o.settings.ticker.style && (o.settings.ticker.style = o.settings.ticker.style.replace(/\"/g, "")), o.settings.ticker.messages && (o.settings.ticker.messages = o.settings.ticker.messages.replace(/'/g, "`")), l.post(n.playlists + d.file, {
            settings: o.settings
        }).then(function (e) {
            e.data.success && (o.warnUser = !0, o.tickerModal.close())
        }, function (e) {
            console.log(e.status), o.tickerModal.close()
        })
    }, o.adPopUp = function () {
        o.modal = s.open({
            templateUrl: "/app/templates/adEnablePopUp.html",
            scope: o
        })
    }, o.adModalCancel = function () {
        o.modal.close()
    }, o.adSave = function () {
        l.post(n.playlists + d.file, {
            settings: o.settings
        }).then(function (e) {
            e.data.success && (o.warnUser = !0, o.modal.close())
        }, function (e) {
            console.log(e.status), o.modal.close()
        })
    }, o.pbHandler = function (e, a) {
        var t, s;
        "SAVE" == o.navbar.primaryButtonId || "SAVE" == e ? ((t = (o.status.plainView ? o.playlistItems : o.customPl.playlist).filter(function (e) {
            return e.selected
        })).forEach(function (e) {
            0 == b[o.layout.type].length && (e.fullscreen = !0), e.duration < 2 && (e.duration = 2)
        }), o.playlist.form.$setPristine(), o.warnUser = !a, l.post(n.playlists + d.file, {
            layout: o.layout.type,
            templateName: o.layout.templateName,
            videoWindow: o.layout.videoWindow,
            zoneVideoWindow: o.layout.zoneVideoWindow,
            assets: t,
            settings: o.settings
        }).then(function (e) {
            e = e.data;
            a && a(e)
        }, function (e) {
            console.log(e.status), a && a()
        }), s = [], t.forEach(function (a) {
            s.push(a.filename), b[o.layout.type].forEach(function (e) {
                a[e] && -1 == s.indexOf(a[e]) && s.push(a[e])
            })
        }), l.post(n.playlistfiles, {
            playlist: d.file,
            assets: s
        }).then(function (e) {
            e.data
        }, function (e) {
            console.log(e.status)
        })) : "PLAY" == e ? (o.navbar.primaryButtonText = g("WAIT"), o.navbar.primaryButtonId = "WAIT", o.navbar.primaryButtonTypeClass = "btn-warning", l.post(n.play + d.file, {
            play: !0
        }).then(function (e) {
            e.data.success && i.path("/")
        }, function (e) {
            console.log("playall request failed")
        })) : "STOP" == e && (o.navbar.primaryButtonText = g("WAIT"), o.navbar.primaryButtonId = "WAIT", o.navbar.primaryButtonTypeClass = "btn-warning", l.post(n.play + d.file, {
            stop: !0
        }).then(function (e) {
            e.data.success && i.path("/")
        }, function (e) { }))
    }, o.navbar.primaryButtonHandler = o.pbHandler, o.makeCopy = function (e, a) {
        o.filtered.playlistForDisplay.splice(a, 0, angular.copy(e)), o.playlist.form.$setDirty(), o.pbHandler("SAVE", function (e) {
            e && (o.playlistItems = e.data.assets || [], A())
        })
    }, o.filtered.selectAll = !1, o.toggleSelection = function () {
        o.filtered.playlistItemsFiltered.forEach(function (e) {
            e.selected = o.filtered.selectAll
        })
    }, o.randomOrder = function () {
        if (o.status.plainView) {
            I(o.playlistItems);
            for (var e = -1, a = 0, t = o.playlistItems.length; a < t; a++) o.playlistItems[a].selected ? -1 != e && (o.playlistItems.splice(e, 0, o.playlistItems.splice(a, 1)[0]), e += 1) : -1 == e && (e = a)
        } else I(o.customPl.playlist)
    }, o.loadMediaFile = function (e) {
        o.fileToShow = e, o.modal = s.open({
            templateUrl: "/app/templates/mediaDetailsPopup.html",
            controller: "AssetViewPopupCtrl",
            scope: o
        })
    }, o.deployToGroups = function () {
        o.pbHandler("SAVE", function (e) { }), l.get(n.groups, {
            params: {
                all: "all"
            }
        }).then(function (e) {
            e = e.data;
            e.success && (o.groups = e.data), o.players = {}, l.get(n.players).then(function (e) {
                e = e.data;
                e.success && (e.data.objects.forEach(function (e) {
                    o.players[e.cpuSerialNumber] = e.name
                }), o.groups.forEach(function (e) {
                    0 == e.name.indexOf("__player__") && (e.name = o.players[e.name.slice(10)])
                }))
            }, function (e) { })
        }, function (e) { })
    }, o.preview = function () {
        o.pbHandler("SAVE", function (e) {
            if (!e || !e.data) return console.log("nothing to review");
            e = e.data;
            e.installation = r.installation, D && D.close(), (D = window.open("/preview/prod.html", "Preview", "width=960,height=580")).playlist = e
        })
    }, o.loadCategory = function () {
        o.labelModal = s.open({
            templateUrl: "/app/partials/home/_labels.html",
            controller: "LabelsCtrl",
            scope: o
        })
    }, r.$on("$stateChangeStart", function () {
        o.warnUser && o.adminServer && (o.msg = {
            msg: "Please deploy under Groups tab for the changed playlist to take affect"
        }, p.status(o.msg), o.warnUser = !1)
    })
}]).controller("PlaylistsEditCtrl", ["$scope", "$http", "$location", "$state", "piUrls", "piFeatures", "piPopup", "gettext", function (t, e, a, s, l, n, i, o) {
    t.renameFeature = n.playlistRenameFeature, e.get(l.playlists, {}).then(function (e) {
        e = e.data;
        if (e.success) {
            t.playlists = e.data;
            for (var a = 0; a < t.playlists.length; a++)
                if ("default" == t.playlists[a].name) {
                    t.playlists.splice(a, 1);
                    break
                }
            t.playlistsCopy = angular.copy(t.playlists)
        }
    }, function (e) { }), t.pbHandler = function (e) {
        a.path("/playlists")
    }, t.delete = function (a) {
        i.confirm(o("Playlist"), function () {
            e.delete(l.files + "__" + t.playlists[a].name + ".json").then(function (e) {
                e.data.success && (t.playlists.splice(a, 1), t.playlistsCopy.splice(a, 1))
            }, function (e) { }), e.post(l.playlistfiles, {
                playlist: t.playlists[a].name,
                assets: []
            }).then(function (e) {
                e = e.data;
                console.log(e)
            }, function (e) {
                console.log(e.status)
            })
        })
    }
}]).controller("PlaylistsItemCtrl", ["$scope", "$http", "piUrls", "gettext", function (l, n, i, o) {
    l.rename = function (a) {
        if (!l.playlists[a].name) return l.playlists[a].name = o("Empty name not allowed"), l.pleditform.$setPristine(), void (l.fieldStatus = "has-error");
        for (var e = 0; e < l.playlistsCopy.length; e++)
            if (l.playlistsCopy[e].name == l.playlists[a].name) return l.playlists[a].name = o("File name already exists"), l.pleditform.$setPristine(), void (l.fieldStatus = "has-error");
        var t = "__" + l.playlistsCopy[a].name + ".json",
            s = "__" + l.playlists[a].name + ".json";
        n.post(i.files + t, {
            newname: s
        }).then(function (e) {
            e.data.success && (l.playlistsCopy[a].name = l.playlists[a].name, l.pleditform.$setPristine(), l.fieldStatus = "has-success", n.post(i.playlists + l.playlists[a].name, {
                name: l.playlists[a].name
            }).then(function (e) {
                e.data.success
            }, function (e) {
                console.log(e.status)
            }))
        }, function (e) { })
    }
}]), angular.module("pisignage.directives", []).directive("touch", function () {
    return function (e, a) {
        a = a[0];

        function t(e) {
            var a = e.changedTouches[0],
                t = document.createEvent("MouseEvent");
            t.initMouseEvent({
                touchstart: "mousedown",
                touchmove: "mousemove",
                touchend: "mouseup"
            }[e.type], !0, !0, window, 1, a.screenX, a.screenY, a.clientX, a.clientY, !1, !1, !1, !1, 0, null), a.target.dispatchEvent(t), e.preventDefault()
        }
        a.addEventListener("touchstart", t, !0), a.addEventListener("touchmove", t, !0), a.addEventListener("touchend", t, !0), a.addEventListener("touchcancel", t, !0)
    }
}).directive("showonhoverparent", function () {
    return {
        link: function (e, a, t) {
            a.parent().bind("mouseenter", function () {
                a.show()
            }), a.parent().bind("mouseleave", function () {
                a.hide()
            })
        }
    }
}).directive("butterbar", ["$rootScope", function (s) {
    return {
        link: function (e, a, t) {
            a.addClass("hide"), s.$on("$stateChangeStart", function () {
                a.removeClass("hide")
            }), s.$on("$stateChangeSuccess", function () {
                a.addClass("hide")
            })
        }
    }
}]).directive("focus", function () {
    return {
        link: function (e, a, t) {
            a[0].focus()
        }
    }
}).directive("ngEnter", function () {
    return function (a, e, t) {
        e.bind("keydown keypress", function (e) {
            13 === e.which && (a.$apply(function () {
                a.$eval(t.ngEnter)
            }), e.preventDefault())
        })
    }
}).directive("notify", ["$timeout", function (s) {
    return {
        scope: {
            show: "="
        },
        transclude: !0,
        restrict: "E",
        replace: "true",
        template: '<div class="col-xs-12 text-center notify" ng-show="show">{{msg}}</div>',
        link: function (e, a, t) {
            e.msg = "Updated!", e.show && s(function () {
                e.show = !1, e.$parent.$parent && (e.$parent.$parent.notify = !1), e.$apply()
            }, 2500)
        }
    }
}]).directive("nodeimsFileUpload", ["fileUploadService", function (e) {
    return e.createDirective("change")
}]).directive("categories", ["$http", "piUrls", "$state", function (s, l, n) {
    return {
        scope: {
            selectedLabels: "=",
            labels: "="
        },
        restrict: "E",
        replace: "true",
        template: '<div class="row"><div ng-repeat="category in label.categories" class="col-sm-4"><label class="checkbox-inline"><input type="checkbox" value="{{category.name}}"ng-checked="selectedLabels.indexOf(category.name) &gt; -1"ng-click="label.toggleSelection(category.name)"/><small class="text-muted" ng-attr-title="{{category.name}}">{{category.name | truncate:18}}</small></label></div></div>',
        link: function (t, e, a) {
            t.label = {}, n.current.data && n.current.data.labelMode && (t.labelMode = n.current.data.labelMode), s.get(l.labels, {
                params: {
                    mode: t.labelMode
                }
            }).then(function (e) {
                e = e.data;
                e.success && (t.label.categories = e.data, t.labels && (t.labels = t.label.categories))
            }, function (e) { }), t.label.toggleSelection = function (e) {
                var a = t.selectedLabels.indexOf(e); - 1 < a ? t.selectedLabels.splice(a, 1) : t.selectedLabels.push(e)
            }
        }
    }
}]).directive("unsavedChangesWarning", ["saveChangesPrompt", "$parse", function (n, i) {
    return {
        require: "form",
        link: function (a, e, t, s) {
            n.init(s);
            var l = i(t.rcSubmit);
            e.bind("submit", function (e) {
                n.removeListener(), a.$apply(function () {
                    l(a, {
                        $event: e
                    })
                })
            })
        }
    }
}]).directive("downloadLicense", function () {
    return {
        restrict: "A",
        scope: {
            filedetails: "="
        },
        link: function (s, e, a) {
            e.bind("click", function (e) {
                for (var a = 0; a < s.filedetails.length; a++) {
                    var t = document.createElement("a");
                    t.href = "data:text/plain;charset=utf-8," + encodeURIComponent(s.filedetails[a].licenseText), t.download = "license_" + s.filedetails[a].cpuSerialNumber + ".txt", t.click()
                }
            })
        }
    }
}).directive("dropArea", ["fileUploadService", function (e) {
    return e.createDirective("drop")
}]).directive("ieSelectFix", ["$document", function (n) {
    return {
        restrict: "A",
        require: "ngModel",
        link: function (e, a, t, s) {
            var l;
            n[0] && n[0].attachEvent && (l = a[0], e.$watch(t.ieSelectFix, function () {
                setTimeout(function () {
                    var e = document.createElement("option");
                    l.add(e, null), l.remove(l.options.length - 1)
                }, 0)
            }))
        }
    }
}]).directive("isCompleted", function (l) {
    return {
        restrict: "A",
        scope: {
            cardCompleted: "="
        },
        link: function (a, t) {
            var s;
            ! function e() {
                a.cardCompleted = t.hasClass("StripeElement--complete"), s = l(e, 500)
            }(), t.on("$destroy", function () {
                s && l.cancel(s)
            })
        }
    }
}).directive("customTemplatePreview", function (a) {
    return {
        link: function (e, l) {
            var n, i, o, r, d, c, m = [".bg-image { transform: scale(0.5); transform-origin: 0 0; position: absolute; top: 50%; left: 50%;z-index:-1 }", ".text {font-size:40px;position: relative;float: left;top: 50%;left: 50%;transform: translate(-50%, -50%);margin:0;padding:5px;color:white;}"].join("\n"),
                u = ["main", "side", "bottom", "zone4", "zone5", "zone6", "marquee"],
                p = ["red", "blue", "yellow", "orange", "green", "purple", "aqua"],
                f = ["rgba(255,128,128,0.6)", "rgba(128,128,255,0.6)", "rgba(255,255,128,0.6)", "rgba(255,165,128,0.6)", "rgba(00,128,00,0.6)", "rgba(128,00,128,0.6)", "rgba(128,255,255,0.6)"],
                g = {};
            e.directiveFn && (e.directiveFn.setSrc = function (e, a) {
                l[0].srcdoc = e, c = a
            }, e.directiveFn.setCustomcss = function (e) {
                var a;
                n && ((a = n.getElementById("customcss2")) || ((a = n.createElement("style")).setAttribute("id", "customcss2"), a.type = "text/css", n.getElementsByTagName("head")[0].appendChild(a)), a.innerHTML = e)
            }, e.directiveFn.setImage = function (e) {
                n && (e ? (d.src = "/media/" + a.installation + "/" + e, d.onload = function () {
                    d.style.marginLeft = -this.width / 2 * .5 + "px", d.style.marginTop = -this.height / 2 * .5 + "px"
                }) : d.src = "")
            }, e.directiveFn.setZone = function (e, a, t, s, l) {
                n && (g[e] || (g[e] = n.createElement("div"), g[e].setAttribute("id", e), g[e].classList.add("zone"), r.appendChild(g[e])), g[e].style.opacity = .7, g[e].style.display = "inline-block", g[e].style.position = "absolute", g[e].style.border = "8px solid " + p[u.indexOf(e)], g[e].style.background = f[u.indexOf(e)], g[e].style.left = .5 * a + "px", g[e].style.top = .5 * t + "px", g[e].style.width = .5 * s - 16 + "px", g[e].style.height = .5 * l - 16 + "px", g[e].innerHTML = '<h3 class="text">' + ("marquee" != e ? e : "ticker") + "</h3>")
            }, e.directiveFn.removeZone = function (e) {
                g[e] && (g[e].parentNode.removeChild(g[e]), g[e] = null)
            }), l.bind("load", function (e) {
                var a, t, s;
                n = l[0].contentDocument, i = l[0].contentWindow, o = n.body, (d = n.getElementById("bg-image")) || ((d = new Image).setAttribute("id", "bg-image"), o.insertBefore(d, o.firstChild)), d.classList.add("bg-image"), (o = n.createElement("style")).type = "text/css", o.innerHTML = m, n.getElementsByTagName("head")[0].appendChild(o), r = n.getElementById("full"), u.forEach(function (e) {
                    g[e] = n.getElementById(e)
                }), a = n.getElementById("container"), t = i.innerWidth, s = i.innerHeight, n.body.style.height = s + "px", a && (a.style.height = s + "px"), r.style.height = s + "px", n.body.style.width = t + "px", c && c()
            })
        },
        restrict: "A",
        scope: {
            directiveFn: "="
        }
    }
}), angular.module("pisignage.filters", []).filter("truncate", function () {
    return function (e, a) {
        isNaN(a) && (a = 60);
        return null == e || 0 == e.length ? null : !angular.isString(e) || e.length <= a ? e : String(e).substring(0, a - "...".length) + "..."
    }
}).filter("readable", function () {
    return function (e) {
        for (var a = ""; 4 < e.length;) a += e.slice(0, 4) + "-", e = e.slice(4);
        return a += e
    }
}), angular.module("pisignage.services", []).factory("selectedLabel", function () {
    return {
        selectedLabel: null,
        labelsCount: {}
    }
}).factory("fileUploader", ["$rootScope", "$q", "gettext", function (o, r, d) {
    var c, m;
    return {
        post: function (l, n, i) {
            return {
                to: function (t) {
                    var s = r.defer();
                    if (l && l.length) {
                        c = new XMLHttpRequest, m = !1, c.upload.onprogress = function (a) {
                            o.$apply(function () {
                                var e;
                                a.lengthComputable && (a.loaded == a.total && (m = !0), e = Math.round(a.loaded / a.total * 100), i ? i(e) : s.notify && s.notify(e))
                            })
                        }, c.onload = function (e) {
                            o.$apply(function () {
                                var a = {
                                    files: l,
                                    data: {}
                                };
                                try {
                                    a.data = angular.fromJson(c.responseText)
                                } catch (e) {
                                    a.data = d("ResponseText Parsing error")
                                }
                                s.resolve(a)
                            })
                        }, c.upload.onerror = function (e) {
                            var a = c.responseText || d("An unknown error occurred posting to '") + t + "'";
                            o.$apply(function () {
                                s.reject(a)
                            })
                        }, c.upload.onabort = function (e) {
                            var a = c.responseText || d("Abort uploading files to '") + t + "'";
                            s.reject({
                                type: "USER_ABORTED",
                                msg: a
                            })
                        };
                        var a = new FormData;
                        n && Object.keys(n).forEach(function (e) {
                            a.append(e, n[e])
                        });
                        for (var e = 0; e < l.length; e++) a.append(l[e].name, l[e]);
                        return c.open("POST", t), c.send(a), s.promise
                    }
                    s.reject(d("No files to upload"))
                }
            }
        },
        cancel: function () {
            c.upload.onprogress = function () { }, m || c.abort()
        }
    }
}]).factory("screenlog", ["$timeout", function (a) {
    var t = angular.element(document.querySelector("#screenlogelement")).scope(),
        s = !(t.screenlogclass = "hide");
    return {
        enableDebug: function (e) {
            s = e
        },
        debug: function (e) {
            s && (t.screenlogclass = "alert-success", a(function () {
                t.screenlogclass = "hidden"
            }, 15e3), t.screenlog = e)
        },
        error: function (e) {
            t.screenlogclass = "alert-danger", a(function () {
                t.screenlogclass = "hidden"
            }, 15e3), t.screenlog = e
        },
        warn: function (e) {
            t.screenlogclass = "alert-warning", a(function () {
                t.screenlogclass = "hidden"
            }, 15e3), t.screenlog = e
        },
        info: function (e) {
            t.screenlogclass = "alert-info", a(function () {
                t.screenlogclass = "hidden"
            }, 15e3), t.screenlog = e
        }
    }
}]).factory("onlineStatusInterceptor", ["$q", "$rootScope", function (a, t) {
    var s = !1;
    return {
        response: function (e) {
            return s || (s = !0, t.$broadcast("onlineStatusChange", s)), e || a.when(e)
        },
        responseError: function (e) {
            return s && (s = !1, t.$broadcast("onlineStatusChange", s)), a.reject(e)
        }
    }
}]).factory("piPopup", ["$uibModal", function (a) {
    return {
        confirm: function (e, s) {
            return a.open({
                templateUrl: "/app/templates/confirmPopup.html",
                controller: ["$scope", "$uibModalInstance", "msg", function (e, a, t) {
                    0 == t.indexOf("--") ? (e.noPrepend = !0, e.deleteText = t.slice(2)) : e.deleteText = t, e.ok = function () {
                        a.close("ok"), s()
                    }, e.cancel = function () {
                        a.dismiss("cancel")
                    }
                }],
                resolve: {
                    msg: function () {
                        return e
                    }
                }
            })
        },
        status: function (e) {
            return a.open({
                templateUrl: "/app/templates/statusPopup.html",
                controller: ["$scope", "$uibModalInstance", "msg", function (e, a, t) {
                    e.msg = t, e.cancel = function () {
                        a.dismiss("cancel")
                    }
                }],
                resolve: {
                    msg: function () {
                        return e
                    }
                }
            })
        }
    }
}]).factory("saveChangesPrompt", ["$rootScope", "gettext", function (e, a) {
    function l(e) {
        return !!e.$dirty
    }
    var n = {
        navigate: a("You will loose unsaved changes if you leave this page"),
        reload: a("You will loose unsaved changes if you reload this page")
    },
        i = function () { };
    return {
        init: function (s) {
            window.onbeforeunload = function () {
                if (l(s)) return n.reload;
                i(), window.onbeforeunload = null
            }, i = e.$on("$stateChangeStart", function (e, a, t) {
                !l(s) || confirm(n.navigate) ? (i(), window.onbeforeunload = null) : e.preventDefault()
            })
        },
        removeListener: function () {
            i(), window.onbeforeunload = null
        }
    }
}]).factory("commands", function () {
    var a = ["*** Or use any bash command ***", "sync;sudo systemctl reboot", "uptime", "cat /etc/*release*", "tvservice -s", "xrandr", "ip a", "date", "ls ../media", "tail -200 ../forever.log", "tail -200 ../forever_err.log", "tail -200 ../forever_out.log"],
        t = a.length;
    return {
        previous: function () {
            return a[t = --t <= 0 ? 0 : t]
        },
        next: function () {
            return ++t >= a.length && (t = a.length), a[t]
        },
        save: function (e) {
            a.push(e), t = a.length
        }
    }
}).factory("assignToPlaylist", ["$rootScope", "$http", "$uibModal", "filterFilter", "piUrls", "piConstants", "layoutOtherZones", function (o, r, a, l, d, c, m) {
    return {
        popUp: function (i, s, e) {
            return a.open({
                templateUrl: "/app/templates/playlistsPopup.html",
                controller: ["$scope", "$uibModalInstance", function (a, t) {
                    a.selectedAsset = i, s.forEach(function (e, a) {
                        -1 !== e.assets.findIndex(function (e) {
                            return e.filename === i
                        }) ? (s[a].addAssetEnable = !0, s[a].alreadyPresent = !0) : (s[a].addAssetEnable = !1, s[a].alreadyPresent = !1)
                    }), a.popupPlaylists = s, a.$watch("filtered.search", function (e) {
                        a.popupPlaylists = l(s, {
                            name: e
                        })
                    }), a.filtered = {
                        selectAll: !1
                    }, a.toggleSelection = function () {
                        a.popupPlaylists.forEach(function (e) {
                            e.addAssetEnable = a.filtered.selectAll
                        })
                    }, a.updatePlaylists = function (l) {
                        a.filtered.search = null;
                        var n = {
                            filename: i,
                            duration: parseInt(e) || o.currentUser && o.currentUser.settings.defaultDuration || 10,
                            fullscreen: !1,
                            isVideo: !!i.match(c.videoRegex),
                            selected: !0,
                            deleted: !1
                        };
                        async.eachSeries(s, function (s, a) {
                            if (s.addAssetEnable == s.alreadyPresent) return delete s.addAssetEnable, delete s.alreadyPresent, a();
                            if (!s.addAssetEnable)
                                for (var e = 0, t = s.assets.length; e < t; e++)
                                    if (s.assets[e].filename == i) {
                                        s.assets.splice(e, 1);
                                        break
                                    }
                            s.addAssetEnable && (l ? s.assets = [n] : s.assets.push(n)), delete s.addAssetEnable, delete s.alreadyPresent, r.post(d.playlists + s.name, {
                                assets: s.assets
                            }).then(function (e) {
                                var t;
                                e.data.success ? (t = [], s.assets.forEach(function (a) {
                                    t.push(a.filename), m[s.layout].forEach(function (e) {
                                        a[e] && -1 == t.indexOf(a[e]) && t.push(a[e])
                                    })
                                }), r.post(d.playlistfiles, {
                                    playlist: s.name,
                                    assets: t
                                }).then(function (e) {
                                    e.data;
                                    a()
                                }, function (e) {
                                    console.log(e.status), a()
                                })) : a()
                            }, function (e) {
                                console.log(e.status), a()
                            })
                        }, function (e) {
                            e && console.log(e), t.dismiss()
                        })
                    }
                }]
            })
        }
    }
}]).factory("GroupFunctions", ["layoutOtherZones", "$http", "piUrls", function (c, m, u) {
    return {
        listFiles: function (s, l, n, a) {
            for (var t = [], i = !1, e = !0, o = s.playlists.length - 1; 0 <= o; o--) {
                var r = s.playlists[o],
                    d = n.indexOf(r.name); - 1 != d ? (l[d].assets.forEach(function (a) {
                        -1 == t.indexOf(a.filename) && 0 != a.filename.indexOf("_system") && t.push(a.filename), c[l[d].layout].forEach(function (e) {
                            a[e] && 0 != a[e].indexOf("_system") && (-1 == t.indexOf(a[e]) && t.push(a[e]), 0 == a[e].indexOf("__") && (e = a[e].slice(2, a[e].indexOf(".json")), -1 != (e = n.indexOf(e)) && Array.isArray(l[e].assets) && l[e].assets.forEach(function (e) {
                                -1 == t.indexOf(e.filename) && 0 != e.filename.indexOf("_system") && t.push(e.filename)
                            })))
                        })
                    }), -1 == t.indexOf("__" + r.name + ".json") && t.push("__" + r.name + ".json"), l[d].templateName && -1 == t.indexOf(l[d].templateName) && t.push(l[d].templateName), r.settings = r.settings || {}, r.settings.ads = l[d].settings.ads, r.settings.domination = l[d].settings.domination, r.settings.event = l[d].settings.event, r.settings.keyPress = l[d].settings.keyPress, r.settings.onlineOnly = l[d].settings.onlineOnly, r.settings.audio = l[d].settings.audio, "TV_OFF" != l[d].name ? 0 == l[d].assets.length ? (i = "EMPTY_PLAYLIST", r.skipForSchedule = !0, r.plType = "no assets") : (r.skipForSchedule = !1, l[d].settings.ads && l[d].settings.ads.adPlaylist ? r.plType = "advt" : l[d].settings.domination && l[d].settings.domination.enable ? r.plType = "domination" : l[d].settings.event && l[d].settings.event.enable ? r.plType = "event" : l[d].settings.keyPress && l[d].settings.keyPress.enable ? r.plType = "keyPress" : l[d].settings.audio && l[d].settings.audio.enable ? r.plType = "audio" : (e = !1, r.plType = "regular")) : (r.plType = "special", r.skipForSchedule = !1)) : r && r.name || s.playlists.splice(o, 1)
            }
            s.logo && -1 == t.indexOf(s.logo) && t.push(s.logo), s.assets = t, e && (i = "NOPLAYLISTS"), a = a || function () { }, s.defaultCustomTemplate ? async.each(s.playlists, function (e, a) {
                var t = n.indexOf(e.name);
                if (l[t].templateName == s.defaultCustomTemplate) return a();
                m.post(u.playlists + e.name, {
                    layout: l[t].layout,
                    templateName: s.defaultCustomTemplate,
                    videoWindow: l[t].videoWindow,
                    zoneVideoWindow: l[t].zoneVideoWindow
                }).then(function (e) {
                    e = e.data;
                    e.success ? a() : a(e.stat_message)
                }, function (e) {
                    a(e.status)
                })
            }, function (e) {
                a(i = e ? "Unable to set default custom template to group playlists: " + e : i, s)
            }) : a(i, s)
        }
    }
}]).factory("pipopover", ["$state", "$http", "$uibModal", "piUrls", "piConstants", function (e, t, l, s, n) {
    function i(e, a) {
        a = a || angular.noop, t.post(s.fileplay + e).then(function (e) {
            e = e.data;
            a(e.data.status)
        }, function (e) {
            a()
        })
    }
    return {
        showPlayPopover: function (e, a) {
            var t, s;
            t = e, s = a, l.open({
                templateUrl: "/app/templates/tvControl.html",
                controller: ["$scope", "$uibModalInstance", "filename", "isPlaylist", function (a, e, t, s) {
                    if (a.isPlaylist = s) {
                        if (!t.assets || !t.assets.length) return;
                        a.index = 0, a.files = t.assets, a.filename = a.files[a.index].filename
                    } else a.filename = t, a.files = null;
                    a.pauseButtonDisabled = !(a.filename.match(n.videoRegex) || a.filename.match(n.audioRegex)), i("play?file=" + t, function (e) {
                        a.status = e
                    }), a.playPauseTv = function () {
                        i("pause?file=" + t, function (e) {
                            a.status = e
                        })
                    }, a.stopTv = function () {
                        i("stop?file=" + t, function (e) {
                            a.status = e
                        }), e.close()
                    }, a.goBackTv = function () {
                        a.index--, i("play?file=" + a.files[a.index].filename)
                    }, a.goForwardTv = function () {
                        a.index++, i("play?file=" + a.files[a.index].filename)
                    }
                }],
                resolve: {
                    filename: function () {
                        return t
                    },
                    isPlaylist: function () {
                        return s
                    }
                }
            })
        }
    }
}]).factory("fileUploadService", ["fileUploader", "piUrls", function (l, c) {
    var e = {
        createDirective: function (d) {
            var e = {
                restrict: "change" === d ? "E" : "A",
                replace: "change" === d,
                transclude: "change" === d,
                scope: {
                    maxFiles: "@",
                    maxFileSizeMb: "@",
                    getAdditionalData: "&",
                    onstart: "&",
                    onprogress: "&",
                    ondone: "&",
                    onerror: "&"
                },
                compile: function (e, a, t) {
                    return a.maxFiles ? e.attr("multiple", "multiple") : (a.maxFiles = 100, e.removeAttr("multiple")), a.maxFileSizeMb || (a.maxFileSizeMb = 5e3),
                        function (n, e, i, a) {
                            var o = 0;

                            function r(e, a, t) {
                                n.$apply(function () {
                                    n.onerror({
                                        files: e,
                                        type: a,
                                        msg: t
                                    })
                                })
                            }
                            n.files = [], n.showUploadButton = !1, n.percent = 0, n.progressText = "", e.bind(d, function (e) {
                                var a = ("change" === d ? e.target : e.originalEvent.dataTransfer).files;
                                if ("drop" === d && (e.stopPropagation(), e.preventDefault(), o = 0, n.dragStatus.inProgress = !1, 0 < e.originalEvent.dataTransfer.types.length && 0 === a.length && ((e = e.originalEvent.dataTransfer.getData("URL")) && (n.linkValue = {
                                    link: e
                                }, n.linkFn()))), a.length) {
                                    n.files = [], n.maxFiles = n.maxFiles || 100, n.maxFileSizeMb = n.maxFileSizeMb || 5e3;
                                    var t = [];
                                    if (a.length > n.maxFiles) r(a, "TOO_MANY_FILES", "Cannot upload " + a.length + " files, maxium allowed is " + n.maxFiles);
                                    else {
                                        for (var s = 0; s < n.maxFiles && !(s >= a.length); s++) {
                                            var l = a[s];
                                            n.files.push(l), l.size > 1048576 * n.maxFileSizeMb && t.push(l)
                                        }
                                        0 < t.length ? r(t, "MAX_SIZE_EXCEEDED", "Files are larger than the specified max (" + n.maxFileSizeMb + "MB)") : (n.autoUpload = "true", n.autoUpload && "true" == n.autoUpload.toLowerCase() ? "imageonly" != i.allow || -1 != n.files[0].type.indexOf("image") ? n.upload() : n.onerror({
                                            file: n.files[0].name,
                                            msg: "Upload only image files"
                                        }) : n.$apply(function () {
                                            n.showUploadButton = !0
                                        }))
                                    }
                                }
                            }), "drop" === d && (e.bind("dragover", function (e) {
                                e.stopPropagation(), e.preventDefault(), e.originalEvent.dataTransfer.dropEffect = "copy"
                            }), e.bind("dragenter", function (e) {
                                e.stopPropagation(), e.preventDefault(), o || (Array.isArray(e.originalEvent.dataTransfer.types) && -1 !== e.originalEvent.dataTransfer.types.indexOf("text/uri-list") || "function" == typeof e.originalEvent.dataTransfer.types.contains && e.originalEvent.dataTransfer.types.contains("text/uri-list") ? n.$apply(function () {
                                    n.dragStatus.transferItem = "link", n.dragStatus.inProgress = !0
                                }) : (Array.isArray(e.originalEvent.dataTransfer.types) && -1 !== e.originalEvent.dataTransfer.types.indexOf("Files") || "function" == typeof e.originalEvent.dataTransfer.types.contains && e.originalEvent.dataTransfer.types.contains("Files")) && n.$apply(function () {
                                    n.dragStatus.transferItem = "files", n.dragStatus.inProgress = !0
                                })), o++
                            }), e.bind("dragleave", function (e) {
                                e.stopPropagation(), e.preventDefault(), --o || n.$apply(function () {
                                    n.dragStatus.transferItem = "", n.dragStatus.inProgress = !1
                                })
                            })), n.upload = function () {
                                n.onstart();
                                for (var e, a = null, t = (n.getAdditionalData && (a = n.getAdditionalData()), []), s = 0; s < n.files.length; s++)(e = {}).name = n.files[s].name, e.type = n.files[s].type, e.lastModified = n.files[s].lastModified, e.lastModifiedDate = n.files[s].lastModifiedDate, e.size = n.files[s].size, t.push(e);
                                l.post(n.files, a).to(c.files).then(function (e) {
                                    n.ondone({
                                        files: t,
                                        data: angular.copy(e.data)
                                    })
                                }, function (e) {
                                    n.onerror({
                                        files: t,
                                        type: e.type,
                                        msg: e.msg
                                    })
                                }, function (e) {
                                    n.onprogress({
                                        percentDone: e
                                    }), n.percent = e, n.progressText = e + "%"
                                })
                            }
                        }
                }
            };
            return "change" === d ? e.template = function (e, a) {
                var t = '<div><label class="btn btn-default upload_file_container"><input type="file" style="opacity: 0;width:50px"></label><span ng-transclude></span><label ng-if="progressText"  style="width:50px;"><small class="text-success">{{progressText}}</small></label></div>',
                    s = '<label class="btn btn-primary upload_file_containerlarge btn-block"><input type="file" multiple="" style="opacity: 0;width:100%;height:100%;z-index: 100" title="You can upload multiple files at a time"><span ng-transclude></span></label>';
                return "small" == a.type ? t : s
            } : (e.scope.linkFn = "&", e.scope.linkValue = "=", e.scope.dragStatus = "="), e
        }
    };
    return e
}]).factory("bannerShow", ["$timeout", "$rootScope", function (t, s) {
    return {
        message: function (e, a) {
            s.bannerMessage = e, a && (s.bannerLink = a), t(function () {
                s.bannerMessage = null, s.bannerLink = null
            }, 1e4)
        }
    }
}]).factory("createTemplate", ["$rootScope", "$uibModal", "$http", "piUrls", function (e, a, r, d) {
    return {
        openModal: function () {
            a.open({
                templateUrl: "/app/templates/createCustom.html",
                size: "lg",
                controller: ["$scope", "$uibModalInstance", function (i, o) {
                    o.rendered.then(function (e) {
                        function a(a, e) {
                            a.Modal.close();
                            var t = a.getComponents().models,
                                s = [],
                                l = {},
                                n = {};
                            t.forEach(function (e) {
                                var a;
                                "zone" == e.attributes.type && ("main" == (a = e.attributes.attributes.id) ? (s.push('<option value="' + a + '" selected>' + a + "</option>"), l = e) : (s.push('<option value="' + a + '">' + a + "</option>"), n[a] = e))
                            }), window.selectMain = function (e) {
                                l.attributes && (l.attributes.attributes.id = l.attributes.attributes.prevId, l.set("content", l.attributes.attributes.prevId), n[l.attributes.attributes.id] = l), (l = n[e]).attributes.attributes.id = "main", l.set("content", "main"), l.attributes.attributes.prevId = e, a.Modal.close(), a.render()
                            }, a.Modal.setContent('<h1><label>Select main zone: </label><select onChange="window.selectMain(this.value)">' + s.join() + "</select></h1>"), a.Modal.open()
                        }
                        var t = grapesjs.init({
                            container: "#template",
                            showDevices: !1,
                            storageManager: {
                                type: "none"
                            },
                            components: ['<div id="zone 1" style="height:100%;width:33%;position:absolute;top:0%;left:0%" class="zone relative">zone 1</div>', '<div id="main" style="height:100%;width:33%;position:absolute;top:0%;left:33%" class="zone relative">main</div>', '<div id="zone 2" style="height:100%;width:33%;position:absolute;top:0%;left:66%" class="zone relative">zone 2</div>'].join(""),
                            commands: {
                                defaults: [{
                                    id: "openModal",
                                    run: a,
                                    stop: a
                                }]
                            }
                        }),
                            s = t.DomComponents,
                            l = s.getType("text").model,
                            n = s.getType("text").view;
                        t.Panels.addPanel({
                            id: "zoneSelector",
                            visible: !0,
                            buttons: [{
                                id: "mainZone",
                                attributes: {
                                    title: "Select main zone from all zones"
                                },
                                className: "fa fa-plus",
                                command: "openModal",
                                active: !1
                            }]
                        }), s.addType("zone", {
                            model: l.extend({
                                defaults: Object.assign({}, l.prototype.defaults, {
                                    classes: ["zone", "relative"],
                                    traits: ["id"]
                                })
                            }, {
                                isComponent: function (e) {
                                    if ("ZONE" == e.tagName) return {
                                        type: "zone"
                                    }
                                }
                            }),
                            view: n.extend({
                                initialize: function (e) {
                                    n.prototype.initialize.apply(this, arguments), this.attr.id = this.attr.id || "zone - " + this.cid, this.model.attributes.content = this.attr.id
                                }
                            })
                        }), t.BlockManager.add("zoneBlock", {
                            label: "Zone",
                            name: "zone",
                            attributes: {
                                class: "fa fa-square"
                            },
                            category: "Zone",
                            content: {
                                type: "zone",
                                style: {
                                    height: "100px",
                                    width: "100px"
                                }
                            }
                        }), i.createLayout = function () {
                            var e = t.getHtml(),
                                a = t.getCss();
                            r.post(d.customTemplate, {
                                html: e,
                                css: a
                            }).then(function (e) { }, function (e) { }), o.close()
                        }
                    }), i.close = function () {
                        o.close()
                    }
                }]
            })
        }
    }
}]).factory("SchedulePlaylist", ["$uibModal", "weeksObject", "daysObject", "gettext", function (r, d, c, e) {
    return {
        getWeekAndDayText: function (a) {
            var t = e("Not Scheduled"),
                s = e("Not Scheduled"),
                l = e("Not Scheduled");
            return !a || !a.weekdays || 7 <= a.weekdays.length ? t = "" : 0 < a.weekdays.length && (t = e("week days: "), a.weekdays.forEach(function (e) {
                t = t + " " + d[e - 1].label.slice(0, 2)
            })), !a || !a.monthdays || 31 <= a.monthdays.length ? s = "" : 0 < a.monthdays.length && (s = e("dates: "), a.monthdays.forEach(function (e) {
                s = s + e + ","
            })), l = a && a.weeknumbers && a.weeknumbers.enable ? (l = e("weeknumbers: "), ("four" === a.weeknumbers.modulo ? ["1", "2", "3", "0"] : ["1", "2", "0"]).forEach(function (e) {
                !0 === a.weeknumbers[e] && ("0" === e && (e = "four" === a.weeknumbers.modulo ? "4" : "3"), l = l + e + ",")
            }), l.slice(0, -1)) : "", {
                weekDaysText: t,
                monthDaysText: s,
                weeknumbersText: l
            }
        },
        scheduleValidation: function (t) {
            t.today = (new Date).toISOString().split("T")[0], t.$watch("playlistSettings.startdate", function (e) {
                var a;
                e && (a = new Date(e), t.endday = a.toISOString().split("T")[0], (!t.playlistSettings.enddate || e > t.playlistSettings.enddate) && (t.playlistSettings.enddate = a))
            })
        },
        scheduleCalendar: function (e, s, l, n, a) {
            l.ngDropdown = {
                weekdays: {
                    list: d,
                    selectedDays: [],
                    extraSettings: {
                        smartButtonMaxItems: 7,
                        smartButtonTextConverter: function (e, a) {
                            return e.slice(0, 2)
                        },
                        displayProp: "label",
                        idProp: "id",
                        externalIdProp: "id",
                        scrollableHeight: "200px",
                        scrollable: !0,
                        showCheckAll: !0,
                        showUncheckAll: !0,
                        checkBoxes: !1,
                        buttonClasses: "btn btn-default group-multiselect"
                    },
                    customTexts: {
                        buttonDefaultText: "Select Days"
                    },
                    events: {
                        onSelectAll: function () {
                            s.weekdays = l.ngDropdown.weekdays.list.map(function (e) {
                                return e.id
                            })
                        },
                        onDeselectAll: function () {
                            s.weekdays = []
                        },
                        onItemSelect: function (e) {
                            -1 == s.weekdays.indexOf(e.id) && s.weekdays.push(e.id)
                        },
                        onItemDeselect: function (e) {
                            s.weekdays.splice(s.weekdays.indexOf(e.id), 1)
                        }
                    }
                },
                monthdays: {
                    list: c,
                    selectedDays: [],
                    extraSettings: {
                        smartButtonMaxItems: 7,
                        displayProp: "label",
                        idProp: "id",
                        externalIdProp: "id",
                        scrollableHeight: "200px",
                        scrollable: !0,
                        showCheckAll: !0,
                        showUncheckAll: !0,
                        checkBoxes: !1,
                        buttonClasses: "btn btn-default group-multiselect"
                    },
                    customTexts: {
                        buttonDefaultText: "Select Dates"
                    },
                    events: {
                        onSelectAll: function () {
                            s.monthdays = l.ngDropdown.monthdays.list.map(function (e) {
                                return e.id
                            })
                        },
                        onDeselectAll: function () {
                            s.monthdays = []
                        },
                        onItemSelect: function (e) {
                            -1 == s.monthdays.indexOf(e.id) && s.monthdays.push(e.id)
                        },
                        onItemDeselect: function (e) {
                            s.monthdays.splice(s.monthdays.indexOf(e.id), 1)
                        }
                    }
                }
            };

            function t(e) {
                return 2 == (e = e.split(":")).length ? {
                    h: parseInt(e[0]),
                    m: parseInt(e[1])
                } : 1 == e.length ? {
                    h: 0,
                    m: parseInt(e[0])
                } : 2 < e.length ? {
                    h: parseInt(e[e.length - 2]),
                    m: parseInt(e[e.length - 1])
                } : void 0
            }

            function i(e) {
                var a, t;
                o.startdate && o.startdate.setUTCHours(0, 0, 0, 0), o.enddate && o.enddate.setUTCHours(0, 0, 0, 0), o.starttimeObj && (t = o.starttimeObj.getHours(), o.starttime = t < 10 ? "0" + t : "" + t, a = o.starttimeObj.getMinutes(), o.starttime += a < 10 ? ":0" + a : ":" + a), o.endtimeObj && (t = o.endtimeObj.getHours(), o.endtime = t < 10 ? "0" + t : "" + t, a = o.endtimeObj.getMinutes(), o.endtime += a < 10 ? ":0" + a : ":" + a), s.weekdays && s.weekdays.length < 7 ? s.weekday = s.weekdays[0] : delete s.weekday, s.monthdays && s.monthdays.length < 31 ? s.monthday = s.monthdays[0] : delete s.monthday, s && s.weeknumbers && !s.weeknumbers.modulo && (s.weeknumbers.modulo = "four"), l.deployform && e.$dirty && l.deployform.$setDirty(), n && n()
            }
            l.playlistName = e;
            var o = l.playlistSettings = s,
                e = (o.startdate = o.startdate || Date.now(), o.startdate = new Date(o.startdate), o.startdate.setUTCHours(0, 0, 0, 0), o.enddate = o.enddate || Date.now(), o.enddate = new Date(o.enddate), o.enddate.setUTCHours(0, 0, 0, 0), o.starttime = o.starttime || "00:00", o.starttimeObj = new Date(0), t(o.starttime)),
                e = (o.starttimeObj.setHours(e.h), o.starttimeObj.setMinutes(e.m), o.endtime = o.endtime || "00:00", o.endtimeObj = new Date(0), t(o.endtime));
            o.endtimeObj.setHours(e.h), o.endtimeObj.setMinutes(e.m), s.weeknumbers ? s.weeknumbers.modulo || (s.weeknumbers.modulo = "four") : s.weeknumbers = {
                enable: !1,
                modulo: "four"
            }, !s.weekdays && s.weekday && 0 != s.weekday ? s.weekdays = [s.weekday] : s.weekdays || (s.weekdays = l.ngDropdown.weekdays.list.map(function (e) {
                return e.id
            })), l.ngDropdown.weekdays.selectedDays = l.ngDropdown.weekdays.list.filter(function (e) {
                return 0 <= s.weekdays.indexOf(e.id)
            }), !s.monthdays && s.monthday && 0 != s.monthday ? s.monthdays = [s.monthday] : s.monthdays || (s.monthdays = l.ngDropdown.monthdays.list.map(function (e) {
                return e.id
            })), l.ngDropdown.monthdays.selectedDays = l.ngDropdown.monthdays.list.filter(function (e) {
                return 0 <= s.monthdays.indexOf(e.id)
            }), l.scheduleCalendarModal = r.open({
                templateUrl: "/app/templates/scheduleCalendar.html",
                scope: l,
                keyboard: !1
            });
            l.scheduleCalendarModal.result.then(i, i), l.closeModal = function (e) {
                l.scheduleCalendarModal.close(e)
            }
        }
    }
}]).factory("AssetValidityCheck", [function () {
    return {
        isValid: function (e) {
            if (e && e.validity && e.validity.enable) {
                var a = (new Date).setHours(0, 0, 0, 0);
                if (e.validity.enddate && a > (a = e.validity.enddate, (a = new Date(a)).setTime(a.getTime() + 60 * a.getTimezoneOffset() * 1e3), a.getTime())) return !1
            }
            return !0
        }
    }
}]), angular.module("cordova.services", []).factory("cordovaReady", ["$document", "$location", "$q", function (e, a, t) {
    var s = t.defer(),
        l = !1;
    return document.addEventListener("deviceready", function () {
        n(), l = !0, s.resolve(window.cordova)
    }), setTimeout(function () {
        l || window.cordova && (n(), s.resolve(window.cordova))
    }, 3e3), s.promise;

    function n() {
        document.addEventListener("backbutton", function (e) {
            "/" == a.path() ? (e.preventDefault(), navigator.app.exitApp()) : navigator.app.backHistory()
        }, !1), console.log("adding back button listener")
    }
}]).factory("cordovaPush", ["$rootScope", "screenlog", function (e, i) {
    function o() {
        var e = window.location.pathname;
        return e.substring(0, e.lastIndexOf("/") + 1)
    }
    return function (e, a, t) {
        var s;
        if (void 0 === window.plugins) return i.error("PhoneGap plugins not found"), !1;
        if (void 0 === (s = window.plugins.pushNotification)) return i.error("Push plugin not found"), !1;

        function l(e) { }

        function n(e) {
            i.error("Registration Error:" + e)
        }
        return "Android" === device.platform ? s.register(l, n, {
            senderID: e,
            ecb: "onNotificationGCM"
        }) : "iOS" === device.platform && s.register(function (e) {
            a(e, "ios")
        }, n, {
            badge: "true",
            sound: "true",
            alert: "true",
            ecb: "onNotificationAPN"
        }), window.onNotificationAPN = function (e) {
            e.alert, e.sound && new Media(o() + "app/sound/purebell.mp3").play(), e.badge && s.setApplicationIconBadgeNumber(l, n, e.badge), t(null, {
                message: e.alert,
                msgcnt: e.badge
            }, "ios")
        }, window.onNotificationGCM = function (e) {
            switch (e.event) {
                case "registered":
                    0 < e.regid.length ? a(e.regid, "android") : i.error("Error: No device registration ID received");
                    break;
                case "message":
                    e.foreground && new Media(o() + "app/sound/purebell.ogg").play(), t(e.collapse_key, e.payload, "android");
                    break;
                case "error":
                    i.error("Error while receiving GCM push notification:" + e);
                    break;
                default:
                    i.error("Unknown GCM push notification received:" + e)
            }
        }, !0
    }
}]), angular.module("pisignage").run(["$templateCache", function (e) {
    "use strict";
    e.put("/app/partials/home/_pihome.html", '<div class="well well-sm" ng-if="!playlistOn &amp;&amp; !operationInProgress" uib-dropdown=uib-dropdown><button class="btn btn-success btn-block" uib-dropdown-toggle=uib-dropdown-toggle><span translate=translate>No Playlist is being played</span><br><span translate=translate>START PLAYING &nbsp;</span><span class=caret></span></button><ul class="dropdown-menu pull-right" role=menu uib-dropdown-menu=uib-dropdown-menu><li class=text-danger ng-repeat="item in playlistsNames"><a ng-href=# ng-click=play(item)><h4>{{item}}</h4></a></li></ul></div><div class="well well-sm" ng-if="playlistOn &amp;&amp; !operationInProgress"><div class=row><div class=col-xs-3><button class="btn btn-block" ng-class="{\'btn-danger\': !tvStatus , \'btn-success\': tvStatus }"><small translate=translate>TV</small></button></div><div class=col-xs-6><h5><span translate=translate>Playlist</span><span>:&nbsp; {{currentPlaylist}} ({{currentPlayingFile}})</span></h5><h6 ng-if=duration><span translate=translate>Playing since:</span><span>&nbsp;{{duration | date:\'medium\'}}</span></h6></div><div class=col-xs-3><button class="btn btn-danger btn-block" ng-click=stop() translate=translate>STOP</button></div></div><div class=row><div class="col-xs-6 col-xs-offset-3 text-center"><button class="btn btn-sm btn-primary-outline" title="click to step backward" ng-click="playlistMedia(\'backward\')"><i class="fa fa-step-backward fa-lg"></i></button> <button class="btn btn-sm btn-primary-outline" title="click to pause/resume play" ng-click="playlistMedia(\'pause\')"><i class="fa fa-lg" ng-class="pausePlayButtonPaused?\'fa-play\':\'fa-pause\'"></i></button> <button class="btn-sm btn btn-primary-outline" title="click to step forward" ng-click="playlistMedia(\'forward\')"><i class="fa fa-step-forward fa-lg"></i></button></div></div></div><div class="well well-sm" ng-if=operationInProgress><button class="btn btn-warning btn-block"><span translate=translate>Please Wait, Request pending</span></button></div><div class="well well-sm"><div class=row><div class=col-xs-8><small class=text-muted translate=translate>Storage:</small>{{diskSpaceAvailable}}<span translate=translate>&nbsp;free</span></div><div class=col-xs-4><div class=progress><div class="progress-bar progress-bar-warning" role=progressbar aria-valuenow=0 aria-valuemin=0 aria-valuemax=100 style="width: {{diskSpaceUsed}};"><span>{{diskSpaceUsed}}</span><span translate=translate>used</span></div></div></div></div></div><div class="well well-sm"><div class=row><div class="col-xs-6 col-padding-5px"><a class="btn btn-link btn-block" href=/playlists style=color:#004c7d><i class="fa fa-list-alt fa-3x"></i><p style=font-size:12px translate=translate>Playlists</p></a></div><div class="col-xs-6 col-padding-5px"><a class="btn btn-link btn-block" href=/assets style=color:#239ff1><i class="fa fa-folder-open fa-3x"></i><p style=font-size:12px translate=translate>Assets</p></a></div><div class="col-xs-6 col-padding-5px col-xs-offset-3"><a class="btn btn-link btn-block" href=/settings style=color:#004c7d><i class="fa fa-cog fa-3x"></i><p style=font-size:12px translate=translate>Settings</p></a></div></div></div><div class="well well-sm"><div class=row><div class=col-sm-6><div uib-dropdown=uib-dropdown><span class=text-muted>Select debug level</span> <button class="btn btn-sm btn-link" uib-dropdown-toggle=uib-dropdown-toggle>{{currentDebugLevel}}<i class="fa fa-caret-down"></i></button><ul class=dropdown-menu role=menu uib-dropdown-menu=uib-dropdown-menu><li ng-repeat="level in debugLevels"><a href=# ng-click=selectDebugLevel(level)>&nbsp;&nbsp;{{level}}</a></li></ul></div><h5>Download the log files</h5><div class=btn-group-vertical><button class="btn btn-link btn-xs" type=button ng-click="downloadLog(\'forever_out.log\')"><h6>Main Log (forever_out.log)</h6></button> <button class="btn btn-link btn-xs" type=button ng-click="downloadLog(\'forever_err.log\')"><h6>Error Log (forever_err.log)</h6></button> <button class="btn btn-link btn-xs" type=button ng-click="downloadLog(\'forever.log\')"><h6>Upgrade Log (forever.log)</h6></button></div><h6 class=text-warning ng-bind=statusMessage>{{statusMessage }}</h6></div><div class=col-sm-6><div class=col-sm-10 ng-hide=modal><div style=text-align:right ng-if=!img64>Screenshot not available</div><img data-ng-src=data:image/png;base64,{{img64}} ng-if=img64 height=250px></div><div class="col-sm-2 pull-right"><div class=btn-group><button class="btn btn-primary btn-xs" type=button ng-click=snapshot()><i class="fa fa-camera fa-lg" aria-hidden=true></i></button> <button class="btn btn-default btn-xs" ng-click=shellPopup()><i class="fa fa-lg fa-terminal"></i></button></div></div></div></div></div>'), 
    
    e.put("/app/partials/_reports.html", '<div id=mainscreen><button class="btn btn-info btn-lg btn-block" disabled type=button translate=translate>Play Stats</button> <button class="btn btn-info btn-lg btn-block" disabled type=button translate=translate>Uploads</button> <button class="btn btn-info btn-lg btn-block" disabled type=button translate=translate>Log Messages</button> <button class="btn btn-info btn-lg btn-block" disabled type=button translate=translate>TV on status</button> <button class="btn btn-info btn-lg btn-block" disabled type=button translate=translate>Screeen Shots</button></div>'), 
    
    e.put("/app/partials/_settings.html", '<div class="panel panel-default"><div class=panel-heading><h4><span translate=translate>General Settings</span><span class=pull-right>{{\'version\' | translate}}: {{settings.version}}/{{settings.platform_version}} <button class="btn btn-warning btn-xs" ng-if="settings.currentVersion.version &amp;&amp; settings.version !=  settings.currentVersion.version" ng-click=swUpdate() ng-disabled=disableButtons.swUpdate><i class="fa fa-arrow-circle-up fa-lg">({{settings.currentVersion.version}})</i></button></span></h4><small class="pull-right text-danger" ng-bind=statusMessage.swUpdate></small></div><div class=panel-body><form class=form-horizontal name=settings_name><div class=form-group><label class="control-label col-sm-3 text-muted" translate=translate>Player Name</label><div class=col-sm-6><input class=form-control ng-model=settings.localName></div></div><div class=form-group><label class="control-label col-sm-3 text-muted" translate=translate>Optional Note</label><div class=col-sm-6><input class=form-control ng-model=settings.note></div></div><div class=form-group><div class="col-xs-6 col-xs-offset-3"><small class=text-warning ng-bind=statusMessage.saveName></small><br><button class="btn btn-primary" ng-disabled=settings_name.$pristine ng-click=saveName() translate=translate>Save</button></div></div></form></div></div><div class="panel panel-default"><div class=panel-heading><h4><span translate=translate>Network Settings</span>&nbsp&nbsp<i class="fa fa-code-fork"></i></h4></div><div class=panel-body><form class=form-horizontal role=form name=networkform unsaved-changes-warning=unsaved-changes-warning><div class=form-group><label class="control-label col-sm-3 text-muted" translate=translate>Select the Interface</label><col-sm-6><div class=input-group><select class=form-control ng-model=settings.selectedInterface ng-options="interface.interfaceName for interface in availableInterfaces"><option value="" translate=translate>--Select the interface--</option></select></div></col-sm-6></div><div class=form-group><label class="control-label col-sm-3 text-muted" translate=translate>Network Mode</label><div class=col-xs-6><div class=radio-inline><input type=radio ng-model=settings.selectedInterface.mode value=DHCP><span translate=translate>DHCP</span></div><div class=radio-inline><input type=radio ng-model=settings.selectedInterface.mode value=Static><span translate=translate>Static</span></div></div></div><div class=form-group ng-if="settings.selectedInterface.mode==\'DHCP\'"><label class="control-label col-sm-3 text-muted" translate=translate>IP Address</label><div class=col-sm-6><p class="text-primary form-control-static">{{settings.selectedInterface.address || ("Not connected" | translate)}}</p></div></div><div class=form-group ng-if="settings.selectedInterface.mode==\'DHCP\'"><label class="control-label col-sm-3 text-muted" translate=translate>Edit DNS Entry</label><div class=col-sm-6><label class=checkbox-inline><input type=checkbox ng-model=settings.editDns></label></div></div><div class=form-group ng-if="settings.selectedInterface.mode==\'DHCP\'"><label class="control-label col-sm-3 text-muted" translate=translate>Primary DNS</label><div class=col-sm-6><input class=form-control ng-model=settings.dns.primary ng-disabled=!settings.editDns></div></div><div class=form-group ng-if="settings.selectedInterface.mode==\'DHCP\'"><label class="control-label col-sm-3 text-muted" translate=translate>Secondary DNS</label><div class=col-sm-6><input class=form-control ng-model=settings.dns.secondary ng-disabled=!settings.editDns></div></div><div class=form-group ng-if="settings.selectedInterface.mode==\'Static\'"><label class="control-label col-sm-3 text-muted" translate=translate>IP Address</label><div class=col-sm-6><input class=form-control ng-model=settings.selectedInterface.address required></div></div><div class=form-group ng-if="settings.selectedInterface.mode==\'Static\'"><label class="control-label col-sm-3 text-muted" translate=translate>Netmask</label><div class=col-sm-6><input class=form-control ng-model=settings.selectedInterface.netmask required></div></div><div class=form-group ng-if="settings.selectedInterface.mode==\'Static\'"><label class="control-label col-sm-3 text-muted" translate=translate>Gateway</label><div class=col-sm-6><input class=form-control ng-model=settings.selectedInterface.gateway required></div></div><div class=form-group ng-if="settings.selectedInterface.mode==\'Static\'"><label class="control-label col-sm-3 text-muted" translate=translate>Primary DNS</label><div class=col-sm-6><input class=form-control ng-model=settings.dns.primary></div></div><div class=form-group ng-if="settings.selectedInterface.mode==\'Static\'"><label class="control-label col-sm-3 text-muted" translate=translate>Secondary DNS</label><div class=col-sm-6><input class=form-control ng-model=settings.dns.secondary></div></div><div class=form-group><div class="col-xs-6 col-xs-offset-3"><small class=text-warning ng-bind=statusMessage.saveIp></small><br><button class="btn btn-primary" type=submit ng-click=saveIp() ng-disabled="networkform.$invalid || networkform.$pristine" translate=translate>Save & Reboot</button></div></div></form></div></div><div class="panel panel-default"><div class=panel-heading><h4><span translate=translate>WiFi Settings</span>&nbsp&nbsp<i class="fa fa-rss"></i></h4></div><div class=panel-body><form class=form-horizontal role=form name=wifiform><div class=form-group><label class="control-label col-sm-3 text-muted" translate=translate>Access Point</label><div class=col-xs-6><div class=radio-inline><input type=radio ng-model=settings.wifi.apmode value=AP ng-change=clearWifiName()><small class=text-muted translate=translate>act as access-point</small></div><div class=radio-inline><input type=radio ng-model=settings.wifi.apmode value=NO><small class=text-muted translate=translate>normal wifi</small></div></div></div><div class=form-group><label class="control-label col-sm-3 text-muted" translate=translate>Assigned IP address</label><div class=col-sm-6><p class="text-primary form-control-static">{{settings.wifi.ip || ("Not connected" | translate)}}</p></div></div><div class=form-group><label class="control-label col-sm-3 text-muted" translate=translate>Select the country</label><div class=col-sm-6><div class=input-group><select class=form-control ng-model=settings.wifi.country ng-options="country.name for country in countries"><option value="" translate=translate>-- Select the country --</option></select></div></div></div><div class=form-group><label class="control-label col-sm-3 text-muted" translate=translate>Network Name (SSID)</label><div class=col-sm-6><div class=input-group><input class=form-control ng-model=settings.wifi.ssid required ng-change=clearApMode()><div class=input-group-btn><button class="btn btn-default" ng-click=scanNetwork()><i class="fa fa-refresh">&nbsp&nbsp</i><b translate=translate>scan network</b></button></div></div></div></div><div class=form-group><label class="control-label col-sm-3 text-muted" translate=translate>Password</label><div class=col-sm-6><div class=input-group><input class=form-control type=password ng-model=settings.wifi.pass ng-disabled=settings.wifi.open><div class=input-group-addon><input type=checkbox ng-model=settings.wifi.open> &nbsp&nbsp Open Wi-fi &nbsp</div></div></div></div><div class=form-group><label class="control-label col-sm-3 text-muted" translate=translate>Hidden Network</label><div class=col-sm-6><label class=checkbox-inline><input type=checkbox ng-model=settings.wifi.hidden></label></div></div><div class=form-group><div class="col-xs-6 col-xs-offset-3"><small class=text-warning ng-bind=statusMessage.saveWifi></small><br><button class="btn btn-primary" type=submit ng-click=saveWifi() ng-disabled=wifiform.$pristine translate=translate>Save</button></div></div></form></div></div><div class="panel panel-default"><div class=panel-heading><h4><span translate=translate>Change Server</span>&nbsp&nbsp<i class="fa fa-hdd-o"></i></h4></div><div class=panel-body><form class=form-horizontal role=server name=serverform><div class=form-group><label class="control-label col-sm-3 text-muted" translate=translate>Server Name or IP address (with port number for open source)</label><div class=col-sm-6><input class=form-control ng-model=settings.server.config required></div></div><div class=form-group><div class="col-xs-6 col-xs-offset-3"><small class=text-warning ng-bind=statusMessage.serverChange></small><br><button class="btn btn-primary" type=submit ng-disabled="serverform.$invalid || serverform.$pristine" ng-click=serverChange() translate=translate>Change</button></div></div></form></div></div><div class="panel panel-default"><div class=panel-heading><h4><span translate=translate>User Settings</span>&nbsp&nbsp<i class="fa fa-user"></i></h4></div><div class=panel-body><form class=form-horizontal role=form name=userform><div class="alert alert-info"><i translate=translate>These credentials will be overwritten if player is connected to server</i></div><div class=form-group><label class="control-label col-sm-3 text-muted" translate=translate>Username</label><div class=col-sm-6><input class=form-control ng-model=settings.user.name required></div></div><div class=form-group><label class="control-label col-sm-3 text-muted" translate=translate>New Password</label><div class=col-sm-6><input class=form-control type=password ng-model=settings.user.newpasswd required></div></div><div class=form-group><div class="col-xs-6 col-xs-offset-3"><small class=text-warning ng-bind=statusMessage.userChange></small><br><button class="btn btn-default" type=submit ng-disabled="userform.$invalid || userform.$pristine" ng-click=userChange() translate=translate>Change</button></div></div></form></div></div><div class="panel panel-default"><div class=panel-heading><h4><span translate=translate>Display</span>&nbsp&nbsp<i class="fa fa-picture-o"></i></h4></div><div class=panel-body><form class=form-horizontal role=form name=displayform><div class=form-group><label class="control-label col-sm-3 text-muted" translate=translate>Screen Orientation</label><div class=col-sm-6><div class=radio-inline><input type=radio ng-model=settings.orientation value=landscape><span translate=translate>Landscape</span></div><div class=radio-inline><input type=radio ng-model=settings.orientation value=portrait><span translate=translate>Portrait</span></div></div></div><div class=form-group><label class="control-label col-sm-3 text-muted" translate=translate>TV Mode</label><div class=col-sm-9><div class=radio-inline><input type=radio ng-model=settings.resolution value=auto><span translate=translate>Auto(Based on hdmi EDID)</span></div><div class=radio-inline><input type=radio ng-model=settings.resolution value=720p><span translate=translate>720p(HDMI)</span></div><div class=radio-inline><input type=radio ng-model=settings.resolution value=1080p><span translate=translate>1080p</span></div><div class=radio-inline><input type=radio ng-model=settings.resolution value=PAL><span translate=translate>PAL(RCA)</span></div><div class=radio-inline><input type=radio ng-model=settings.resolution value=NTSC><span translate=translate>NTSC(RCA)</span></div></div></div><div class=form-group><div class="col-xs-6 col-xs-offset-3"><small class=text-warning ng-bind=statusMessage.orientation></small><br><button class="btn btn-primary" type=submit ng-click=orientation() ng-disabled=displayform.$pristine translate=translate>Change And Reboot</button></div></div></form></div></div><div class="panel panel-default"><div class=panel-heading><h4><span translate=translate>Overscan</span>&nbsp&nbsp<i class="fa fa-arrows-alt"></i></h4></div><div class=panel-body><form class=form-horizontal role=form name=overscanform><div class="alert alert-info"><i translate=translate>Change only if display is not fitting the screen</i></div><div class=form-group><label class="control-label col-sm-3 text-muted" translate=translate>Disable Overscan</label><div class=col-sm-6><div class=checkbox-inline><input type=checkbox ng-model=settings.overscan.disable_overscan><span translate=translate>Disable</span></div></div></div><div class=form-group ng-hide=settings.overscan.disable_overscan><label class="control-label col-sm-3 text-muted" translate=translate>overscan_left & overscan_right</label><div class=col-sm-3><input class=form-control type=number ng-model=settings.overscan.horizontal></div></div><div class=form-group ng-hide=settings.overscan.disable_overscan><label class="control-label col-sm-3 text-muted" translate=translate>overscan_top & overscan_bottom</label><div class=col-sm-3><input class=form-control type=number ng-model=settings.overscan.vertical></div></div><div class=form-group><div class="col-xs-6 col-xs-offset-3"><small class=text-warning ng-bind=statusMessage.resize></small><br><button class="btn btn-primary" type=submit ng-click=resize(overscan) ng-disabled="overscanform.$invalid || overscanform.$pristine" translate=translate>Resize & Reboot</button></div></div></form></div></div><div class="panel panel-default"><div class=panel-heading><h4><span translate=translate>Schedule TV ON/OFF</span></h4></div><div class=panel-body><form class=form-horizontal role=form name=scheduleform><div class=form-group><label class="control-label col-sm-3 text-muted" translate=translate>Enable scheduling</label><div class=col-sm-6><label class=checkbox-inline><input type=checkbox ng-model=settings.sleep.enable><span translate=translate>Enable</span></label></div></div><div class=form-group ng-if=settings.sleep.enable><label class="control-label col-sm-3 text-muted" translate=translate>Power ON at</label><div class=col-sm-3><input class=form-control type=time ng-model=settings.sleep.ontimeObj></div><label class="control-label col-sm-3 text-muted" translate=translate>Power OFF at</label><div class=col-sm-3><input class=form-control type=time ng-model=settings.sleep.offtimeObj></div></div><div class=form-group><div class="col-xs-6 col-xs-offset-3"><small class=text-warning ng-bind=statusMessage.sleepEnable></small><br><button class="btn btn-primary" type=submit ng-click=sleepEnable() ng-disabled="scheduleform.$invalid || scheduleform.$pristine" translate=translate>Save</button></div></div></form></div></div><div class="panel panel-default"><div class=panel-heading><h4><span translate=translate>Volume Setting</span>&nbsp&nbsp<i class="fa fa-volume-up"></i></h4></div><div class=panel-body><form class=form-horizontal role=form name=volumeform><div class=form-group><label class="control-label col-sm-3 text-muted" translate=translate>Volume level</label><div class=col-sm-3><input class=form-control type=number ng-model=settings.omxVolume min=0 max=100></div></div><div class=form-group><div class="col-xs-6 col-xs-offset-3"><small class=text-warning ng-bind=statusMessage.changeOmxVolume></small><br><button class="btn btn-primary" type=submit ng-click=changeOmxVolume() ng-disabled="volumeform.$invalid || volumeform.$pristine" translate=translate>Save</button></div></div></form></div></div><div class="panel panel-default"><div class=panel-heading><h4><span translate=translate>Advanced Users</span>&nbsp&nbsp <button class="btn btn-xs btn-default" ng-click=editSettingsFile()>Edit Settings File</button></h4></div><div class=panel-body><form class=form-horizontal role=form name=settingsfile><div class=form-group ng-repeat="(key, value) in settingsData track by key"><label class="control-label col-sm-3 text-muted">{{key}}</label><div class=col-sm-3 ng-show=!isObject(settingsData[key])><input class=form-control ng-model=settingsData[key]></div><div class=col-sm-9 ng-show=isObject(settingsData[key])><div class=form-group ng-repeat="(keyinner, valueinner) in settingsData[key] track by keyinner"><label class="control-label col-sm-3 text-muted">{{keyinner}}</label><div class=col-sm-3><input class=form-control ng-model=settingsData[key][keyinner]></div></div></div></div><div class=form-group ng-show=settingsData><div class="col-xs-6 col-xs-offset-3"><small class=text-warning ng-bind=statusMessage.settingsFile></small><br><button class="btn btn-primary" type=submit ng-click=saveSettingsFile() translate=translate>Save</button></div></div></form></div></div><div class="panel panel-default"><div class=panel-heading><h4>Factory Reset</h4></div><div class=panel-body><form class=form-horizontal role=form name=factoryresetform><div class=form-group><div class="col-xs-6 col-xs-offset-3"><strong class=text-danger translate=translate>Erase all settings & restore factory settings</strong></div></div><div class=form-group><div class="col-xs-6 col-xs-offset-3"><small class=text-warning ng-bind=statusMessage.factoryReset></small><br><button class="btn btn-danger" ng-click=factoryReset()>Go Ahead</button></div></div></form></div></div>'), 
    
    e.put("/app/partials/playlists/_calendar.html", '<div class="panel panel-default"><div class=panel-heading><div class=row><div class=col-xs-10><h3 ng-bind=plname></h3></div><div class=col-xs-2><button class="btn btn-success pull-right" ng-click=save() translate=translate>Save</button></div></div></div><div class=panel-body><form role=form id=playlistcalendar name=playlistcalendar><div class=form-group><label class=control-label for=startdate translate=translate>Start Date</label> <input class=form-control type=date ng-model=settings.startdate name=startdate title="Enter Start Date" required></div><div class=form-group><label class=control-label for=enddate translate=translate>End Date</label> <input class=form-control type=date ng-model=settings.enddate name=enddate title="Enter End Date" required></div><div class=form-group><label class=control-label for=starttime translate=translate>Every Day Start Time</label> <input class=form-control type=time ng-model=settings.starttime name=starttime title="Enter Start Time" required></div><div class=form-group><label class=control-label for=endtime translate=translate>Every Day End Time</label> <input class=form-control type=time ng-model=settings.endtime name=enddate title="Enter End Time" required></div></form></div></div>'),

    e.put("/app/partials/playlists/_edit.html", '<div class="panel panel-default"><div class=panel-heading><div class=row><div class=col-sm-6><h3 translate=translate>Delete or rename Playlists</h3></div><div class="col-sm-3 pull-right"><button class="btn btn-primary navbar-btn pull-right" ng-click="pbHandler(\'DONE\')" translate=translate>DONE</button></div></div></div><div class="alert alert-sm alert-warning" translate=translate>In case of renaming playlists, Playlist need to be manually assigned to group again</div><div ng-repeat="playlist in playlists" ng-controller=PlaylistsItemCtrl><form class=row name=pleditform><div class="form-group col-xs-11" ng-class="pleditform.$dirty?\'\':fieldStatus"><div class="input-group col-xs-11 col-xs-offset-1"><input class=form-control ng-model=playlist.name ng-disabled=!renameFeature><span class=input-group-btn ng-click=rename($index) ng-show=pleditform.$dirty><a class="btn btn-success" type=button translate=translate>SAVE</a></span></div></div><div class=col-xs-1><button class="btn btn-danger" ng-click=delete($index)><i class="fa fa-times fa-lg"></i></button></div></form></div></div>'), 
    
    e.put("/app/partials/playlists/_list.html", '<div class="panel panel-default" ng-show="collaborator.rights.playlist.edit == true"><div class=panel-heading><div class=row><div class=col-sm-6><h3 translate=translate>Available Playlists</h3></div><div class="col-sm-3 pull-right"><button class="btn btn-primary-outline btn-sm navbar-btn pull-right" title="{{\' Rename or Delete Playlists\' | translate}}" ng-click="pbHandler(\'EDIT\')" translate=translate>Edit</button></div></div></div><ul class=list-group><li class="list-group-item bg-default"><div class=row><div class=col-sm-3><div class=form-group><input class="input-sm form-control" placeholder="{{\'Filter by Name\' | translate}}" ng-model=search></div></div><div class="col-sm-3 col-sm-offset-3"><div class="btn-group btn-group-sm" ng-if="adminServer &amp;&amp; !selLabel.selectedLabel" ng-attr-title="{{\'Click this button to select, edit and add categories\' | translate}}"><button class="btn btn-default-outline" ng-click=loadCategory()><i class="fa fa-tags">&nbsp;</i>{{"Filter by category"| translate}}</button></div><div class="btn-group btn-group-sm" ng-if="adminServer &amp;&amp; selLabel.selectedLabel" ng-attr-title={{selLabel.selectedLabel}}><button class="btn btn-default-outline" ng-click=loadCategory()><i class="fa fa-tags">&nbsp;</i>{{selLabel.selectedLabel.trunc(20)}}</button> <button class="btn btn-warning" ng-click="selLabel.selectedLabel=null;"><i class="fa fa-close"></i></button></div></div><div class="col-sm-1 pull-right"><div class="btn-group-vertical pull-right" uib-dropdown=uib-dropdown><button class="btn btn-default btn-xs" uib-dropdown-toggle=uib-dropdown-toggle><small translate=translate>multiple&nbsp;</small><i class="fa fa-caret-down fa-lg"></i></button><div class="dropdown-menu col-xs-12" uib-dropdown-menu=uib-dropdown-menu><button class="btn btn-default btn-block" ng-click="doBulkOperation(\'group\')" ng-if=adminServer title="{{\'Assign selected files to groups\' | translate}}"><span class=text-muted translate=translate>Assign to Groups</span></button> <button class="btn btn-default btn-block" ng-click="doBulkOperation(\'assign\')" ng-if=adminServer title="{{\'Assign categories to the selected files\' | translate}}"><span class=text-muted translate=translate>Assign Categories</span></button> <button class="btn btn-default btn-block" ng-click="doBulkOperation(\'delete\')" title="{{\'Bulk delete all the selected files\' | translate}}"><span class=text-danger translate=translate>Delete selected files</span></button></div><div class="btn btn-link btn-xs btn-default"><input type=checkbox ng-model=filtered.selectAll title="{{\'Select All\' | translate}}" ng-change=toggleSelection()></div></div></div></div></li><div class=row><div class=col-sm-6><form class=list-group-item name=addform ng-submit=add()><div class=input-group ng-class="addform.$dirty?\'\':fieldStatus"><input class=form-control ng-attr-placeholder="{{\'Add a new playlist\' || translate}}" ng-model=newPlaylist required><div class=input-group-btn><button class="btn btn-success" type=submit ng-disabled=!addform.$valid translate=translate>ADD</button></div></div><small>{{statusText}}</small></form></div></div><li class=list-group-item ng-repeat="playlist in playlists | filter:label_search | filter:search"><div class=row><div class=col-sm-5 ng-click=loadPlaylist(playlist.name)><a ng-href=#><h4 class=truncate ng-bind=playlist.name></h4></a></div><div class=col-sm-5><h6><span>{{playlist.settings.ads.adPlaylist?"ADVT playlist,&nbsp;":""}}</span><span>{{playlist.settings.domination.enable?"Domination playlist,&nbsp;":""}}</span><span>{{playlist.settings.event.enable?"Event playlist,&nbsp;":""}}</span><span>{{playlist.settings.keyPress.enable?"KeyPress playlist,&nbsp;":""}}</span><span>{{playlist.settings.audio.enable?"Audio playlist,&nbsp;":""}}</span><span>{{playlist.assets.length}}&nbsp;</span><span translate=translate>assets,&nbsp;layout:</span><span>&nbsp;{{playlist.layout}}</span><span>{{playlist.settings.ticker.enable?",&nbsp;ticker enabled":""}}</span></h6></div><div class=col-sm-2><div class="btn-toolbar pull-right"><a class="btn btn-link" title="{{\'Add/Modify the default schedule for this playlist\' | translate}}" ng-if=adminServer ng-click=scheduleCalendar(playlist)><i class="fa fa-calendar fa-lg text-info"></i></a><a class="btn btn-link" title="{{\'Duplicate playlist\'| translate}}" ng-click=makeCopy(playlist)><strong><i class="fa fa-copy"></i></strong></a><a class="btn btn-link" ng-attr-title="{{\'delete\' | translate}}" ng-click=delete(playlist)><i class="fa fa-trash text-danger"></i></a> <button class="btn btn-xs btn-outline-secondary pl-10"><input type=checkbox id=file name=checkbox ng-disabled="playlist.name === \'TV_OFF\'" ng-model=filtered.selected[playlist.name]></button></div></div></div><div class=row ng-show="adminServer &amp;&amp; (playlist.groupIds.length || playlist.scheduleExists || playlist.belongsTo)"><div class=col-sm-3><small class=text-muted translate=translate>Groups:&nbsp;</small><small>{{groupLists[playlist.name]}}</small></div><div class=col-sm-3 ng-if=playlist.belongsTo><small class=text-muted translate=translate>Used in:&nbsp;</small><small>{{playlist.belongsTo}}</small></div><div class=col-sm-6><small ng-if=playlist.schedule.durationEnable>{{playlist.schedule.startdate | date:\'MMM d\' : \'UTC\'}} - {{playlist.schedule.enddate | date:\'MMM d\': \'UTC\'}} &nbsp&nbsp</small><small ng-if=playlist.schedule.timeEnable> {{playlist.schedule.starttime | date: \'hh:mm a\' }} - {{playlist.schedule.endtime | date: \'hh:mm a\'}} &nbsp;&nbsp;</small><small>{{weekDaysText[playlist.name]}} &nbsp;&nbsp;</small><small>{{monthDaysText[playlist.name]}} &nbsp&nbsp</small><a class="btn btn-link btn-xs" ng-show=playlist.scheduleExists ng-attr-title="{{\'delete\' | translate}}" ng-click="scheduleCalendar(playlist, true)"><i class="fa fa-close text-danger" translate=translate>delete schedule</i></a></div></div><div class=row ng-if="playlist.labels &amp;&amp; playlist.labels.length"><div class="col-sm-6 col-sm-offset-5 text-muted"><small translate=translate>categories</small><small>:&nbsp;{{playlist.labels.join(\', \')}}</small></div></div></li></ul></div><div class="alert alert-warning" ng-hide="collaborator.rights.playlist.edit == true"><h4 translate=translate>You do not have access to this screen</h4></div>'), 
    
    e.put("/app/partials/playlists/_playlist.html", '<div class="panel panel-default" ng-show="collaborator.rights.playlist.edit == true"><div class=panel-heading><div class=row><div class=col-xs-4><h4><span class=m-r-lg>{{title}}</span></h4><i><small translate=translate>Rearrange assets by dragging</small></i></div><div class=col-xs-3><div class="form-check form-check-inline navbar-btn pr-10 pull-right"><label class=form-check-label><input class=form-check-input type=radio ng-model=status.plainView ng-change=changeView() ng-value=false><small class="text-muted pl-5 pr-10" translate=translate>&nbsp;Drag & Drop view</small></label><br ng-hide=status.plainView><label class=form-check-label ng-hide=status.plainView><input class=form-check-input type=checkbox name=multiselect_checkbox ng-model=multiSelect ng-change=changeView()><small class="text-muted pl-5" translate=translate>Allow multi-selection</small></label></div><div class="form-check form-check-inline navbar-btn pull-right"><label class=form-check-label><input class=form-check-input type=radio ng-model=status.plainView ng-change=changeView() ng-value=true><small class="text-muted pl-5 pr-10" translate=translate>&nbsp;Normal view</small></label></div></div><div class=col-xs-5><div class="btn-toolbar pull-right navbar-btn pl-10"><a class="btn btn-primary-outline btn-sm" href=# ng-click=adPopUp() title="{{\'Settings for playlist like adverts, audio\' | translate}}"><strong translate=translate>Settings</strong>&nbsp;<span class=badge><small ng-if="settings.ads &amp;&amp; settings.ads.adPlaylist" translate=translate>advert</small><small ng-if="settings.domination &amp;&amp; settings.domination.enable" translate=translate>domination</small><small ng-if="settings.event &amp;&amp; settings.event.enable" translate=translate>event</small><small ng-if="settings.audio &amp;&amp; settings.audio.enable" translate=translate>audio</small><small ng-if="settings.keyPress &amp;&amp; settings.keyPress.enable" translate=translate>keyPress</small></span></a><a class="btn btn-primary-outline btn-sm" href=# title="{{\'Add a ticker for this playlist\' | translate}}" ng-click=ticker()><strong translate=translate>Set Ticker</strong></a><a class="btn btn-primary-outline btn-sm" href=# title="{{\'Select the layout for this playlist &amp; videowindow\' | translate}}" ng-class=" {\'disabled \': (collaborator.rights.playlist.settings != true) } " ng-click=openLayout()><strong translate=translate>Layout</strong>&nbsp;<span class="badge badge-info"><small>{{layout.type}}</small></span></a><div class=btn-group ng-if=adminServer><button class="btn btn-primary-outline btn-sm" ng-click=preview() translate=translate>Preview</button></div><div class=btn-group ng-if=adminServer uib-dropdown=uib-dropdown auto-close=outsideClick><button class="btn btn-primary btn-sm" type=button uib-dropdown-toggle=uib-dropdown-toggle ng-click=deployToGroups() translate=translate>Deploy&nbsp;<span class=caret></span></button><ul class=dropdown-menu role=menu uib-dropdown-menu=uib-dropdown-menu style=right:0;left:auto;><div class=form-group><input class="form-control bg-default" placeholder="{{\'Filter by Name\' | translate}}" ng-model=groupSearch></div><li ng-repeat="group in groups | filter:groupSearch"><a class=text-info ng-href=/groups/details/{{group._id}}>{{group.name}}</a></li><li ng-repeat="player in players"><a class=text-info ng-href=/groups/details/__player__{{player.cpuSerialNumber}}>{{player.name || player.cpuSerialNumber}}</a></li></ul><span>&nbsp;&nbsp;</span></div><div class=btn-group ng-show=navbar.showPrimaryButton><button class="btn btn-sm" ng-click=pbHandler(navbar.primaryButtonId) ng-bind=navbar.primaryButtonText ng-class=navbar.primaryButtonTypeClass><span>&nbsp;&nbsp;</span></button></div><div class="btn btn-link btn-sm"><input type=checkbox ng-model=filtered.selectAll title="{{\'Select All\' | translate}}" ng-change=toggleSelection() ng-show=status.plainView></div></div></div></div></div><form name=playlist.form unsaved-changes-warning=unsaved-changes-warning><div class=row><div ng-class="{\'col-sm-8\':!status.plainView,\'col-sm-12\':status.plainView}" style=padding-right:0px><div class="panel panel-default" id=assigned-panel style="margin-bottom: 0px; overflow: auto;"><div class=panel-heading ng-show=status.plainView><div class=row><div class=col-sm-6><div class=text-primary><span translate=translate>Available Assets - select to add to playlist</span>&nbsp;<span><small>({{selectedItemsLength || 0}}&nbsp;</small><small>selected)</small></span></div></div><div class=col-sm-6><div class=row><div class=col-sm-5><div class=form-group><input class="input-sm form-control" placeholder="{{\'Filter by name\' | translate}}" ng-model=search ng-change=applyFilter()></div></div><div class=col-sm-7><a class="btn btn-primary-outline btn-sm" href=# ng-click=randomOrder() title="{{\'select random order for assets\' | translate}}"><strong translate=translate><i class="fa fa-lg fa-random"></i></strong></a><div class="btn-group btn-group-sm pl-5" ng-if="adminServer &amp;&amp; !selLabel.selectedLabel" ng-attr-title="{{\'Click this button to select, edit and add categories\' | translate}}"><button class="btn btn-default-outline" ng-click=loadCategory()><i class="fa fa-tags">&nbsp;</i>{{"Filter by category"| translate}}</button></div><div class="btn-group btn-group-sm" ng-if="adminServer &amp;&amp; selLabel.selectedLabel" ng-attr-title={{selLabel.selectedLabel}}><button class="btn btn-default-outline" ng-click=loadCategory()><i class="fa fa-tags">&nbsp;</i>{{selLabel.selectedLabel.trunc(20)}}</button> <button class="btn btn-warning" ng-click="selLabel.selectedLabel=null;"><i class="fa fa-close"></i></button></div></div></div></div></div></div><div class=panel-heading ng-show=!status.plainView><div class=text-primary><span translate=translate>Assigned</span>&nbsp;<span><small>({{filtered.customPlPlaylistFiltered.length || 0}}&nbsp;</small><small>files)</small></span><br></div><span><small translate=translate>Drag to right window to remove</small></span></div><ul class="list-group dnd-list"><div id=assigned dnd-list=filtered.playlistForDisplay dnd-drop="dndDrop(filtered.playlistForDisplay, item, index, true)" dnd-dragover="dragListChange(\'assigned-panel\')"><li class=list-group-item ng-repeat="item in (filtered.playlistForDisplay) track by $index" ng-class="{&quot;list-group-item-danger&quot;:item.deleted,&quot;dragSelected&quot;: item.dragSelected}" ng-attr-id="{{ $index }}" dnd-draggable="getSelectedItemsIncluding(filtered.playlistForDisplay, item)" dnd-moved=dndMoved(filtered.playlistForDisplay,false) dnd-effect-allowed=move dnd-selected=dndSelect(filtered.playlistForDisplay,item) dnd-dragstart="dragStart(filtered.playlistForDisplay,\'assigned-panel\')" dnd-dragend=dragEnd(filtered.playlistForDisplay) ng-hide="filtered.playlistForDisplay.dragging &amp;&amp; item.dragSelected"><div class=media><div class=media-left><a class=pull-left ng-href=# title="{{\'Click to view\' | translate}}" ng-if=filesDetails[item.filename].thumbnail ng-click=loadMediaFile(item.filename) touch=""><img class="media-object-small img-rounded" ng-src={{filesDetails[item.filename].thumbnail}}></a><a class="letter-box-small media-object-small img-rounded pull-left" ng-if=!filesDetails[item.filename].thumbnail ng-href=# title="{{\'Click to view\' | translate}}" ng-click=loadMediaFile(item.filename) touch=""><span ng-if="filesDetails[item.filename].type == &quot;audio&quot; || filesDetails[item.filename].type == &quot;radio&quot;"><i class="fa fa-music"></i></span><span ng-if="filesDetails[item.filename].type != &quot;audio&quot; &amp;&amp; filesDetails[item.filename].type != &quot;radio&quot;">{{filesDetails[file].type.slice(0,1) || \'N\'}}</span></a></div><div class=media-body><div class=row><div class=col-sm-7><h5 class=media-heading><i>{{item.deleted?"DELETED:&nbsp;":""}}</i><i>{{item.expired?"EXPIRED:&nbsp;":""}}</i><strong>{{item.filename}}</strong></h5></div><div class=col-sm-1 title="{{\'Drag this item to rearrange\' | translate}}" touch=""><i class="fa fa-hand-rock-o fa-lg text-info"></i></div><div class=col-sm-3><div class="input-group input-group-sm" ng-show=item.selected><input class="form-control input-sm pl-duration" type=number ng-model=item.duration min=1 ng-model-options="{updateOn: \'blur\'}"><small class="input-group-addon pl-duration-icon" translate=translate>sec</small></div></div><div class=col-sm-1><label class="btn btn-link pull-right" ng-show=status.plainView><input type=checkbox name=checkbox ng-model=item.selected ng-model-options="{ debounce: 500 }"></label> <button class="btn btn-xs btn-link pull-right text-warning" ng-show=!status.plainView title="{{&quot;Delete from playlist only&quot; | translate}}" ng-click=removeFromPlaylist(item,$event,$index)>X</button></div></div><div class=row><div class=col-sm-8><strong class=pr-5>{{filesDetails[item.filename].type}}</strong><small class=pr-5 ng-if="filesDetails[item.filename].duration &gt; 0"><span class=text-muted translate=translate>duration:</span>{{filesDetails[item.filename].duration}}<span translate=translate>secs</span></small><small class=pr-5 ng-if=filesDetails[item.filename].size><span class=text-muted translate=translate>size:</span>{{filesDetails[item.filename].size}}</small><small class=pr-5 ng-if=filesDetails[item.filename].resolution.width><span class=text-muted translate=translate>resolution:</span><span>{{filesDetails[item.filename].resolution.width}}x</span><span>{{filesDetails[item.filename].resolution.height}}</span></small></div><div class=col-sm-3 ng-show=item.selected><label class="btn btn-link text-muted" ng-show=filesDetails[item.filename].muteButtonEnable title="{{&quot;mute the audio&quot; | translate}}"><input type=checkbox ng-model=item.option.main ng-model-options="{ debounce: 500 }"><span class=pl-5 translate=translate>mute audio</span></label> <label class="btn btn-link text-muted" ng-show="filesDetails[item.filename].type == &quot;audio&quot; || filesDetails[item.filename].type == &quot;radio&quot;" title="{{&quot;play in background&quot; | translate}}"><input type=checkbox ng-model=item.option.main ng-model-options="{ debounce: 500 }" ng-true-value=false ng-false-value=true ng-checked="item.option.main !== true"><span class=pl-5 translate=translate>play in background</span></label> <label class="btn btn-link text-muted" ng-show="filesDetails[item.filename].type == &quot;image&quot; || filesDetails[item.filename].type == &quot;video&quot;" title="add a text message over image or video"><input ng-model=item.option.bannerText placeholder="text message over the image/video" ng-model-options="{ debounce: 500 }"></label> <label class="btn btn-link text-muted" ng-show="filesDetails[item.filename].type == &quot;pdf&quot;" title="{{&quot;use presentation mode&quot; | translate}}"><input type=checkbox ng-model=item.option.main ng-model-options="{ debounce: 500 }"><span class=pl-5 translate=translate>use presentation mode</span></label> <input class="form-control input-sm pl-duration" ng-show="filesDetails[item.filename].type == &quot;pdf&quot; &amp;&amp; item.option.main" type=number ng-model=item.option.subduration min=1 placeholder="{{\'duration for each slide\' | translate}}" ng-model-options="{ debounce: 500 }"></div><div class=col-sm-1><a class="btn btn-link pull-right" ng-show=item.selected title="{{\'Duplicate this asset to add multiple times in the playlist\' | translate}}" ng-click=makeCopy(item,$index)><i class="text-right fa fa-copy"></i></a></div></div><div class=row ng-show="item.selected &amp;&amp; layoutOtherZones[layout.type].length"><div class=col-sm-12><small class=text-muted translate=translate>Add other zone assets</small> <label class="btn btn-xs" ng-class="{\'btn-info\':item.fullscreen,\'btn-info-outline\':!item.fullscreen}"><input type=checkbox name=fullscreen ng-model=item.fullscreen ng-model-options="{ debounce: 500 }"><span translate=translate>&nbsp;show fullscreen</span></label><span ng-repeat="zone in layoutOtherZones[layout.type]"><div class=btn-group ng-if="!customZonesPresent || customZonesPresent[zone]"><button class="btn btn-xs" ng-click=linkFile(item,zone) ng-class="{\'btn-info\':item[zone] &amp;&amp; !item.fullscreen,\'btn-info-outline\':!item[zone]}"><small>{{aliasNames[zone]}}: {{item[zone]}}&nbsp;</small><i class="fa fa-paperclip" ng-if=!item[zone]></i></button> <button class="btn btn-xs btn-warning" ng-if=item[zone] ng-click="item[zone]=null">X</button></div></span></div></div></div></div></li><li class=list-group-item ng-show="infiniteScrollLength1 &lt; filtered.playlistItemsFiltered.length"><button class="btn btn-success btn-block" ng-click="infiniteScrollLength1=10000;" translate=translate>Load All</button></li><li class=list-group-item ng-show="infiniteScrollLength2 &lt; filtered.customPlPlaylistFiltered.length"><button class="btn btn-success btn-block" ng-click="infiniteScrollLength2=10000;" translate=translate>Load All</button></li></div></ul></div></div><div class=col-sm-4 style=padding-left:0px ng-show=!status.plainView><div class="panel panel-default" id=unassigned-panel style="margin-bottom: 0px; overflow: auto;"><div class=panel-heading><div class=text-primary><span translate=translate>Available Assets</span>&nbsp;<span><small>({{filtered.customPlUnassignedFiltered.length || 0}}&nbsp;</small><small translate=translate>files)</small></span><br></div><span><small translate=translate>Drag to left window to add</small></span></div><li class="list-group-item bg-default"><div class=row><div class=col-sm-5><div class=form-group><input class="input-sm form-control" placeholder="{{\'Filter by name\' | translate}}" ng-model=search ng-change=applyFilter()></div></div><div class=col-sm-7><a class="btn btn-primary-outline btn-sm" href=# ng-click=randomOrder() title="{{\'select random order for assets\' | translate}}"><strong translate=translate><i class="fa fa-lg fa-random"></i></strong></a><div class="btn-group btn-group-sm pl-5" ng-if="adminServer &amp;&amp; !selLabel.selectedLabel" ng-attr-title="{{\'Click this button to select, edit and add categories\' | translate}}"><button class="btn btn-default-outline" ng-click=loadCategory()><i class="fa fa-tags">&nbsp;</i>{{"Filter by category"| translate}}</button></div><div class="btn-group btn-group-sm" ng-if="adminServer &amp;&amp; selLabel.selectedLabel" ng-attr-title={{selLabel.selectedLabel}}><button class="btn btn-default-outline" ng-click=loadCategory()><i class="fa fa-tags">&nbsp;</i>{{selLabel.selectedLabel.trunc(20)}}</button> <button class="btn btn-warning" ng-click="selLabel.selectedLabel=null;"><i class="fa fa-close"></i></button></div></div></div></li><ul class="list-group dnd-list"><div id=unassigned dnd-list=filtered.customPlUnassignedFiltered dnd-drop="dndDrop(filtered.customPlUnassignedFiltered, item, index, false)" dnd-dragover="dragListChange(\'unassigned-panel\')"><li class=list-group-item ng-repeat="item in filtered.customPlUnassignedFiltered" ng-class="{&quot;list-group-item-danger&quot;:item.deleted,&quot;dragSelected&quot;: item.dragSelected}" ng-attr-id="{{ $index }}" dnd-draggable="getSelectedItemsIncluding(filtered.customPlUnassignedFiltered, item)" dnd-moved=dndMoved(filtered.customPlUnassignedFiltered,true) dnd-effect-allowed=move dnd-selected=dndSelect(filtered.customPlUnassignedFiltered,item) dnd-dragstart="dragStart(filtered.customPlUnassignedFiltered,\'unassigned-panel\')" dnd-dragend=dragEnd(filtered.customPlUnassignedFiltered) ng-hide="filtered.customPlUnassignedFiltered.dragging &amp;&amp; item.dragSelected"><div class=media><div class=media-left><a class=pull-left ng-href=# ng-if=filesDetails[item.filename].thumbnail><img class="media-object-small img-rounded" ng-src={{filesDetails[item.filename].thumbnail}}></a><div class="letter-box-small media-object-small img-rounded pull-left" ng-if=!filesDetails[item.filename].thumbnail>{{filesDetails[item.filename].type.slice(0,1) || \'N\'}}</div></div><div class=media-body><h5 class=truncate title={{item.filename}} touch=""><strong>{{item.filename}}</strong></h5></div></div></li><li class=list-group-item ng-show="infiniteScrollLength3 &lt; filtered.customPlUnassignedFiltered.length"><button class="btn btn-success btn-block" ng-click="infiniteScrollLength3=10000;" translate=translate>Load All</button></li></div></ul></div></div></div><li class=list-group-item ng-show="playlistItems.length == 0"><a href=/assets translate=translate>There are no assets, Tap here to add</a></li></form></div><script>var ht = window.innerHeight;\n' + "  document.getElementById('assigned').style.minHeight = (ht - 200) + 'px';\n  document.getElementById('unassigned').style.minHeight = (ht - 200) + 'px';\n  document.getElementById('assigned').style.maxHeight = (ht - 200) + 'px';\n  document.getElementById('unassigned').style.maxHeight = (ht - 200) + 'px';<\/script><div class=\"alert alert-warning\" ng-hide=\"collaborator.rights.playlist.edit == true\"><h4 translate=translate>You do not have access to this screen</h4></div>"),
    
    e.put("/app/partials/assets/_assets.html", '<div class="panel panel-default" ng-show="collaborator.rights.asset.create == true" drop-area=drop-area onstart=upload.started() onprogress=upload.progress(percentDone) onerror="upload.error(files, type, msg)" ondone="upload.done(files, data)" drag-status=dragStatus link-fn=linksPopUp() link-value=urlLink ng-class={dim:dragStatus.inProgress}><div class="alert drop-notification" ng-show=dragStatus.inProgress><h4><i class="fa fa-cloud-upload">&nbsp;</i><span translate=translate>Drop the</span><span>&nbsp;{{ dragStatus.transferItem }}&nbsp;</span><span translate=translate>to upload</span></h4></div><div class=panel-heading><div class=row><div class=col-sm-6><h3><span>{{(status.plainView ? (\'Available Assets\'| translate): (\'Playlist wise Assets\'|translate))}}</span><div class="btn-group btn-group-sm navbar-btn pl-5"><button class="btn btn-default btn-sm" ng-click="status.plainView=true;status.plainViewAlpha=true;" title="{{\'Alphabetic wise Listing\' | translate}}" ng-class="{\'active\': status.plainView &amp;&amp; status.plainViewAlpha}"><i class="fa fa-sort-alpha-asc fa-lg"></i></button> <button class="btn btn-default btn-sm" ng-click="status.plainView=true;status.plainViewAlpha=false;" title="{{\'Sorted based on upload time\' | translate}}" ng-class="{\'active\': status.plainView &amp;&amp; !status.plainViewAlpha}"><i class="fa fa-clock-o fa-lg"></i></button></div></h3><small ng-attr-title="{{\'Storage space used/Total storage available\' | translate}}" ng-if=sizes.total>used: {{sizes.used}}MB,total: {{sizes.total}}MB</small><small>,&nbsp;{{files.length}}{{\'Assets\'| translate}}</small></div><div class="col-sm-4 navbar-btn pull-right" uib-dropdown=uib-dropdown><div class="btn-group navbar-btn pull-right"><button class="btn btn-link m-r" ng-csv=getCsvAssets() filename={{assetsFile}} add-bom=add-bom translate=translate>Download List</button> <button class="btn btn-default m-r" ng-click="collaborator.rights.asset.edit &amp;&amp; pbHandler(\'EDIT\')" ng-disabled="collaborator.rights.asset.edit != true" title="{{\'Rename or Delete Assets\' | translate}}" translate=translate>Edit</button> <button class="btn btn-primary" data-toggle=dropdown uib-dropdown-toggle=uib-dropdown-toggle title="{{\'Upload files, Add links, Create notices\' | translate}}" ng-disabled=sizes.maxSizeExceeded><i class="fa fa-plus fa-lg">&nbsp;</i><span translate=translate>Add</span></button><div class="dropdown-menu col-xs-12" uib-dropdown-menu=uib-dropdown-menu><nodeims-file-upload type=large title="{{\'You can upload multiple files at a time\' | translate}}" onstart=upload.started() onprogress=upload.progress(percentDone) onerror="upload.error(files, type, msg)" ondone="upload.done(files, data)"><span translate=translate>Upload Files</span></nodeims-file-upload><a class="btn btn-primary btn-block" ng-click=linksPopUp() title="{{\'You can add Youtube, web, streaming, RSS links here\' | translate}}"><span translate=translate>Add a Link</span></a><a class="btn btn-primary btn-block" ng-click="linksPopUp(\'txt\')" title="{{\'You can add text message here\' | translate}}"><span translate=translate>Add a Message</span></a><a class="btn btn-primary btn-block" href=/assets/notices/new title="{{\'Upload notice_template.ejs to customize notice\' | translate}}"><span translate=translate>Create Notice</span></a><a class="btn btn-primary btn-block" ng-click="linksPopUp(\'local\')" title="{{\'You can local folder/file here\' | translate}}"><span translate=translate>Add a local folder/file</span></a></div></div><br><h6 class=pull-right><i translate=translate>You can also upload files, links by dragging them to this panel</i></h6></div></div></div><ul class=list-group ng-if="files.length &amp;&amp; status.plainView" infinite-scroll=loadMore() infinite-scroll-distance=2><li class="list-group-item bg-default"><div class=row><div class=col-sm-3><div class=form-group><input class="input-sm form-control" placeholder="{{\'Filter by Name\' | translate}}" ng-model=search></div></div><div class=col-sm-3><div class="btn-group btn-group-sm"><button class="btn btn-default" ng-click="setExt(\'v\')" ng-class="{\'active\': ext == \'v\'}" title="{{\'Show Videos\' | translate}}"><i class="fa fa-file-video-o fa-lg"></i></button> <button class="btn btn-default" ng-click="setExt(\'i\')" ng-class="{\'active\': ext == \'i\'}" title="{{\'Show Images\' | translate}}"><i class="fa fa-file-image-o fa-lg"></i></button> <button class="btn btn-default" ng-click="setExt(\'n\')" ng-class="{\'active\': ext == \'n\'}" title="{{\'Show Notices\' | translate}}"><i class="fa fa-file-text-o fa-lg"></i></button> <button class="btn btn-default" ng-click="setExt(\'\')" ng-class="{\'active\': !ext}" title="{{\'Clear filter\' | translate}}"><i class="fa fa-file-o fa-lg"></i></button></div></div><div class=col-sm-3><div class="btn-group btn-group-sm" ng-if="adminServer &amp;&amp; !selLabel.selectedLabel" ng-attr-title="{{\'Click this button to select, edit and add categories\' | translate}}"><button class="btn btn-default-outline" ng-click=loadCategory()><i class="fa fa-tags">&nbsp;</i>{{"Filter by category"| translate}}</button></div><div class="btn-group btn-group-sm" ng-if="adminServer &amp;&amp; selLabel.selectedLabel" ng-attr-title={{selLabel.selectedLabel}}><button class="btn btn-default-outline" ng-click=loadCategory()><i class="fa fa-tags">&nbsp;</i>{{selLabel.selectedLabel.trunc(20)}}</button> <button class="btn btn-warning" ng-click="selLabel.selectedLabel=null;"><i class="fa fa-close"></i></button></div></div><div class="col-sm-1 pull-right"><div class="btn-group-vertical pull-right" uib-dropdown=uib-dropdown><button class="btn btn-default btn-xs" uib-dropdown-toggle=uib-dropdown-toggle><small translate=translate>multiple&nbsp;</small><i class="fa fa-caret-down fa-lg"></i></button><div class="dropdown-menu col-xs-12" uib-dropdown-menu=uib-dropdown-menu><button class="btn btn-default btn-block" ng-click="doBulkOperation(\'group\')" ng-if=adminServer title="{{\'Assign selected files to groups\' | translate}}"><span class=text-muted translate=translate>Assign to Groups</span></button> <button class="btn btn-default btn-block" ng-click="doBulkOperation(\'assign\')" ng-if=adminServer title="{{\'Assign categories to the selected files\' | translate}}"><span class=text-muted translate=translate>Assign Categories</span></button> <button class="btn btn-default btn-block" ng-click="doBulkOperation(\'delete\')" title="{{\'Bulk delete all the selected files\' | translate}}"><span class=text-danger translate=translate>Delete selected files</span></button></div><div class="btn btn-link btn-xs btn-default"><input type=checkbox ng-model=filtered.selectAll title="{{\'Select All\' | translate}}" ng-change=toggleSelection()></div></div></div></div></li><li class="list-group-item truncate" ng-repeat="file in filteredFiles.items = (files | filter:label_search | filter:search | filter:extension)  | orderBy:(status.plainViewAlpha?&quot;&quot;:sortingFn):!status.plainViewAlpha| limitTo:infiniteScrollLength"><div class=media><div class=media-left><a ng-href=# ng-click=loadAsset(file) ng-if="filesDetails[file.filename || file].thumbnail"><img class="media-object img-rounded letter-box lazy-load" data-src="{{filesDetails[file.filename || file].thumbnail}}"></a><a class="letter-box media-object img-rounded" ng-href=# ng-click=loadAsset(file) ng-if="!filesDetails[file.filename || file].thumbnail"><span class=media-object ng-if="filesDetails[file.filename || file].type == &quot;audio&quot; || filesDetails[file.filename || file].type == &quot;radio&quot;"><i class="fa fa-music"></i></span><span class=media-object ng-if="filesDetails[file.filename || file].type != &quot;audio&quot; &amp;&amp; filesDetails[file.filename || file].type != &quot;radio&quot;">{{filesDetails[file].type.slice(0,1) || \'N\'}}</span></a></div><div class=media-body><div class=row><div class=col-sm-8 ng-click=loadAsset(file) ng-scope><video class=""><source ng-src="{{filesDetails.path}}"></video></div><div class=col-sm-4><div class="btn-toolbar pull-right"><button class="btn btn-primary-outline btn-xs" title="{{\'Add validity period for the asset\' | translate}}" ng-if=adminServer ng-click=scheduleValidity(file)><i class="fa fa-calendar">&nbsp;</i><small ng-if="!(filesDetails[file.filename || file].validity.enable)" translate=translate>add validity</small><small ng-if="filesDetails[file.filename || file].validity.enable"><small>{{filesDetails[file.filename || file].validity.startdate | date:\'MMM d\':\'UTC\'}}</small><small class=text-muted ng-if="filesDetails[file.filename || file].validity.startdate &amp;&amp; filesDetails[file.filename || file].validity.starthour">({{filesDetails[file.filename || file].validity.starthour}}h)</small><small>-</small><small>{{filesDetails[file.filename || file].validity.enddate | date:\'MMM d\':\'UTC\'}}</small><small class=text-muted ng-if="filesDetails[file.filename || file].validity.enddate &amp;&amp; filesDetails[file.filename || file].validity.endhour">({{filesDetails[file.filename || file].validity.endhour}}h)</small></small></button> <button class="btn btn-primary-outline btn-xs" title="{{\'Add or Remove this asset from multiple playlists\' | translate}}" ng-if=adminServer ng-click=assignAsset(file)><small translate=translate>Assign playlists</small></button> <button class="btn btn-default btn-xs" ng-if=!adminServer ng-click=playAsset(file)><small translate=translate>Play</small></button> <button class="btn btn-xs btn-link" ng-attr-title="{{\'delete\' | translate}}" ng-click=delete(file)><i class="fa fa-trash text-danger"></i></button> <button class="btn btn-xs btn-link" ng-hide=disableDownload title="{{\'Download asset\'| translate}}" ng-click=download(file,$index)><i class="fa fa-download"></i></button> <button class="btn btn-xs btn-outline-secondary pl-10"><input type=checkbox id=file name=checkbox ng-model=filtered.selected[file]></button></div></div></div><div class=row ng-if="filesDetails[file.filename || file]"><div class=col-sm-7><small>{{filesDetails[file.filename || file].type}}</small><small class=pl-10 ng-if="filesDetails[file.filename || file].duration &gt; 0"><span>{{filesDetails[file.filename || file].duration}}</span><span class=text-muted translate=translate>&nbsp;seconds</span></small><small class=pl-10 ng-if="filesDetails[file.filename || file].resolution.width"><span>{{filesDetails[file.filename || file].resolution.width}}x{{filesDetails[file.filename || file].resolution.height}}</span></small><small class=pl-10>{{filesDetails[file.filename || file].size}}</small><small class="text-muted pl-5" translate=translate>uploaded on:</small><small>{{filesDetails[file.filename || file].createdAt | date: \'MMM dd,yy\'}}</small><small class="text-muted pl-5" translate=translate>by:</small><small>{{filesDetails[file.filename || file].createdBy.name}}</small></div><div class=col-sm-5><p class=truncate><small class=text-muted translate=translate>Categories:&nbsp;</small><small>{{filesDetails[file.filename || file].labels.toString() || "None"}}</small></p></div></div></div><div class=row><div class=col-sm-12><small translate=translate><small class=text-muted>Playlists:&nbsp;</small><small style="word-wrap: break-word;" ng-repeat="pl in filesDetails[file.filename || file].playlists track by $index"><a href=/playlists/details/{{pl}}>{{pl}}&nbsp;</a></small></small></div></div><div class=row ng-show="filesDetails[file.filename || file].groupIds.length"><div class=col-sm-12><small class=text-muted translate=translate>Groups:&nbsp;</small><small style="white-space:normal;word-wrap: break-word;">{{filesDetails[file.filename || file].groupNames}}</small></div></div></div></li><li class=list-group-item ng-show="infiniteScrollLength &lt; files.length"><button class="btn btn-success btn-block" ng-click="infiniteScrollLength=10000;" translate=translate>Load All</button></li></ul><div ng-hide=files.length><h4 class=text-center translate=translate>No media assets found, Upload assets using Add button</h4></div><div ng-if="customPl.playlist.length &amp;&amp; !status.plainView"><uib-accordion close-others=false><div ng-repeat="playlist in customPl.playlist" uib-accordion-group=uib-accordion-group><uib-accordion-heading><h4 class=row ng-click="open = !open"><small class="text-success col-sm-1"><b><i class="fa fa-lg" ng-class="{\'fa-caret-down\':open,\'fa-caret-right\':!open}">&nbsp;</i></b></small><div class="text-primary col-sm-5">{{playlist.name}}&nbsp;<span><small>({{pfiltered.length || 0}} files)</small></span></div></h4></uib-accordion-heading><ul class=list-group style=margin-bottom:0px><li class="list-group-item truncate" ng-repeat="file in pfiltered = ( playlist.assets | filter:label_search | filter:extension)" ng-class={&quot;list-group-item-danger&quot;:file.deleted} ng-click=loadAsset(file)><div class=media><div class=media-left><a ng-href=# ng-click=loadAsset(file) ng-if="filesDetails[file.filename || file].thumbnail"><img class="media-object img-rounded letter-box lazy-load" data-src="{{filesDetails[file.filename || file].thumbnail}}"></a><a class="letter-box media-object img-rounded" ng-href=# ng-click=loadAsset(file) ng-if="!filesDetails[file.filename || file].thumbnail"><span class=media-object ng-if="filesDetails[file.filename || file].type == &quot;audio&quot; || filesDetails[file.filename || file].type == &quot;radio&quot;"><i class="fa fa-music"></i></span><span class=media-object ng-if="filesDetails[file.filename || file].type != &quot;audio&quot; &amp;&amp; filesDetails[file.filename || file].type != &quot;radio&quot;">{{filesDetails[file].type.slice(0,1) || \'N\'}}</span></a></div><div class=media-body><div class=row><div class=col-sm-8 ng-click=loadAsset(file)><a ng-href=#><h4>{{}}</h4></a></div><div class=col-sm-4><div class="btn-toolbar pull-right"><button class="btn btn-primary-outline btn-xs" title="{{\'Add validity period for the asset\' | translate}}" ng-if=adminServer ng-click=scheduleValidity(file)><i class="fa fa-calendar">&nbsp;</i><small ng-if="!(filesDetails[file.filename || file].validity.enable)" translate=translate>add validity</small><small ng-if="filesDetails[file.filename || file].validity.enable"><small>{{filesDetails[file.filename || file].validity.startdate | date:\'MMM d\':\'UTC\'}}</small><small class=text-muted ng-if="filesDetails[file.filename || file].validity.startdate &amp;&amp; filesDetails[file.filename || file].validity.starthour">({{filesDetails[file.filename || file].validity.starthour}}h)</small><small>-</small><small>{{filesDetails[file.filename || file].validity.enddate | date:\'MMM d\':\'UTC\'}}</small><small class=text-muted ng-if="filesDetails[file.filename || file].validity.enddate &amp;&amp; filesDetails[file.filename || file].validity.endhour">({{filesDetails[file.filename || file].validity.endhour}}h)</small></small></button> <button class="btn btn-primary-outline btn-xs" title="{{\'Add or Remove this asset from multiple playlists\' | translate}}" ng-if=adminServer ng-click=assignAsset(file)><small translate=translate>Assign playlists</small></button> <button class="btn btn-default btn-xs" ng-if=!adminServer ng-click=playAsset(file)><small translate=translate>Play</small></button> <button class="btn btn-xs btn-link" ng-attr-title="{{\'delete\' | translate}}" ng-click=delete(file)><i class="fa fa-trash text-danger"></i></button> <button class="btn btn-xs btn-link" ng-hide=disableDownload title="{{\'Download asset\'| translate}}" ng-click=download(file,$index)><i class="fa fa-download"></i></button> <button class="btn btn-xs btn-outline-secondary pl-10"><input type=checkbox id=file name=checkbox ng-model=filtered.selected[file]></button></div></div></div><div class=row ng-if="filesDetails[file.filename || file]"><div class=col-sm-7><small>{{filesDetails[file.filename || file].type}}</small><small class=pl-10 ng-if="filesDetails[file.filename || file].duration &gt; 0"><span>{{filesDetails[file.filename || file].duration}}</span><span class=text-muted translate=translate>&nbsp;seconds</span></small><small class=pl-10 ng-if="filesDetails[file.filename || file].resolution.width"><span>{{filesDetails[file.filename || file].resolution.width}}x{{filesDetails[file.filename || file].resolution.height}}</span></small><small class=pl-10>{{filesDetails[file.filename || file].size}}</small><small class="text-muted pl-5" translate=translate>uploaded on:</small><small>{{filesDetails[file.filename || file].createdAt | date: \'MMM dd,yy\'}}</small><small class="text-muted pl-5" translate=translate>by:</small><small>{{filesDetails[file.filename || file].createdBy.name}}</small></div><div class=col-sm-5><p class=truncate><small class=text-muted translate=translate>Categories:&nbsp;</small><small>{{filesDetails[file.filename || file].labels.toString() || "None"}}</small></p></div></div></div><div class=row><div class=col-sm-12><small translate=translate><small class=text-muted>Playlists:&nbsp;</small><small style="word-wrap: break-word;" ng-repeat="pl in filesDetails[file.filename || file].playlists track by $index"><a href=/playlists/details/{{pl}}>{{pl}}&nbsp;</a></small></small></div></div><div class=row ng-show="filesDetails[file.filename || file].groupIds.length"><div class=col-sm-12><small class=text-muted translate=translate>Groups:&nbsp;</small><small style="white-space:normal;word-wrap: break-word;">{{filesDetails[file.filename || file].groupNames}}</small></div></div></div></li></ul><h5 class=text-warning ng-if=!pfiltered.length translate=translate>No Files</h5></div><div is-open=true uib-accordion-group=uib-accordion-group><uib-accordion-heading><h4 class="row text-primary" ng-click="status.unassignedView = !status.unassignedView"><small class="col-sm-1 text-success"><b><i class="fa fa-lg" ng-class="{\'fa-caret-down\':status.unassignedView,\'fa-caret-right\':!status.unassignedView}">&nbsp;</i></b></small><div class="text-primary col-sm-5"><span translate=translate>Un-assigned</span><span>&nbsp;</span><span><small>({{ufiltered.length || 0}}</small><small translate=translate>files)</small></span></div></h4></uib-accordion-heading><ul class=list-group style=margin-bottom:0px><li class="list-group-item truncate" ng-repeat="file in ufiltered = (unassigned | filter:label_search | filter:extension)" ng-class={&quot;list-group-item-danger&quot;:file.deleted} ng-click=loadAsset(file)><div class=media><div class=media-left><a ng-href=# ng-click=loadAsset(file) ng-if="filesDetails[file.filename || file].thumbnail"><img class="media-object img-rounded letter-box lazy-load" data-src="{{filesDetails[file.filename || file].thumbnail}}"></a><a class="letter-box media-object img-rounded" ng-href=# ng-click=loadAsset(file) ng-if="!filesDetails[file.filename || file].thumbnail"><span class=media-object ng-if="filesDetails[file.filename || file].type == &quot;audio&quot; || filesDetails[file.filename || file].type == &quot;radio&quot;"><i class="fa fa-music"></i></span><span class=media-object ng-if="filesDetails[file.filename || file].type != &quot;audio&quot; &amp;&amp; filesDetails[file.filename || file].type != &quot;radio&quot;">{{filesDetails[file].type.slice(0,1) || \'N\'}}</span></a></div><div class=media-body><div class=row><div class=col-sm-8 ng-click=loadAsset(file)><a ng-href=#><h4>{{file.filename || file}}</h4></a></div><div class=col-sm-4><div class="btn-toolbar pull-right"><button class="btn btn-primary-outline btn-xs" title="{{\'Add validity period for the asset\' | translate}}" ng-if=adminServer ng-click=scheduleValidity(file)><i class="fa fa-calendar">&nbsp;</i><small ng-if="!(filesDetails[file.filename || file].validity.enable)" translate=translate>add validity</small><small ng-if="filesDetails[file.filename || file].validity.enable"><small>{{filesDetails[file.filename || file].validity.startdate | date:\'MMM d\':\'UTC\'}}</small><small class=text-muted ng-if="filesDetails[file.filename || file].validity.startdate &amp;&amp; filesDetails[file.filename || file].validity.starthour">({{filesDetails[file.filename || file].validity.starthour}}h)</small><small>-</small><small>{{filesDetails[file.filename || file].validity.enddate | date:\'MMM d\':\'UTC\'}}</small><small class=text-muted ng-if="filesDetails[file.filename || file].validity.enddate &amp;&amp; filesDetails[file.filename || file].validity.endhour">({{filesDetails[file.filename || file].validity.endhour}}h)</small></small></button> <button class="btn btn-primary-outline btn-xs" title="{{\'Add or Remove this asset from multiple playlists\' | translate}}" ng-if=adminServer ng-click=assignAsset(file)><small translate=translate>Assign playlists</small></button> <button class="btn btn-default btn-xs" ng-if=!adminServer ng-click=playAsset(file)><small translate=translate>Play</small></button> <button class="btn btn-xs btn-link" ng-attr-title="{{\'delete\' | translate}}" ng-click=delete(file)><i class="fa fa-trash text-danger"></i></button> <button class="btn btn-xs btn-link" ng-hide=disableDownload title="{{\'Download asset\'| translate}}" ng-click=download(file,$index)><i class="fa fa-download"></i></button> <button class="btn btn-xs btn-outline-secondary pl-10"><input type=checkbox id=file name=checkbox ng-model=filtered.selected[file]></button></div></div></div><div class=row ng-if="filesDetails[file.filename || file]"><div class=col-sm-7><small>{{filesDetails[file.filename || file].type}}</small><small class=pl-10 ng-if="filesDetails[file.filename || file].duration &gt; 0"><span>{{filesDetails[file.filename || file].duration}}</span><span class=text-muted translate=translate>&nbsp;seconds</span></small><small class=pl-10 ng-if="filesDetails[file.filename || file].resolution.width"><span>{{filesDetails[file.filename || file].resolution.width}}x{{filesDetails[file.filename || file].resolution.height}}</span></small><small class=pl-10>{{filesDetails[file.filename || file].size}}</small><small class="text-muted pl-5" translate=translate>uploaded on:</small><small>{{filesDetails[file.filename || file].createdAt | date: \'MMM dd,yy\'}}</small><small class="text-muted pl-5" translate=translate>by:</small><small>{{filesDetails[file.filename || file].createdBy.name}}</small></div><div class=col-sm-5><p class=truncate><small class=text-muted translate=translate>Categories:&nbsp;</small><small>{{filesDetails[file.filename || file].labels.toString() || "None"}}</small></p></div></div></div><div class=row><div class=col-sm-12><small translate=translate><small class=text-muted>Playlists:&nbsp;</small><small style="word-wrap: break-word;" ng-repeat="pl in filesDetails[file.filename || file].playlists track by $index"><a href=/playlists/details/{{pl}}>{{pl}}&nbsp;</a></small></small></div></div><div class=row ng-show="filesDetails[file.filename || file].groupIds.length"><div class=col-sm-12><small class=text-muted translate=translate>Groups:&nbsp;</small><small style="white-space:normal;word-wrap: break-word;">{{filesDetails[file.filename || file].groupNames}}</small></div></div></div></li></ul><h5 class=text-warning ng-if=!ufiltered.length translate=translate>No Files</h5></div></uib-accordion></div></div><div class="alert alert-warning" ng-hide="collaborator.rights.asset.create == true"><h4 translate=translate>You do not have access to this screen</h4></div>'), 
	
	e.put("/app/partials/assets/_calendar.html", '<div class="panel panel-default"><div class=panel-heading><h3 translate=translate>Google User Account Details</h3></div><div class=panel-body ng-show=calendar.list.length><h4><strong translate=translate>Profile</strong></h4><div class=media><div class=pull-right><img class=media-object src={{calendar.profile.picture}} style=width:84px></div><div class="media-body pull-left"><h4 class=media-heading>&nbspEmail:&nbsp&nbsp<span ng-bind=calendar.profile.email></span></h4></div></div><br><h3 translate=translate>Choose a Calendar for subscribing to Events</h3><br><ul class=list-group><li class=list-group-item ng-repeat="item in calendar.list"><div class=row><div class=col-sm-8><h4 class=media-heading><strong>{{item.summary}}</strong></h4></div><div class=col-sm-4><div class=radio><input type=radio name=email ng-click=selectedCalendar(item.id) ng-checked="calendar.selected == item.summary"></div></div></div></li></ul></div></div>'), e.put("/app/partials/assets/_details.html", '<div class="panel panel-default"><div class=panel-heading><div class=row><div class=col-sm-6><h3>{{filedetails.name}}</h3><small>Associated playlists:&nbsp;</small><small ng-if="filedetails.dbdata.playlists.length == 0" translate=translate>none</small><small ng-repeat="pl in filedetails.dbdata.playlists" ng-attr-title="{{\'associated playlists\' | translate}}"><a class=text-info href=/playlists/details/{{pl}}>{{pl}}&nbsp;</a></small></div><div class="col-sm-3 pull-right"><div class="btn-toolbar navbar-btn pull-right"><button class="btn btn-danger-outline" ng-attr-title="{{\'delete\' | translate}}" ng-click=delete()><i class="fa fa-trash fa-lg text-danger"></i></button> <button class="btn btn-primary" ng-click=assignAsset() translate=translate>Assign</button></div></div></div></div><div class=panel-body><img class="img-responsive img-rounded" ng-if="filedetails.type==&quot;image&quot;" ng-src="{{ filedetails.path }}"><audio ng-if="filedetails.type==&quot;audio&quot; || filedetails.type==&quot;radio&quot;" controls><source ng-src={{filedetails.path}} type=audio/mpeg></audio><video class="img-responsive img-rounded" ng-if="filedetails.type==&quot;video&quot;" controls controlslist="{{disableDownload?\'nodownload\':\'download\'}}" ng-src="{{ filedetails.path }}"></video><iframe ng-if="filedetails.type==&quot;pdf&quot;" height=300px width=100% ng-src={{filedetails.path}}></iframe></div><div class=panel-footer ng-if=filedetails.dbdata><div class=row><div class=col-sm-10><span translate=translate>Categories:&nbsp;</span><categories selected-labels=filedetails.dbdata.labels></categories></div><div class=col-sm-2><button class="btn btn-primary pull-right" ng-click=save() translate=translate>SAVE</button></div></div></div></div>'), e.put("/app/partials/assets/_edit.html", '<div class="panel panel-default"><div class=panel-heading><div class=row><div class=col-sm-3><div class=form-group><h3 translate=translate>Rename or delete files</h3></div></div><div class="col-sm-3 pull-right"><button class="btn btn-primary navbar-btn pull-right" ng-click="pbHandler(\'DONE\')" translate=translate>DONE</button></div></div></div><ul class=list-group><li class="list-group-item bg-default"><div class=row><div class=col-sm-3><div class=form-group><input class="input-sm form-control" placeholder="{{\'Filter by Name\' | translate}}" ng-model=search.name></div></div><div class=col-sm-3><div class="btn-group btn-group-sm" ng-if="adminServer &amp;&amp; !selLabel.selectedLabel" ng-attr-title="{{\'Click this button to select, edit and add categories\' | translate}}"><button class="btn btn-default-outline" ng-click=loadCategory()><i class="fa fa-tags">&nbsp;</i>{{"Filter by category"| translate}}</button></div><div class="btn-group btn-group-sm" ng-if="adminServer &amp;&amp; selLabel.selectedLabel" ng-attr-title={{selLabel.selectedLabel}}><button class="btn btn-default-outline" ng-click=loadCategory()><i class="fa fa-tags">&nbsp;</i>{{selLabel.selectedLabel.trunc(20)}}</button> <button class="btn btn-warning" ng-click="selLabel.selectedLabel=null;"><i class="fa fa-close"></i></button></div></div></div></li><div class="alert alert-sm alert-warning m-b-0" translate=translate>In case of renaming assets, Playlists will still have the old name for assets, you need to manually change them</div><li class=list-group-item ng-repeat="name in names | filter:label_search | filter:search" ng-controller=AssetsItemCtrl><form class=row name=editform><div class=col-xs-2><img class="img-rounded pull-right placeholder40" ng-src="{{name.thumbnail || \'app/img/placeholder40.png\'}}"></div><div class=col-xs-8><div class=input-group ng-class="editform.$dirty?\'\':fieldStatus"><input class=form-control ng-model=name.name ng-disabled=!renameFeature style=background-color:#f8ffff;><span class=input-group-addon ng-bind=name.ext ng-hide=editform.$dirty></span><span class=input-group-btn ng-click=rename(name) ng-show=editform.$dirty><a class="btn btn-success" type=button translate=translate>SAVE</a></span></div></div><div class=col-xs-1><button class="btn btn-danger" ng-click=delete(name)><i class="fa fa-times fa-lg"></i></button></div></form><div class=row><div class="col-sm-4 col-sm-offset-2"><h6>&nbsp;&nbsp;<small class=text-muted translate=translate>Associated playlists:</small><small class=text-info>&nbsp; {{name.playlists.toString() || "none"}}</small></h6></div><div class=col-sm-4><h6>&nbsp;&nbsp;<small class=text-muted translate=translate>Categories:&nbsp;</small><small class=text-info>{{name.labels.toString() || "none"}}</small></h6></div></div></li></ul></div>'), 
    e.put("/app/partials/assets/_linkFile.html", '<div class="panel panel-default"><div class=panel-heading><div class=row><div class=col-sm-6><h3>{{urlLink.name}}</h3><small ng-repeat="pl in filedetails.dbdata.playlists"><a class=text-info href=/playlists/details/{{pl}}>{{pl}}&nbsp;</a></small></div><div class="col-sm-3 pull-right"><div class="btn-toolbar navbar-btn pull-right"><button class="btn btn-danger-outline" ng-click=delete()><i class="fa fa-trash fa-lg text-danger"></i></button> <button class="btn btn-primary" ng-click=assignAsset() translate=translate>Assign</button></div></div></div></div><div class="panel body"><br><form role=form name=linkform><div class="form-group row"><label class="control-label text-muted col-sm-2 text-right" translate=translate>File Name</label><div class=col-sm-6><b>{{urlLink.name}}</b></div></div><div class="form-group row"><label class="control-label text-muted col-sm-2 text-right" translate=translate>File Type</label><div class=col-sm-6><select class=form-control ng-options="entry.ext as entry.name for entry in linkTypes" name=linktype ng-model=urlLink.type required></select></div></div><div class="form-group row" ng-if="urlLink.type == \'.mrss\'"><label class="col-sm-2 control-label text-muted text-right" translate=translate>RSS Text</label><div class=col-sm-9><div class=radio-inline><label><input type=radio name=radio_none ng-model=urlLink.hideTitle value=none><small translate=translate>image</small></label></div><div class=radio-inline><label><input type=radio name=radio_title ng-model=urlLink.hideTitle value=title><small translate=translate>image&title</small></label></div><div class=radio-inline><label><input type=radio name=radio_description ng-model=urlLink.hideTitle value=description><small translate=translate>image&description</small></label></div><div class=radio-inline><label><input type=radio name=radio_title_noimg ng-model=urlLink.hideTitle value=onlytitle><small translate=translate title="{{\'only title no image\' | translate}}">title</small></label></div><div class=radio-inline><label><input type=radio name=radio_description_noimg ng-model=urlLink.hideTitle value=onlydescription><small translate=translate title="{{\'only description no image\' | translate}}">descr</small></label></div><div class=radio-inline><label><input type=radio name=radio_description_noimg ng-model=urlLink.hideTitle value=onlytitledescr><small translate=translate title="{{\'title and description\' | translate}}">title&descr</small></label></div></div></div><div class="form-group row" ng-if="urlLink.type == \'.mrss\'"><label class="control-label text-muted col-sm-2 text-right" translate=translate>Number of Items</label><div class=col-sm-2><input class=form-control type=number name=count placeholder="{{&quot;Number of Items to show&quot; | translate}}" ng-model=urlLink.numberOfItems></div><label class="control-label text-muted col-sm-3 text-right" translate=translate>Item duration (use playlist duration & number of items instead after 2.4.0)</label><div class=col-sm-2><input class=form-control type=number name=duration placeholder="{{&quot;Duration of each feed item&quot; | translate}}" ng-model=urlLink.duration></div></div><div class="form-group row" ng-if="urlLink.type == \'.weblink\'"><label class="col-sm-2 control-label text-muted text-right" translate=translate>Zoom level</label><div class=col-sm-2><input class=form-control type=number step=0.01 name=style placeholder="{{\'e.g. 0.75(75%), 1.25(125%) or leave blank for no-zoom\' | translate}}" ng-model=urlLink.zoom></div></div><div class="form-group row" ng-if="urlLink.type == \'.weblink\'"><label class="col-sm-2 control-label text-muted text-right" translate=translate>Send Key strokes (optional)</label><div class=col-sm-4><input class=form-control name=keystrokes placeholder="e.g. tab,shift+h,e,l,l,o,shift+!,enter" ng-model=urlLink.keystrokes><small>for key definitions refer http://robotjs.io/docs/syntax#keys</small></div><label class="col-sm-2 control-label text-muted text-right" translate=translate>After a delay of</label><div class=col-sm-2><input class=form-control name=keyDelay placeholder="10 secs" ng-model=urlLink.keyDelay></div></div><div class="form-group row" ng-if="urlLink.type == \'.weblink\'"><label class="col-sm-2 control-label text-muted text-right" translate=translate>Auto scroll (optional)</label><div class=col-sm-1><div class=checkbox><label><input type=checkbox name=scroll ng-model=urlLink.scroll></label></div></div></div><div class="form-group row" ng-if="(urlLink.type == \'.weblink\')"><label class="col-sm-2 control-label text-muted text-right" translate=translate>Optional Headers (4.x only)</label><div class=col-sm-6><input class=form-control name=weblinkHeaders placeholder="e.g: Authorization: Basic 123456, Content-Type: application/json" ng-model=urlLink.weblinkHeaders></div></div><div class="form-group row" ng-if="urlLink.type != \'.txt\'"><label class="control-label text-muted col-sm-2 text-right" translate=translate>Link Address</label><div class=col-sm-6><div class=input-group><input class=form-control name=linkAddress ng-model=urlLink.link required><span class=input-group-btn><a class="btn btn-default" ng-disabled=!urlLink.link href={{urlLink.link}} target=_blank><i class="fa fa-external-link"></i></a></span></div></div><div class=col-sm-3><button class="btn btn-success" ng-disabled="!(linkform.$dirty &amp;&amp; linkform.$valid)" ng-click=saveNewChanges()>Update</button></div></div><div class="form-group row" ng-if="urlLink.type == \'.stream\'"><label class="col-sm-2 control-label text-muted text-right" translate=translate>TCP Stream</label><div class=col-sm-4><label><input type=checkbox name=tcp_stream ng-model=urlLink.tcp></label></div></div><div class="form-group row" ng-if="(urlLink.type == \'.txt\')|| (urlLink.type == \'.mrss\')"><label class="control-label text-muted col-sm-2 text-right" translate=translate>Optional CSS</label><div class=col-sm-6><input class=form-control name=style placeholder="e.g. color:#eee; font-style:italic;" ng-model=urlLink.style></div></div><div class="form-group row" ng-if="urlLink.type == \'.txt\'"><label class="control-label text-muted col-sm-2 text-right" translate=translate>Message</label><div class=col-sm-6><textarea class=form-control rows=4 cols=50 name=message ng-model=urlLink.message required></textarea></div><div class=col-sm-3><button class="btn btn-success" ng-disabled="!(linkform.$dirty &amp;&amp; linkform.$valid)" ng-click=saveNewChanges()>Update</button></div></div></form></div><div class=panel-footer ng-if=filedetails.dbdata><div class=row><div class=col-sm-10><categories selected-labels=filedetails.dbdata.labels></categories></div><div class=col-sm-2><button class="btn btn-success pull-right" ng-click=saveTags() translate=translate>Save Tags</button></div></div></div></div>'), 
    e.put("/app/partials/assets/_notice.html", '<div class="panel panel-default" ng-if=!noticePreview><div class=panel-heading><div class=row><h3 class=col-xs-9><span translate=translate>Notice:</span>&nbsp;{{noticename}}</h3><span class=pull-right><button class="btn btn-info btn-xs" type=button ng-click="noticepreview=false" ng-show=noticepreview translate=translate>Close</button></span></div></div><div class=panel-body><form role=form id=noticeform name=noticeform ng-hide=noticepreview unsaved-changes-warning=unsaved-changes-warning><div class=form-group><label class=control-label for=title translate=translate>Heading</label> <input class=form-control name=title ng-model=notice.title placeholder="{{\'Heading To Be Shown\' | translate}}" required ng-maxlength=60><span class="error text-danger" ng-show=noticeform.title.$error.maxlength><small translate=translate>Max-length</small><span>&colon; 60</span></span></div><div class=form-group><label class=control-label translate=translate>Body</label> <textarea class=form-control rows=10 ng-model=notice.description style=resize:none placeholder="{{\'Body of the notice\' | translate}}"></textarea></div><div class=form-group><label class=control-label for=noticefooter translate=translate>Footer</label> <input class=form-control id=filename ng-model=notice.footer name=noticefooter placeholder="{{\'Optional footer message\' | translate}}"></div><span class=text-danger>{{errorMessage}}</span><div class=form-group><nodeims-file-upload allow=imageonly type=small onerror="err(file, msg)" ondone="noticedone(files, data)"><span>&nbsp;{{previewimagepath?previewimagepath:("Add Image" | translate)}}</span></nodeims-file-upload></div><div class=form-group><h5 class="pull-left text-muted" translate=translate>Select Categories for the Notice</h5><p class=pull-left><categories selected-labels=notice.labels></categories></p><br><br></div><div class=form-group><button class="btn btn-primary" type=submit ng-click=saveNotice() ng-disabled=noticeform.$invalid><span ng-if=noticeform.$dirty translate=translate>Save &</span><span translate=translate>Preview</span></button></div></form></div></div><div class="panel panel-info" ng-if=noticePreview><div class=panel-heading><div class=row><h4 class=col-xs-9 translate=translate>Preview</h4><span class=pull-right><button class="btn btn-warning btn-xs" ng-click=closePreview() translate=translate>Close</button></span></div></div><div class=panel-body style="overflow: auto;"><div ng-bind-html=serverPreview></div></div></div>'), 
    e.put("/app/templates/adEnablePopUp.html", '<div class=modal-content><div class="modal-header bg-default"><h4 class=modal-title translate=translate>Make this as Advt. Playlist</h4></div><div class=modal-body><form class=form-horizontal><div class=form-group><label class="col-sm-7 control-label text-muted" translate=translate>By making this as Advt. playlist, you can insert the assetsof this playlist periodically in between the currently playing playlist.</label><div class=col-sm-5><div class=checkbox><label><input type=checkbox ng-model=settings.ads.adPlaylist><span translate=translate>Make this as Advt. Playlist</span></label></div></div></div><div class=form-group ng-show=settings.ads.adPlaylist><label class="col-sm-7 control-label text-muted" translate=translate>You can play the assets only on side and banner zones by disablingmain zone here. Still you have to select dummy file for main zone.</label><div class=col-sm-5><div class=checkbox><label><input type=checkbox ng-model=settings.ads.noMainPlay><span translate=translate>Play only in side/banner zones</span></label></div></div></div><div class=form-group ng-show=settings.ads.adPlaylist><label class="col-sm-4 control-label text-muted" translate=translate>Play</label><div class=col-sm-3><div class=input-group><input class=form-control type=number ng-model=settings.ads.adCount><div class=input-group-addon><small class=text-muted translate=translate>assets</small></div></div></div><div class=col-sm-5><div class=input-group><div class=input-group-addon><small class=text-muted translate=translate>after every</small></div><input class=form-control type=number ng-model=settings.ads.adInterval><div class=input-group-addon><small class=text-muted translate=translate>seconds</small></div></div></div></div></form></div><div class="modal-header bg-default"><h4 class=modal-title translate=translate>Play this playlist only once during selected duration</h4></div><div class=modal-body><form class=form-horizontal><div class="form-group row"><label class="col-sm-7 control-label text-muted" translate=translate>Play this playlist once every selected duration by stopping regular playlist,acts like insertion of advt at fixed intervals</label><div class=col-sm-5><div class=checkbox><label><input type=checkbox ng-model=settings.domination.enable><span translate=translate>Enable (Domination Content)</span></label></div></div></div><div class=form-group ng-show=settings.domination.enable><label class="col-sm-7 control-label text-muted" translate=translate>Play after every</label><div class=col-sm-4><div class=input-group><input class=form-control type=number ng-model=settings.domination.timeInterval><div class=input-group-addon><small translate=translate>minutes</small></div></div></div></div></form></div><div class="modal-header bg-default"><h4 class=modal-title translate=translate>Play this as independent Audio Playlist for the aux port</h4></div><div class=modal-body><form class=form-horizontal><div class=form-group><label class="col-sm-7 control-label text-muted" translate=translate>In addition to signage functionality, you can play audio from a playlistthrough the 3.5mm jack</label><div class=col-sm-5><div class=checkbox><label><input type=checkbox ng-model=settings.audio.enable><span translate=translate>Play songs from this playlist (need to contain only mp3 files or a single streaming link)</span></label></div></div></div><div class=form-group ng-show=settings.audio.enable><label class="col-sm-7 control-label text-muted" translate=translate></label><div class=col-sm-5><div class=checkbox><label><input type=checkbox ng-model=settings.audio.random><span translate=translate>Play in random order</span></label></div></div></div><div class=form-group ng-show=settings.audio.enable><label class="col-sm-7 control-label text-muted" translate=translate>Volume</label><div class=col-sm-3><input class=form-control type=number min=0 max=100 ng-model=settings.audio.volume placeholder="{{\'Enter value in %\' | translate}}"></div></div><div class=form-group ng-show=settings.audio.enable><label class="col-sm-7 control-label text-muted" translate=translate></label><div class=col-sm-5><div class=checkbox><label><input type=checkbox ng-model=settings.audio.hdmi><span translate=translate>Output audio in HDMI port also</span></label></div></div></div></form></div><div class="modal-header bg-default"><h4 class=modal-title translate=translate>Make this as Event Playlist</h4></div><div class=modal-body><form class=form-horizontal><div class=form-group><label class="col-sm-7 control-label text-muted" translate=translate>When SIGUSR2 event is signalled this playlist is played if eligible</label><div class=col-sm-5><div class=checkbox><label><input type=checkbox ng-model=settings.event.enable><span translate=translate>Enable</span></label></div></div></div><div class=form-group ng-show=settings.event.enable><label class="col-sm-7 control-label text-muted" translate=translate>Duration of the playlist in seconds or 0 to play till next event or 1 to play only once</label><div class=col-sm-5><input class=form-control ng-model=settings.event.duration placeholder="{{\'Enter value in seconds\' | translate}}"></div></div></form></div><div class="modal-header bg-default"><h4 class=modal-title translate=translate>Make this as Key event Playlist</h4></div><div class=modal-body><form class=form-horizontal><div class=form-group><label class="col-sm-7 control-label text-muted" translate=translate>When the assigned key is pressed this playlist is played if eligible</label><div class=col-sm-5><div class=checkbox><label><input type=checkbox ng-model=settings.keyPress.enable><span translate=translate>Enable</span></label></div></div></div><div class=form-group ng-show=settings.keyPress.enable><label class="col-sm-7 control-label text-muted" translate=translate>KeyCode to be pressed to play this playlist<br><small>(Usual keycodes are, key_0:11, key_1:2, key_2:3 ,..., key_9:10)</small></label><div class=col-sm-5><input class=form-control type=number ng-model=settings.keyPress.key placeholder="{{\'Enter the keycode for the playlist\' | translate}}"></div></div></form></div><div class="modal-header bg-default"><h4 class=modal-title translate=translate>Play this playlist only when online</h4></div><div class=modal-body><form class=form-horizontal><div class=form-group><label class="col-sm-7 control-label text-muted" translate=translate>Schedule this playlist to play only when player is online</label><div class=col-sm-5><div class=checkbox><label><input type=checkbox ng-model=settings.onlineOnly><span translate=translate>Enable</span></label></div></div></div></form></div><div class=modal-footer><button class=btn ng-click=adModalCancel() translate=translate>Cancel</button> <button class="btn btn-success pull-right" ng-click=adSave() translate=translate>Save</button></div></div>'), 
	
    e.put("/app/templates/bulkAssetsOperation.html", '<div class=modal-content ng-if=operation><div class="modal-header bg-default"><h4 class=modal-title><span class=text-danger ng-if="operation == \'delete\'" translate=translate>Do you want to delete the selected files?</span><span ng-if="operation == \'assign\'" translate=translate>Assign the category to the selected files</span><span ng-if="operation == \'group\'" translate=translate>Assign selected files to groups for collaborators</span></h4></div><div class=modal-body><div ng-if="adminServer &amp;&amp; operation == \'assign\'"><h5 translate=translate>Select Categories for the files</h5><categories class=categories selected-labels=upload.selectedLabels labels=upload.labels></categories><br><form class="form-inline row"><div class="form-group col-sm-6"><div class=input-group><input class="form-control input-sm" ng-model=newLabel.name placeholder="{{\'add new\' || translate}}"><div class=input-group-btn><button class="btn btn-success btn-sm" type=submit ng-click=addLabel()><i class="fa fa-plus"></i></button></div></div></div><div class=text-danger ng-if=msg.error ng-bind=msg.error></div></form></div><div ng-if="adminServer &amp;&amp; operation == \'group\'"><h5 translate=translate>Select Groups to be assigned</h5><div class=row><div class=col-sm-6 ng-repeat="(gid,gname) in groups"><label class=checkbox-inline><input type=checkbox value={{gid}} ng-checked="selectedGroups.indexOf(gid) &gt;=0" ng-click=groupToggle(gid)><small class=text-muted>{{gname | truncate:18}}</small></label></div></div></div><div class=row><div class=col-sm-12><p class="text-info pull-right" ng-if=filtered.msg ng-bind=filtered.msg></p></div><div class=col-sm-12><div class="btn-toolbar pull-right"><button class="btn btn-default" ng-click=bulkModal.close() ng-hide=filtered.msg translate=translate>Cancel</button> <button class="btn btn-primary" ng-click=proceed() ng-hide=filtered.msg translate=translate>Proceed</button> <button class="btn btn-primary" ng-click=bulkModal.close() ng-show=filtered.msg translate=translate>OK</button></div></div></div></div><div class=modal-body><h5 translate=translate>Selected files</h5><div class=row><div class=col-sm-6 ng-repeat="file in bulkSelectedFiles"><small class=text-muted>{{file | truncate:40}}</small></div></div></div></div><div class=modal-content ng-if=!operation><div class="modal-header bg-default"><h4 class=modal-title translate=translate>Please select at least 1 file <button class="btn-xs btn-link fa fa-close pull-right" ng-click=bulkModal.close()></button></h4></div></div>'), 
    e.put("/app/templates/confirmPopup.html", '<div class=modal-content><div class="modal-header bg-default"><button class=close ng-click=cancel()>&times;</button><h4 class=modal-title translate=translate>Please Confirm</h4></div><div class=modal-body><h5><span translate=translate ng-show=!noPrepend>Do you want to delete:</span><b>&nbsp{{deleteText}}</b>&nbsp?</h5></div><div class=modal-footer><button class="btn btn-default" ng-click=cancel() translate=translate>Cancel</button> <button class="btn btn-primary" ng-click=ok() translate=translate>OK</button></div></div>'), e.put("/app/templates/factoryResetPopUp.html", '<div class=modal-content><div class="modal-header bg-default"><h4 class=modal-title>Confirm Factory Reset <button class="btn btn-default pull-right" ng-click=close()>Cancel</button></h4></div><div class=modal-body><h4>All settings will be deleted or changed to default ones, do you want to Continue?</h4></div><div class=modal-footer><button class="btn btn-danger pull-right" ng-click=ok()>YES</button></div></div>'),

    e.put("/app/templates/layoutPopup.html", '<div class="panel panel-default" style=margin-bottom:0px;><div class=panel-heading><h4 class=text-center><span translate=translate>Select Display Layout (default 1)</span> <button class="btn btn-primary pull-right" ng-click=modal.close() translate=translate>DONE</button></h4></div><div class=panel-body><uib-tabset><uib-tab heading=Layouts><i><small translate=translate>The Display can be divided into multiple zones with each zone playing different content. Video files can be played</small><small translate=translate>only in the main Zone. Select a file in the playlist to play in the main zone,add other zone files to the main file</small><small translate=translate>by clicking zone file button. If there is no file attached to a particular zone, the previous content for that zone</small><small translate=translate> will continue to play.</small></i><ul class=list-group><li class=list-group-item ng-repeat="item in layouts" ng-class="{\'list-group-item-success\':layout.type==item.type}"><div class=row><div class=col-sm-10 uib-dropdown=uib-dropdown><div class=radio><label><input type=radio value={{item.type}} ng-click=saveLayout() ng-disabled=item.disabled ng-model=layout.type><strong class=text-primary>{{item.type}}: &nbsp;{{item.title}}</strong><p><small>{{item.description}}</small></p></label></div><button class="btn btn-sm btn-link" ng-if="item.type.indexOf(\'custom\') === 0" uib-dropdown-toggle=uib-dropdown-toggle><span class=text-muted>layout file:&nbsp;</span><span>{{layout.templateName || ("Select a custom_layout*.html file from Assets" | translate)}}</span><i class="fa fa-caret-down"></i></button><ul class=dropdown-menu role=menu ng-if="item.type.indexOf(\'custom\') === 0" uib-dropdown-menu=uib-dropdown-menu><li ng-repeat="asset in assets | filter:customTemplates"><a href=# ng-click=selectTemplate(asset,item.type)>&nbsp;&nbsp;{{asset}}</a></li></ul></div><div class=col-sm-2><img height=40px src=/app/img/{{item.type}}.png></div></div></li></ul></uib-tab><uib-tab heading="Main Video Window"><h4 translate=translate>Change Main Zone video window size</h4><i><small translate=translate>This section is for Advanced user only!! Changing any parameter would affect the video display size.</small><small translate=translate>If encountered any problem just click \'Resore Defaults\'. The `length` and `width` parameters define the actual window size,</small><small translate=translate> `Left-offset` and `Top-Offset` defines the position of the window across your display.</small><br><b class=text-warning translate=translate>USE THIS FEATURE CAUTIOUSLY</b><br></i><form class=m-t name=layoutform><div class="form-group row"><div class="col-sm-2 col-sm-offset-2"><label class=control-label><small translate=translate>Width:</small></label></div><div class=col-sm-2><input class=form-control ng-model=layout.videoWindow.length required></div><div class=col-sm-2><label class=control-label><small translate=translate>Height:</small></label></div><div class=col-sm-2><input class=form-control ng-model=layout.videoWindow.width required></div></div><div class="form-group row"><div class="col-sm-2 col-sm-offset-2"><label class=control-label><small translate=translate>Left-Offset:</small></label></div><div class=col-sm-2><input class=form-control ng-model=layout.videoWindow.xoffset required></div><div class=col-sm-2><label class=control-label><small translate=translate>Top-Offset:</small></label></div><div class=col-sm-2><input class=form-control ng-model=layout.videoWindow.yoffset required></div></div><div class="form-group row"><div class=col-sm-6><div class="form-check form-check-inline"><label class=form-check-label><input class=form-check-input type=checkbox name=fullscreen_checkbox ng-model=layout.mainzoneOnly ng-true-value=false ng-false-value=true ng-checked="layout.mainzoneOnly !== true"><small class="text-muted pl-5" translate=translate>Use as FULL SCREEN dimensions also(for custom displays)</small></label></div></div></div><hr><div class="form-group row"><div class=col-sm-12><div class="btn-toolbar pull-right"><button class="btn btn-primary-outline" ng-click=clearVideoWindow() translate=translate>Restore Defaults</button> <button class="btn btn-primary" ng-click=saveLayout() ng-disabled=!layoutform.$valid translate=translate>Save New Changes</button></div></div></div></form></uib-tab><uib-tab heading="Side/Bottom Video Window"><h4 translate=translate>Change video window position for other zones</h4><i><small translate=translate>This section is for custom layouts only !! Changing Any parameter would affect the video display size in side and bottom zones.</small></i><form name=sideZoneForm><div class="alert text-center bg-default">Side Zone Values</div><div class="form-group row"><div class="col-sm-2 col-sm-offset-2"><label class=control-label><small translate=translate>Width:</small></label></div><div class=col-sm-2><input class=form-control ng-model=layout.zoneVideoWindow.side.length required></div><div class=col-sm-2><label class=control-label><small translate=translate>Height:</small></label></div><div class=col-sm-2><input class=form-control ng-model=layout.zoneVideoWindow.side.width required></div></div><div class="form-group row"><div class="col-sm-2 col-sm-offset-2"><label class=control-label><small translate=translate>Left-Offset:</small></label></div><div class=col-sm-2><input class=form-control ng-model=layout.zoneVideoWindow.side.xoffset required></div><div class=col-sm-2><label class=control-label><small translate=translate>Top-Offset:</small></label></div><div class=col-sm-2><input class=form-control ng-model=layout.zoneVideoWindow.side.yoffset required></div></div><div class="form-group row"><div class=col-sm-12><div class="btn-toolbar pull-right"><button class="btn btn-primary-outline" ng-click="clearZoneVideoWindow(\'side\')" translate=translate>Restore Side Zone Defaults</button> <button class="btn btn-primary" ng-click=saveLayout() ng-disabled=!sideZoneForm.$valid translate=translate>Save New Changes</button></div></div></div></form><form name=bottomZoneForm><div class="alert text-center bg-default">Bottom Zone Values</div><div class="form-group row"><div class="col-sm-2 col-sm-offset-2"><label class=control-label><small translate=translate>Width:</small></label></div><div class=col-sm-2><input class=form-control ng-model=layout.zoneVideoWindow.bottom.length required></div><div class=col-sm-2><label class=control-label><small translate=translate>Height:</small></label></div><div class=col-sm-2><input class=form-control ng-model=layout.zoneVideoWindow.bottom.width required></div></div><div class="form-group row"><div class="col-sm-2 col-sm-offset-2"><label class=control-label><small translate=translate>Left-Offset:</small></label></div><div class=col-sm-2><input class=form-control ng-model=layout.zoneVideoWindow.bottom.xoffset required></div><div class=col-sm-2><label class=control-label><small translate=translate>Top-Offset:</small></label></div><div class=col-sm-2><input class=form-control ng-model=layout.zoneVideoWindow.bottom.yoffset required></div></div><div class="form-group row"><div class=col-sm-12><div class="btn-toolbar pull-right"><button class="btn btn-primary-outline" ng-click="clearZoneVideoWindow(\'bottom\')" translate=translate>Restore Bottom Zone Defaults</button> <button class="btn btn-primary" ng-click=saveLayout() ng-disabled=!bottomZoneForm.$valid translate=translate>Save New Changes</button></div></div></div></form></uib-tab><uib-tab heading="Zone4 Video" ng-if="layout.type.indexOf(\'custom\') === 0"><h4 translate=translate>Change video window position for zone4</h4><i><small translate=translate>This section is for custom layouts only !! Changing Any parameter would affect the video display size in zone4.</small></i><form name=zone4Form><div class="alert text-center bg-default">Zone4 Values</div><div class="form-group row"><div class="col-sm-2 col-sm-offset-2"><label class=control-label><small translate=translate>Width:</small></label></div><div class=col-sm-2><input class=form-control ng-model=layout.zoneVideoWindow.zone4.length required></div><div class=col-sm-2><label class=control-label><small translate=translate>Height:</small></label></div><div class=col-sm-2><input class=form-control ng-model=layout.zoneVideoWindow.zone4.width required></div></div><div class="form-group row"><div class="col-sm-2 col-sm-offset-2"><label class=control-label><small translate=translate>Left-Offset:</small></label></div><div class=col-sm-2><input class=form-control ng-model=layout.zoneVideoWindow.zone4.xoffset required></div><div class=col-sm-2><label class=control-label><small translate=translate>Top-Offset:</small></label></div><div class=col-sm-2><input class=form-control ng-model=layout.zoneVideoWindow.zone4.yoffset required></div></div><div class="form-group row"><div class=col-sm-12><div class="btn-toolbar pull-right"><button class="btn btn-primary-outline" ng-click="clearZoneVideoWindow(\'zone4\')" translate=translate>Restore Zone4 Defaults</button> <button class="btn btn-primary" ng-click=saveLayout() ng-disabled=!zone4Form.$valid translate=translate>Save New Changes</button></div></div></div></form></uib-tab></uib-tabset></div></div>'), e.put("/app/templates/linkFilePopup.html", '<div class=modal-content><div class="modal-header bg-default"><h5 class=modal-title><span class=text-muted translate=translate>Select a file or playlist to play in the</span><strong>&nbsp;{{selectedZone}} &nbsp;</strong><span class=text-muted translate=translate>zone with</span><strong>&nbsp;{{selectedAsset.filename}}</strong> <button class="btn btn-xs btn-info pull-right" ng-click=modal.close() translate=translate>DONE</button></h5></div><div class=panel-body><uib-tabset active=tabIndex><uib-tab index=0 heading=Assets><ul class=list-group><li class="list-group-item bg-default"><input class=form-control placeholder="{{\'Filter by Name\' | translate}}" ng-model=search></li><li class=list-group-item ng-repeat="file in filteredAssets  | filter:search " ng-class="{\'list-group-item-success\':file==selectedAsset[selectedZone]}"><div class=media ng-click=linkFileSave(file)><div class=media-left><a class=pull-left href=# ng-if=filesDetails[file].thumbnail><img class=media-object src={{filesDetails[file].thumbnail}}></a><div class="media-object letter-box img-rounded pull-left" ng-if=!filesDetails[file].thumbnail>{{filesDetails[file].type.slice(0,1) || \'N\' }}</div></div><div class=media-body><div class=row><div class=col-sm-8><p class=media-heading>&nbsp;{{file}}</p></div><div class=col-sm-4><label class=text-muted ng-show="filesDetails[file].type == &quot;video&quot; &amp;&amp; file==selectedAsset[selectedZone]" title="{{\'Delete from playlist only\' | translate}}"><input type=checkbox ng-model=selectedAsset.option[selectedZone]><span class=pl-5 translate=translate>mute audio</span></label></div></div><div class=row><div class=col-sm-12><strong class=pr-5>{{filesDetails[file].type}}</strong><small class=pr-5><span class=text-muted translate=translate>duration:</span>{{filesDetails[file].duration}} secs</small><small class=pr-5 ng-if=filesDetails[file].size><span class=text-muted translate=translate>size:</span>{{filesDetails[file].size}}</small><small class=pr-5 ng-if=filesDetails[file].resolution.width><span class=text-muted translate=translate>resolution:</span><span>{{filesDetails[file].resolution.width}}x</span><span>{{filesDetails[file].resolution.height}}</span></small></div></div></div></div></li></ul></uib-tab><uib-tab index=1 heading=Playlists><ul class=list-group><li class="list-group-item list-group-item-info"><input class=form-control placeholder="{{\'Filter by Name\' | translate}}" ng-model=search></li><li class=list-group-item ng-repeat="pl in playlistsList  | filter:search " ng-class="{\'list-group-item-success\':pl.plName==selectedAsset[selectedZone]}"><div class=media ng-click=linkFileSave(pl.plName)><div class=media-left><div class="media-object letter-box img-rounded pull-left"><i class="fa fa-list-alt"></i></div></div><div class=media-body><div class=row><div class=col-sm-8><p class=media-heading>&nbsp;{{pl.displayName}}</p></div><div class=col-sm-4><label class=text-muted ng-show="pl.plName==selectedAsset[selectedZone]" title="Continuously play independent of main zone"><input type=checkbox ng-model=selectedAsset.option[selectedZone]><span class=pl-5 translate=translate>play independently</span></label></div></div></div></div></li></ul></uib-tab></uib-tabset></div></div>'), e.put("/app/templates/linkPopUp.html", '<div class=modal-content><div class="modal-header bg-default"><h4 translate=translate ng-show="urlLink.type.ext != \'.txt\'">Stream from Internet</h4><h4 translate=translate ng-show="urlLink.type.ext == \'.txt\'">Add a Message</h4></div><div class=modal-body><p class=text-danger ng-if=errorMessage>{{errorMessage}}</p><form class=form-horizontal role=form name=Utubeform><div class=form-group><label class="col-sm-3 control-label text-muted text-right" translate=translate>File Name</label><div class=col-sm-9><input class=form-control name=linkname ng-model=urlLink.name placeholder="{{\'Data will be saved in this file\'|translate}}" required></div></div><div class=form-group><label class="col-sm-3 control-label text-muted text-right" translate=translate>Type</label><div class=col-sm-6><select class=form-control ng-options="entry.name for entry in linkTypes" name=linktype ng-model=urlLink.type required></select></div></div><div class=form-group ng-if="urlLink.type.ext == \'.mrss\'"><label class="col-sm-3 control-label text-muted text-right" translate=translate>RSS Text</label><div class=col-xs-9><div class=radio-inline><label><input type=radio name=radio_none ng-model=urlLink.hideTitle value=none><small translate=translate>image</small></label></div><div class=radio-inline><label><input type=radio name=radio_title ng-model=urlLink.hideTitle value=title><small translate=translate>image&title</small></label></div><div class=radio-inline><label><input type=radio name=radio_description ng-model=urlLink.hideTitle value=description><small translate=translate>image&description</small></label></div><div class=radio-inline><label><input type=radio name=radio_title_noimg ng-model=urlLink.hideTitle value=onlytitle><small translate=translate title="{{\'only title no image\' | translate}}">title</small></label></div><div class=radio-inline><label><input type=radio name=radio_description_noimg ng-model=urlLink.hideTitle value=onlydescription><small translate=translate title="{{\'only description no image\' | translate}}">descr</small></label></div><div class=radio-inline><label><input type=radio name=radio_description_noimg ng-model=urlLink.hideTitle value=onlytitledescr><small translate=translate title="{{\'title and description\' | translate}}">title&descr</small></label></div></div></div><div class=form-group ng-if="urlLink.type.ext == \'.mrss\'"><label class="control-label text-muted col-sm-3 text-right" translate=translate>Number of Items</label><div class=col-sm-2><input class=form-control type=number name=count placeholder="{{&quot;Number of Items to show&quot; | translate}}" ng-model=urlLink.numberOfItems></div><label class="control-label text-muted col-sm-5 text-right" translate=translate>Item duration (use playlist duration instead from 2.4.0)</label><div class=col-sm-2><input class=form-control type=number name=duration placeholder="{{&quot;Duration of each feed item&quot; | translate}}" ng-model=urlLink.duration></div></div><div class=form-group ng-if="urlLink.type.ext != \'.txt\'"><label class="col-sm-3 control-label text-muted text-right" translate=translate>Link Address</label><div class=col-sm-9><input class=form-control ng-if="urlLink.type.ext == \'.local\'" name=linkUrl ng-model=urlLink.link placeholder="{{\'e.g. /home/pi/shared-mount\'|translate}}" required> <input class=form-control ng-if="urlLink.type.ext != \'.local\'" name=linkUrl ng-model=urlLink.link ng-pattern=/^(http(s?)|rtsp|udp|rtmp):/// placeholder="{{\'e.g. http(s)://site.com or rtsp://, use ; to separate multiple links\'|translate}}" required></div></div><div class=form-group ng-if="urlLink.type.ext == \'.weblink\'"><label class="col-sm-3 control-label text-muted text-right" translate=translate>Zoom level</label><div class=col-sm-9><input class=form-control type=number step=0.01 name=style placeholder="Leave blank for no-zoom" ng-model=urlLink.zoom></div></div><div class=form-group ng-if="urlLink.type.ext == \'.weblink\'"><label class="col-sm-3 control-label text-muted text-right" translate=translate>Optional Headers (4.x only)</label><div class=col-sm-9><input class=form-control name=weblinkHeaders title="use ; to seperate header fields" placeholder="e.g: Authorization: Basic 123456; Content-Type: application/json" ng-model=urlLink.weblinkHeaders></div></div><div class=form-group ng-if="urlLink.type.ext == \'.stream\'"><label class="col-sm-3 control-label text-muted text-right" translate=translate>TCP Stream</label><div class=col-sm-9><label><input type=checkbox name=tcp_stream ng-model=urlLink.tcp></label></div></div><div class=form-group ng-if="(urlLink.type.ext == \'.txt\') || (urlLink.type.ext == \'.mrss\')"><label class="col-sm-3 control-label text-muted text-right" translate=translate>Optional CSS</label><div class=col-sm-9><input class=form-control name=style placeholder="e.g. color:#eee; font-style:italic;" ng-model=urlLink.style></div></div><div class=form-group ng-if="urlLink.type.ext == \'.txt\'"><label class="col-sm-3 control-label text-muted text-right" translate=translate>Message</label><div class=col-sm-9><textarea class=form-control rows=4 cols=50 name=message ng-model=urlLink.message required></textarea></div></div><div class=form-group ng-if=adminServer><label class="col-sm-3 control-label text-muted text-right" translate=translate>Assign Categories</label><div class=col-sm-9><categories selected-labels=linkCategories></categories></div></div></form></div><div class=modal-footer><button class="btn btn-default" type=button ng-click=modal.close() translate=translate>Cancel</button> <button class="btn btn-primary" ng-disabled=Utubeform.$invalid ng-click=saveDetails() translate=translate>Save</button></div></div>'), e.put("/app/templates/playerShellPopup.html", '<div class=modal-content><div class="modal-header bg-default"><h4 class=modal-title><span translate=translate>Pi Shell</span> <button class="btn btn-primary-outline btn-sm pull-right" ng-click=modal.close() translate=translate>Dismiss</button></h4></div><div class="modal-body modal-body-scroller"><form name=shellform ng-submit=execute()><div class=form-group><div class=input-group><input class=form-control placeholder="{{\'Issue Linux shell commands for player(use up&amp;down arrow keys for history)\' | translate }}" ng-model=msg.cmd ng-keydown=getOldEntry($event)><span class=input-group-btn><button class="btn btn-primary" type=submit ng-model=msg.cmd ng-disabled=!msg.cmd translate=translate>EXECUTE</button></span></div></div></form><pre class=bg-default ng-if=msg.err><small class=text-danger>{{msg.err}}</small></pre><pre class=bg-default ng-if=msg.stdout><small class=text-info>stdout: {{msg.stdout}}</small></pre><pre class=bg-default ng-if=msg.stderr><small class=text-warning>stderr: {{msg.stderr}}</small></pre></div><div class=modal-body><img ng-src=data:image/png;base64,{{img64}} err-src=/app/img/snapshot.png width=100%><a class=thumbnail href=# ng-click=snapshot()><button class="btn btn-success" width=100% translate=translate>Take Snapshot</button></a><small translate=translate>last taken:<small>{{snapshot.lastTaken | date: "MMM dd, hh:mm a"}}</small></small></div></div>'), e.put("/app/templates/mediaDetailsPopup.html", '<div class=modal-content><div class="modal-header bg-default"><button class=close ng-click=modal.dismiss()>&times;</button><h4 class=modal-title>{{fileToShow}}</h4></div><div class=modal-body ng-switch=fileType><div ng-switch-default=ng-switch-default><img class="img-responsive img-rounded" ng-if="filedetails.type==&quot;image&quot;" ng-src="{{ filedetails.path }}"><audio ng-if="filedetails.type==&quot;audio&quot; || filedetails.type==&quot;radio&quot;" controls><source ng-src={{filedetails.path}} type=audio/mpeg></audio><video class="img-responsive img-rounded" ng-if="filedetails.type==&quot;video&quot;" controls controlslist="{{disableDownload?\'nodownload\':\'download\'}}" ng-src="{{ filedetails.path }}"></video></div><div ng-switch-when=link><div class=row><div class="col-sm-2 col-sm-offset-1"><strong class=text-default translate=translate>File Name:</strong></div><div class=col-sm-8><p>{{urlLink.name}}</p></div></div><hr><div class=row><div class="col-sm-2 col-sm-offset-1"><strong class=text-default translate=translate>Type:</strong></div><div class=col-sm-8><p>{{urlLink.type}}</p></div></div><hr><div class=row><div class="col-sm-2 col-sm-offset-1"><strong class=text-default translate=translate>Address:</strong></div><div class=col-sm-8><small><a href={{urlLink.link}} target=_blank>{{urlLink.link}}</a></small></div></div></div><div ng-switch-when=notice style="overflow: auto;"><div class=row><div class=col-sm-2><strong class=text-default translate=translate>Title</strong></div><div class=col-sm-8><p>{{notice.title}}</p></div></div><hr><div class=row><div class=col-sm-2><strong class=text-default translate=translate>Description</strong></div><div class=col-sm-8><p>{{notice.description}}</p></div></div><hr><div class=row><div class=col-sm-2><strong class=text-default translate=translate>Footer</strong></div><div class=col-sm-8><p>{{notice.footer}}</p></div></div><hr><div class=row><div class=col-sm-2><strong class=text-default translate=translate>image</strong></div><div class=col-sm-8><p>{{previewimagepath}}</p></div></div></div><div ng-switch-when=text><div class=row><div class="col-sm-2 col-sm-offset-1"><strong class=text-info translate=translate>File Name:</strong></div><div class=col-sm-8><p>{{urlLink.name}}</p></div></div><hr><div class=row><div class="col-sm-2 col-sm-offset-1"><strong class=text-info translate=translate>Type:</strong></div><div class=col-sm-8><p>{{urlLink.type}}</p></div></div><hr><div class=row><div class="col-sm-2 col-sm-offset-1"><strong class=text-info translate=translate>CSS:</strong></div><div class=col-sm-8><p>{{urlLink.style}}</p></div></div><hr><div class=row><div class="col-sm-2 col-sm-offset-1"><strong class=text-info translate=translate>Message:</strong></div><div class=col-sm-8><p>{{urlLink.message}}</p></div></div></div><div ng-switch-when=zip><strong translate=translate>Zip file viewing is not supported\'</strong></div><div ng-switch-when=missing><strong>{{warningMsg}}</strong></div></div></div>'), e.put("/app/templates/playlistsPopup.html", '<div class=modal-content><div class="modal-header bg-default"><div class=row><div class=col-sm-9><h4 class="modal-title text-muted" translate=translate>Assign to or Un-assign from playlists</h4><i>&nbsp;{{selectedAsset}}&nbsp;</i></div><div class=col-sm-3><div class="btn-toolbar navbar-btn pull-right" uib-dropdown=uib-dropdown><button class="btn btn-primary btn-sm" type=button uib-dropdown-toggle=uib-dropdown-toggle>GO&nbsp;<span class=caret></span></button><ul class=dropdown-menu role=menu style=min-width:0px; uib-dropdown-menu=uib-dropdown-menu><li><a class="pull-right text-info" href=# ng-click=updatePlaylists() translate=translate>Append this to playlist</a></li><li><a class="pull-right text-info" href=# ng-click=updatePlaylists(true) translate=translate>Purge All playlist assets & add this to playlist</a></li></ul></div></div></div><div class="row m-t"><div class=col-sm-3><label class=checkbox-inline><input type=checkbox name=select_checkbox ng-model=filtered.selectAll title="{{\'Select All\' | translate}}" ng-change=toggleSelection()><span translate=translate>Select All</span></label></div><div class=col-sm-9><input class=form-control placeholder="{{\'Filter by Name\' | translate}}" ng-model=filtered.search></div></div></div><div class="modal-body modal-body-scroller"><form class=row ng-repeat="pl in popupPlaylists"><div class="checkbox col-sm-12"><label><input type=checkbox name=select_checkbox title="{{\'select to add and unselect to remove\' | translate}}" ng-model=pl.addAssetEnable>{{pl.name}}</label></div></form></div></div>'), e.put("/app/templates/statusPopup.html", '<div class=modal-content><div class="modal-header bg-default"><button class=close ng-click=cancel()>&times;</button><h4 class=modal-title>{{msg.title || ("Status" | translate)}}</h4></div><div class=modal-body><p ng-bind-html=msg.msg></p></div><div class=modal-footer><button class="btn btn-primary" ng-click=cancel() translate=translate>Dismiss</button></div></div>'), e.put("/app/templates/swUpdatePopup.html", '<div class=modal-content><div class="modal-header bg-default"><button class=close ng-click=modal.dismiss()>&times;</button><h3 class="modal-title text-danger" translate=translate>Software Update</h3></div><div class=modal-body><h5 ng-if="msg.player.version == msg.newVer"><b translate=translate>Your player Up-to-Date</b></h5><h5 ng-if="msg.player.version != msg.newVer"><span translate=translate>Do you want to update Software from</span>{{msg.curVer}}<span translate=translate>to</span>{{msg.newVer}}?</h5><a ng-hide="(isPiSignage === undefined)" ng-href="{{isPiSignage?\'https://github.com/colloqi/piSignage/blob/master/RELEASE%20NOTES.md\':\'/release_notes.md\'}}" target=_blank translate=translate>See Release Notes</a><p style=padding-top:10px;><small translate=translate>Few updates include OS level updates and need Internet to access Raspbian servers.Also such updates may take 15-30 minutes to complete, please wait till player reboots</small></p></div><div class=modal-footer><button class="btn btn-xs btn-link pull-left" ng-if="currentVersion.beta &amp;&amp; !msg.player.player2 &amp;&amp; msg.player.version != currentVersion.beta" ng-click=confirmUpdate(&quot;piimage-beta.zip&quot;)><em class=text-warning translate=translate>Update to beta</em><em class=text-warning>&nbsp;{{currentVersion.beta}}</em></button> <button class=btn ng-click=modal.dismiss() translate=translate>Cancel</button> <button class="btn btn-primary" ng-click=confirmUpdate() translate=translate>OK</button></div></div>'), e.put("/app/templates/tickerPopup.html", '<div class=modal-content><div class="modal-header bg-default"><h3 class=modal-title translate=translate>Add a ticker to your Screen</h3></div><div class=modal-body><form name=tickerForm><p class=text-danger ng-if=tickerPopupErrMessage>{{tickerPopupErrMessage}}</p><div class="checkbox row form-group"><label class="control-label col-sm-3 text-muted text-right" translate=translate>Enable Ticker</label><div class=col-sm-3><label><input type=checkbox name=ticker_enable ng-model=settings.ticker.enable></label></div><label class="control-label col-sm-3 text-muted text-right" translate=translate>Show asset associated text</label><div class=col-sm-3><label><input type=checkbox name=ticker_enable ng-model=settings.ticker.bannerText></label></div></div><div class="form-group row" ng-show=settings.ticker.enable><label class="text-muted control-label col-sm-3 text-right" translate=translate>Scroll Direction</label><div class=col-sm-9><div class=radio-inline><label><input type=radio value=slide name=slide ng-model=settings.ticker.behavior><small translate=translate>Slide</small></label></div><div class=radio-inline><label><input type=radio value=scroll name=scroll_left ng-model=settings.ticker.behavior><small translate=translate>Scroll left</small></label></div><div class=radio-inline><label><input type=radio value=scrollRight name=scroll_right ng-model=settings.ticker.behavior><small translate=translate>Scroll right</small></label></div><div class=radio-inline><label class=text-info><small translate=translate>Hardware</small></label></div><div class=radio-inline><label><input type=radio value=openvg_left name=openvg_left ng-model=settings.ticker.behavior><small translate=translate>left</small></label></div><div class=radio-inline><label><input type=radio value=openvg_right name=openvg_right ng-model=settings.ticker.behavior><small translate=translate>right</small></label></div></div></div><div class="form-group row" ng-show="settings.ticker.enable &amp;&amp; settings.ticker.behavior!= &quot;openvg_right&quot;&amp;&amp; settings.ticker.behavior!= &quot;openvg_left&quot;"><label class="control-label text-muted col-sm-3 text-right" translate=translate>Optional CSS</label><div class=col-sm-9><input class="form-control input-sm" placeholder="e.g. color:#eee; font-style:italic; " ng-model=settings.ticker.style></div></div><div class="form-group row" ng-show="settings.ticker.enable &amp;&amp; (settings.ticker.behavior== &quot;openvg_right&quot; || settings.ticker.behavior== &quot;openvg_left&quot;)"><label class="control-label text-muted col-sm-3 text-right" translate=translate>Font Size</label><div class=col-sm-2><input class="form-control input-sm" placeholder=28 ng-model=settings.ticker.tickerFontSize></div></div><div class="form-group row" ng-show=settings.ticker.enable><label class="text-muted control-label col-sm-3 text-right" translate=translate>Ticker Speed</label><div class=col-sm-9><div class=radio-inline><label><input type=radio value=1 name=slow ng-model=settings.ticker.textSpeed><small translate=translate>Slow</small></label></div><div class=radio-inline><label><input type=radio value=2 name=medium ng-model=settings.ticker.textSpeed><small translate=translate>Medium</small></label></div><div class=radio-inline><label><input type=radio value=3 name=full ng-model=settings.ticker.textSpeed><small translate=translate>Full</small></label></div></div></div><div class="form-group row" ng-show=settings.ticker.enable><label class="text-muted control-label col-sm-3 text-right" translate=translate>Ticker Height</label><div class=col-sm-5><div class=radio-inline><label><input type=radio value=60 name=regular ng-model=settings.ticker.tickerHeight><small translate=translate>Default(60px)</small></label></div><div class=radio-inline><label><input type=radio value=100 name=large ng-model=settings.ticker.tickerHeight><small translate=translate>Large(100px)</small></label></div></div><div class=col-sm-4><label class="text-muted col-sm-4 text-right" translate=translate>custom</label><div class=col-sm-8><input class="input-sm form-control" ng-model=settings.ticker.tickerHeight placeholder=Custom></div></div></div><div class="form-group row" ng-show=settings.ticker.enable><label class="control-label text-muted col-sm-3 text-right" translate=translate>Type</label><div class=col-sm-6><div class=radio-inline><label><input type=radio ng-value=false name=text_enable ng-model=settings.ticker.rss.enable><small translate=translate>Text</small></label></div><div class=radio-inline><label><input type=radio ng-value=true name=rss_enable ng-model=settings.ticker.rss.enable><small translate=translate>RSS feed</small></label></div></div></div><div class="form-group row" ng-show="settings.ticker.enable &amp;&amp; settings.ticker.rss.enable"><label class="control-label text-muted col-sm-3 text-right" translate=translate>Item duration</label><div class=col-sm-6><input class=form-control type=number ng-model=settings.ticker.rss.feedDelay placeholder="{{\'rss item duration in slide mode\' | translate}}"></div></div><div class="form-group row" ng-show="settings.ticker.enable &amp;&amp; settings.ticker.rss.enable"><label class="control-label text-muted col-sm-3 text-right" translate=translate>RSS link</label><div class=col-sm-9><input class=form-control ng-model=settings.ticker.rss.link placeholder="{{\'enter your rss link ....\' | translate}}"><div class=checkbox><label><input type=checkbox name=rss_encoding ng-model=settings.ticker.rss.encodeAsBinary><small><i class=text-primary translate=translate>Use Binary encoding for RSS, enable this if characters are not displayed properly</i></small></label></div><div class=checkbox><label><input type=checkbox name=rss_field ng-model=settings.ticker.rss.useDescription><small><i class=text-primary translate=translate>Use description field of rss stream instead of title field</i></small></label></div></div></div><div class="form-group row" ng-show="settings.ticker.enable &amp;&amp; !settings.ticker.rss.enable"><label class="control-label text-muted col-sm-3 text-right" translate=translate>Add Messages</label><div class=col-sm-9><textarea class=form-control name=ticker_messages rows=5 ng-model=settings.ticker.messages placeholder="{{\'Use line feed for multiple messages\' | translate}}"></textarea></div></div></form></div><div class=modal-footer><button class="btn btn-default" type=button ng-click=tickerModal.close() translate=translate>Cancel</button> <button class="btn btn-primary" ng-click=tickerSave() translate=translate>SAVE</button></div></div>'), e.put("/app/templates/tvControl.html", '<div class=modal-content><div class=modal-body><ul class="nav nav-pills nav-stacked"><li>{{filename}},&nbsp;{{status}}</li><li><div class=btn-group><button class="btn btn btn-default" ng-if=isPlaylist ng-disabled="index == 0" ng-click=goBackTv()><i class="fa fa-backward fa-2x"></i></button> <button class="btn btn btn-default" ng-click=playPauseTv() ng-disabled=pauseButtonDisabled><i class="fa fa-2x" ng-class="{\'fa-play\':!(status==\'playing\'),\'fa-pause\':(status==\'playing\')}"></i></button> <button class="btn btn btn-default" ng-click=stopTv()><i class="fa fa-stop fa-2x"></i></button> <button class="btn btn btn-default" ng-if=isPlaylist ng-disabled="index == files.length-1" ng-click=goForwardTv()><i class="fa fa-forward fa-2x"></i></button></div></li></ul></div></div>'), e.put("/app/templates/uploadPopup.html", '<div class=modal-content><div class="modal-header bg-default"><h4 class=modal-title><span>{{msg.title}}&nbsp;</span><span translate=translate>Status</span></h4></div><div class=modal-body><h4>{{msg.msg}}</h4><small class=text-danger>{{msg.error}}</small><div class=bg-default ng-if="!msg.dismiss &amp;&amp; adminServer"><hr><h5 translate=translate>Select Categories for the files</h5><categories class=categories selected-labels=upload.selectedLabels labels=upload.labels></categories><br><form class="form-inline row"><div class="form-group col-sm-6"><div class=input-group><input class="form-control input-sm" ng-model=newLabel.name placeholder="{{\'add new\' || translate}}" required><div class=input-group-btn><button class="btn btn-success btn-sm" type=submit ng-click=addLabel()><i class="fa fa-plus"></i></button></div></div></div></form><div class=text-danger ng-if=msg.error ng-bind=msg.error></div></div></div><div class=modal-footer><button class="btn btn-default" ng-click=upload.abort() ng-show="msg.btnTxt == \'Uploading\' " translate=translate>Cancel</button> <button class="btn btn-primary" ng-click=upload.modalOk() ng-bind=msg.btnTxt ng-disabled=msg.disable></button></div></div>'), e.put("/app/templates/wifiNetworks.html", '<div class=modal-content><div class=modal-header><h4><span>Available Networks</span><span class=pull-right><buttton class="btn btn-primary btn-sm" ng-click=close()>Close</buttton></span></h4></div><div class=modal-body><h4 ng-if=modalmsg>{{modalmsg}}</h4><ul class=list-unstyled><li ng-repeat="entry in networks"><button class="btn btn-default btn-block" ng-click=seleted(entry)>{{entry}}</button></li></ul></div></div>')
}]);