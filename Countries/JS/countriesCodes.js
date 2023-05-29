// export 
const officialNames =
[
	{"official": "Andorra", "code": "AD"},
	{"official": "United Arab Emirates", "code": "AE"},
	{"official": "Afghanistan", "code": "AF"},
	{"official": "Antigua and Barbuda", "code": "AG"},
	{"official": "Anguilla", "code": "AI"},
	{"official": "Albania", "code": "AL"},
	{"official": "Armenia", "code": "AM"},
	{"official": "Netherlands Antilles", "code": "AN"},
	{"official": "Angola", "code": "AO"},
	{"official": "Antarctica", "code": "AQ"},
	{"official": "Argentina", "code": "AR"},
	{"official": "American Samoa", "code": "AS"},
	{"official": "Austria", "code": "AT"},
	{"official": "Australia", "code": "AU"},
	{"official": "Aruba", "code": "AW"},
	{"official": "Åland Islands", "code": "AX"},
	{"official": "Azerbaijan", "code": "AZ"},
	{"official": "Bosnia and Herzegovina", "code": "BA"},
	{"official": "Barbados", "code": "BB"},
	{"official": "Bangladesh", "code": "BD"},
	{"official": "Belgium", "code": "BE"},
	{"official": "Burkina Faso", "code": "BF"},
	{"official": "Bulgaria", "code": "BG"},
	{"official": "Bahrain", "code": "BH"},
	{"official": "Burundi", "code": "BI"},
	{"official": "Benin", "code": "BJ"},
	{"official": "Saint Barthélemy", "code": "BL"},
	{"official": "Bermuda", "code": "BM"},
	{"official": "Brunei Darussalam", "code": "BN"},
	{"official": "Bolivia", "code": "BO"},
	{"official": "Bonaire, Sint Eustatius and Saba", "code": "BQ"},
	{"official": "Brazil", "code": "BR"},
	{"official": "Bahamas", "code": "BS"},
	{"official": "Bhutan", "code": "BT"},
	{"official": "Burma", "code": "BU"},
	{"official": "Bouvet Island", "code": "BV"},
	{"official": "Botswana", "code": "BW"},
	{"official": "Belarus", "code": "BY"},
	{"official": "Belize", "code": "BZ"},
	{"official": "Canada", "code": "CA"},
	{"official": "Cocos Islands", "code": "CC"},
	{"official": "Congo, Democratic Republic of the", "code": "CD"},
	{"official": "Central African Republic", "code": "CF"},
	{"official": "Congo", "code": "CG"},
	{"official": "Switzerland", "code": "CH"},
	{"official": "Côte d&", "code": "CI"},
	{"official": "Cook Islands", "code": "CK"},
	{"official": "Chile", "code": "CL"},
	{"official": "Cameroon", "code": "CM"},
	{"official": "China", "code": "CN"},
	{"official": "Colombia", "code": "CO"},
	{"official": "Costa Rica", "code": "CR"},
	{"official": "Serbia and Montenegro", "code": "CS"},
	{"official": "Cuba", "code": "CU"},
	{"official": "Cabo Verde", "code": "CV"},
	{"official": "Curaçao", "code": "CW"},
	{"official": "Christmas Island", "code": "CX"},
	{"official": "Cyprus", "code": "CY"},
	{"official": "Czechia", "code": "CZ"},
	{"official": "Germany", "code": "DE"},
	{"official": "Djibouti", "code": "DJ"},
	{"official": "Denmark", "code": "DK"},
	{"official": "Dominica", "code": "DM"},
	{"official": "Dominican Republic", "code": "DO"},
	{"official": "Algeria", "code": "DZ"},
	{"official": "Ecuador", "code": "EC"},
	{"official": "Estonia", "code": "EE"},
	{"official": "Egypt", "code": "EG"},
	{"official": "Western Sahara", "code": "EH"},
	{"official": "Eritrea", "code": "ER"},
	{"official": "Spain", "code": "ES"},
	{"official": "Ethiopia", "code": "ET"},
	{"official": "Finland", "code": "FI"},
	{"official": "Fiji", "code": "FJ"},
	{"official": "Falkland Islands", "code": "FK"},
	{"official": "Micronesia", "code": "FM"},
	{"official": "Faroe Islands", "code": "FO"},
	{"official": "France", "code": "FR"},
	{"official": "Gabon", "code": "GA"},
	{"official": "United Kingdom of Great Britain and Northern Ireland", "code": "GB"},
	{"official": "Grenada", "code": "GD"},
	{"official": "Georgia", "code": "GE"},
	{"official": "French Guiana", "code": "GF"},
	{"official": "Guernsey", "code": "GG"},
	{"official": "Ghana", "code": "GH"},
	{"official": "Gibraltar", "code": "GI"},
	{"official": "Greenland", "code": "GL"},
	{"official": "Gambia", "code": "GM"},
	{"official": "Guinea", "code": "GN"},
	{"official": "Guadeloupe", "code": "GP"},
	{"official": "Equatorial Guinea", "code": "GQ"},
	{"official": "Greece", "code": "GR"},
	{"official": "South Georgia and the South Sandwich Islands", "code": "GS"},
	{"official": "Guatemala", "code": "GT"},
	{"official": "Guam", "code": "GU"},
	{"official": "Guinea-Bissau", "code": "GW"},
	{"official": "Guyana", "code": "GY"},
	{"official": "Hong Kong", "code": "HK"},
	{"official": "Heard Island and McDonald Islands", "code": "HM"},
	{"official": "Honduras", "code": "HN"},
	{"official": "Croatia", "code": "HR"},
	{"official": "Haiti", "code": "HT"},
	{"official": "Hungary", "code": "HU"},
	{"official": "Indonesia", "code": "ID"},
	{"official": "Ireland", "code": "IE"},
	{"official": "Israel", "code": "IL"},
	{"official": "Isle of Man", "code": "IM"},
	{"official": "India", "code": "IN"},
	{"official": "British Indian Ocean Territory", "code": "IO"},
	{"official": "Iraq", "code": "IQ"},
	{"official": "Iran", "code": "IR"},
	{"official": "Iceland", "code": "IS"},
	{"official": "Italy", "code": "IT"},
	{"official": "Jersey", "code": "JE"},
	{"official": "Jamaica", "code": "JM"},
	{"official": "Jordan", "code": "JO"},
	{"official": "Japan", "code": "JP"},
	{"official": "Kenya", "code": "KE"},
	{"official": "Kyrgyzstan", "code": "KG"},
	{"official": "Cambodia", "code": "KH"},
	{"official": "Kiribati", "code": "KI"},
	{"official": "Comoros", "code": "KM"},
	{"official": "Saint Kitts and Nevis", "code": "KN"},
	{"official": "Lebanon", "code": "LB"},
	{"official": "Korea", "code": "LT"},
	{"official": "Luxembourg", "code": "LU"},
	{"official": "Latvia", "code": "LV"},
	{"official": "Libya", "code": "LY"},
	{"official": "Morocco", "code": "MA"},
	{"official": "Monaco", "code": "MC"},
	{"official": "Moldova", "code": "MD"},
	{"official": "Montenegro", "code": "ME"},
	{"official": "Saint Martin", "code": "MF"},
	{"official": "Madagascar", "code": "MG"},
	{"official": "Marshall Islands", "code": "MH"},
	{"official": "North Macedonia", "code": "MK"},
	{"official": "Mali", "code": "ML"},
	{"official": "Myanmar", "code": "MM"},
	{"official": "Mongolia", "code": "MN"},
	{"official": "Macao", "code": "MO"},
	{"official": "Northern Mariana Islands", "code": "MP"},
	{"official": "Martinique", "code": "MQ"},
	{"official": "Mauritania", "code": "MR"},
	{"official": "Montserrat", "code": "MS"},
	{"official": "Malta", "code": "MT"},
	{"official": "Mauritius", "code": "MU"},
	{"official": "Maldives", "code": "MV"},
	{"official": "Malawi", "code": "MW"},
	{"official": "Mexico", "code": "MX"},
	{"official": "Malaysia", "code": "MY"},
	{"official": "Mozambique", "code": "MZ"},
	{"official": "Namibia", "code": "NA"},
	{"official": "New Caledonia", "code": "NC"},
	{"official": "Niger", "code": "NE"},
	{"official": "Norfolk Island", "code": "NF"},
	{"official": "Nigeria", "code": "NG"},
	{"official": "Nicaragua", "code": "NI"},
	{"official": "Netherlands, Kingdom of the", "code": "NL"},
	{"official": "Norway", "code": "NO"},
	{"official": "Nepal", "code": "NP"},
	{"official": "Nauru", "code": "NR"},
	{"official": "Neutral Zone", "code": "NT"},
	{"official": "Niue", "code": "NU"},
	{"official": "New Zealand", "code": "NZ"},
	{"official": "Oman", "code": "OM"},
	{"official": "Panama", "code": "PA"},
	{"official": "Peru", "code": "PE"},
	{"official": "French Polynesia", "code": "PF"},
	{"official": "Papua New Guinea", "code": "PG"},
	{"official": "Philippines", "code": "PH"},
	{"official": "Pakistan", "code": "PK"},
	{"official": "Poland", "code": "PL"},
	{"official": "Saint Pierre and Miquelon", "code": "PM"},
	{"official": "Pitcairn", "code": "PN"},
	{"official": "Puerto Rico", "code": "PR"},
	{"official": "Palestine, State of", "code": "PS"},
	{"official": "Portugal", "code": "PT"},
	{"official": "Palau", "code": "PW"},
	{"official": "Paraguay", "code": "PY"},
	{"official": "Qatar", "code": "QA"},
	{"official": "Réunion", "code": "RE"},
	{"official": "Romania", "code": "RO"},
	{"official": "Serbia", "code": "RS"},
	{"official": "Russian Federation", "code": "RU"},
	{"official": "Rwanda", "code": "RW"},
	{"official": "Saudi Arabia", "code": "SA"},
	{"official": "Solomon Islands", "code": "SB"},
	{"official": "Seychelles", "code": "SC"},
	{"official": "Sudan", "code": "SD"},
	{"official": "Sweden", "code": "SE"},
	{"official": "Finland", "code": "SF"},
	{"official": "Singapore", "code": "SG"},
	{"official": "Saint Helena, Ascension and Tristan da Cunha", "code": "SH"},
	{"official": "Slovenia", "code": "SI"},
	{"official": "Svalbard and Jan Mayen", "code": "SJ"},
	{"official": "Slovakia", "code": "SK"},
	{"official": "Sierra Leone", "code": "SL"},
	{"official": "San Marino", "code": "SM"},
	{"official": "Senegal", "code": "SN"},
	{"official": "Somalia", "code": "SO"},
	{"official": "Suriname", "code": "SR"},
	{"official": "South Sudan", "code": "SS"},
	{"official": "Sao Tome and Principe", "code": "ST"},
	{"official": "El Salvador", "code": "SV"},
	{"official": "Sint Maarten", "code": "SX"},
	{"official": "Syrian Arab Republic", "code": "SY"},
	{"official": "Eswatini", "code": "SZ"},
	{"official": "Turks and Caicos Islands", "code": "TC"},
	{"official": "Chad", "code": "TD"},
	{"official": "French Southern Territories", "code": "TF"},
	{"official": "Togo", "code": "TG"},
	{"official": "Thailand", "code": "TH"},
	{"official": "Tajikistan", "code": "TJ"},
	{"official": "Tokelau", "code": "TK"},
	{"official": "Timor-Leste", "code": "TL"},
	{"official": "Turkmenistan", "code": "TM"},
	{"official": "Tunisia", "code": "TN"},
	{"official": "Tonga", "code": "TO"},
	{"official": "East Timor", "code": "TP"},
	{"official": "Türkiye", "code": "TR"},
	{"official": "Trinidad and Tobago", "code": "TT"},
	{"official": "Tuvalu", "code": "TV"},
	{"official": "Taiwan, Province of China", "code": "TW"},
	{"official": "Tanzania, United Republic of", "code": "TZ"},
	{"official": "Ukraine", "code": "UA"},
	{"official": "Uganda", "code": "UG"},
	{"official": "United Kingdom", "code": "UK"},
	{"official": "United States Minor Outlying Islands", "code": "UM"},
	{"official": "United Nations", "code": "UN"},
	{"official": "United States of America", "code": "US"},
	{"official": "Uruguay", "code": "UY"},
	{"official": "Uzbekistan", "code": "UZ"},
	{"official": "Holy See", "code": "VA"},
	{"official": "Saint Vincent and the Grenadines", "code": "VC"},
	{"official": "Venezuela", "code": "VE"},
	{"official": "Virgin Islands", "code": "VG"},
	{"official": "Virgin Islands", "code": "VI"},
	{"official": "Viet Nam", "code": "VN"},
	{"official": "Vanuatu", "code": "VU"},
	{"official": "Wallis and Futuna", "code": "WF"},
	{"official": "Grenada", "code": "WG"},
	{"official": "Saint Lucia", "code": "WL"},
	{"official": "World Intellectual Property Organization", "code": "WO"},
	{"official": "Samoa", "code": "WS"},
	{"official": "Saint Vincent", "code": "WV"},
	{"official": "Yemen", "code": "YE"},
	{"official": "Mayotte", "code": "YT"},
	{"official": "Yugoslavia", "code": "YU"},
	{"official": "Venezuela", "code": "YV"},
	{"official": "South Africa", "code": "ZA"},
	{"official": "Zambia", "code": "ZM"},
	{"official": "Zaire", "code": "ZR"},
	{"official": "Zimbabwe", "code": "ZW"}
];