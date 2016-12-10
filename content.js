function processNodes(topNode, nodeType, func) {
  function sub(node) {
    for (var i = 0; i < node.childNodes.length; i++)
      sub(node.childNodes[i]);
    if (node.nodeType == nodeType)
      func(node);
  }
  sub(topNode);
}

function removeStatism(node) {
  var t = node.nodeValue;
  t = t.replace(/\bauthorit(y|ies)\b/gi, "\"authorit$1\"");
  t = t.replace(/\bcountry\b/gi, "\"country\"");
  t = t.replace(/\bcountries\b/gi, "\"countries\"");
  t = t.replace(/\bstates\b/gi, "\"states\"");
  t = t.replace(/\ba state\b/gi, "a \"state\"");
  t = t.replace(/\bthe state\b/gi, "the \"state\"");
  t = t.replace(/\bgovernment\b/gi, "\"government\"");
  t = t.replace(/\bgovernments\b/gi, "\"governments\"");
  t = t.replace(/\bto (tax|expropriate)\b/gi, "to steal");
  t = t.replace(/\b(is|are|was|were|has been|have been) taxed\b/gi, "$1 robbed");
  t = t.replace(/\bexpropriate(s)?\b/gi, "steal$1");
  t = t.replace(/\b(taxed|expropriated)\b/gi, "stole");
  t = t.replace(/\b(taxing|expropriating)\b/gi, "stealing");
  t = t.replace(/\btaxable\b/gi, "stealable");
  t = t.replace(/\bto pay taxes\b/gi, "to be robbed");
  t = t.replace(/\bI pay taxes\b/gi, "I am robbed");
  t = t.replace(/\bpay taxes\b/gi, "are robbed");
  t = t.replace(/\bpays taxes\b/gi, "is robbed");
  t = t.replace(/\bpaid taxes\b/gi, "was robbed");
  t = t.replace(/\b(taxes|expropriation)\b/gi, "theft");
  t = t.replace(/\btaxation\b/gi, "theft");
  t = t.replace(/\btax\b/gi, "theft");
  t = t.replace(/\btariff\b/gi, "theft");
  t = t.replace(/\btariffs\b/gi, "theft");
  t = t.replace(/\bproperty forfeiture\b/gi, "armed robbery");
  t = t.replace(/\b(import|export|customs) dut(y|ies)\b/gi, "$1 theft");
  t = t.replace(/\bduty( |-)?free\b/gi, "theft$1free");
  t = t.replace(/\btax ?payer(s)?\b/gi, "government extortion victim$1");
  t = t.replace(/\bborder\b/gi, "imaginary line");
  t = t.replace(/\bborders\b/gi, "imaginary lines");
  t = t.replace(/\bblack market(s)?\b/gi, "free market$1");
  t = t.replace(/\billegal\b/gi, "free");
  t = t.replace(/\bcentral bank(s)?\b/gi, "government counterfeiter$1");
  t = t.replace(/\bcentral banking\b/gi, "government counterfeiting");
  t = t.replace(/\bquantitative easing\b/gi, "counterfeiting");
  t = t.replace(/\ban election\b/gi, "a statist ritual");
  t = t.replace(/\b(presidential )?election(s)?\b/gi, "statist ritual$2");
  t = t.replace(/\b(political|democratic|republican) party\b/gi, "statist cult");
  t = t.replace(/\bpolitical parties\b/gi, "statist cults");
  t = t.replace(/\b(socialist|communist)\b/gi, "kleptomaniac");
  t = t.replace(/\b(socialists|communists)\b/gi, "kleptomaniacs");
  t = t.replace(/\b(socialism|communism)\b/gi, "kleptomania");
  t = t.replace(/\b(liberalism|conservatism)\b/gi, "statism");
  t = t.replace(/\b(liberals|conservatives|democrats|republicans)\b/gi, "statists");
  t = t.replace(/\b(liberal|conservative|democrat|democratic|republican)\b/gi, "statist");
  t = t.replace(/\bvoter(s)?\b/gi, "state worshipper$1");
  t = t.replace(/\bvoting\b/gi, "state worshipping");
  t = t.replace(/\bpresident-elect\b/gi, "future pope of statism");
  t = t.replace(/\bpresident(s)?\b/gi, "pope$1 of statism");
  t = t.replace(/\bprime minister(s)?\b/gi, "archbishop$1 of statism");
  t = t.replace(/\bsenator(s)?\b/gi, "bishop$1 of statism");
  t = t.replace(/\bpolitician(s)?\b/gi, "ordained statist$1");
  t = t.replace(/\bpolitical\b/gi, "statist");
  t = t.replace(/\bpolitics\b/gi, "statism");
  t = t.replace(/\barrest(s)?\b/gi, "kidnap$1");
  t = t.replace(/\barrest(ing|ed)\b/gi, "kidnapp$1");
  t = t.replace(/\bincarceration\b/gi, "kidnapping");
  t = t.replace(/\b(soldier|police officer)\b/gi, "government thug");
  t = t.replace(/\b(soldiers|troops|police)\b/gi, "government thugs");
  t = t.replace(/\bin (prison|jail)(s)?\b/gi, "encaged");
  t = t.replace(/\b(prison|imprison|jail)(s)?\b/gi, "cage$2");
  t = t.replace(/\b(imprison|jail)(ing|ed)\b/gi, "cag$2");
  t = t.replace(/\blaw abiding\b/gi, "enslaved");
  t = t.replace(/\b(social justice|laws?|legislation|regulations?|policy|policies)\b/gi, "oppression");
  t = t.replace(/\bprohibition\b/gi, "oppression");
  t = t.replace(/\bintervention\b/gi, "oppression");
  t = t.replace(/\bborder(s)?\b/gi, "imaginary line$1");
  t = t.replace(/\bgun control\b/gi, "citizen disarmament");
  t = t.replace(/\bdemocracy\b/gi, "tyranny of the majority");
  t = t.replace(/\bkeynesian\b/gi, "scam");
  t = t.replace(/\baffirmative action\b/gi, "racism");
  t = t.replace(/\b(the )?death penalty\b/gi, "murder");
  t = t.replace(/\b(the )?war on\b/gi, "state vs.");
  t = t.replace(/\b(the )?war\b/gi, "mass murder");
  t = t.replace(/\b(welfare|social security)\b/gi, "distribution of stolen goods");
  t = t.replace(/\ba subsidy\b/gi, "stolen money");
  t = t.replace(/\bsubsidy|subsidies\b/gi, "stolen money");
  t = t.replace(/\bsubsidi(s|z)(e|es|ed|ing)\b/gi, "financ$2 through theft");
  t = t.replace(/\bpublicly funded\b/gi, "extortion-backed");
  t = t.replace(/\b(free|public|universal) (education|healthcare|health care)\b/gi, "extortion-backed $2");
  t = t.replace(/\bthe draft\b/gi, "indentured servitude");
  t = t.replace(/\b(senate|congress|parliament)\b/gi, "church of statism");
  t = t.replace(/\bhouse of (representatives|commons|lords)\b/gi, "house of statism");
  t = t.replace(/\bwhite house\b/gi, "grand church of statism");
  if (node.nodeValue != t)
    node.nodeValue = t;
}

processNodes(document, Node.TEXT_NODE, removeStatism);
