function getVisionModelMetrics()
{   var visionModelMetrics = ['Model Id','Description','Accuracy','Size'];
   return visionModelMetrics;
}
function getVisionModels(){
	var visionModels=[{"Size": "0.64MB", "Description": "classifying flower pictures", "Model Id": "mobilenet_0.25_128_quantized", "Accuracy": "74.033"},
{"Size": "15.86MB", "Description": "classifying flower pictures", "Model Id": "mobilenet_1.0_224", "Accuracy": "90.331"},
{"Size": "4.46MB", "Description": "classifying flower pictures", "Model Id": "mobilenet_1.0_224_quantized", "Accuracy": "85.359"},
{"Size": "80.94MB", "Description": "classifying flower pictures", "Model Id": "inception_v3", "Accuracy": "92.5"},
{"Size": "1.80MB", "Description": "classifying flower pictures", "Model Id": "mobilenet_0.25_128", "Accuracy": "80.939"}];
	return visionModels;
}
function getVisionModelDetailFieldName(){
	var visionModelDetailFieldName = ['Runtime Engine', 'Paper URLs', 'Data URLs', 'Download size', 'Install size','Description'];
	return visionModelDetailFieldName;
}

function getVisionModelDetails(mId){
	var visionModelDetails =
	{"5f3fee01ed94dfd9a43a311476fcc209966e634175667ea4dd9c19b534ebbdaf": {"Data URLs": ["https://www.tensorflow.org/tutorials/image_retraining"], "Description": "classification", "Download size": "15.86 MB", "Install size": "17.11 MB", "Runtime Engine": "Tensorflow Mobile", "Paper URLs": ["https://arxiv.org/abs/1704.04861", "https://codelabs.developers.google.com/codelabs/tensorflow-for-poets-2/index.html#0", "https://codelabs.developers.google.com/codelabs/tensorflow-for-poets/index.html?index=..%2F..%2Findex#0", "https://research.googleblog.com/2017/06/mobilenets-open-source-models-for.html"]}, "6a477d9dd80543f5c455462d588bfaa1fa340b19a0dd18d28349afec7c0126db": {"Data URLs": ["https://www.tensorflow.org/tutorials/image_retraining"], "Description": "classification", "Download size": "80.94 MB", "Install size": "87.17 MB", "Runtime Engine": "Tensorflow Mobile", "Paper URLs": ["https://arxiv.org/abs/1512.00567"]}, "88403d877c27b4874fc5c1c8d4d2fdd2777c2dd7dc2794e833b0531427df2915": {"Data URLs": ["https://www.tensorflow.org/tutorials/image_retraining"], "Description": "classification", "Download size": "4.46 MB", "Install size": "17.11 MB", "Runtime Engine": "Tensorflow Mobile", "Paper URLs": ["https://arxiv.org/abs/1704.04861", "https://codelabs.developers.google.com/codelabs/tensorflow-for-poets-2/index.html#0", "https://codelabs.developers.google.com/codelabs/tensorflow-for-poets/index.html?index=..%2F..%2Findex#0", "https://research.googleblog.com/2017/06/mobilenets-open-source-models-for.html"]}, "392c152b238f24ba19ce4ae46330c4105f2c5c27a82dc7a5ce690a69792d9c47": {"Data URLs": ["https://www.tensorflow.org/tutorials/image_retraining"], "Description": "classification", "Download size": "1.8 MB", "Install size": "1.99 MB", "Runtime Engine": "Tensorflow Mobile", "Paper URLs": ["https://arxiv.org/abs/1704.04861", "https://codelabs.developers.google.com/codelabs/tensorflow-for-poets-2/index.html#0", "https://codelabs.developers.google.com/codelabs/tensorflow-for-poets/index.html?index=..%2F..%2Findex#0", "https://research.googleblog.com/2017/06/mobilenets-open-source-models-for.html"]}, "bcc5735f53ff48800be38c4450a3aefd99db92fb04a9371d7504eb1c58035c13": {"Data URLs": ["https://www.tensorflow.org/tutorials/image_retraining"], "Description": "classification", "Download size": "0.64 MB", "Install size": "1.99 MB", "Runtime Engine": "Tensorflow Mobile", "Paper URLs": ["https://arxiv.org/abs/1704.04861", "https://codelabs.developers.google.com/codelabs/tensorflow-for-poets-2/index.html#0", "https://codelabs.developers.google.com/codelabs/tensorflow-for-poets/index.html?index=..%2F..%2Findex#0", "https://research.googleblog.com/2017/06/mobilenets-open-source-models-for.html"]}};	return visionModelDetails[mId];
}
function getVisionModelId(ind){	var visionModelId = ["bcc5735f53ff48800be38c4450a3aefd99db92fb04a9371d7504eb1c58035c13","5f3fee01ed94dfd9a43a311476fcc209966e634175667ea4dd9c19b534ebbdaf","88403d877c27b4874fc5c1c8d4d2fdd2777c2dd7dc2794e833b0531427df2915","6a477d9dd80543f5c455462d588bfaa1fa340b19a0dd18d28349afec7c0126db","392c152b238f24ba19ce4ae46330c4105f2c5c27a82dc7a5ce690a69792d9c47"];
	return visionModelId[ind];
}
