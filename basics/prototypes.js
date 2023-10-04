//prototypes allow you to create objects and extend their properties and methods.
//Exp1
function RecordingApp(name, features) {
    this.name = name;
    this.features = features;
}

RecordingApp.prototype.shareRecording = function() {
    console.log(`Sharing recordings via ${this.name}`);
};

const snapify = new RecordingApp("Snapify", ["Record tabs", "Share links"]);
snapify.shareRecording(); // Output: Sharing recordings via Snapify

//exp2
function PasswordManager(name, offline, authentication) {
    this.name = name;
    this.offline = offline;
    this.authentication = authentication;
}

PasswordManager.prototype.backup = function() {
    console.log(`${this.name} supports encrypted backup and restore.`);
};

const keyPass = new PasswordManager("KeyPass", true, "Device credentials");
keyPass.backup(); // Output: KeyPass supports encrypted backup and restore.


function FeatureFlagsService(name, description) {
    this.name = name;
    this.description = description;
}
//exp3
FeatureFlagsService.prototype.manageFlags = function() {
    console.log(`Managing feature flags using ${this.name}: ${this.description}`);
};

const switchFeat = new FeatureFlagsService("SwitchFeat", "Self-hosted feature flags service");
switchFeat.manageFlags(); // Output: Managing feature flags using SwitchFeat: Self-hosted feature flags service. 
