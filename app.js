// ===== Drug Database =====
const DRUGS = [
  { sno: 1, form: "CAPSULE", name: "Clindamycin 300Mg" },
  { sno: 2, form: "CAPSULE", name: "Calcitiriol Ip 0.25Mcg Calcium Carbonate Ip 625Mg (Eq. To Elemental Calcium 250Mg) Vitamin K2-7 45Mcg Approved Colour Used In Softgel" },
  { sno: 3, form: "CAPSULE", name: "DOXYCYCLINE 100mg" },
  { sno: 4, form: "CAPSULE", name: "INDOMETHACIN 25MG" },
  { sno: 5, form: "CAPSULE", name: "NIFEDIPINE 10mg" },
  { sno: 6, form: "CAPSULE", name: "OMEPRAZOLE 20mg" },
  { sno: 7, form: "CAPSULE", name: "PRE AND PROBIOTIC" },
  { sno: 8, form: "CAPSULE", name: "VITAMIN D3 60000IU Soft Gelatin" },
  { sno: 9, form: "CREAM", name: "BETAMETHASONE 0.1% 15GM" },
  { sno: 10, form: "CREAM", name: "CLOTRIMAZOLE 2%" },
  { sno: 11, form: "CREAM", name: "FRAMYCETIN SULPHATE 1%" },
  { sno: 12, form: "CREAM", name: "Fusidic Acid 2%W/W 15Gm" },
  { sno: 13, form: "CREAM", name: "PERMENTHRIN 5% W/W" },
  { sno: 14, form: "CREAM", name: "Luliconazole 1% W/W 10Gm" },
  { sno: 15, form: "ORAL DROP", name: "Vitamin D3 (Cholecalciferol) 200IU 5 Ml" },
  { sno: 16, form: "ORAL DROP", name: "Multivitamin drop" },
  { sno: 17, form: "ORAL DROP", name: "DICYCLOMINE 10MG/ML" },
  { sno: 18, form: "ORAL DROP", name: "Zinc Gluconate 20MG/ML" },
  { sno: 19, form: "EAR DROP", name: "CIPROFLOXACIN 0.6% 5ML" },
  { sno: 20, form: "EAR DROP", name: "WAX DISSOLVING" },
  { sno: 21, form: "EYE DROP", name: "CIPROFLOXACIN" },
  { sno: 22, form: "EYE DROP", name: "CARBOXYMETHYLCELLULOSE SODIUM 1% 5ML" },
  { sno: 23, form: "EYE DROP", name: "Moxifloxacin Loteprednol 5Ml" },
  { sno: 24, form: "GEL", name: "DICLOFENAC SODIUM 1% W/W" },
  { sno: 25, form: "Dental Paste", name: "Dental Paste Potassium Nitrate 5% Sodium Monoflourophosphate 0.7% Per 50Gm Tube" },
  { sno: 26, form: "GARGLE", name: "Gargle Povidone-Iodine 2.0%w/v Germicide" },
  { sno: 27, form: "INHALER", name: "BUDESONIDE MDI 100MCG" },
  { sno: 28, form: "INHALER", name: "SALBUTAMOL AEROSOL 200MTD 100MCG" },
  { sno: 29, form: "INHALER", name: "SALMETEROL 25MCG & FLUTICASONE 250MCG" },
  { sno: 30, form: "SACHET", name: "DEXTROSE MONOHYDRATE" },
  { sno: 31, form: "SACHET", name: "ORS" },
  { sno: 32, form: "SYRUP", name: "Amboxol Hcl 15Mg Terbutalin Sulphate 1.5Mg Guaphensin 50Mg Menthol 2.5Mg /5Ml 100Ml" },
  { sno: 33, form: "SYRUP", name: "CYPROHEPTADINE HCL & TRICHOLINE CITRATE" },
  { sno: 34, form: "SYRUP", name: "IRON & FOLIC ACID" },
  { sno: 35, form: "SYRUP", name: "LEVOCETIRIZINE 2.5MG/5ML" },
  { sno: 36, form: "SYRUP", name: "LACTULOSE SOLUTION 10GM/15ML 100ML" },
  { sno: 37, form: "SYRUP", name: "Liver Tonic With Antacid, Alkaliser & Enzymatic Actions 225Ml" },
  { sno: 38, form: "SYRUP", name: "ONDANSETRON 2MG/5ML" },
  { sno: 39, form: "SYRUP", name: "Paracetamol250mg+Phenylephrine Hydrochloride5mg+Cetirizine Hydrochloride2.5mg+Sodium Citrate25mg+Dextromethorphan Hydrobromide5mg+Menthol1mg" },
  { sno: 40, form: "SYRUP", name: "Disodium Hydrogen Citrate 1.4Gm 100Ml" },
  { sno: 41, form: "SUSPENSION", name: "ALBENDAZOLE 200MG/5ML" },
  { sno: 42, form: "SUSPENSION", name: "AMOXYCILLIN POTASSIUM CLAVULANATE" },
  { sno: 43, form: "SUSPENSION", name: "AZITHROMYCIN 100MG/5ML" },
  { sno: 44, form: "SUSPENSION", name: "CALCIUM WITH D3" },
  { sno: 45, form: "SUSPENSION", name: "CEFIXIME 100MG/5ML" },
  { sno: 46, form: "SUSPENSION", name: "METRONIDAZOLE" },
  { sno: 47, form: "SUSPENSION", name: "PARACETAMOLE 250mg/5ml" },
  { sno: 48, form: "SUSPENSION", name: "POTASSIUM CITRATE + CITRIC ACID" },
  { sno: 49, form: "SUSPENSION", name: "RANITIDINE 75mg/5ml" },
  { sno: 50, form: "SUSPENSION", name: "SUCRALFATE 200MG" },
  { sno: 51, form: "TABLET", name: "ACECLOFENAC 100mg" },
  { sno: 52, form: "TABLET", name: "AMLODIPINE 5MG" },
  { sno: 53, form: "TABLET", name: "ACETAZOLAMIDE 250MG" },
  { sno: 54, form: "TABLET", name: "AMOXYCILLINE TRIHYDRATE CLAVULANATE 375MG" },
  { sno: 55, form: "TABLET", name: "AMOXYCILLINE TRIHYDRATE CLAVULANATE 625MG" },
  { sno: 56, form: "TABLET", name: "ASCORBIC ACID 500mg" },
  { sno: 57, form: "TABLET", name: "ASPIRIN 75mg" },
  { sno: 58, form: "TABLET", name: "ATORAVASTATIN 10mg" },
  { sno: 59, form: "TABLET", name: "ALBENDAZOLE 400mg" },
  { sno: 60, form: "TABLET", name: "ANTACID" },
  { sno: 61, form: "TABLET", name: "AZITHROMYCIN 500MG" },
  { sno: 62, form: "TABLET", name: "B Complex" },
  { sno: 63, form: "TABLET", name: "BROMHEXIN 4mg" },
  { sno: 64, form: "TABLET", name: "CALCIUM WITH D3" },
  { sno: 65, form: "TABLET", name: "CIPROFLOXACIN 500MG" },
  { sno: 66, form: "TABLET", name: "CLONAZEPAM 0.25 MG" },
  { sno: 67, form: "TABLET", name: "CLOBAZAM 10MG" },
  { sno: 68, form: "TABLET", name: "CLOPIDOGREL 75MG" },
  { sno: 69, form: "TABLET", name: "CEFIXIME 200mg" },
  { sno: 70, form: "TABLET", name: "CINNARIZINE 25MG" },
  { sno: 71, form: "TABLET", name: "Deflazacort 6mg" },
  { sno: 72, form: "TABLET", name: "DOXYLAMINE SUCCINATE WITH PYRIDOXINE HCL" },
  { sno: 73, form: "TABLET", name: "DICLOFENAC SR 100MG" },
  { sno: 74, form: "TABLET", name: "DICYCLOMINE 10mg" },
  { sno: 75, form: "TABLET", name: "DULOXETINE 20MG" },
  { sno: 76, form: "TABLET", name: "Diacerein (50Mg) Glucosamine Sulfate Potassium Chloride (750Mg) Methyl Sulfonyl Methane (250Mg)" },
  { sno: 77, form: "TABLET", name: "ESCITALOPRAM 10MG" },
  { sno: 78, form: "TABLET", name: "ETHAMSYLATE 500mg" },
  { sno: 79, form: "TABLET", name: "ETOPHYLLINE 231mg + THEOPHYLLINE 69mg" },
  { sno: 80, form: "TABLET", name: "FOLIC ACID 5MG" },
  { sno: 81, form: "TABLET", name: "FLUCONAZOLE 150MG" },
  { sno: 82, form: "TABLET", name: "FLUVOXAMINE MALEATE 100MG" },
  { sno: 83, form: "TABLET", name: "FRUSEMIDE 40MG" },
  { sno: 84, form: "TABLET", name: "Gabapentin 400 Mg Nortriptyline HCL 10 Mg" },
  { sno: 85, form: "TABLET", name: "GLIMEPRIDE 1mg" },
  { sno: 86, form: "TABLET", name: "Hydroxychloroquine Sulphate 400 mg" },
  { sno: 87, form: "TABLET", name: "IBUPROFEN 200mg" },
  { sno: 88, form: "TABLET", name: "Itraconazole 100Mg Terbinafine 100Mg" },
  { sno: 89, form: "TABLET", name: "IRON FOLIC ACID" },
  { sno: 90, form: "TABLET", name: "IVERMECTIN 12MG" },
  { sno: 91, form: "TABLET", name: "LEVOFLOXACIN 500mg" },
  { sno: 92, form: "TABLET", name: "LEVOCETIRIZINE 5mg" },
  { sno: 93, form: "TABLET", name: "LEVOTHYROXINE SODIUM 50 mcg" },
  { sno: 94, form: "TABLET", name: "Levetiracetam 500 mg" },
  { sno: 95, form: "TABLET", name: "Lorazepam 2 Mg" },
  { sno: 96, form: "TABLET", name: "MEDROXYPROGESTRONE 10MG" },
  { sno: 97, form: "TABLET", name: "METRONIDAZOLE 400mg" },
  { sno: 98, form: "TABLET", name: "METFORMIN 500mg" },
  { sno: 99, form: "TABLET", name: "MONTELIKAST 10MG" },
  { sno: 100, form: "TABLET", name: "NAPROXEN 500MG" },
  { sno: 101, form: "TABLET", name: "NITROFURANTOIN 100MG" },
  { sno: 102, form: "TABLET", name: "NORETHISTERONE 5MG" },
  { sno: 103, form: "TABLET", name: "OFLAXACIN 200mg + ORNIDAZOLE 500MG" },
  { sno: 104, form: "TABLET", name: "OFLAXACIN 200mg" },
  { sno: 105, form: "TABLET", name: "ONDANSETRON 4MG" },
  { sno: 106, form: "TABLET", name: "OLANZAPINE 10mg" },
  { sno: 107, form: "TABLET", name: "PARACETAMOL 500mg" },
  { sno: 108, form: "TABLET", name: "Paracetamol I.P. 325 mg Caffeine I.P. 32mg Carisoprodol U.S.P. 175 mg" },
  { sno: 109, form: "TABLET", name: "PREDENISOLONE 10MG" },
  { sno: 110, form: "TABLET", name: "PREDENISOLONE 20MG" },
  { sno: 111, form: "TABLET", name: "PROPRANOLOL 20MG" },
  { sno: 112, form: "TABLET", name: "SALBUTAMOL 4mg" },
  { sno: 113, form: "TABLET", name: "Sertraline Hydrochloride 50 Mg" },
  { sno: 114, form: "TABLET", name: "SODIUM VALPROATE 500MG" },
  { sno: 115, form: "TABLET", name: "TRAMADOL HCL 50MG" },
  { sno: 116, form: "TABLET", name: "TYPSIN, BROMELAIN, RUTOSIDE & DICLOFENAC SODIUM" },
  { sno: 117, form: "TABLET", name: "URSODEOXYCHOLIC ACID 300MG" },
  { sno: 118, form: "TABLET", name: "VILDAGLIPTIN 50MG" },
  { sno: 119, form: "TABLET", name: "ZINC SULPHATE" },
  { sno: 120, form: "INJECTION", name: "ACYCLOVIR 400MG" },
  { sno: 121, form: "INJECTION", name: "ADRENALINE BITARTRATE" },
  { sno: 122, form: "INJECTION", name: "AMINOPHYLLIN 25MG/ML" },
  { sno: 123, form: "INJECTION", name: "AMIODARONE 50MG/ML" },
  { sno: 124, form: "INJECTION", name: "AMPICILLIN SODIUM" },
  { sno: 125, form: "INJECTION", name: "AMIKACIN 500MG" },
  { sno: 126, form: "INJECTION", name: "AMOXICILLIN TRIHYDRATE OR SODIUM POTASSIUM CLAVULANATE 1.2G DRY POWDER 10ML VIAL" },
  { sno: 127, form: "INJECTION", name: "ANTI SERUM POLYVALENT SNAKE VENOM 10ML" },
  { sno: 128, form: "INJECTION", name: "ANTI RABIES IMMUNOGLOBULIN 300IU/ML 5ML" },
  { sno: 129, form: "INJECTION", name: "ATROPIN 0.6MG/ML" },
  { sno: 130, form: "INJECTION", name: "ATRACURIUM BESYLATE :10 mg/ml" },
  { sno: 131, form: "INJECTION", name: "ARTESUNATE 60MG" },
  { sno: 132, form: "INJECTION", name: "BETAMETHASONE 4MG/ML" },
  { sno: 133, form: "INJECTION", name: "BUPIVECAINE HCL 0.5% W/V 20ML" },
  { sno: 134, form: "INJECTION", name: "CEFOTAXIM 1GM" },
  { sno: 135, form: "INJECTION", name: "CEFOPERAZONE SALBACTUM 1GM" },
  { sno: 136, form: "INJECTION", name: "CEFOPERAZONE SODIUM 1GM" },
  { sno: 137, form: "INJECTION", name: "CEFTAZIDIME & TAZOBACTEM 1.125G" },
  { sno: 138, form: "INJECTION", name: "CEFTRIAXONE 1GM" },
  { sno: 139, form: "INJECTION", name: "CEFTRIAXONE SODIUM+ SALBACTAM SODIUM 1.5GM" },
  { sno: 140, form: "INJECTION", name: "CEFUROXIME SODIUM 1.5GM" },
  { sno: 141, form: "INJECTION", name: "CIPROFLOXACIN IV 100ML" },
  { sno: 142, form: "INJECTION", name: "CLINDAMYCINE 150MG/ML" },
  { sno: 143, form: "INJECTION", name: "DEXAMETHASONE 4MG/ML" },
  { sno: 144, form: "INJECTION", name: "DEXTROSE 10% 500ML" },
  { sno: 145, form: "INJECTION", name: "DEXTROSE 5% 500ML" },
  { sno: 146, form: "INJECTION", name: "DEXTROSE 25% 100ML" },
  { sno: 147, form: "INJECTION", name: "DIAZEPAM 5MG/ML" },
  { sno: 148, form: "INJECTION", name: "DICLOFENAC 75MG/ML" },
  { sno: 149, form: "INJECTION", name: "DNS 500ML" },
  { sno: 150, form: "INJECTION", name: "DNS 0.45%" },
  { sno: 151, form: "INJECTION", name: "DOBUTAMINE HCL" },
  { sno: 152, form: "INJECTION", name: "DOPAMINE 40MG/ML" },
  { sno: 153, form: "INJECTION", name: "ENOXAPARIN" },
  { sno: 154, form: "INJECTION", name: "ETHAMSYLATE 125MG/ML" },
  { sno: 155, form: "INJECTION", name: "FRUSEMIDE 10MG/2ML" },
  { sno: 156, form: "INJECTION", name: "GENTAMICIN 40MG/ML" },
  { sno: 157, form: "INJECTION", name: "GLYCOPYRROLATE 0.2MG/ML" },
  { sno: 158, form: "INJECTION", name: "HALOPERIDOL LACTATE 5MG/ML" },
  { sno: 159, form: "INJECTION", name: "HEPARIN SODIUM 5000IU/ML" },
  { sno: 160, form: "INJECTION", name: "HUMAN ALBUMIN 20G/100ML" },
  { sno: 161, form: "INJECTION", name: "HYDROCORTISONE 100MG" },
  { sno: 162, form: "INJECTION", name: "HYDROXYPROGETERONE CAPROATE 250MG/ML" },
  { sno: 163, form: "INJECTION", name: "HYOSCINE BUTYLEBROMIDE 20MG/ML" },
  { sno: 164, form: "INJECTION", name: "IMIPENEM 500MG" },
  { sno: 165, form: "INJECTION", name: "INSULIN GALRGINE 100IU/ML" },
  { sno: 166, form: "INJECTION", name: "INSULIN 30%70% 40IU/ML" },
  { sno: 167, form: "INJECTION", name: "IRON SUCROSE 20MG/ML" },
  { sno: 168, form: "INJECTION", name: "ISOLYTE M 500ML" },
  { sno: 169, form: "INJECTION", name: "ISOLYTE P 500ML" },
  { sno: 170, form: "INJECTION", name: "ISOFLURANE 100ML" },
  { sno: 171, form: "INJECTION", name: "KETAMINE 50MG/ML" },
  { sno: 172, form: "INJECTION", name: "KETAMINE 10MG/ML" },
  { sno: 173, form: "INJECTION", name: "LABETALOL 5MG/ML" },
  { sno: 174, form: "INJECTION", name: "LINEZOLID 600MG/300ML" },
  { sno: 175, form: "INJECTION", name: "LEVOFLOXACIN INFUSION 500mg/100ML" },
  { sno: 176, form: "INJECTION", name: "LIGNOCAIN + ADRENALINE 20MG/ML" },
  { sno: 177, form: "INJECTION", name: "LIGNOCAIN 2%" },
  { sno: 178, form: "INJECTION", name: "L-ORNITHINE L-ASPERATE" },
  { sno: 179, form: "INJECTION", name: "MANNITOL 20% W/V" },
  { sno: 180, form: "INJECTION", name: "MAGNESIUM SULPHATE 50% W/V 2ML" },
  { sno: 181, form: "INJECTION", name: "MEROPENAM 1GM" },
  { sno: 182, form: "INJECTION", name: "MEPHENTERMINE 30MG/ML" },
  { sno: 183, form: "INJECTION", name: "METHYLCOBALAMIN 500MCG/ML" },
  { sno: 184, form: "INJECTION", name: "Methylcobalamin-1500Mcg, Pyridoxine Hydrochloride-100Mg, Nicotinamide-100Mg Injection/2Ml" },
  { sno: 185, form: "INJECTION", name: "METHYLPREDNISOLONE 16MG" },
  { sno: 186, form: "INJECTION", name: "METRONIDAZOLE IV 100ML" },
  { sno: 187, form: "INJECTION", name: "MIDAZOLAM HCL 1MG/ML" },
  { sno: 188, form: "INJECTION", name: "NEOSTIGMINE METHYL SULPHATE" },
  { sno: 189, form: "INJECTION", name: "NITROGLYCERIN 50MG/10ML" },
  { sno: 190, form: "INJECTION", name: "NORADRENALINE 2MG/ML" },
  { sno: 191, form: "INJECTION", name: "ONDANSETRON 4MG/2ML" },
  { sno: 192, form: "INJECTION", name: "OXYTOCIN 5IU/ML" },
  { sno: 193, form: "INJECTION", name: "PARACETAMOL 150MG/ML" },
  { sno: 194, form: "INJECTION", name: "PARACETAMOL INFUSION 100ML" },
  { sno: 195, form: "INJECTION", name: "PANTOPRAZOLE 40MG" },
  { sno: 196, form: "INJECTION", name: "PENTAZOCINE LACTATE 300MG/ML" },
  { sno: 197, form: "INJECTION", name: "PHENIRAMINE 22.75MG" },
  { sno: 198, form: "INJECTION", name: "PHENYTOIN" },
  { sno: 199, form: "INJECTION", name: "PHYTOMENADIODE VIT.K1 1MG/ML" },
  { sno: 200, form: "INJECTION", name: "PIPRACILLIN TAZOBACTUM 4.5GM" },
  { sno: 201, form: "INJECTION", name: "POTASSIUM CHLORIDE 10ML" },
  { sno: 202, form: "INJECTION", name: "PROPOFOL 10MG/ML" },
  { sno: 203, form: "INJECTION", name: "RANITIDINE 25MG/ML" },
  { sno: 204, form: "INJECTION", name: "RINGER LACTATE 500ML" },
  { sno: 205, form: "INJECTION", name: "SODIUM CHLORIDE 0.9% IV 100ML" },
  { sno: 206, form: "INJECTION", name: "SODIUM CHLORIDE 0.9% IV 500ML" },
  { sno: 207, form: "INJECTION", name: "SODIUM BICORBONATE 7.5%W/V 10ML" },
  { sno: 208, form: "INJECTION", name: "SODIUM VALPROATE 100MG/ML" },
  { sno: 209, form: "INJECTION", name: "STREPTOKINASE 1500000IU" },
  { sno: 210, form: "INJECTION", name: "SUCCINYLECHOLINE CHLORIDE 50MG/ML" },
  { sno: 211, form: "INJECTION", name: "TENECTEPLASE 40MG" },
  { sno: 212, form: "INJECTION", name: "TETANUS VACCINE" },
  { sno: 213, form: "INJECTION", name: "THEOPHYLLIN & ETOPHYLLIN" },
  { sno: 214, form: "INJECTION", name: "THIAMINE HCL" },
  { sno: 215, form: "INJECTION", name: "THIOPENTONE SODIUM 1GM" },
  { sno: 216, form: "INJECTION", name: "TRAMADOL 50MG/ML" },
  { sno: 217, form: "INJECTION", name: "TRENEXAMIC ACID 500MG/5ML" },
  { sno: 218, form: "INJECTION", name: "TRIAMCINOLONE ACETONIDE 40MG/ML" },
  { sno: 219, form: "INJECTION", name: "TOSEMIDE 10MG/ML" },
  { sno: 220, form: "INJECTION", name: "VACCINE ANTI RABIES" },
  { sno: 221, form: "INJECTION", name: "VANCOMYCIN 1G" },
  { sno: 222, form: "INJECTION", name: "VASOPRESSIN" },
  { sno: 223, form: "INJECTION", name: "VECURONIUM 10MG" },
  { sno: 224, form: "INJECTION", name: "Vitamin D3 1ML" },
  { sno: 225, form: "INJECTION", name: "WATER FOR INJECTION" },
  { sno: 226, form: "GEL", name: "LIGNOCAINE 2%W/V" },
  { sno: 227, form: "CREAM", name: "SILVER SULFADIAZINE 200GM" },
  { sno: 228, form: "SOLUTION", name: "POVIDONE IODINE 5% 500ML" },
  { sno: 229, form: "RESPULE", name: "BUDESONIDE 2ML" },
  { sno: 230, form: "TABLET", name: "BISACODYL 5MG" },
  { sno: 231, form: "TABLET", name: "DILTIAZEM HCL 30MG" },
  { sno: 232, form: "TABLET", name: "DIGOXIN 0.25MG" },
  { sno: 233, form: "TABLET", name: "ISOSORBIDE 5MG" },
  { sno: 234, form: "TABLET", name: "Isosorbide Mononitrate 20Mg" },
  { sno: 235, form: "OTHER", name: "GAUZE DRESSING (CHLORHEXIDINE)" },
  { sno: 236, form: "OTHER", name: "ENEMA GLYCERIN SODIUM CHLORIDE 15% 100ML" }
];

// ===== Category Icons (SVGs) =====
const FORM_ICONS = {
  'CAPSULE':      '<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="3" y="10" width="18" height="8" rx="4"/><path d="M7 10v8"/></svg>',
  'TABLET':       '<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="8"/><line x1="12" y1="4" x2="12" y2="20"/></svg>',
  'INJECTION':    '<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="m18 2 4 4"/><path d="m17 7 3-3"/><path d="M19 9 8.7 19.3c-1 1-2.5 1-3.4 0l-.6-.6c-1-1-1-2.5 0-3.4L15 5"/><path d="m9 11 4 4"/><path d="m5 19-3 3"/><path d="m14 4 6 6"/></svg>',
  'SYRUP':        '<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="7" y="10" width="10" height="12" rx="2"/><path d="M12 10V4"/><path d="M10 2h4"/><path d="M10 5h4"/></svg>',
  'SUSPENSION':   '<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="7" y="10" width="10" height="12" rx="2"/><path d="M12 10V4"/><path d="M10 2h4"/><path d="M10 5h4"/><path d="M7 14h10"/></svg>',
  'CREAM':        '<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M18 21v-4a2 2 0 0 0-2-2h-8a2 2 0 0 0-2 2v4"/><path d="M6 15c0-3 2-5 6-5s6 2 6 5"/><path d="M12 10V6"/><path d="M9 3h6"/></svg>',
  'GEL':          '<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M18 21v-4a2 2 0 0 0-2-2h-8a2 2 0 0 0-2 2v4"/><path d="M6 15c0-3 2-5 6-5s6 2 6 5"/><path d="M12 10V6"/><path d="M9 3h6"/></svg>',
  'ORAL DROP':    '<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 2.69l5.66 5.66a8 8 0 1 1-11.31 0z"/></svg>',
  'EAR DROP':     '<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 2.69l5.66 5.66a8 8 0 1 1-11.31 0z"/></svg>',
  'EYE DROP':     '<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"/><circle cx="12" cy="12" r="3"/></svg>',
  'INHALER':      '<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M6 4h12v16H6z"/><path d="M9 4V2h6v2"/><path d="M9 20v2h6v-2"/></svg>',
  'SACHET':       '<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="4" y="4" width="16" height="16" rx="2"/><path d="M8 4v16"/><path d="M16 4v16"/></svg>',
  'GARGLE':       '<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"/></svg>',
  'SOLUTION':     '<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M9 2h6"/><path d="M12 2v4"/><path d="M6 22h12l-1-10H7z"/></svg>',
  'RESPULE':      '<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="8" y="8" width="8" height="14" rx="2"/><path d="M12 8V2"/><path d="M9 4h6"/></svg>',
  'Dental Paste': '<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M18 21v-4a2 2 0 0 0-2-2h-8a2 2 0 0 0-2 2v4"/><path d="M6 15c0-3 2-5 6-5s6 2 6 5"/><path d="M12 10V6"/><path d="M9 3h6"/></svg>',
  'OTHER':        '<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="3" y="3" width="18" height="18" rx="2" ry="2"/><line x1="9" y1="9" x2="15" y2="9"/><line x1="9" y1="15" x2="15" y2="15"/></svg>'
};

// ===== State =====
let activeFilter = null;
let searchQuery = '';

// ===== DOM Elements =====
const searchInput = document.getElementById('search-input');
const clearBtn = document.getElementById('clear-btn');
const suggestionsDropdown = document.getElementById('suggestions-dropdown');
const categoryGrid = document.getElementById('category-grid');
const categoriesSection = document.getElementById('categories-section');
const resultsSection = document.getElementById('results-section');
const resultsGrid = document.getElementById('results-grid');
const resultsCount = document.getElementById('results-count');
const backToCategoriesBtn = document.getElementById('back-to-categories');
const emptyState = document.getElementById('empty-state');
const modalOverlay = document.getElementById('modal-overlay');
const modalBody = document.getElementById('modal-body');
const modalClose = document.getElementById('modal-close');
const themeToggle = document.getElementById('theme-toggle');

// ===== Theme Initialization =====
const currentTheme = localStorage.getItem('theme') || 'light';
if (currentTheme === 'dark') {
  document.body.classList.remove('light-theme');
  document.body.classList.add('dark-theme');
} else {
  document.body.classList.add('light-theme');
}

themeToggle.addEventListener('click', () => {
  if (document.body.classList.contains('light-theme')) {
    document.body.classList.replace('light-theme', 'dark-theme');
    localStorage.setItem('theme', 'dark');
  } else {
    document.body.classList.replace('dark-theme', 'light-theme');
    localStorage.setItem('theme', 'light');
  }
});

// ===== Build Categories =====
function buildCategories() {
  const counts = {};
  DRUGS.forEach(d => {
    counts[d.form] = (counts[d.form] || 0) + 1;
  });

  const sorted = Object.entries(counts).sort((a, b) => b[1] - a[1]);
  
  categoryGrid.innerHTML = sorted.map(([form, count]) => {
    const icon = FORM_ICONS[form] || FORM_ICONS['OTHER'];
    return `<a href="#" class="category-card" data-form="${form}">
      <div class="category-icon-wrapper">${icon}</div>
      <div class="category-info">
        <span class="category-name">${form}</span>
        <span class="category-count">${count}</span>
      </div>
      <svg class="category-chevron" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="9 18 15 12 9 6"></polyline></svg>
    </a>`;
  }).join('');

  categoryGrid.querySelectorAll('.category-card').forEach(card => {
    card.addEventListener('click', (e) => {
      e.preventDefault();
      const form = card.dataset.form;
      activeFilter = form;
      searchQuery = '';
      searchInput.value = '';
      clearBtn.style.display = 'none';
      showResultsView();
      renderResults();
    });
  });
}

function showResultsView() {
  categoriesSection.style.display = 'none';
  resultsSection.style.display = 'block';
  backToCategoriesBtn.style.display = 'inline-block';
}

function hideResultsView() {
  categoriesSection.style.display = 'block';
  resultsSection.style.display = 'none';
  backToCategoriesBtn.style.display = 'none';
  activeFilter = null;
  searchQuery = '';
  searchInput.value = '';
  clearBtn.style.display = 'none';
}

backToCategoriesBtn.addEventListener('click', hideResultsView);

// ===== Highlight Search Term =====
function highlightText(text, query) {
  if (!query) return escapeHtml(text);
  const escaped = escapeHtml(text);
  const escapedQuery = escapeHtml(query).replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
  const regex = new RegExp(`(${escapedQuery})`, 'gi');
  return escaped.replace(regex, '<mark>$1</mark>');
}

function escapeHtml(str) {
  const div = document.createElement('div');
  div.textContent = str;
  return div.innerHTML;
}

// ===== Render Results =====
function renderResults() {
  let filtered = DRUGS;

  if (activeFilter) {
    filtered = filtered.filter(d => d.form === activeFilter);
  }

  if (searchQuery) {
    const q = searchQuery.toLowerCase();
    filtered = filtered.filter(d => 
      d.name.toLowerCase().includes(q) || 
      d.form.toLowerCase().includes(q) ||
      String(d.sno).includes(q)
    );
  }

  resultsCount.textContent = `${filtered.length} medicines`;

  if (filtered.length === 0) {
    resultsGrid.style.display = 'none';
    emptyState.style.display = 'block';
    return;
  }
  
  resultsGrid.style.display = 'grid';
  emptyState.style.display = 'none';

  resultsGrid.innerHTML = filtered.map((drug, i) => {
    const icon = FORM_ICONS[drug.form] || FORM_ICONS['OTHER'];
    const nameHtml = highlightText(drug.name, searchQuery);
    
    return `<div class="drug-card" data-sno="${drug.sno}">
      <div class="card-header">
        <span class="card-sno">#${drug.sno}</span>
        <span class="card-form-badge">${drug.form}</span>
      </div>
      <div class="card-drug-name">${nameHtml}</div>
    </div>`;
  }).join('');

  resultsGrid.querySelectorAll('.drug-card').forEach(card => {
    card.addEventListener('click', () => {
      const sno = parseInt(card.dataset.sno);
      openModal(sno);
    });
  });
}

// ===== Modal =====
function openModal(sno) {
  const drug = DRUGS.find(d => d.sno === sno);
  if (!drug) return;

  modalBody.innerHTML = `
    <div style="font-family: monospace; font-size: 0.85rem; color: var(--text-tertiary);">S.No #${drug.sno}</div>
    <div style="display:inline-block; font-size: 0.75rem; font-weight: 600; color: var(--accent-primary); background: rgba(59, 130, 246, 0.1); padding: 4px 12px; border-radius: 12px; margin: 8px 0;">${drug.form}</div>
    <h2 class="modal-drug-name">${escapeHtml(drug.name)}</h2>
    <div style="height: 1px; background: var(--border-subtle); margin: 20px 0;"></div>
    <div style="display: grid; grid-template-columns: 1fr; gap: 16px;">
      <div>
        <span style="display:block; font-size: 0.75rem; font-weight: 600; color: var(--text-tertiary); text-transform: uppercase;">Dose Form</span>
        <span style="font-size: 1rem; color: var(--text-primary);">${drug.form}</span>
      </div>
      <div>
        <span style="display:block; font-size: 0.75rem; font-weight: 600; color: var(--text-tertiary); text-transform: uppercase;">Full Name</span>
        <span style="font-size: 1rem; color: var(--text-primary);">${escapeHtml(drug.name)}</span>
      </div>
    </div>
  `;

  modalOverlay.classList.add('active');
  document.body.style.overflow = 'hidden';
}

function closeModal() {
  modalOverlay.classList.remove('active');
  document.body.style.overflow = '';
}

modalClose.addEventListener('click', closeModal);
modalOverlay.addEventListener('click', (e) => {
  if (e.target === modalOverlay) closeModal();
});

// ===== Search Events =====
searchInput.addEventListener('input', (e) => {
  searchQuery = e.target.value;
  const q = searchQuery.trim().toLowerCase();
  
  clearBtn.style.display = q ? 'block' : 'none';
  
  if (q) {
    showResultsView();
    renderResults();
  } else if (!activeFilter) {
    hideResultsView();
  }
});

clearBtn.addEventListener('click', () => {
  searchInput.value = '';
  searchQuery = '';
  clearBtn.style.display = 'none';
  searchInput.focus();
  if (!activeFilter) {
    hideResultsView();
  } else {
    renderResults();
  }
});

// ===== Initialize =====
buildCategories();

