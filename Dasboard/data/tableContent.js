function getVisionModelMetrics()
{   var visionModelMetrics = ['Model Id','Description','Accuracy','Size'];
   return visionModelMetrics;
}
function getVisionModels(){
	var visionModels=[{"Size": "5.46MB", "Description": "classifying flower pictures", "Model Id": "mobilenet_0.50_128_quantized", "Accuracy": "79.005"},
{"Size": "1.99MB", "Description": "classifying flower pictures", "Model Id": "mobilenet_0.25_128_quantized", "Accuracy": "74.033"},
{"Size": "17.11MB", "Description": "classifying flower pictures", "Model Id": "mobilenet_1.0_224", "Accuracy": "90.331"},
{"Size": "17.11MB", "Description": "classifying flower pictures", "Model Id": "mobilenet_1.0_224_quantized", "Accuracy": "85.359"},
{"Size": "5.46MB", "Description": "classifying flower pictures", "Model Id": "mobilenet_0.50_128", "Accuracy": "83.978"},
{"Size": "1.99MB", "Description": "classifying flower pictures", "Model Id": "mobilenet_0.25_128", "Accuracy": "80.939"}];
	return visionModels;
}
function getVisionModelDetailFieldName(){
	var visionModelDetailFieldName = ['Framework', 'Paper URLs', 'Data URLs', 'Download size', 'Install size','Description'];
	return visionModelDetailFieldName;
}

function getVisionModelDetails(mId){
	var visionModelDetails =
	{"bcc5735f53ff48800be38c4450a3aefd99db92fb04a9371d7504eb1c58035c13": {"Data URLs": ["https://www.tensorflow.org/tutorials/image_retraining"], "Description": "classification", "Download size": "643026", "Framework": "Tensorflow", "Install size": "1991474", "Paper URLs": ["https://arxiv.org/abs/1704.04861", "https://codelabs.developers.google.com/codelabs/tensorflow-for-poets-2/index.html#0", "https://codelabs.developers.google.com/codelabs/tensorflow-for-poets/index.html?index=..%2F..%2Findex#0", "https://research.googleblog.com/2017/06/mobilenets-open-source-models-for.html"]}, "5f3fee01ed94dfd9a43a311476fcc209966e634175667ea4dd9c19b534ebbdaf": {"Data URLs": ["https://www.tensorflow.org/tutorials/image_retraining"], "Description": "classification", "Download size": "15856186", "Framework": "Tensorflow", "Install size": "17107975", "Paper URLs": ["https://arxiv.org/abs/1704.04861", "https://codelabs.developers.google.com/codelabs/tensorflow-for-poets-2/index.html#0", "https://codelabs.developers.google.com/codelabs/tensorflow-for-poets/index.html?index=..%2F..%2Findex#0", "https://research.googleblog.com/2017/06/mobilenets-open-source-models-for.html"]}, "ce085da79449bfcff89ca006975306482df0379fcb52a949cf1cbc930682a04f": {"Data URLs": ["https://www.tensorflow.org/tutorials/image_retraining"], "Description": "classification", "Download size": "1567495", "Framework": "Tensorflow", "Install size": "5460541", "Paper URLs": ["https://arxiv.org/abs/1704.04861", "https://codelabs.developers.google.com/codelabs/tensorflow-for-poets-2/index.html#0", "https://codelabs.developers.google.com/codelabs/tensorflow-for-poets/index.html?index=..%2F..%2Findex#0", "https://research.googleblog.com/2017/06/mobilenets-open-source-models-for.html"]}, "392c152b238f24ba19ce4ae46330c4105f2c5c27a82dc7a5ce690a69792d9c47": {"Data URLs": ["https://www.tensorflow.org/tutorials/image_retraining"], "Description": "classification", "Download size": "1804068", "Framework": "Tensorflow", "Install size": "1991445", "Paper URLs": ["https://arxiv.org/abs/1704.04861", "https://codelabs.developers.google.com/codelabs/tensorflow-for-poets-2/index.html#0", "https://codelabs.developers.google.com/codelabs/tensorflow-for-poets/index.html?index=..%2F..%2Findex#0", "https://research.googleblog.com/2017/06/mobilenets-open-source-models-for.html"]}, "cb9d377c2785df6cfdedb982452470daa6555158066b2c5708ef9781c370ae73": {"Data URLs": ["https://www.tensorflow.org/tutorials/image_retraining"], "Description": "classification", "Download size": "5028071", "Framework": "Tensorflow", "Install size": "5460512", "Paper URLs": ["https://arxiv.org/abs/1704.04861", "https://codelabs.developers.google.com/codelabs/tensorflow-for-poets-2/index.html#0", "https://codelabs.developers.google.com/codelabs/tensorflow-for-poets/index.html?index=..%2F..%2Findex#0", "https://research.googleblog.com/2017/06/mobilenets-open-source-models-for.html"]}, "88403d877c27b4874fc5c1c8d4d2fdd2777c2dd7dc2794e833b0531427df2915": {"Data URLs": ["https://www.tensorflow.org/tutorials/image_retraining"], "Description": "classification", "Download size": "4456068", "Framework": "Tensorflow", "Install size": "17108004", "Paper URLs": ["https://arxiv.org/abs/1704.04861", "https://codelabs.developers.google.com/codelabs/tensorflow-for-poets-2/index.html#0", "https://codelabs.developers.google.com/codelabs/tensorflow-for-poets/index.html?index=..%2F..%2Findex#0", "https://research.googleblog.com/2017/06/mobilenets-open-source-models-for.html"]}};
  return visionModelDetails[mId];
}
function getVisionModelId(){	var visionModelId = ["ce085da79449bfcff89ca006975306482df0379fcb52a949cf1cbc930682a04f","bcc5735f53ff48800be38c4450a3aefd99db92fb04a9371d7504eb1c58035c13","5f3fee01ed94dfd9a43a311476fcc209966e634175667ea4dd9c19b534ebbdaf","88403d877c27b4874fc5c1c8d4d2fdd2777c2dd7dc2794e833b0531427df2915","cb9d377c2785df6cfdedb982452470daa6555158066b2c5708ef9781c370ae73","392c152b238f24ba19ce4ae46330c4105f2c5c27a82dc7a5ce690a69792d9c47"];
	return visionModelId;
}