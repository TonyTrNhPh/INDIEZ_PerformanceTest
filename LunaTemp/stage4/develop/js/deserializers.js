var Deserializers = {}
Deserializers["UnityEngine.JointSpring"] = function (request, data, root) {
  var i752 = root || request.c( 'UnityEngine.JointSpring' )
  var i753 = data
  i752.spring = i753[0]
  i752.damper = i753[1]
  i752.targetPosition = i753[2]
  return i752
}

Deserializers["UnityEngine.JointMotor"] = function (request, data, root) {
  var i754 = root || request.c( 'UnityEngine.JointMotor' )
  var i755 = data
  i754.m_TargetVelocity = i755[0]
  i754.m_Force = i755[1]
  i754.m_FreeSpin = i755[2]
  return i754
}

Deserializers["UnityEngine.JointLimits"] = function (request, data, root) {
  var i756 = root || request.c( 'UnityEngine.JointLimits' )
  var i757 = data
  i756.m_Min = i757[0]
  i756.m_Max = i757[1]
  i756.m_Bounciness = i757[2]
  i756.m_BounceMinVelocity = i757[3]
  i756.m_ContactDistance = i757[4]
  i756.minBounce = i757[5]
  i756.maxBounce = i757[6]
  return i756
}

Deserializers["UnityEngine.JointDrive"] = function (request, data, root) {
  var i758 = root || request.c( 'UnityEngine.JointDrive' )
  var i759 = data
  i758.m_PositionSpring = i759[0]
  i758.m_PositionDamper = i759[1]
  i758.m_MaximumForce = i759[2]
  i758.m_UseAcceleration = i759[3]
  return i758
}

Deserializers["UnityEngine.SoftJointLimitSpring"] = function (request, data, root) {
  var i760 = root || request.c( 'UnityEngine.SoftJointLimitSpring' )
  var i761 = data
  i760.m_Spring = i761[0]
  i760.m_Damper = i761[1]
  return i760
}

Deserializers["UnityEngine.SoftJointLimit"] = function (request, data, root) {
  var i762 = root || request.c( 'UnityEngine.SoftJointLimit' )
  var i763 = data
  i762.m_Limit = i763[0]
  i762.m_Bounciness = i763[1]
  i762.m_ContactDistance = i763[2]
  return i762
}

Deserializers["UnityEngine.WheelFrictionCurve"] = function (request, data, root) {
  var i764 = root || request.c( 'UnityEngine.WheelFrictionCurve' )
  var i765 = data
  i764.m_ExtremumSlip = i765[0]
  i764.m_ExtremumValue = i765[1]
  i764.m_AsymptoteSlip = i765[2]
  i764.m_AsymptoteValue = i765[3]
  i764.m_Stiffness = i765[4]
  return i764
}

Deserializers["UnityEngine.JointAngleLimits2D"] = function (request, data, root) {
  var i766 = root || request.c( 'UnityEngine.JointAngleLimits2D' )
  var i767 = data
  i766.m_LowerAngle = i767[0]
  i766.m_UpperAngle = i767[1]
  return i766
}

Deserializers["UnityEngine.JointMotor2D"] = function (request, data, root) {
  var i768 = root || request.c( 'UnityEngine.JointMotor2D' )
  var i769 = data
  i768.m_MotorSpeed = i769[0]
  i768.m_MaximumMotorTorque = i769[1]
  return i768
}

Deserializers["UnityEngine.JointSuspension2D"] = function (request, data, root) {
  var i770 = root || request.c( 'UnityEngine.JointSuspension2D' )
  var i771 = data
  i770.m_DampingRatio = i771[0]
  i770.m_Frequency = i771[1]
  i770.m_Angle = i771[2]
  return i770
}

Deserializers["UnityEngine.JointTranslationLimits2D"] = function (request, data, root) {
  var i772 = root || request.c( 'UnityEngine.JointTranslationLimits2D' )
  var i773 = data
  i772.m_LowerTranslation = i773[0]
  i772.m_UpperTranslation = i773[1]
  return i772
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Mesh"] = function (request, data, root) {
  var i774 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Mesh' )
  var i775 = data
  i774.name = i775[0]
  i774.halfPrecision = !!i775[1]
  i774.useSimplification = !!i775[2]
  i774.useUInt32IndexFormat = !!i775[3]
  i774.vertexCount = i775[4]
  i774.aabb = i775[5]
  var i777 = i775[6]
  var i776 = []
  for(var i = 0; i < i777.length; i += 1) {
    i776.push( !!i777[i + 0] );
  }
  i774.streams = i776
  i774.vertices = i775[7]
  var i779 = i775[8]
  var i778 = []
  for(var i = 0; i < i779.length; i += 1) {
    i778.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Mesh+SubMesh', i779[i + 0]) );
  }
  i774.subMeshes = i778
  var i781 = i775[9]
  var i780 = []
  for(var i = 0; i < i781.length; i += 16) {
    i780.push( new pc.Mat4().setData(i781[i + 0], i781[i + 1], i781[i + 2], i781[i + 3],  i781[i + 4], i781[i + 5], i781[i + 6], i781[i + 7],  i781[i + 8], i781[i + 9], i781[i + 10], i781[i + 11],  i781[i + 12], i781[i + 13], i781[i + 14], i781[i + 15]) );
  }
  i774.bindposes = i780
  var i783 = i775[10]
  var i782 = []
  for(var i = 0; i < i783.length; i += 1) {
    i782.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShape', i783[i + 0]) );
  }
  i774.blendShapes = i782
  return i774
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Mesh+SubMesh"] = function (request, data, root) {
  var i788 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Mesh+SubMesh' )
  var i789 = data
  i788.triangles = i789[0]
  return i788
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShape"] = function (request, data, root) {
  var i794 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShape' )
  var i795 = data
  i794.name = i795[0]
  var i797 = i795[1]
  var i796 = []
  for(var i = 0; i < i797.length; i += 1) {
    i796.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShapeFrame', i797[i + 0]) );
  }
  i794.frames = i796
  return i794
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material"] = function (request, data, root) {
  var i798 = root || new pc.UnityMaterial()
  var i799 = data
  i798.name = i799[0]
  request.r(i799[1], i799[2], 0, i798, 'shader')
  i798.renderQueue = i799[3]
  i798.enableInstancing = !!i799[4]
  var i801 = i799[5]
  var i800 = []
  for(var i = 0; i < i801.length; i += 1) {
    i800.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+FloatParameter', i801[i + 0]) );
  }
  i798.floatParameters = i800
  var i803 = i799[6]
  var i802 = []
  for(var i = 0; i < i803.length; i += 1) {
    i802.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+ColorParameter', i803[i + 0]) );
  }
  i798.colorParameters = i802
  var i805 = i799[7]
  var i804 = []
  for(var i = 0; i < i805.length; i += 1) {
    i804.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+VectorParameter', i805[i + 0]) );
  }
  i798.vectorParameters = i804
  var i807 = i799[8]
  var i806 = []
  for(var i = 0; i < i807.length; i += 1) {
    i806.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+TextureParameter', i807[i + 0]) );
  }
  i798.textureParameters = i806
  var i809 = i799[9]
  var i808 = []
  for(var i = 0; i < i809.length; i += 1) {
    i808.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+MaterialFlag', i809[i + 0]) );
  }
  i798.materialFlags = i808
  return i798
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+FloatParameter"] = function (request, data, root) {
  var i812 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+FloatParameter' )
  var i813 = data
  i812.name = i813[0]
  i812.value = i813[1]
  return i812
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+ColorParameter"] = function (request, data, root) {
  var i816 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+ColorParameter' )
  var i817 = data
  i816.name = i817[0]
  i816.value = new pc.Color(i817[1], i817[2], i817[3], i817[4])
  return i816
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+VectorParameter"] = function (request, data, root) {
  var i820 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+VectorParameter' )
  var i821 = data
  i820.name = i821[0]
  i820.value = new pc.Vec4( i821[1], i821[2], i821[3], i821[4] )
  return i820
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+TextureParameter"] = function (request, data, root) {
  var i824 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+TextureParameter' )
  var i825 = data
  i824.name = i825[0]
  request.r(i825[1], i825[2], 0, i824, 'value')
  return i824
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+MaterialFlag"] = function (request, data, root) {
  var i828 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+MaterialFlag' )
  var i829 = data
  i828.name = i829[0]
  i828.enabled = !!i829[1]
  return i828
}

Deserializers["Luna.Unity.DTO.UnityEngine.Textures.Texture2D"] = function (request, data, root) {
  var i830 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Textures.Texture2D' )
  var i831 = data
  i830.name = i831[0]
  i830.width = i831[1]
  i830.height = i831[2]
  i830.mipmapCount = i831[3]
  i830.anisoLevel = i831[4]
  i830.filterMode = i831[5]
  i830.hdr = !!i831[6]
  i830.format = i831[7]
  i830.wrapMode = i831[8]
  i830.alphaIsTransparency = !!i831[9]
  i830.alphaSource = i831[10]
  i830.graphicsFormat = i831[11]
  i830.sRGBTexture = !!i831[12]
  i830.desiredColorSpace = i831[13]
  i830.wrapU = i831[14]
  i830.wrapV = i831[15]
  return i830
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Transform"] = function (request, data, root) {
  var i832 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Transform' )
  var i833 = data
  i832.position = new pc.Vec3( i833[0], i833[1], i833[2] )
  i832.scale = new pc.Vec3( i833[3], i833[4], i833[5] )
  i832.rotation = new pc.Quat(i833[6], i833[7], i833[8], i833[9])
  return i832
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.MeshFilter"] = function (request, data, root) {
  var i834 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.MeshFilter' )
  var i835 = data
  request.r(i835[0], i835[1], 0, i834, 'sharedMesh')
  return i834
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.MeshRenderer"] = function (request, data, root) {
  var i836 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.MeshRenderer' )
  var i837 = data
  request.r(i837[0], i837[1], 0, i836, 'additionalVertexStreams')
  i836.enabled = !!i837[2]
  request.r(i837[3], i837[4], 0, i836, 'sharedMaterial')
  var i839 = i837[5]
  var i838 = []
  for(var i = 0; i < i839.length; i += 2) {
  request.r(i839[i + 0], i839[i + 1], 2, i838, '')
  }
  i836.sharedMaterials = i838
  i836.receiveShadows = !!i837[6]
  i836.shadowCastingMode = i837[7]
  i836.sortingLayerID = i837[8]
  i836.sortingOrder = i837[9]
  i836.lightmapIndex = i837[10]
  i836.lightmapSceneIndex = i837[11]
  i836.lightmapScaleOffset = new pc.Vec4( i837[12], i837[13], i837[14], i837[15] )
  i836.lightProbeUsage = i837[16]
  i836.reflectionProbeUsage = i837[17]
  return i836
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.MeshCollider"] = function (request, data, root) {
  var i842 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.MeshCollider' )
  var i843 = data
  request.r(i843[0], i843[1], 0, i842, 'sharedMesh')
  i842.convex = !!i843[2]
  i842.enabled = !!i843[3]
  i842.isTrigger = !!i843[4]
  request.r(i843[5], i843[6], 0, i842, 'material')
  return i842
}

Deserializers["Luna.Unity.DTO.UnityEngine.Scene.GameObject"] = function (request, data, root) {
  var i844 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Scene.GameObject' )
  var i845 = data
  i844.name = i845[0]
  i844.tagId = i845[1]
  i844.enabled = !!i845[2]
  i844.isStatic = !!i845[3]
  i844.layer = i845[4]
  return i844
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.SphereCollider"] = function (request, data, root) {
  var i846 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.SphereCollider' )
  var i847 = data
  i846.center = new pc.Vec3( i847[0], i847[1], i847[2] )
  i846.radius = i847[3]
  i846.enabled = !!i847[4]
  i846.isTrigger = !!i847[5]
  request.r(i847[6], i847[7], 0, i846, 'material')
  return i846
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Rigidbody"] = function (request, data, root) {
  var i848 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Rigidbody' )
  var i849 = data
  i848.mass = i849[0]
  i848.drag = i849[1]
  i848.angularDrag = i849[2]
  i848.useGravity = !!i849[3]
  i848.isKinematic = !!i849[4]
  i848.constraints = i849[5]
  i848.maxAngularVelocity = i849[6]
  i848.collisionDetectionMode = i849[7]
  i848.interpolation = i849[8]
  return i848
}

Deserializers["BallBehavior"] = function (request, data, root) {
  var i850 = root || request.c( 'BallBehavior' )
  var i851 = data
  request.r(i851[0], i851[1], 0, i850, 'ballEffect')
  i850.ballSpeed = i851[2]
  request.r(i851[3], i851[4], 0, i850, 'dunkTriggerBottom')
  request.r(i851[5], i851[6], 0, i850, 'dunkTriggerTop')
  request.r(i851[7], i851[8], 0, i850, 'basketRingTrigger')
  return i850
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.ParticleSystem"] = function (request, data, root) {
  var i852 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.ParticleSystem' )
  var i853 = data
  i852.main = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.MainModule', i853[0], i852.main)
  i852.colorBySpeed = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ColorBySpeedModule', i853[1], i852.colorBySpeed)
  i852.colorOverLifetime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ColorOverLifetimeModule', i853[2], i852.colorOverLifetime)
  i852.emission = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.EmissionModule', i853[3], i852.emission)
  i852.rotationBySpeed = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.RotationBySpeedModule', i853[4], i852.rotationBySpeed)
  i852.rotationOverLifetime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.RotationOverLifetimeModule', i853[5], i852.rotationOverLifetime)
  i852.shape = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ShapeModule', i853[6], i852.shape)
  i852.sizeBySpeed = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.SizeBySpeedModule', i853[7], i852.sizeBySpeed)
  i852.sizeOverLifetime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.SizeOverLifetimeModule', i853[8], i852.sizeOverLifetime)
  i852.textureSheetAnimation = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.TextureSheetAnimationModule', i853[9], i852.textureSheetAnimation)
  i852.velocityOverLifetime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.VelocityOverLifetimeModule', i853[10], i852.velocityOverLifetime)
  i852.noise = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.NoiseModule', i853[11], i852.noise)
  i852.inheritVelocity = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.InheritVelocityModule', i853[12], i852.inheritVelocity)
  i852.forceOverLifetime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ForceOverLifetimeModule', i853[13], i852.forceOverLifetime)
  i852.limitVelocityOverLifetime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.LimitVelocityOverLifetimeModule', i853[14], i852.limitVelocityOverLifetime)
  i852.useAutoRandomSeed = !!i853[15]
  i852.randomSeed = i853[16]
  return i852
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.MainModule"] = function (request, data, root) {
  var i854 = root || new pc.ParticleSystemMain()
  var i855 = data
  i854.duration = i855[0]
  i854.loop = !!i855[1]
  i854.prewarm = !!i855[2]
  i854.startDelay = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i855[3], i854.startDelay)
  i854.startLifetime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i855[4], i854.startLifetime)
  i854.startSpeed = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i855[5], i854.startSpeed)
  i854.startSize3D = !!i855[6]
  i854.startSizeX = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i855[7], i854.startSizeX)
  i854.startSizeY = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i855[8], i854.startSizeY)
  i854.startSizeZ = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i855[9], i854.startSizeZ)
  i854.startRotation3D = !!i855[10]
  i854.startRotationX = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i855[11], i854.startRotationX)
  i854.startRotationY = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i855[12], i854.startRotationY)
  i854.startRotationZ = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i855[13], i854.startRotationZ)
  i854.startColor = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxGradient', i855[14], i854.startColor)
  i854.gravityModifier = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i855[15], i854.gravityModifier)
  i854.simulationSpace = i855[16]
  request.r(i855[17], i855[18], 0, i854, 'customSimulationSpace')
  i854.simulationSpeed = i855[19]
  i854.useUnscaledTime = !!i855[20]
  i854.scalingMode = i855[21]
  i854.playOnAwake = !!i855[22]
  i854.maxParticles = i855[23]
  i854.emitterVelocityMode = i855[24]
  i854.stopAction = i855[25]
  return i854
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve"] = function (request, data, root) {
  var i856 = root || new pc.MinMaxCurve()
  var i857 = data
  i856.mode = i857[0]
  i856.curveMin = new pc.AnimationCurve( { keys_flow: i857[1] } )
  i856.curveMax = new pc.AnimationCurve( { keys_flow: i857[2] } )
  i856.curveMultiplier = i857[3]
  i856.constantMin = i857[4]
  i856.constantMax = i857[5]
  return i856
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxGradient"] = function (request, data, root) {
  var i858 = root || new pc.MinMaxGradient()
  var i859 = data
  i858.mode = i859[0]
  i858.gradientMin = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Gradient', i859[1], i858.gradientMin)
  i858.gradientMax = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Gradient', i859[2], i858.gradientMax)
  i858.colorMin = new pc.Color(i859[3], i859[4], i859[5], i859[6])
  i858.colorMax = new pc.Color(i859[7], i859[8], i859[9], i859[10])
  return i858
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Gradient"] = function (request, data, root) {
  var i860 = root || request.c( 'Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Gradient' )
  var i861 = data
  i860.mode = i861[0]
  var i863 = i861[1]
  var i862 = []
  for(var i = 0; i < i863.length; i += 1) {
    i862.push( request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientColorKey', i863[i + 0]) );
  }
  i860.colorKeys = i862
  var i865 = i861[2]
  var i864 = []
  for(var i = 0; i < i865.length; i += 1) {
    i864.push( request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientAlphaKey', i865[i + 0]) );
  }
  i860.alphaKeys = i864
  return i860
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ColorBySpeedModule"] = function (request, data, root) {
  var i866 = root || new pc.ParticleSystemColorBySpeed()
  var i867 = data
  i866.enabled = !!i867[0]
  i866.color = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxGradient', i867[1], i866.color)
  i866.range = new pc.Vec2( i867[2], i867[3] )
  return i866
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientColorKey"] = function (request, data, root) {
  var i870 = root || request.c( 'Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientColorKey' )
  var i871 = data
  i870.color = new pc.Color(i871[0], i871[1], i871[2], i871[3])
  i870.time = i871[4]
  return i870
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientAlphaKey"] = function (request, data, root) {
  var i874 = root || request.c( 'Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientAlphaKey' )
  var i875 = data
  i874.alpha = i875[0]
  i874.time = i875[1]
  return i874
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ColorOverLifetimeModule"] = function (request, data, root) {
  var i876 = root || new pc.ParticleSystemColorOverLifetime()
  var i877 = data
  i876.enabled = !!i877[0]
  i876.color = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxGradient', i877[1], i876.color)
  return i876
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.EmissionModule"] = function (request, data, root) {
  var i878 = root || new pc.ParticleSystemEmitter()
  var i879 = data
  i878.enabled = !!i879[0]
  i878.rateOverTime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i879[1], i878.rateOverTime)
  i878.rateOverDistance = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i879[2], i878.rateOverDistance)
  var i881 = i879[3]
  var i880 = []
  for(var i = 0; i < i881.length; i += 1) {
    i880.push( request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Burst', i881[i + 0]) );
  }
  i878.bursts = i880
  return i878
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Burst"] = function (request, data, root) {
  var i884 = root || new pc.ParticleSystemBurst()
  var i885 = data
  i884.count = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i885[0], i884.count)
  i884.cycleCount = i885[1]
  i884.minCount = i885[2]
  i884.maxCount = i885[3]
  i884.repeatInterval = i885[4]
  i884.time = i885[5]
  return i884
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.RotationBySpeedModule"] = function (request, data, root) {
  var i886 = root || new pc.ParticleSystemRotationBySpeed()
  var i887 = data
  i886.enabled = !!i887[0]
  i886.x = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i887[1], i886.x)
  i886.y = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i887[2], i886.y)
  i886.z = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i887[3], i886.z)
  i886.separateAxes = !!i887[4]
  i886.range = new pc.Vec2( i887[5], i887[6] )
  return i886
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.RotationOverLifetimeModule"] = function (request, data, root) {
  var i888 = root || new pc.ParticleSystemRotationOverLifetime()
  var i889 = data
  i888.enabled = !!i889[0]
  i888.x = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i889[1], i888.x)
  i888.y = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i889[2], i888.y)
  i888.z = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i889[3], i888.z)
  i888.separateAxes = !!i889[4]
  return i888
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ShapeModule"] = function (request, data, root) {
  var i890 = root || new pc.ParticleSystemShape()
  var i891 = data
  i890.enabled = !!i891[0]
  i890.shapeType = i891[1]
  i890.randomDirectionAmount = i891[2]
  i890.sphericalDirectionAmount = i891[3]
  i890.randomPositionAmount = i891[4]
  i890.alignToDirection = !!i891[5]
  i890.radius = i891[6]
  i890.radiusMode = i891[7]
  i890.radiusSpread = i891[8]
  i890.radiusSpeed = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i891[9], i890.radiusSpeed)
  i890.radiusThickness = i891[10]
  i890.angle = i891[11]
  i890.length = i891[12]
  i890.boxThickness = new pc.Vec3( i891[13], i891[14], i891[15] )
  i890.meshShapeType = i891[16]
  request.r(i891[17], i891[18], 0, i890, 'mesh')
  request.r(i891[19], i891[20], 0, i890, 'meshRenderer')
  request.r(i891[21], i891[22], 0, i890, 'skinnedMeshRenderer')
  i890.useMeshMaterialIndex = !!i891[23]
  i890.meshMaterialIndex = i891[24]
  i890.useMeshColors = !!i891[25]
  i890.normalOffset = i891[26]
  i890.arc = i891[27]
  i890.arcMode = i891[28]
  i890.arcSpread = i891[29]
  i890.arcSpeed = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i891[30], i890.arcSpeed)
  i890.donutRadius = i891[31]
  i890.position = new pc.Vec3( i891[32], i891[33], i891[34] )
  i890.rotation = new pc.Vec3( i891[35], i891[36], i891[37] )
  i890.scale = new pc.Vec3( i891[38], i891[39], i891[40] )
  return i890
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.SizeBySpeedModule"] = function (request, data, root) {
  var i892 = root || new pc.ParticleSystemSizeBySpeed()
  var i893 = data
  i892.enabled = !!i893[0]
  i892.x = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i893[1], i892.x)
  i892.y = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i893[2], i892.y)
  i892.z = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i893[3], i892.z)
  i892.separateAxes = !!i893[4]
  i892.range = new pc.Vec2( i893[5], i893[6] )
  return i892
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.SizeOverLifetimeModule"] = function (request, data, root) {
  var i894 = root || new pc.ParticleSystemSizeOverLifetime()
  var i895 = data
  i894.enabled = !!i895[0]
  i894.x = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i895[1], i894.x)
  i894.y = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i895[2], i894.y)
  i894.z = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i895[3], i894.z)
  i894.separateAxes = !!i895[4]
  return i894
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.TextureSheetAnimationModule"] = function (request, data, root) {
  var i896 = root || new pc.ParticleSystemTextureSheetAnimation()
  var i897 = data
  i896.enabled = !!i897[0]
  i896.mode = i897[1]
  i896.animation = i897[2]
  i896.numTilesX = i897[3]
  i896.numTilesY = i897[4]
  i896.useRandomRow = !!i897[5]
  i896.frameOverTime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i897[6], i896.frameOverTime)
  i896.startFrame = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i897[7], i896.startFrame)
  i896.cycleCount = i897[8]
  i896.rowIndex = i897[9]
  i896.flipU = i897[10]
  i896.flipV = i897[11]
  i896.spriteCount = i897[12]
  var i899 = i897[13]
  var i898 = []
  for(var i = 0; i < i899.length; i += 2) {
  request.r(i899[i + 0], i899[i + 1], 2, i898, '')
  }
  i896.sprites = i898
  return i896
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.VelocityOverLifetimeModule"] = function (request, data, root) {
  var i902 = root || new pc.ParticleSystemVelocityOverLifetime()
  var i903 = data
  i902.enabled = !!i903[0]
  i902.x = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i903[1], i902.x)
  i902.y = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i903[2], i902.y)
  i902.z = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i903[3], i902.z)
  i902.radial = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i903[4], i902.radial)
  i902.speedModifier = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i903[5], i902.speedModifier)
  i902.space = i903[6]
  i902.orbitalX = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i903[7], i902.orbitalX)
  i902.orbitalY = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i903[8], i902.orbitalY)
  i902.orbitalZ = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i903[9], i902.orbitalZ)
  i902.orbitalOffsetX = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i903[10], i902.orbitalOffsetX)
  i902.orbitalOffsetY = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i903[11], i902.orbitalOffsetY)
  i902.orbitalOffsetZ = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i903[12], i902.orbitalOffsetZ)
  return i902
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.NoiseModule"] = function (request, data, root) {
  var i904 = root || new pc.ParticleSystemNoise()
  var i905 = data
  i904.enabled = !!i905[0]
  i904.separateAxes = !!i905[1]
  i904.strengthX = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i905[2], i904.strengthX)
  i904.strengthY = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i905[3], i904.strengthY)
  i904.strengthZ = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i905[4], i904.strengthZ)
  i904.frequency = i905[5]
  i904.damping = !!i905[6]
  i904.octaveCount = i905[7]
  i904.octaveMultiplier = i905[8]
  i904.octaveScale = i905[9]
  i904.quality = i905[10]
  i904.scrollSpeed = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i905[11], i904.scrollSpeed)
  i904.scrollSpeedMultiplier = i905[12]
  i904.remapEnabled = !!i905[13]
  i904.remapX = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i905[14], i904.remapX)
  i904.remapY = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i905[15], i904.remapY)
  i904.remapZ = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i905[16], i904.remapZ)
  i904.positionAmount = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i905[17], i904.positionAmount)
  i904.rotationAmount = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i905[18], i904.rotationAmount)
  i904.sizeAmount = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i905[19], i904.sizeAmount)
  return i904
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.InheritVelocityModule"] = function (request, data, root) {
  var i906 = root || new pc.ParticleSystemInheritVelocity()
  var i907 = data
  i906.enabled = !!i907[0]
  i906.mode = i907[1]
  i906.curve = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i907[2], i906.curve)
  return i906
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ForceOverLifetimeModule"] = function (request, data, root) {
  var i908 = root || new pc.ParticleSystemForceOverLifetime()
  var i909 = data
  i908.enabled = !!i909[0]
  i908.x = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i909[1], i908.x)
  i908.y = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i909[2], i908.y)
  i908.z = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i909[3], i908.z)
  i908.space = i909[4]
  i908.randomized = !!i909[5]
  return i908
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.LimitVelocityOverLifetimeModule"] = function (request, data, root) {
  var i910 = root || new pc.ParticleSystemLimitVelocityOverLifetime()
  var i911 = data
  i910.enabled = !!i911[0]
  i910.limit = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i911[1], i910.limit)
  i910.limitX = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i911[2], i910.limitX)
  i910.limitY = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i911[3], i910.limitY)
  i910.limitZ = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i911[4], i910.limitZ)
  i910.dampen = i911[5]
  i910.separateAxes = !!i911[6]
  i910.space = i911[7]
  i910.drag = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i911[8], i910.drag)
  i910.multiplyDragByParticleSize = !!i911[9]
  i910.multiplyDragByParticleVelocity = !!i911[10]
  return i910
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.ParticleSystemRenderer"] = function (request, data, root) {
  var i912 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.ParticleSystemRenderer' )
  var i913 = data
  request.r(i913[0], i913[1], 0, i912, 'mesh')
  i912.meshCount = i913[2]
  i912.activeVertexStreamsCount = i913[3]
  i912.alignment = i913[4]
  i912.renderMode = i913[5]
  i912.sortMode = i913[6]
  i912.lengthScale = i913[7]
  i912.velocityScale = i913[8]
  i912.cameraVelocityScale = i913[9]
  i912.normalDirection = i913[10]
  i912.sortingFudge = i913[11]
  i912.minParticleSize = i913[12]
  i912.maxParticleSize = i913[13]
  i912.pivot = new pc.Vec3( i913[14], i913[15], i913[16] )
  request.r(i913[17], i913[18], 0, i912, 'trailMaterial')
  i912.applyActiveColorSpace = !!i913[19]
  i912.enabled = !!i913[20]
  request.r(i913[21], i913[22], 0, i912, 'sharedMaterial')
  var i915 = i913[23]
  var i914 = []
  for(var i = 0; i < i915.length; i += 2) {
  request.r(i915[i + 0], i915[i + 1], 2, i914, '')
  }
  i912.sharedMaterials = i914
  i912.receiveShadows = !!i913[24]
  i912.shadowCastingMode = i913[25]
  i912.sortingLayerID = i913[26]
  i912.sortingOrder = i913[27]
  i912.lightmapIndex = i913[28]
  i912.lightmapSceneIndex = i913[29]
  i912.lightmapScaleOffset = new pc.Vec4( i913[30], i913[31], i913[32], i913[33] )
  i912.lightProbeUsage = i913[34]
  i912.reflectionProbeUsage = i913[35]
  return i912
}

Deserializers["Luna.Unity.DTO.UnityEngine.Textures.Cubemap"] = function (request, data, root) {
  var i916 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Textures.Cubemap' )
  var i917 = data
  i916.name = i917[0]
  i916.atlasId = i917[1]
  i916.mipmapCount = i917[2]
  i916.hdr = !!i917[3]
  i916.size = i917[4]
  i916.anisoLevel = i917[5]
  i916.filterMode = i917[6]
  var i919 = i917[7]
  var i918 = []
  for(var i = 0; i < i919.length; i += 4) {
    i918.push( UnityEngine.Rect.MinMaxRect(i919[i + 0], i919[i + 1], i919[i + 2], i919[i + 3]) );
  }
  i916.rects = i918
  i916.wrapU = i917[8]
  i916.wrapV = i917[9]
  return i916
}

Deserializers["Luna.Unity.DTO.UnityEngine.Scene.Scene"] = function (request, data, root) {
  var i922 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Scene.Scene' )
  var i923 = data
  i922.name = i923[0]
  i922.index = i923[1]
  i922.startup = !!i923[2]
  return i922
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Camera"] = function (request, data, root) {
  var i924 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Camera' )
  var i925 = data
  i924.aspect = i925[0]
  i924.orthographic = !!i925[1]
  i924.orthographicSize = i925[2]
  i924.backgroundColor = new pc.Color(i925[3], i925[4], i925[5], i925[6])
  i924.nearClipPlane = i925[7]
  i924.farClipPlane = i925[8]
  i924.fieldOfView = i925[9]
  i924.depth = i925[10]
  i924.clearFlags = i925[11]
  i924.cullingMask = i925[12]
  i924.rect = i925[13]
  request.r(i925[14], i925[15], 0, i924, 'targetTexture')
  i924.usePhysicalProperties = !!i925[16]
  i924.focalLength = i925[17]
  i924.sensorSize = new pc.Vec2( i925[18], i925[19] )
  i924.lensShift = new pc.Vec2( i925[20], i925[21] )
  i924.gateFit = i925[22]
  i924.commandBufferCount = i925[23]
  i924.cameraType = i925[24]
  i924.enabled = !!i925[25]
  return i924
}

Deserializers["UnityEngine.Rendering.Universal.UniversalAdditionalCameraData"] = function (request, data, root) {
  var i926 = root || request.c( 'UnityEngine.Rendering.Universal.UniversalAdditionalCameraData' )
  var i927 = data
  i926.m_RenderShadows = !!i927[0]
  i926.m_RequiresDepthTextureOption = i927[1]
  i926.m_RequiresOpaqueTextureOption = i927[2]
  i926.m_CameraType = i927[3]
  var i929 = i927[4]
  var i928 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.Camera')))
  for(var i = 0; i < i929.length; i += 2) {
  request.r(i929[i + 0], i929[i + 1], 1, i928, '')
  }
  i926.m_Cameras = i928
  i926.m_RendererIndex = i927[5]
  i926.m_VolumeLayerMask = UnityEngine.LayerMask.FromIntegerValue( i927[6] )
  request.r(i927[7], i927[8], 0, i926, 'm_VolumeTrigger')
  i926.m_VolumeFrameworkUpdateModeOption = i927[9]
  i926.m_RenderPostProcessing = !!i927[10]
  i926.m_Antialiasing = i927[11]
  i926.m_AntialiasingQuality = i927[12]
  i926.m_StopNaN = !!i927[13]
  i926.m_Dithering = !!i927[14]
  i926.m_ClearDepth = !!i927[15]
  i926.m_AllowXRRendering = !!i927[16]
  i926.m_AllowHDROutput = !!i927[17]
  i926.m_UseScreenCoordOverride = !!i927[18]
  i926.m_ScreenSizeOverride = new pc.Vec4( i927[19], i927[20], i927[21], i927[22] )
  i926.m_ScreenCoordScaleBias = new pc.Vec4( i927[23], i927[24], i927[25], i927[26] )
  i926.m_RequiresDepthTexture = !!i927[27]
  i926.m_RequiresColorTexture = !!i927[28]
  i926.m_Version = i927[29]
  i926.m_TaaSettings = request.d('UnityEngine.Rendering.Universal.TemporalAA+Settings', i927[30], i926.m_TaaSettings)
  return i926
}

Deserializers["UnityEngine.Rendering.Universal.TemporalAA+Settings"] = function (request, data, root) {
  var i932 = root || request.c( 'UnityEngine.Rendering.Universal.TemporalAA+Settings' )
  var i933 = data
  i932.m_Quality = i933[0]
  i932.m_FrameInfluence = i933[1]
  i932.m_JitterScale = i933[2]
  i932.m_MipBias = i933[3]
  i932.m_VarianceClampScale = i933[4]
  i932.m_ContrastAdaptiveSharpening = i933[5]
  return i932
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Light"] = function (request, data, root) {
  var i934 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Light' )
  var i935 = data
  i934.type = i935[0]
  i934.color = new pc.Color(i935[1], i935[2], i935[3], i935[4])
  i934.cullingMask = i935[5]
  i934.intensity = i935[6]
  i934.range = i935[7]
  i934.spotAngle = i935[8]
  i934.shadows = i935[9]
  i934.shadowNormalBias = i935[10]
  i934.shadowBias = i935[11]
  i934.shadowStrength = i935[12]
  i934.shadowResolution = i935[13]
  i934.lightmapBakeType = i935[14]
  i934.renderMode = i935[15]
  request.r(i935[16], i935[17], 0, i934, 'cookie')
  i934.cookieSize = i935[18]
  i934.shadowNearPlane = i935[19]
  i934.enabled = !!i935[20]
  return i934
}

Deserializers["UnityEngine.Rendering.Universal.UniversalAdditionalLightData"] = function (request, data, root) {
  var i936 = root || request.c( 'UnityEngine.Rendering.Universal.UniversalAdditionalLightData' )
  var i937 = data
  i936.m_Version = i937[0]
  i936.m_UsePipelineSettings = !!i937[1]
  i936.m_AdditionalLightsShadowResolutionTier = i937[2]
  i936.m_LightLayerMask = i937[3]
  i936.m_RenderingLayers = i937[4]
  i936.m_CustomShadowLayers = !!i937[5]
  i936.m_ShadowLayerMask = i937[6]
  i936.m_ShadowRenderingLayers = i937[7]
  i936.m_LightCookieSize = new pc.Vec2( i937[8], i937[9] )
  i936.m_LightCookieOffset = new pc.Vec2( i937[10], i937[11] )
  i936.m_SoftShadowQuality = i937[12]
  return i936
}

Deserializers["UnityEngine.Rendering.Volume"] = function (request, data, root) {
  var i938 = root || request.c( 'UnityEngine.Rendering.Volume' )
  var i939 = data
  i938.priority = i939[0]
  i938.blendDistance = i939[1]
  i938.weight = i939[2]
  request.r(i939[3], i939[4], 0, i938, 'sharedProfile')
  i938.m_IsGlobal = !!i939[5]
  return i938
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.AudioSource"] = function (request, data, root) {
  var i940 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.AudioSource' )
  var i941 = data
  request.r(i941[0], i941[1], 0, i940, 'clip')
  request.r(i941[2], i941[3], 0, i940, 'outputAudioMixerGroup')
  i940.playOnAwake = !!i941[4]
  i940.loop = !!i941[5]
  i940.time = i941[6]
  i940.volume = i941[7]
  i940.pitch = i941[8]
  i940.enabled = !!i941[9]
  return i940
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.HingeJoint"] = function (request, data, root) {
  var i942 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.HingeJoint' )
  var i943 = data
  i942.useMotor = !!i943[0]
  i942.useLimits = !!i943[1]
  i942.useSpring = !!i943[2]
  i942.limits = request.d('UnityEngine.JointLimits', i943[3], i942.limits)
  i942.motor = request.d('UnityEngine.JointMotor', i943[4], i942.motor)
  i942.spring = request.d('UnityEngine.JointSpring', i943[5], i942.spring)
  request.r(i943[6], i943[7], 0, i942, 'connectedBody')
  i942.axis = new pc.Vec3( i943[8], i943[9], i943[10] )
  i942.anchor = new pc.Vec3( i943[11], i943[12], i943[13] )
  i942.connectedAnchor = new pc.Vec3( i943[14], i943[15], i943[16] )
  i942.autoConfigureConnectedAnchor = !!i943[17]
  i942.massScale = i943[18]
  i942.connectedMassScale = i943[19]
  i942.enableCollision = !!i943[20]
  i942.breakForce = i943[21]
  i942.breakTorque = i943[22]
  return i942
}

Deserializers["BasketBehavior"] = function (request, data, root) {
  var i944 = root || request.c( 'BasketBehavior' )
  var i945 = data
  i944.basketMoveDistance = i945[0]
  i944.basketMoveSpeed = i945[1]
  return i944
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.CapsuleCollider"] = function (request, data, root) {
  var i946 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.CapsuleCollider' )
  var i947 = data
  i946.center = new pc.Vec3( i947[0], i947[1], i947[2] )
  i946.radius = i947[3]
  i946.height = i947[4]
  i946.direction = i947[5]
  i946.enabled = !!i947[6]
  i946.isTrigger = !!i947[7]
  request.r(i947[8], i947[9], 0, i946, 'material')
  return i946
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.SkinnedMeshRenderer"] = function (request, data, root) {
  var i948 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.SkinnedMeshRenderer' )
  var i949 = data
  request.r(i949[0], i949[1], 0, i948, 'sharedMesh')
  var i951 = i949[2]
  var i950 = []
  for(var i = 0; i < i951.length; i += 2) {
  request.r(i951[i + 0], i951[i + 1], 2, i950, '')
  }
  i948.bones = i950
  i948.updateWhenOffscreen = !!i949[3]
  i948.localBounds = i949[4]
  request.r(i949[5], i949[6], 0, i948, 'rootBone')
  var i953 = i949[7]
  var i952 = []
  for(var i = 0; i < i953.length; i += 1) {
    i952.push( request.d('Luna.Unity.DTO.UnityEngine.Components.SkinnedMeshRenderer+BlendShapeWeight', i953[i + 0]) );
  }
  i948.blendShapesWeights = i952
  i948.enabled = !!i949[8]
  request.r(i949[9], i949[10], 0, i948, 'sharedMaterial')
  var i955 = i949[11]
  var i954 = []
  for(var i = 0; i < i955.length; i += 2) {
  request.r(i955[i + 0], i955[i + 1], 2, i954, '')
  }
  i948.sharedMaterials = i954
  i948.receiveShadows = !!i949[12]
  i948.shadowCastingMode = i949[13]
  i948.sortingLayerID = i949[14]
  i948.sortingOrder = i949[15]
  i948.lightmapIndex = i949[16]
  i948.lightmapSceneIndex = i949[17]
  i948.lightmapScaleOffset = new pc.Vec4( i949[18], i949[19], i949[20], i949[21] )
  i948.lightProbeUsage = i949[22]
  i948.reflectionProbeUsage = i949[23]
  return i948
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.SkinnedMeshRenderer+BlendShapeWeight"] = function (request, data, root) {
  var i960 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.SkinnedMeshRenderer+BlendShapeWeight' )
  var i961 = data
  i960.weight = i961[0]
  return i960
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.BoxCollider"] = function (request, data, root) {
  var i962 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.BoxCollider' )
  var i963 = data
  i962.center = new pc.Vec3( i963[0], i963[1], i963[2] )
  i962.size = new pc.Vec3( i963[3], i963[4], i963[5] )
  i962.enabled = !!i963[6]
  i962.isTrigger = !!i963[7]
  request.r(i963[8], i963[9], 0, i962, 'material')
  return i962
}

Deserializers["InputManager"] = function (request, data, root) {
  var i964 = root || request.c( 'InputManager' )
  var i965 = data
  request.r(i965[0], i965[1], 0, i964, 'mainCamera')
  i964.ballLayer = UnityEngine.LayerMask.FromIntegerValue( i965[2] )
  i964.ballSelectionLayer = UnityEngine.LayerMask.FromIntegerValue( i965[3] )
  request.r(i965[4], i965[5], 0, i964, 'ballSelectionParent')
  request.r(i965[6], i965[7], 0, i964, 'ballSelectionRing')
  i964.minHoldTime = i965[8]
  i964.maxFlickTime = i965[9]
  i964.minHoldDistance = i965[10]
  i964.minFlickDistance = i965[11]
  i964.throwForce = i965[12]
  i964.maxThrowHeight = i965[13]
  i964.maxThrowDepth = i965[14]
  i964.maxThrowHorizontal = i965[15]
  i964.minThrowHorizontal = i965[16]
  i964.minThrowSpeed = i965[17]
  i964.maxThrowSpeed = i965[18]
  i964.throwSensitivity = i965[19]
  i964.fixedZPosition = i965[20]
  i964.selectionDragSpeed = i965[21]
  return i964
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.RectTransform"] = function (request, data, root) {
  var i966 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.RectTransform' )
  var i967 = data
  i966.pivot = new pc.Vec2( i967[0], i967[1] )
  i966.anchorMin = new pc.Vec2( i967[2], i967[3] )
  i966.anchorMax = new pc.Vec2( i967[4], i967[5] )
  i966.sizeDelta = new pc.Vec2( i967[6], i967[7] )
  i966.anchoredPosition3D = new pc.Vec3( i967[8], i967[9], i967[10] )
  i966.rotation = new pc.Quat(i967[11], i967[12], i967[13], i967[14])
  i966.scale = new pc.Vec3( i967[15], i967[16], i967[17] )
  return i966
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Canvas"] = function (request, data, root) {
  var i968 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Canvas' )
  var i969 = data
  i968.planeDistance = i969[0]
  i968.referencePixelsPerUnit = i969[1]
  i968.isFallbackOverlay = !!i969[2]
  i968.renderMode = i969[3]
  i968.renderOrder = i969[4]
  i968.sortingLayerName = i969[5]
  i968.sortingOrder = i969[6]
  i968.scaleFactor = i969[7]
  request.r(i969[8], i969[9], 0, i968, 'worldCamera')
  i968.overrideSorting = !!i969[10]
  i968.pixelPerfect = !!i969[11]
  i968.targetDisplay = i969[12]
  i968.overridePixelPerfect = !!i969[13]
  i968.enabled = !!i969[14]
  return i968
}

Deserializers["UnityEngine.UI.CanvasScaler"] = function (request, data, root) {
  var i970 = root || request.c( 'UnityEngine.UI.CanvasScaler' )
  var i971 = data
  i970.m_UiScaleMode = i971[0]
  i970.m_ReferencePixelsPerUnit = i971[1]
  i970.m_ScaleFactor = i971[2]
  i970.m_ReferenceResolution = new pc.Vec2( i971[3], i971[4] )
  i970.m_ScreenMatchMode = i971[5]
  i970.m_MatchWidthOrHeight = i971[6]
  i970.m_PhysicalUnit = i971[7]
  i970.m_FallbackScreenDPI = i971[8]
  i970.m_DefaultSpriteDPI = i971[9]
  i970.m_DynamicPixelsPerUnit = i971[10]
  i970.m_PresetInfoIsWorld = !!i971[11]
  return i970
}

Deserializers["UnityEngine.UI.GraphicRaycaster"] = function (request, data, root) {
  var i972 = root || request.c( 'UnityEngine.UI.GraphicRaycaster' )
  var i973 = data
  i972.m_IgnoreReversedGraphics = !!i973[0]
  i972.m_BlockingObjects = i973[1]
  i972.m_BlockingMask = UnityEngine.LayerMask.FromIntegerValue( i973[2] )
  return i972
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.CanvasRenderer"] = function (request, data, root) {
  var i974 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.CanvasRenderer' )
  var i975 = data
  i974.cullTransparentMesh = !!i975[0]
  return i974
}

Deserializers["UnityEngine.UI.Image"] = function (request, data, root) {
  var i976 = root || request.c( 'UnityEngine.UI.Image' )
  var i977 = data
  request.r(i977[0], i977[1], 0, i976, 'm_Sprite')
  i976.m_Type = i977[2]
  i976.m_PreserveAspect = !!i977[3]
  i976.m_FillCenter = !!i977[4]
  i976.m_FillMethod = i977[5]
  i976.m_FillAmount = i977[6]
  i976.m_FillClockwise = !!i977[7]
  i976.m_FillOrigin = i977[8]
  i976.m_UseSpriteMesh = !!i977[9]
  i976.m_PixelsPerUnitMultiplier = i977[10]
  request.r(i977[11], i977[12], 0, i976, 'm_Material')
  i976.m_Maskable = !!i977[13]
  i976.m_Color = new pc.Color(i977[14], i977[15], i977[16], i977[17])
  i976.m_RaycastTarget = !!i977[18]
  i976.m_RaycastPadding = new pc.Vec4( i977[19], i977[20], i977[21], i977[22] )
  return i976
}

Deserializers["TMPro.TextMeshProUGUI"] = function (request, data, root) {
  var i978 = root || request.c( 'TMPro.TextMeshProUGUI' )
  var i979 = data
  i978.m_hasFontAssetChanged = !!i979[0]
  request.r(i979[1], i979[2], 0, i978, 'm_baseMaterial')
  i978.m_maskOffset = new pc.Vec4( i979[3], i979[4], i979[5], i979[6] )
  i978.m_text = i979[7]
  i978.m_isRightToLeft = !!i979[8]
  request.r(i979[9], i979[10], 0, i978, 'm_fontAsset')
  request.r(i979[11], i979[12], 0, i978, 'm_sharedMaterial')
  var i981 = i979[13]
  var i980 = []
  for(var i = 0; i < i981.length; i += 2) {
  request.r(i981[i + 0], i981[i + 1], 2, i980, '')
  }
  i978.m_fontSharedMaterials = i980
  request.r(i979[14], i979[15], 0, i978, 'm_fontMaterial')
  var i983 = i979[16]
  var i982 = []
  for(var i = 0; i < i983.length; i += 2) {
  request.r(i983[i + 0], i983[i + 1], 2, i982, '')
  }
  i978.m_fontMaterials = i982
  i978.m_fontColor32 = UnityEngine.Color32.ConstructColor(i979[17], i979[18], i979[19], i979[20])
  i978.m_fontColor = new pc.Color(i979[21], i979[22], i979[23], i979[24])
  i978.m_enableVertexGradient = !!i979[25]
  i978.m_colorMode = i979[26]
  i978.m_fontColorGradient = request.d('TMPro.VertexGradient', i979[27], i978.m_fontColorGradient)
  request.r(i979[28], i979[29], 0, i978, 'm_fontColorGradientPreset')
  request.r(i979[30], i979[31], 0, i978, 'm_spriteAsset')
  i978.m_tintAllSprites = !!i979[32]
  request.r(i979[33], i979[34], 0, i978, 'm_StyleSheet')
  i978.m_TextStyleHashCode = i979[35]
  i978.m_overrideHtmlColors = !!i979[36]
  i978.m_faceColor = UnityEngine.Color32.ConstructColor(i979[37], i979[38], i979[39], i979[40])
  i978.m_fontSize = i979[41]
  i978.m_fontSizeBase = i979[42]
  i978.m_fontWeight = i979[43]
  i978.m_enableAutoSizing = !!i979[44]
  i978.m_fontSizeMin = i979[45]
  i978.m_fontSizeMax = i979[46]
  i978.m_fontStyle = i979[47]
  i978.m_HorizontalAlignment = i979[48]
  i978.m_VerticalAlignment = i979[49]
  i978.m_textAlignment = i979[50]
  i978.m_characterSpacing = i979[51]
  i978.m_wordSpacing = i979[52]
  i978.m_lineSpacing = i979[53]
  i978.m_lineSpacingMax = i979[54]
  i978.m_paragraphSpacing = i979[55]
  i978.m_charWidthMaxAdj = i979[56]
  i978.m_TextWrappingMode = i979[57]
  i978.m_wordWrappingRatios = i979[58]
  i978.m_overflowMode = i979[59]
  request.r(i979[60], i979[61], 0, i978, 'm_linkedTextComponent')
  request.r(i979[62], i979[63], 0, i978, 'parentLinkedComponent')
  i978.m_enableKerning = !!i979[64]
  var i985 = i979[65]
  var i984 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.TextCore.OTL_FeatureTag')))
  for(var i = 0; i < i985.length; i += 1) {
    i984.add(i985[i + 0]);
  }
  i978.m_ActiveFontFeatures = i984
  i978.m_enableExtraPadding = !!i979[66]
  i978.checkPaddingRequired = !!i979[67]
  i978.m_isRichText = !!i979[68]
  i978.m_parseCtrlCharacters = !!i979[69]
  i978.m_isOrthographic = !!i979[70]
  i978.m_isCullingEnabled = !!i979[71]
  i978.m_horizontalMapping = i979[72]
  i978.m_verticalMapping = i979[73]
  i978.m_uvLineOffset = i979[74]
  i978.m_geometrySortingOrder = i979[75]
  i978.m_IsTextObjectScaleStatic = !!i979[76]
  i978.m_VertexBufferAutoSizeReduction = !!i979[77]
  i978.m_useMaxVisibleDescender = !!i979[78]
  i978.m_pageToDisplay = i979[79]
  i978.m_margin = new pc.Vec4( i979[80], i979[81], i979[82], i979[83] )
  i978.m_isUsingLegacyAnimationComponent = !!i979[84]
  i978.m_isVolumetricText = !!i979[85]
  request.r(i979[86], i979[87], 0, i978, 'm_Material')
  i978.m_EmojiFallbackSupport = !!i979[88]
  i978.m_Maskable = !!i979[89]
  i978.m_Color = new pc.Color(i979[90], i979[91], i979[92], i979[93])
  i978.m_RaycastTarget = !!i979[94]
  i978.m_RaycastPadding = new pc.Vec4( i979[95], i979[96], i979[97], i979[98] )
  return i978
}

Deserializers["TMPro.VertexGradient"] = function (request, data, root) {
  var i986 = root || request.c( 'TMPro.VertexGradient' )
  var i987 = data
  i986.topLeft = new pc.Color(i987[0], i987[1], i987[2], i987[3])
  i986.topRight = new pc.Color(i987[4], i987[5], i987[6], i987[7])
  i986.bottomLeft = new pc.Color(i987[8], i987[9], i987[10], i987[11])
  i986.bottomRight = new pc.Color(i987[12], i987[13], i987[14], i987[15])
  return i986
}

Deserializers["UnityEngine.UI.VerticalLayoutGroup"] = function (request, data, root) {
  var i990 = root || request.c( 'UnityEngine.UI.VerticalLayoutGroup' )
  var i991 = data
  i990.m_Spacing = i991[0]
  i990.m_ChildForceExpandWidth = !!i991[1]
  i990.m_ChildForceExpandHeight = !!i991[2]
  i990.m_ChildControlWidth = !!i991[3]
  i990.m_ChildControlHeight = !!i991[4]
  i990.m_ChildScaleWidth = !!i991[5]
  i990.m_ChildScaleHeight = !!i991[6]
  i990.m_ReverseArrangement = !!i991[7]
  i990.m_Padding = UnityEngine.RectOffset.FromPaddings(i991[8], i991[9], i991[10], i991[11])
  i990.m_ChildAlignment = i991[12]
  return i990
}

Deserializers["UnityEngine.UI.Button"] = function (request, data, root) {
  var i992 = root || request.c( 'UnityEngine.UI.Button' )
  var i993 = data
  i992.m_OnClick = request.d('UnityEngine.UI.Button+ButtonClickedEvent', i993[0], i992.m_OnClick)
  i992.m_Navigation = request.d('UnityEngine.UI.Navigation', i993[1], i992.m_Navigation)
  i992.m_Transition = i993[2]
  i992.m_Colors = request.d('UnityEngine.UI.ColorBlock', i993[3], i992.m_Colors)
  i992.m_SpriteState = request.d('UnityEngine.UI.SpriteState', i993[4], i992.m_SpriteState)
  i992.m_AnimationTriggers = request.d('UnityEngine.UI.AnimationTriggers', i993[5], i992.m_AnimationTriggers)
  i992.m_Interactable = !!i993[6]
  request.r(i993[7], i993[8], 0, i992, 'm_TargetGraphic')
  return i992
}

Deserializers["UnityEngine.UI.Button+ButtonClickedEvent"] = function (request, data, root) {
  var i994 = root || request.c( 'UnityEngine.UI.Button+ButtonClickedEvent' )
  var i995 = data
  i994.m_PersistentCalls = request.d('UnityEngine.Events.PersistentCallGroup', i995[0], i994.m_PersistentCalls)
  return i994
}

Deserializers["UnityEngine.Events.PersistentCallGroup"] = function (request, data, root) {
  var i996 = root || request.c( 'UnityEngine.Events.PersistentCallGroup' )
  var i997 = data
  var i999 = i997[0]
  var i998 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.Events.PersistentCall')))
  for(var i = 0; i < i999.length; i += 1) {
    i998.add(request.d('UnityEngine.Events.PersistentCall', i999[i + 0]));
  }
  i996.m_Calls = i998
  return i996
}

Deserializers["UnityEngine.Events.PersistentCall"] = function (request, data, root) {
  var i1002 = root || request.c( 'UnityEngine.Events.PersistentCall' )
  var i1003 = data
  request.r(i1003[0], i1003[1], 0, i1002, 'm_Target')
  i1002.m_TargetAssemblyTypeName = i1003[2]
  i1002.m_MethodName = i1003[3]
  i1002.m_Mode = i1003[4]
  i1002.m_Arguments = request.d('UnityEngine.Events.ArgumentCache', i1003[5], i1002.m_Arguments)
  i1002.m_CallState = i1003[6]
  return i1002
}

Deserializers["UnityEngine.Events.ArgumentCache"] = function (request, data, root) {
  var i1004 = root || request.c( 'UnityEngine.Events.ArgumentCache' )
  var i1005 = data
  request.r(i1005[0], i1005[1], 0, i1004, 'm_ObjectArgument')
  i1004.m_ObjectArgumentAssemblyTypeName = i1005[2]
  i1004.m_IntArgument = i1005[3]
  i1004.m_FloatArgument = i1005[4]
  i1004.m_StringArgument = i1005[5]
  i1004.m_BoolArgument = !!i1005[6]
  return i1004
}

Deserializers["UnityEngine.UI.Navigation"] = function (request, data, root) {
  var i1006 = root || request.c( 'UnityEngine.UI.Navigation' )
  var i1007 = data
  i1006.m_Mode = i1007[0]
  i1006.m_WrapAround = !!i1007[1]
  request.r(i1007[2], i1007[3], 0, i1006, 'm_SelectOnUp')
  request.r(i1007[4], i1007[5], 0, i1006, 'm_SelectOnDown')
  request.r(i1007[6], i1007[7], 0, i1006, 'm_SelectOnLeft')
  request.r(i1007[8], i1007[9], 0, i1006, 'm_SelectOnRight')
  return i1006
}

Deserializers["UnityEngine.UI.ColorBlock"] = function (request, data, root) {
  var i1008 = root || request.c( 'UnityEngine.UI.ColorBlock' )
  var i1009 = data
  i1008.m_NormalColor = new pc.Color(i1009[0], i1009[1], i1009[2], i1009[3])
  i1008.m_HighlightedColor = new pc.Color(i1009[4], i1009[5], i1009[6], i1009[7])
  i1008.m_PressedColor = new pc.Color(i1009[8], i1009[9], i1009[10], i1009[11])
  i1008.m_SelectedColor = new pc.Color(i1009[12], i1009[13], i1009[14], i1009[15])
  i1008.m_DisabledColor = new pc.Color(i1009[16], i1009[17], i1009[18], i1009[19])
  i1008.m_ColorMultiplier = i1009[20]
  i1008.m_FadeDuration = i1009[21]
  return i1008
}

Deserializers["UnityEngine.UI.SpriteState"] = function (request, data, root) {
  var i1010 = root || request.c( 'UnityEngine.UI.SpriteState' )
  var i1011 = data
  request.r(i1011[0], i1011[1], 0, i1010, 'm_HighlightedSprite')
  request.r(i1011[2], i1011[3], 0, i1010, 'm_PressedSprite')
  request.r(i1011[4], i1011[5], 0, i1010, 'm_SelectedSprite')
  request.r(i1011[6], i1011[7], 0, i1010, 'm_DisabledSprite')
  return i1010
}

Deserializers["UnityEngine.UI.AnimationTriggers"] = function (request, data, root) {
  var i1012 = root || request.c( 'UnityEngine.UI.AnimationTriggers' )
  var i1013 = data
  i1012.m_NormalTrigger = i1013[0]
  i1012.m_HighlightedTrigger = i1013[1]
  i1012.m_PressedTrigger = i1013[2]
  i1012.m_SelectedTrigger = i1013[3]
  i1012.m_DisabledTrigger = i1013[4]
  return i1012
}

Deserializers["UnityEngine.UI.HorizontalLayoutGroup"] = function (request, data, root) {
  var i1014 = root || request.c( 'UnityEngine.UI.HorizontalLayoutGroup' )
  var i1015 = data
  i1014.m_Spacing = i1015[0]
  i1014.m_ChildForceExpandWidth = !!i1015[1]
  i1014.m_ChildForceExpandHeight = !!i1015[2]
  i1014.m_ChildControlWidth = !!i1015[3]
  i1014.m_ChildControlHeight = !!i1015[4]
  i1014.m_ChildScaleWidth = !!i1015[5]
  i1014.m_ChildScaleHeight = !!i1015[6]
  i1014.m_ReverseArrangement = !!i1015[7]
  i1014.m_Padding = UnityEngine.RectOffset.FromPaddings(i1015[8], i1015[9], i1015[10], i1015[11])
  i1014.m_ChildAlignment = i1015[12]
  return i1014
}

Deserializers["UnityEngine.EventSystems.EventSystem"] = function (request, data, root) {
  var i1016 = root || request.c( 'UnityEngine.EventSystems.EventSystem' )
  var i1017 = data
  request.r(i1017[0], i1017[1], 0, i1016, 'm_FirstSelected')
  i1016.m_sendNavigationEvents = !!i1017[2]
  i1016.m_DragThreshold = i1017[3]
  return i1016
}

Deserializers["UnityEngine.EventSystems.StandaloneInputModule"] = function (request, data, root) {
  var i1018 = root || request.c( 'UnityEngine.EventSystems.StandaloneInputModule' )
  var i1019 = data
  i1018.m_HorizontalAxis = i1019[0]
  i1018.m_VerticalAxis = i1019[1]
  i1018.m_SubmitButton = i1019[2]
  i1018.m_CancelButton = i1019[3]
  i1018.m_InputActionsPerSecond = i1019[4]
  i1018.m_RepeatDelay = i1019[5]
  i1018.m_ForceModuleActive = !!i1019[6]
  i1018.m_SendPointerHoverToParent = !!i1019[7]
  return i1018
}

Deserializers["GameManager"] = function (request, data, root) {
  var i1020 = root || request.c( 'GameManager' )
  var i1021 = data
  i1020.scoreBase = i1021[0]
  i1020.scoreDunk = i1021[1]
  i1020.timeLimit = i1021[2]
  i1020.timeBonus = i1021[3]
  i1020.targetFPS = i1021[4]
  i1020.minStreakStart = i1021[5]
  request.r(i1021[6], i1021[7], 0, i1020, 'basket')
  var i1023 = i1021[8]
  var i1022 = []
  for(var i = 0; i < i1023.length; i += 1) {
    i1022.push( i1023[i + 0] );
  }
  i1020.quotesScoring = i1022
  var i1025 = i1021[9]
  var i1024 = []
  for(var i = 0; i < i1025.length; i += 1) {
    i1024.push( i1025[i + 0] );
  }
  i1020.quotesBonuses = i1024
  request.r(i1021[10], i1021[11], 0, i1020, 'inputManager')
  var i1027 = i1021[12]
  var i1026 = []
  for(var i = 0; i < i1027.length; i += 2) {
  request.r(i1027[i + 0], i1027[i + 1], 2, i1026, '')
  }
  i1020.ballMaterials = i1026
  var i1029 = i1021[13]
  var i1028 = []
  for(var i = 0; i < i1029.length; i += 2) {
  request.r(i1029[i + 0], i1029[i + 1], 2, i1028, '')
  }
  i1020.ballInScene = i1028
  var i1031 = i1021[14]
  var i1030 = []
  for(var i = 0; i < i1031.length; i += 2) {
  request.r(i1031[i + 0], i1031[i + 1], 2, i1030, '')
  }
  i1020.basketAudio = i1030
  var i1033 = i1021[15]
  var i1032 = []
  for(var i = 0; i < i1033.length; i += 2) {
  request.r(i1033[i + 0], i1033[i + 1], 2, i1032, '')
  }
  i1020.netAudio = i1032
  request.r(i1021[16], i1021[17], 0, i1020, 'perfectAudio')
  request.r(i1021[18], i1021[19], 0, i1020, 'globalVolume')
  request.r(i1021[20], i1021[21], 0, i1020, 'perfectEffect')
  request.r(i1021[22], i1021[23], 0, i1020, 'basketEffect')
  request.r(i1021[24], i1021[25], 0, i1020, 'currentScoreText')
  request.r(i1021[26], i1021[27], 0, i1020, 'highScoreText')
  request.r(i1021[28], i1021[29], 0, i1020, 'timeText')
  request.r(i1021[30], i1021[31], 0, i1020, 'quoteText')
  request.r(i1021[32], i1021[33], 0, i1020, 'playingOverlay')
  request.r(i1021[34], i1021[35], 0, i1020, 'selectingBallOverlay')
  request.r(i1021[36], i1021[37], 0, i1020, 'selectBallButton')
  request.r(i1021[38], i1021[39], 0, i1020, 'moveBasketButton')
  request.r(i1021[40], i1021[41], 0, i1020, 'restartButton')
  request.r(i1021[42], i1021[43], 0, i1020, 'confirmBallButton')
  request.r(i1021[44], i1021[45], 0, i1020, 'backToGameButton')
  request.r(i1021[46], i1021[47], 0, i1020, 'randomBallButton')
  request.r(i1021[48], i1021[49], 0, i1020, 'mainCamera')
  request.r(i1021[50], i1021[51], 0, i1020, 'selectionCamera')
  request.r(i1021[52], i1021[53], 0, i1020, 'selectionCameraGameObject')
  request.r(i1021[54], i1021[55], 0, i1020, 'uncheckedSprite')
  request.r(i1021[56], i1021[57], 0, i1020, 'checkedSprite')
  request.r(i1021[58], i1021[59], 0, i1020, 'rotateRing1')
  return i1020
}

Deserializers["LunaGameManager"] = function (request, data, root) {
  var i1040 = root || request.c( 'LunaGameManager' )
  var i1041 = data
  i1040.enableLunaAnalytics = !!i1041[0]
  i1040.maxParticles = i1041[1]
  return i1040
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.RenderSettings"] = function (request, data, root) {
  var i1042 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.RenderSettings' )
  var i1043 = data
  i1042.ambientIntensity = i1043[0]
  i1042.reflectionIntensity = i1043[1]
  i1042.ambientMode = i1043[2]
  i1042.ambientLight = new pc.Color(i1043[3], i1043[4], i1043[5], i1043[6])
  i1042.ambientSkyColor = new pc.Color(i1043[7], i1043[8], i1043[9], i1043[10])
  i1042.ambientGroundColor = new pc.Color(i1043[11], i1043[12], i1043[13], i1043[14])
  i1042.ambientEquatorColor = new pc.Color(i1043[15], i1043[16], i1043[17], i1043[18])
  i1042.fogColor = new pc.Color(i1043[19], i1043[20], i1043[21], i1043[22])
  i1042.fogEndDistance = i1043[23]
  i1042.fogStartDistance = i1043[24]
  i1042.fogDensity = i1043[25]
  i1042.fog = !!i1043[26]
  request.r(i1043[27], i1043[28], 0, i1042, 'skybox')
  i1042.fogMode = i1043[29]
  var i1045 = i1043[30]
  var i1044 = []
  for(var i = 0; i < i1045.length; i += 1) {
    i1044.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+Lightmap', i1045[i + 0]) );
  }
  i1042.lightmaps = i1044
  i1042.lightProbes = request.d('Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+LightProbes', i1043[31], i1042.lightProbes)
  i1042.lightmapsMode = i1043[32]
  i1042.mixedBakeMode = i1043[33]
  i1042.environmentLightingMode = i1043[34]
  i1042.ambientProbe = new pc.SphericalHarmonicsL2(i1043[35])
  i1042.referenceAmbientProbe = new pc.SphericalHarmonicsL2(i1043[36])
  i1042.useReferenceAmbientProbe = !!i1043[37]
  request.r(i1043[38], i1043[39], 0, i1042, 'customReflection')
  request.r(i1043[40], i1043[41], 0, i1042, 'defaultReflection')
  i1042.defaultReflectionMode = i1043[42]
  i1042.defaultReflectionResolution = i1043[43]
  i1042.sunLightObjectId = i1043[44]
  i1042.pixelLightCount = i1043[45]
  i1042.defaultReflectionHDR = !!i1043[46]
  i1042.hasLightDataAsset = !!i1043[47]
  i1042.hasManualGenerate = !!i1043[48]
  return i1042
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+Lightmap"] = function (request, data, root) {
  var i1048 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+Lightmap' )
  var i1049 = data
  request.r(i1049[0], i1049[1], 0, i1048, 'lightmapColor')
  request.r(i1049[2], i1049[3], 0, i1048, 'lightmapDirection')
  return i1048
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+LightProbes"] = function (request, data, root) {
  var i1050 = root || new UnityEngine.LightProbes()
  var i1051 = data
  return i1050
}

Deserializers["UnityEngine.Rendering.UI.DebugUIHandlerCanvas"] = function (request, data, root) {
  var i1058 = root || request.c( 'UnityEngine.Rendering.UI.DebugUIHandlerCanvas' )
  var i1059 = data
  request.r(i1059[0], i1059[1], 0, i1058, 'panelPrefab')
  var i1061 = i1059[2]
  var i1060 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.Rendering.UI.DebugUIPrefabBundle')))
  for(var i = 0; i < i1061.length; i += 1) {
    i1060.add(request.d('UnityEngine.Rendering.UI.DebugUIPrefabBundle', i1061[i + 0]));
  }
  i1058.prefabs = i1060
  return i1058
}

Deserializers["UnityEngine.Rendering.UI.DebugUIPrefabBundle"] = function (request, data, root) {
  var i1064 = root || request.c( 'UnityEngine.Rendering.UI.DebugUIPrefabBundle' )
  var i1065 = data
  i1064.type = i1065[0]
  request.r(i1065[1], i1065[2], 0, i1064, 'prefab')
  return i1064
}

Deserializers["UnityEngine.UI.ContentSizeFitter"] = function (request, data, root) {
  var i1066 = root || request.c( 'UnityEngine.UI.ContentSizeFitter' )
  var i1067 = data
  i1066.m_HorizontalFit = i1067[0]
  i1066.m_VerticalFit = i1067[1]
  return i1066
}

Deserializers["UnityEngine.Rendering.UI.DebugUIHandlerContainer"] = function (request, data, root) {
  var i1068 = root || request.c( 'UnityEngine.Rendering.UI.DebugUIHandlerContainer' )
  var i1069 = data
  request.r(i1069[0], i1069[1], 0, i1068, 'contentHolder')
  return i1068
}

Deserializers["UnityEngine.Rendering.UI.DebugUIHandlerPanel"] = function (request, data, root) {
  var i1070 = root || request.c( 'UnityEngine.Rendering.UI.DebugUIHandlerPanel' )
  var i1071 = data
  request.r(i1071[0], i1071[1], 0, i1070, 'nameLabel')
  request.r(i1071[2], i1071[3], 0, i1070, 'scrollRect')
  request.r(i1071[4], i1071[5], 0, i1070, 'viewport')
  request.r(i1071[6], i1071[7], 0, i1070, 'Canvas')
  return i1070
}

Deserializers["UnityEngine.UI.LayoutElement"] = function (request, data, root) {
  var i1072 = root || request.c( 'UnityEngine.UI.LayoutElement' )
  var i1073 = data
  i1072.m_IgnoreLayout = !!i1073[0]
  i1072.m_MinWidth = i1073[1]
  i1072.m_MinHeight = i1073[2]
  i1072.m_PreferredWidth = i1073[3]
  i1072.m_PreferredHeight = i1073[4]
  i1072.m_FlexibleWidth = i1073[5]
  i1072.m_FlexibleHeight = i1073[6]
  i1072.m_LayoutPriority = i1073[7]
  return i1072
}

Deserializers["UnityEngine.UI.Text"] = function (request, data, root) {
  var i1074 = root || request.c( 'UnityEngine.UI.Text' )
  var i1075 = data
  i1074.m_FontData = request.d('UnityEngine.UI.FontData', i1075[0], i1074.m_FontData)
  i1074.m_Text = i1075[1]
  request.r(i1075[2], i1075[3], 0, i1074, 'm_Material')
  i1074.m_Maskable = !!i1075[4]
  i1074.m_Color = new pc.Color(i1075[5], i1075[6], i1075[7], i1075[8])
  i1074.m_RaycastTarget = !!i1075[9]
  i1074.m_RaycastPadding = new pc.Vec4( i1075[10], i1075[11], i1075[12], i1075[13] )
  return i1074
}

Deserializers["UnityEngine.UI.FontData"] = function (request, data, root) {
  var i1076 = root || request.c( 'UnityEngine.UI.FontData' )
  var i1077 = data
  request.r(i1077[0], i1077[1], 0, i1076, 'm_Font')
  i1076.m_FontSize = i1077[2]
  i1076.m_FontStyle = i1077[3]
  i1076.m_BestFit = !!i1077[4]
  i1076.m_MinSize = i1077[5]
  i1076.m_MaxSize = i1077[6]
  i1076.m_Alignment = i1077[7]
  i1076.m_AlignByGeometry = !!i1077[8]
  i1076.m_RichText = !!i1077[9]
  i1076.m_HorizontalOverflow = i1077[10]
  i1076.m_VerticalOverflow = i1077[11]
  i1076.m_LineSpacing = i1077[12]
  return i1076
}

Deserializers["UnityEngine.UI.ScrollRect"] = function (request, data, root) {
  var i1078 = root || request.c( 'UnityEngine.UI.ScrollRect' )
  var i1079 = data
  request.r(i1079[0], i1079[1], 0, i1078, 'm_Content')
  i1078.m_Horizontal = !!i1079[2]
  i1078.m_Vertical = !!i1079[3]
  i1078.m_MovementType = i1079[4]
  i1078.m_Elasticity = i1079[5]
  i1078.m_Inertia = !!i1079[6]
  i1078.m_DecelerationRate = i1079[7]
  i1078.m_ScrollSensitivity = i1079[8]
  request.r(i1079[9], i1079[10], 0, i1078, 'm_Viewport')
  request.r(i1079[11], i1079[12], 0, i1078, 'm_HorizontalScrollbar')
  request.r(i1079[13], i1079[14], 0, i1078, 'm_VerticalScrollbar')
  i1078.m_HorizontalScrollbarVisibility = i1079[15]
  i1078.m_VerticalScrollbarVisibility = i1079[16]
  i1078.m_HorizontalScrollbarSpacing = i1079[17]
  i1078.m_VerticalScrollbarSpacing = i1079[18]
  i1078.m_OnValueChanged = request.d('UnityEngine.UI.ScrollRect+ScrollRectEvent', i1079[19], i1078.m_OnValueChanged)
  return i1078
}

Deserializers["UnityEngine.UI.ScrollRect+ScrollRectEvent"] = function (request, data, root) {
  var i1080 = root || request.c( 'UnityEngine.UI.ScrollRect+ScrollRectEvent' )
  var i1081 = data
  i1080.m_PersistentCalls = request.d('UnityEngine.Events.PersistentCallGroup', i1081[0], i1080.m_PersistentCalls)
  return i1080
}

Deserializers["UnityEngine.UI.Mask"] = function (request, data, root) {
  var i1082 = root || request.c( 'UnityEngine.UI.Mask' )
  var i1083 = data
  i1082.m_ShowMaskGraphic = !!i1083[0]
  return i1082
}

Deserializers["UnityEngine.UI.Scrollbar"] = function (request, data, root) {
  var i1084 = root || request.c( 'UnityEngine.UI.Scrollbar' )
  var i1085 = data
  request.r(i1085[0], i1085[1], 0, i1084, 'm_HandleRect')
  i1084.m_Direction = i1085[2]
  i1084.m_Value = i1085[3]
  i1084.m_Size = i1085[4]
  i1084.m_NumberOfSteps = i1085[5]
  i1084.m_OnValueChanged = request.d('UnityEngine.UI.Scrollbar+ScrollEvent', i1085[6], i1084.m_OnValueChanged)
  i1084.m_Navigation = request.d('UnityEngine.UI.Navigation', i1085[7], i1084.m_Navigation)
  i1084.m_Transition = i1085[8]
  i1084.m_Colors = request.d('UnityEngine.UI.ColorBlock', i1085[9], i1084.m_Colors)
  i1084.m_SpriteState = request.d('UnityEngine.UI.SpriteState', i1085[10], i1084.m_SpriteState)
  i1084.m_AnimationTriggers = request.d('UnityEngine.UI.AnimationTriggers', i1085[11], i1084.m_AnimationTriggers)
  i1084.m_Interactable = !!i1085[12]
  request.r(i1085[13], i1085[14], 0, i1084, 'm_TargetGraphic')
  return i1084
}

Deserializers["UnityEngine.UI.Scrollbar+ScrollEvent"] = function (request, data, root) {
  var i1086 = root || request.c( 'UnityEngine.UI.Scrollbar+ScrollEvent' )
  var i1087 = data
  i1086.m_PersistentCalls = request.d('UnityEngine.Events.PersistentCallGroup', i1087[0], i1086.m_PersistentCalls)
  return i1086
}

Deserializers["UnityEngine.EventSystems.EventTrigger"] = function (request, data, root) {
  var i1088 = root || request.c( 'UnityEngine.EventSystems.EventTrigger' )
  var i1089 = data
  var i1091 = i1089[0]
  var i1090 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.EventSystems.EventTrigger+Entry')))
  for(var i = 0; i < i1091.length; i += 1) {
    i1090.add(request.d('UnityEngine.EventSystems.EventTrigger+Entry', i1091[i + 0]));
  }
  i1088.m_Delegates = i1090
  return i1088
}

Deserializers["UnityEngine.EventSystems.EventTrigger+Entry"] = function (request, data, root) {
  var i1094 = root || request.c( 'UnityEngine.EventSystems.EventTrigger+Entry' )
  var i1095 = data
  i1094.eventID = i1095[0]
  i1094.callback = request.d('UnityEngine.EventSystems.EventTrigger+TriggerEvent', i1095[1], i1094.callback)
  return i1094
}

Deserializers["UnityEngine.EventSystems.EventTrigger+TriggerEvent"] = function (request, data, root) {
  var i1096 = root || request.c( 'UnityEngine.EventSystems.EventTrigger+TriggerEvent' )
  var i1097 = data
  i1096.m_PersistentCalls = request.d('UnityEngine.Events.PersistentCallGroup', i1097[0], i1096.m_PersistentCalls)
  return i1096
}

Deserializers["UnityEngine.Rendering.UI.DebugUIHandlerValue"] = function (request, data, root) {
  var i1098 = root || request.c( 'UnityEngine.Rendering.UI.DebugUIHandlerValue' )
  var i1099 = data
  request.r(i1099[0], i1099[1], 0, i1098, 'nameLabel')
  request.r(i1099[2], i1099[3], 0, i1098, 'valueLabel')
  i1098.colorDefault = new pc.Color(i1099[4], i1099[5], i1099[6], i1099[7])
  i1098.colorSelected = new pc.Color(i1099[8], i1099[9], i1099[10], i1099[11])
  return i1098
}

Deserializers["UnityEngine.Rendering.UI.DebugUIHandlerToggle"] = function (request, data, root) {
  var i1100 = root || request.c( 'UnityEngine.Rendering.UI.DebugUIHandlerToggle' )
  var i1101 = data
  request.r(i1101[0], i1101[1], 0, i1100, 'nameLabel')
  request.r(i1101[2], i1101[3], 0, i1100, 'valueToggle')
  request.r(i1101[4], i1101[5], 0, i1100, 'checkmarkImage')
  i1100.colorDefault = new pc.Color(i1101[6], i1101[7], i1101[8], i1101[9])
  i1100.colorSelected = new pc.Color(i1101[10], i1101[11], i1101[12], i1101[13])
  return i1100
}

Deserializers["UnityEngine.UI.Toggle"] = function (request, data, root) {
  var i1102 = root || request.c( 'UnityEngine.UI.Toggle' )
  var i1103 = data
  i1102.toggleTransition = i1103[0]
  request.r(i1103[1], i1103[2], 0, i1102, 'graphic')
  i1102.onValueChanged = request.d('UnityEngine.UI.Toggle+ToggleEvent', i1103[3], i1102.onValueChanged)
  request.r(i1103[4], i1103[5], 0, i1102, 'm_Group')
  i1102.m_IsOn = !!i1103[6]
  i1102.m_Navigation = request.d('UnityEngine.UI.Navigation', i1103[7], i1102.m_Navigation)
  i1102.m_Transition = i1103[8]
  i1102.m_Colors = request.d('UnityEngine.UI.ColorBlock', i1103[9], i1102.m_Colors)
  i1102.m_SpriteState = request.d('UnityEngine.UI.SpriteState', i1103[10], i1102.m_SpriteState)
  i1102.m_AnimationTriggers = request.d('UnityEngine.UI.AnimationTriggers', i1103[11], i1102.m_AnimationTriggers)
  i1102.m_Interactable = !!i1103[12]
  request.r(i1103[13], i1103[14], 0, i1102, 'm_TargetGraphic')
  return i1102
}

Deserializers["UnityEngine.UI.Toggle+ToggleEvent"] = function (request, data, root) {
  var i1104 = root || request.c( 'UnityEngine.UI.Toggle+ToggleEvent' )
  var i1105 = data
  i1104.m_PersistentCalls = request.d('UnityEngine.Events.PersistentCallGroup', i1105[0], i1104.m_PersistentCalls)
  return i1104
}

Deserializers["UnityEngine.Rendering.UI.DebugUIHandlerIntField"] = function (request, data, root) {
  var i1106 = root || request.c( 'UnityEngine.Rendering.UI.DebugUIHandlerIntField' )
  var i1107 = data
  request.r(i1107[0], i1107[1], 0, i1106, 'nameLabel')
  request.r(i1107[2], i1107[3], 0, i1106, 'valueLabel')
  i1106.colorDefault = new pc.Color(i1107[4], i1107[5], i1107[6], i1107[7])
  i1106.colorSelected = new pc.Color(i1107[8], i1107[9], i1107[10], i1107[11])
  return i1106
}

Deserializers["UnityEngine.Rendering.UI.DebugUIHandlerUIntField"] = function (request, data, root) {
  var i1108 = root || request.c( 'UnityEngine.Rendering.UI.DebugUIHandlerUIntField' )
  var i1109 = data
  request.r(i1109[0], i1109[1], 0, i1108, 'nameLabel')
  request.r(i1109[2], i1109[3], 0, i1108, 'valueLabel')
  i1108.colorDefault = new pc.Color(i1109[4], i1109[5], i1109[6], i1109[7])
  i1108.colorSelected = new pc.Color(i1109[8], i1109[9], i1109[10], i1109[11])
  return i1108
}

Deserializers["UnityEngine.Rendering.UI.DebugUIHandlerFloatField"] = function (request, data, root) {
  var i1110 = root || request.c( 'UnityEngine.Rendering.UI.DebugUIHandlerFloatField' )
  var i1111 = data
  request.r(i1111[0], i1111[1], 0, i1110, 'nameLabel')
  request.r(i1111[2], i1111[3], 0, i1110, 'valueLabel')
  i1110.colorDefault = new pc.Color(i1111[4], i1111[5], i1111[6], i1111[7])
  i1110.colorSelected = new pc.Color(i1111[8], i1111[9], i1111[10], i1111[11])
  return i1110
}

Deserializers["UnityEngine.Rendering.UI.DebugUIHandlerEnumField"] = function (request, data, root) {
  var i1112 = root || request.c( 'UnityEngine.Rendering.UI.DebugUIHandlerEnumField' )
  var i1113 = data
  request.r(i1113[0], i1113[1], 0, i1112, 'nextButtonText')
  request.r(i1113[2], i1113[3], 0, i1112, 'previousButtonText')
  request.r(i1113[4], i1113[5], 0, i1112, 'nameLabel')
  request.r(i1113[6], i1113[7], 0, i1112, 'valueLabel')
  i1112.colorDefault = new pc.Color(i1113[8], i1113[9], i1113[10], i1113[11])
  i1112.colorSelected = new pc.Color(i1113[12], i1113[13], i1113[14], i1113[15])
  return i1112
}

Deserializers["UnityEngine.Rendering.UI.DebugUIHandlerButton"] = function (request, data, root) {
  var i1114 = root || request.c( 'UnityEngine.Rendering.UI.DebugUIHandlerButton' )
  var i1115 = data
  request.r(i1115[0], i1115[1], 0, i1114, 'nameLabel')
  i1114.colorDefault = new pc.Color(i1115[2], i1115[3], i1115[4], i1115[5])
  i1114.colorSelected = new pc.Color(i1115[6], i1115[7], i1115[8], i1115[9])
  return i1114
}

Deserializers["UnityEngine.Rendering.UI.DebugUIHandlerFoldout"] = function (request, data, root) {
  var i1116 = root || request.c( 'UnityEngine.Rendering.UI.DebugUIHandlerFoldout' )
  var i1117 = data
  request.r(i1117[0], i1117[1], 0, i1116, 'nameLabel')
  request.r(i1117[2], i1117[3], 0, i1116, 'valueToggle')
  i1116.colorDefault = new pc.Color(i1117[4], i1117[5], i1117[6], i1117[7])
  i1116.colorSelected = new pc.Color(i1117[8], i1117[9], i1117[10], i1117[11])
  return i1116
}

Deserializers["UnityEngine.Rendering.UI.UIFoldout"] = function (request, data, root) {
  var i1118 = root || request.c( 'UnityEngine.Rendering.UI.UIFoldout' )
  var i1119 = data
  request.r(i1119[0], i1119[1], 0, i1118, 'content')
  request.r(i1119[2], i1119[3], 0, i1118, 'arrowOpened')
  request.r(i1119[4], i1119[5], 0, i1118, 'arrowClosed')
  i1118.toggleTransition = i1119[6]
  request.r(i1119[7], i1119[8], 0, i1118, 'graphic')
  i1118.onValueChanged = request.d('UnityEngine.UI.Toggle+ToggleEvent', i1119[9], i1118.onValueChanged)
  request.r(i1119[10], i1119[11], 0, i1118, 'm_Group')
  i1118.m_IsOn = !!i1119[12]
  i1118.m_Navigation = request.d('UnityEngine.UI.Navigation', i1119[13], i1118.m_Navigation)
  i1118.m_Transition = i1119[14]
  i1118.m_Colors = request.d('UnityEngine.UI.ColorBlock', i1119[15], i1118.m_Colors)
  i1118.m_SpriteState = request.d('UnityEngine.UI.SpriteState', i1119[16], i1118.m_SpriteState)
  i1118.m_AnimationTriggers = request.d('UnityEngine.UI.AnimationTriggers', i1119[17], i1118.m_AnimationTriggers)
  i1118.m_Interactable = !!i1119[18]
  request.r(i1119[19], i1119[20], 0, i1118, 'm_TargetGraphic')
  return i1118
}

Deserializers["UnityEngine.Rendering.UI.DebugUIHandlerColor"] = function (request, data, root) {
  var i1120 = root || request.c( 'UnityEngine.Rendering.UI.DebugUIHandlerColor' )
  var i1121 = data
  request.r(i1121[0], i1121[1], 0, i1120, 'nameLabel')
  request.r(i1121[2], i1121[3], 0, i1120, 'valueToggle')
  request.r(i1121[4], i1121[5], 0, i1120, 'colorImage')
  request.r(i1121[6], i1121[7], 0, i1120, 'fieldR')
  request.r(i1121[8], i1121[9], 0, i1120, 'fieldG')
  request.r(i1121[10], i1121[11], 0, i1120, 'fieldB')
  request.r(i1121[12], i1121[13], 0, i1120, 'fieldA')
  i1120.colorDefault = new pc.Color(i1121[14], i1121[15], i1121[16], i1121[17])
  i1120.colorSelected = new pc.Color(i1121[18], i1121[19], i1121[20], i1121[21])
  return i1120
}

Deserializers["UnityEngine.Rendering.UI.DebugUIHandlerIndirectFloatField"] = function (request, data, root) {
  var i1122 = root || request.c( 'UnityEngine.Rendering.UI.DebugUIHandlerIndirectFloatField' )
  var i1123 = data
  request.r(i1123[0], i1123[1], 0, i1122, 'nameLabel')
  request.r(i1123[2], i1123[3], 0, i1122, 'valueLabel')
  i1122.colorDefault = new pc.Color(i1123[4], i1123[5], i1123[6], i1123[7])
  i1122.colorSelected = new pc.Color(i1123[8], i1123[9], i1123[10], i1123[11])
  return i1122
}

Deserializers["UnityEngine.Rendering.UI.DebugUIHandlerVector2"] = function (request, data, root) {
  var i1124 = root || request.c( 'UnityEngine.Rendering.UI.DebugUIHandlerVector2' )
  var i1125 = data
  request.r(i1125[0], i1125[1], 0, i1124, 'nameLabel')
  request.r(i1125[2], i1125[3], 0, i1124, 'valueToggle')
  request.r(i1125[4], i1125[5], 0, i1124, 'fieldX')
  request.r(i1125[6], i1125[7], 0, i1124, 'fieldY')
  i1124.colorDefault = new pc.Color(i1125[8], i1125[9], i1125[10], i1125[11])
  i1124.colorSelected = new pc.Color(i1125[12], i1125[13], i1125[14], i1125[15])
  return i1124
}

Deserializers["UnityEngine.Rendering.UI.DebugUIHandlerVector3"] = function (request, data, root) {
  var i1126 = root || request.c( 'UnityEngine.Rendering.UI.DebugUIHandlerVector3' )
  var i1127 = data
  request.r(i1127[0], i1127[1], 0, i1126, 'nameLabel')
  request.r(i1127[2], i1127[3], 0, i1126, 'valueToggle')
  request.r(i1127[4], i1127[5], 0, i1126, 'fieldX')
  request.r(i1127[6], i1127[7], 0, i1126, 'fieldY')
  request.r(i1127[8], i1127[9], 0, i1126, 'fieldZ')
  i1126.colorDefault = new pc.Color(i1127[10], i1127[11], i1127[12], i1127[13])
  i1126.colorSelected = new pc.Color(i1127[14], i1127[15], i1127[16], i1127[17])
  return i1126
}

Deserializers["UnityEngine.Rendering.UI.DebugUIHandlerVector4"] = function (request, data, root) {
  var i1128 = root || request.c( 'UnityEngine.Rendering.UI.DebugUIHandlerVector4' )
  var i1129 = data
  request.r(i1129[0], i1129[1], 0, i1128, 'nameLabel')
  request.r(i1129[2], i1129[3], 0, i1128, 'valueToggle')
  request.r(i1129[4], i1129[5], 0, i1128, 'fieldX')
  request.r(i1129[6], i1129[7], 0, i1128, 'fieldY')
  request.r(i1129[8], i1129[9], 0, i1128, 'fieldZ')
  request.r(i1129[10], i1129[11], 0, i1128, 'fieldW')
  i1128.colorDefault = new pc.Color(i1129[12], i1129[13], i1129[14], i1129[15])
  i1128.colorSelected = new pc.Color(i1129[16], i1129[17], i1129[18], i1129[19])
  return i1128
}

Deserializers["UnityEngine.Rendering.UI.DebugUIHandlerVBox"] = function (request, data, root) {
  var i1130 = root || request.c( 'UnityEngine.Rendering.UI.DebugUIHandlerVBox' )
  var i1131 = data
  i1130.colorDefault = new pc.Color(i1131[0], i1131[1], i1131[2], i1131[3])
  i1130.colorSelected = new pc.Color(i1131[4], i1131[5], i1131[6], i1131[7])
  return i1130
}

Deserializers["UnityEngine.Rendering.UI.DebugUIHandlerHBox"] = function (request, data, root) {
  var i1132 = root || request.c( 'UnityEngine.Rendering.UI.DebugUIHandlerHBox' )
  var i1133 = data
  i1132.colorDefault = new pc.Color(i1133[0], i1133[1], i1133[2], i1133[3])
  i1132.colorSelected = new pc.Color(i1133[4], i1133[5], i1133[6], i1133[7])
  return i1132
}

Deserializers["UnityEngine.Rendering.UI.DebugUIHandlerGroup"] = function (request, data, root) {
  var i1134 = root || request.c( 'UnityEngine.Rendering.UI.DebugUIHandlerGroup' )
  var i1135 = data
  request.r(i1135[0], i1135[1], 0, i1134, 'nameLabel')
  request.r(i1135[2], i1135[3], 0, i1134, 'header')
  i1134.colorDefault = new pc.Color(i1135[4], i1135[5], i1135[6], i1135[7])
  i1134.colorSelected = new pc.Color(i1135[8], i1135[9], i1135[10], i1135[11])
  return i1134
}

Deserializers["UnityEngine.Rendering.UI.DebugUIHandlerBitField"] = function (request, data, root) {
  var i1136 = root || request.c( 'UnityEngine.Rendering.UI.DebugUIHandlerBitField' )
  var i1137 = data
  request.r(i1137[0], i1137[1], 0, i1136, 'nameLabel')
  request.r(i1137[2], i1137[3], 0, i1136, 'valueToggle')
  var i1139 = i1137[4]
  var i1138 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.Rendering.UI.DebugUIHandlerIndirectToggle')))
  for(var i = 0; i < i1139.length; i += 2) {
  request.r(i1139[i + 0], i1139[i + 1], 1, i1138, '')
  }
  i1136.toggles = i1138
  i1136.colorDefault = new pc.Color(i1137[5], i1137[6], i1137[7], i1137[8])
  i1136.colorSelected = new pc.Color(i1137[9], i1137[10], i1137[11], i1137[12])
  return i1136
}

Deserializers["UnityEngine.Rendering.UI.DebugUIHandlerIndirectToggle"] = function (request, data, root) {
  var i1142 = root || request.c( 'UnityEngine.Rendering.UI.DebugUIHandlerIndirectToggle' )
  var i1143 = data
  request.r(i1143[0], i1143[1], 0, i1142, 'nameLabel')
  request.r(i1143[2], i1143[3], 0, i1142, 'valueToggle')
  request.r(i1143[4], i1143[5], 0, i1142, 'checkmarkImage')
  i1142.colorDefault = new pc.Color(i1143[6], i1143[7], i1143[8], i1143[9])
  i1142.colorSelected = new pc.Color(i1143[10], i1143[11], i1143[12], i1143[13])
  return i1142
}

Deserializers["UnityEngine.Rendering.UI.DebugUIHandlerToggleHistory"] = function (request, data, root) {
  var i1144 = root || request.c( 'UnityEngine.Rendering.UI.DebugUIHandlerToggleHistory' )
  var i1145 = data
  request.r(i1145[0], i1145[1], 0, i1144, 'nameLabel')
  request.r(i1145[2], i1145[3], 0, i1144, 'valueToggle')
  request.r(i1145[4], i1145[5], 0, i1144, 'checkmarkImage')
  i1144.colorDefault = new pc.Color(i1145[6], i1145[7], i1145[8], i1145[9])
  i1144.colorSelected = new pc.Color(i1145[10], i1145[11], i1145[12], i1145[13])
  return i1144
}

Deserializers["UnityEngine.Rendering.UI.DebugUIHandlerEnumHistory"] = function (request, data, root) {
  var i1146 = root || request.c( 'UnityEngine.Rendering.UI.DebugUIHandlerEnumHistory' )
  var i1147 = data
  request.r(i1147[0], i1147[1], 0, i1146, 'nextButtonText')
  request.r(i1147[2], i1147[3], 0, i1146, 'previousButtonText')
  request.r(i1147[4], i1147[5], 0, i1146, 'nameLabel')
  request.r(i1147[6], i1147[7], 0, i1146, 'valueLabel')
  i1146.colorDefault = new pc.Color(i1147[8], i1147[9], i1147[10], i1147[11])
  i1146.colorSelected = new pc.Color(i1147[12], i1147[13], i1147[14], i1147[15])
  return i1146
}

Deserializers["UnityEngine.Rendering.UI.DebugUIHandlerRow"] = function (request, data, root) {
  var i1148 = root || request.c( 'UnityEngine.Rendering.UI.DebugUIHandlerRow' )
  var i1149 = data
  request.r(i1149[0], i1149[1], 0, i1148, 'nameLabel')
  request.r(i1149[2], i1149[3], 0, i1148, 'valueToggle')
  i1148.colorDefault = new pc.Color(i1149[4], i1149[5], i1149[6], i1149[7])
  i1148.colorSelected = new pc.Color(i1149[8], i1149[9], i1149[10], i1149[11])
  return i1148
}

Deserializers["UnityEngine.Rendering.UI.DebugUIHandlerMessageBox"] = function (request, data, root) {
  var i1150 = root || request.c( 'UnityEngine.Rendering.UI.DebugUIHandlerMessageBox' )
  var i1151 = data
  request.r(i1151[0], i1151[1], 0, i1150, 'nameLabel')
  i1150.colorDefault = new pc.Color(i1151[2], i1151[3], i1151[4], i1151[5])
  i1150.colorSelected = new pc.Color(i1151[6], i1151[7], i1151[8], i1151[9])
  return i1150
}

Deserializers["UnityEngine.Rendering.UI.DebugUIHandlerProgressBar"] = function (request, data, root) {
  var i1152 = root || request.c( 'UnityEngine.Rendering.UI.DebugUIHandlerProgressBar' )
  var i1153 = data
  request.r(i1153[0], i1153[1], 0, i1152, 'nameLabel')
  request.r(i1153[2], i1153[3], 0, i1152, 'valueLabel')
  request.r(i1153[4], i1153[5], 0, i1152, 'progressBarRect')
  i1152.colorDefault = new pc.Color(i1153[6], i1153[7], i1153[8], i1153[9])
  i1152.colorSelected = new pc.Color(i1153[10], i1153[11], i1153[12], i1153[13])
  return i1152
}

Deserializers["UnityEngine.Rendering.UI.DebugUIHandlerValueTuple"] = function (request, data, root) {
  var i1154 = root || request.c( 'UnityEngine.Rendering.UI.DebugUIHandlerValueTuple' )
  var i1155 = data
  request.r(i1155[0], i1155[1], 0, i1154, 'nameLabel')
  request.r(i1155[2], i1155[3], 0, i1154, 'valueLabel')
  i1154.colorDefault = new pc.Color(i1155[4], i1155[5], i1155[6], i1155[7])
  i1154.colorSelected = new pc.Color(i1155[8], i1155[9], i1155[10], i1155[11])
  return i1154
}

Deserializers["UnityEngine.Rendering.UI.DebugUIHandlerObject"] = function (request, data, root) {
  var i1156 = root || request.c( 'UnityEngine.Rendering.UI.DebugUIHandlerObject' )
  var i1157 = data
  request.r(i1157[0], i1157[1], 0, i1156, 'nameLabel')
  request.r(i1157[2], i1157[3], 0, i1156, 'valueLabel')
  i1156.colorDefault = new pc.Color(i1157[4], i1157[5], i1157[6], i1157[7])
  i1156.colorSelected = new pc.Color(i1157[8], i1157[9], i1157[10], i1157[11])
  return i1156
}

Deserializers["UnityEngine.Rendering.UI.DebugUIHandlerObjectList"] = function (request, data, root) {
  var i1158 = root || request.c( 'UnityEngine.Rendering.UI.DebugUIHandlerObjectList' )
  var i1159 = data
  request.r(i1159[0], i1159[1], 0, i1158, 'nextButtonText')
  request.r(i1159[2], i1159[3], 0, i1158, 'previousButtonText')
  request.r(i1159[4], i1159[5], 0, i1158, 'nameLabel')
  request.r(i1159[6], i1159[7], 0, i1158, 'valueLabel')
  i1158.colorDefault = new pc.Color(i1159[8], i1159[9], i1159[10], i1159[11])
  i1158.colorSelected = new pc.Color(i1159[12], i1159[13], i1159[14], i1159[15])
  return i1158
}

Deserializers["UnityEngine.Rendering.UI.DebugUIHandlerObjectPopupField"] = function (request, data, root) {
  var i1160 = root || request.c( 'UnityEngine.Rendering.UI.DebugUIHandlerObjectPopupField' )
  var i1161 = data
  request.r(i1161[0], i1161[1], 0, i1160, 'nextButtonText')
  request.r(i1161[2], i1161[3], 0, i1160, 'previousButtonText')
  request.r(i1161[4], i1161[5], 0, i1160, 'nameLabel')
  request.r(i1161[6], i1161[7], 0, i1160, 'valueLabel')
  i1160.colorDefault = new pc.Color(i1161[8], i1161[9], i1161[10], i1161[11])
  i1160.colorSelected = new pc.Color(i1161[12], i1161[13], i1161[14], i1161[15])
  return i1160
}

Deserializers["UnityEngine.Rendering.UI.DebugUIHandlerRenderingLayerField"] = function (request, data, root) {
  var i1162 = root || request.c( 'UnityEngine.Rendering.UI.DebugUIHandlerRenderingLayerField' )
  var i1163 = data
  request.r(i1163[0], i1163[1], 0, i1162, 'nameLabel')
  request.r(i1163[2], i1163[3], 0, i1162, 'valueToggle')
  var i1165 = i1163[4]
  var i1164 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.Rendering.UI.DebugUIHandlerIndirectToggle')))
  for(var i = 0; i < i1165.length; i += 2) {
  request.r(i1165[i + 0], i1165[i + 1], 1, i1164, '')
  }
  i1162.toggles = i1164
  i1162.colorDefault = new pc.Color(i1163[5], i1163[6], i1163[7], i1163[8])
  i1162.colorSelected = new pc.Color(i1163[9], i1163[10], i1163[11], i1163[12])
  return i1162
}

Deserializers["UnityEngine.Rendering.UI.DebugUIHandlerPersistentCanvas"] = function (request, data, root) {
  var i1166 = root || request.c( 'UnityEngine.Rendering.UI.DebugUIHandlerPersistentCanvas' )
  var i1167 = data
  request.r(i1167[0], i1167[1], 0, i1166, 'panel')
  request.r(i1167[2], i1167[3], 0, i1166, 'valuePrefab')
  return i1166
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.UniversalRenderPipelineAsset"] = function (request, data, root) {
  var i1168 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.UniversalRenderPipelineAsset' )
  var i1169 = data
  i1168.AdditionalLightsPerObjectLimit = i1169[0]
  i1168.AdditionalLightsRenderingMode = i1169[1]
  i1168.LightRenderingMode = request.d('Luna.Unity.DTO.UnityEngine.Assets.LightRenderingMode', i1169[2], i1168.LightRenderingMode)
  i1168.ColorGradingLutSize = i1169[3]
  i1168.ColorGradingMode = request.d('Luna.Unity.DTO.UnityEngine.Assets.ColorGradingMode', i1169[4], i1168.ColorGradingMode)
  i1168.MainLightRenderingMode = request.d('Luna.Unity.DTO.UnityEngine.Assets.LightRenderingMode', i1169[5], i1168.MainLightRenderingMode)
  i1168.MainLightRenderingModeValue = i1169[6]
  i1168.SupportsMainLightShadows = !!i1169[7]
  i1168.MixedLightingSupported = !!i1169[8]
  i1168.MsaaQuality = request.d('Luna.Unity.DTO.UnityEngine.Assets.MsaaQuality', i1169[9], i1168.MsaaQuality)
  i1168.MSAA = i1169[10]
  i1168.OpaqueDownsampling = request.d('Luna.Unity.DTO.UnityEngine.Assets.Downsampling', i1169[11], i1168.OpaqueDownsampling)
  i1168.MainLightShadowmapResolution = request.d('Luna.Unity.DTO.UnityEngine.Assets.ShadowResolution', i1169[12], i1168.MainLightShadowmapResolution)
  i1168.MainLightShadowmapResolutionValue = i1169[13]
  i1168.SupportsSoftShadows = !!i1169[14]
  i1168.SoftShadowQuality = request.d('Luna.Unity.DTO.UnityEngine.Assets.SoftShadowQuality', i1169[15], i1168.SoftShadowQuality)
  i1168.SoftShadowQualityValue = i1169[16]
  i1168.ShadowDistance = i1169[17]
  i1168.ShadowCascadeCount = i1169[18]
  i1168.Cascade2Split = i1169[19]
  i1168.Cascade3Split = new pc.Vec2( i1169[20], i1169[21] )
  i1168.Cascade4Split = new pc.Vec3( i1169[22], i1169[23], i1169[24] )
  i1168.CascadeBorder = i1169[25]
  i1168.ShadowDepthBias = i1169[26]
  i1168.ShadowNormalBias = i1169[27]
  i1168.RenderScale = i1169[28]
  i1168.RequireDepthTexture = !!i1169[29]
  i1168.RequireOpaqueTexture = !!i1169[30]
  i1168.SupportsHDR = !!i1169[31]
  i1168.SupportsTerrainHoles = !!i1169[32]
  return i1168
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.LightRenderingMode"] = function (request, data, root) {
  var i1170 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.LightRenderingMode' )
  var i1171 = data
  i1170.Disabled = i1171[0]
  i1170.PerVertex = i1171[1]
  i1170.PerPixel = i1171[2]
  return i1170
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ColorGradingMode"] = function (request, data, root) {
  var i1172 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ColorGradingMode' )
  var i1173 = data
  i1172.LowDynamicRange = i1173[0]
  i1172.HighDynamicRange = i1173[1]
  return i1172
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.MsaaQuality"] = function (request, data, root) {
  var i1174 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.MsaaQuality' )
  var i1175 = data
  i1174.Disabled = i1175[0]
  i1174._2x = i1175[1]
  i1174._4x = i1175[2]
  i1174._8x = i1175[3]
  return i1174
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Downsampling"] = function (request, data, root) {
  var i1176 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Downsampling' )
  var i1177 = data
  i1176.None = i1177[0]
  i1176._2xBilinear = i1177[1]
  i1176._4xBox = i1177[2]
  i1176._4xBilinear = i1177[3]
  return i1176
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ShadowResolution"] = function (request, data, root) {
  var i1178 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ShadowResolution' )
  var i1179 = data
  i1178._256 = i1179[0]
  i1178._512 = i1179[1]
  i1178._1024 = i1179[2]
  i1178._2048 = i1179[3]
  i1178._4096 = i1179[4]
  return i1178
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.SoftShadowQuality"] = function (request, data, root) {
  var i1180 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.SoftShadowQuality' )
  var i1181 = data
  i1180.UsePipelineSettings = i1181[0]
  i1180.Low = i1181[1]
  i1180.Medium = i1181[2]
  i1180.High = i1181[3]
  return i1180
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.PhysicMaterial"] = function (request, data, root) {
  var i1182 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.PhysicMaterial' )
  var i1183 = data
  i1182.name = i1183[0]
  i1182.bounciness = i1183[1]
  i1182.dynamicFriction = i1183[2]
  i1182.staticFriction = i1183[3]
  i1182.frictionCombine = i1183[4]
  i1182.bounceCombine = i1183[5]
  return i1182
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader"] = function (request, data, root) {
  var i1184 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader' )
  var i1185 = data
  var i1187 = i1185[0]
  var i1186 = new (System.Collections.Generic.List$1(Bridge.ns('Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError')))
  for(var i = 0; i < i1187.length; i += 1) {
    i1186.add(request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError', i1187[i + 0]));
  }
  i1184.ShaderCompilationErrors = i1186
  i1184.name = i1185[1]
  i1184.guid = i1185[2]
  var i1189 = i1185[3]
  var i1188 = []
  for(var i = 0; i < i1189.length; i += 1) {
    i1188.push( i1189[i + 0] );
  }
  i1184.shaderDefinedKeywords = i1188
  var i1191 = i1185[4]
  var i1190 = []
  for(var i = 0; i < i1191.length; i += 1) {
    i1190.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass', i1191[i + 0]) );
  }
  i1184.passes = i1190
  var i1193 = i1185[5]
  var i1192 = []
  for(var i = 0; i < i1193.length; i += 1) {
    i1192.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+UsePass', i1193[i + 0]) );
  }
  i1184.usePasses = i1192
  var i1195 = i1185[6]
  var i1194 = []
  for(var i = 0; i < i1195.length; i += 1) {
    i1194.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+DefaultParameterValue', i1195[i + 0]) );
  }
  i1184.defaultParameterValues = i1194
  request.r(i1185[7], i1185[8], 0, i1184, 'unityFallbackShader')
  i1184.readDepth = !!i1185[9]
  i1184.hasDepthOnlyPass = !!i1185[10]
  i1184.isCreatedByShaderGraph = !!i1185[11]
  i1184.disableBatching = !!i1185[12]
  i1184.compiled = !!i1185[13]
  return i1184
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError"] = function (request, data, root) {
  var i1198 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError' )
  var i1199 = data
  i1198.shaderName = i1199[0]
  i1198.errorMessage = i1199[1]
  return i1198
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass"] = function (request, data, root) {
  var i1202 = root || new pc.UnityShaderPass()
  var i1203 = data
  i1202.id = i1203[0]
  i1202.subShaderIndex = i1203[1]
  i1202.name = i1203[2]
  i1202.passType = i1203[3]
  i1202.grabPassTextureName = i1203[4]
  i1202.usePass = !!i1203[5]
  i1202.zTest = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i1203[6], i1202.zTest)
  i1202.zWrite = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i1203[7], i1202.zWrite)
  i1202.culling = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i1203[8], i1202.culling)
  i1202.blending = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending', i1203[9], i1202.blending)
  i1202.alphaBlending = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending', i1203[10], i1202.alphaBlending)
  i1202.colorWriteMask = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i1203[11], i1202.colorWriteMask)
  i1202.offsetUnits = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i1203[12], i1202.offsetUnits)
  i1202.offsetFactor = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i1203[13], i1202.offsetFactor)
  i1202.stencilRef = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i1203[14], i1202.stencilRef)
  i1202.stencilReadMask = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i1203[15], i1202.stencilReadMask)
  i1202.stencilWriteMask = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i1203[16], i1202.stencilWriteMask)
  i1202.stencilOp = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp', i1203[17], i1202.stencilOp)
  i1202.stencilOpFront = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp', i1203[18], i1202.stencilOpFront)
  i1202.stencilOpBack = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp', i1203[19], i1202.stencilOpBack)
  var i1205 = i1203[20]
  var i1204 = []
  for(var i = 0; i < i1205.length; i += 1) {
    i1204.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Tag', i1205[i + 0]) );
  }
  i1202.tags = i1204
  var i1207 = i1203[21]
  var i1206 = []
  for(var i = 0; i < i1207.length; i += 1) {
    i1206.push( i1207[i + 0] );
  }
  i1202.passDefinedKeywords = i1206
  var i1209 = i1203[22]
  var i1208 = []
  for(var i = 0; i < i1209.length; i += 1) {
    i1208.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+KeywordGroup', i1209[i + 0]) );
  }
  i1202.passDefinedKeywordGroups = i1208
  var i1211 = i1203[23]
  var i1210 = []
  for(var i = 0; i < i1211.length; i += 1) {
    i1210.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant', i1211[i + 0]) );
  }
  i1202.variants = i1210
  var i1213 = i1203[24]
  var i1212 = []
  for(var i = 0; i < i1213.length; i += 1) {
    i1212.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant', i1213[i + 0]) );
  }
  i1202.excludedVariants = i1212
  i1202.hasDepthReader = !!i1203[25]
  return i1202
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value"] = function (request, data, root) {
  var i1214 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value' )
  var i1215 = data
  i1214.val = i1215[0]
  i1214.name = i1215[1]
  return i1214
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending"] = function (request, data, root) {
  var i1216 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending' )
  var i1217 = data
  i1216.src = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i1217[0], i1216.src)
  i1216.dst = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i1217[1], i1216.dst)
  i1216.op = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i1217[2], i1216.op)
  return i1216
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp"] = function (request, data, root) {
  var i1218 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp' )
  var i1219 = data
  i1218.pass = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i1219[0], i1218.pass)
  i1218.fail = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i1219[1], i1218.fail)
  i1218.zFail = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i1219[2], i1218.zFail)
  i1218.comp = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i1219[3], i1218.comp)
  return i1218
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Tag"] = function (request, data, root) {
  var i1222 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Tag' )
  var i1223 = data
  i1222.name = i1223[0]
  i1222.value = i1223[1]
  return i1222
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+KeywordGroup"] = function (request, data, root) {
  var i1226 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+KeywordGroup' )
  var i1227 = data
  var i1229 = i1227[0]
  var i1228 = []
  for(var i = 0; i < i1229.length; i += 1) {
    i1228.push( i1229[i + 0] );
  }
  i1226.keywords = i1228
  i1226.hasDiscard = !!i1227[1]
  return i1226
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant"] = function (request, data, root) {
  var i1232 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant' )
  var i1233 = data
  i1232.passId = i1233[0]
  i1232.subShaderIndex = i1233[1]
  var i1235 = i1233[2]
  var i1234 = []
  for(var i = 0; i < i1235.length; i += 1) {
    i1234.push( i1235[i + 0] );
  }
  i1232.keywords = i1234
  i1232.vertexProgram = i1233[3]
  i1232.fragmentProgram = i1233[4]
  i1232.exportedForWebGl2 = !!i1233[5]
  i1232.readDepth = !!i1233[6]
  return i1232
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+UsePass"] = function (request, data, root) {
  var i1238 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+UsePass' )
  var i1239 = data
  request.r(i1239[0], i1239[1], 0, i1238, 'shader')
  i1238.pass = i1239[2]
  return i1238
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+DefaultParameterValue"] = function (request, data, root) {
  var i1242 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+DefaultParameterValue' )
  var i1243 = data
  i1242.name = i1243[0]
  i1242.type = i1243[1]
  i1242.value = new pc.Vec4( i1243[2], i1243[3], i1243[4], i1243[5] )
  i1242.textureValue = i1243[6]
  i1242.shaderPropertyFlag = i1243[7]
  return i1242
}

Deserializers["Luna.Unity.DTO.UnityEngine.Textures.Sprite"] = function (request, data, root) {
  var i1244 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Textures.Sprite' )
  var i1245 = data
  i1244.name = i1245[0]
  request.r(i1245[1], i1245[2], 0, i1244, 'texture')
  i1244.aabb = i1245[3]
  i1244.vertices = i1245[4]
  i1244.triangles = i1245[5]
  i1244.textureRect = UnityEngine.Rect.MinMaxRect(i1245[6], i1245[7], i1245[8], i1245[9])
  i1244.packedRect = UnityEngine.Rect.MinMaxRect(i1245[10], i1245[11], i1245[12], i1245[13])
  i1244.border = new pc.Vec4( i1245[14], i1245[15], i1245[16], i1245[17] )
  i1244.transparency = i1245[18]
  i1244.bounds = i1245[19]
  i1244.pixelsPerUnit = i1245[20]
  i1244.textureWidth = i1245[21]
  i1244.textureHeight = i1245[22]
  i1244.nativeSize = new pc.Vec2( i1245[23], i1245[24] )
  i1244.pivot = new pc.Vec2( i1245[25], i1245[26] )
  i1244.textureRectOffset = new pc.Vec2( i1245[27], i1245[28] )
  return i1244
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.AudioClip"] = function (request, data, root) {
  var i1246 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.AudioClip' )
  var i1247 = data
  i1246.name = i1247[0]
  return i1246
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Font"] = function (request, data, root) {
  var i1248 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Font' )
  var i1249 = data
  i1248.name = i1249[0]
  i1248.ascent = i1249[1]
  i1248.originalLineHeight = i1249[2]
  i1248.fontSize = i1249[3]
  var i1251 = i1249[4]
  var i1250 = []
  for(var i = 0; i < i1251.length; i += 1) {
    i1250.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Font+CharacterInfo', i1251[i + 0]) );
  }
  i1248.characterInfo = i1250
  request.r(i1249[5], i1249[6], 0, i1248, 'texture')
  i1248.originalFontSize = i1249[7]
  return i1248
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Font+CharacterInfo"] = function (request, data, root) {
  var i1254 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Font+CharacterInfo' )
  var i1255 = data
  i1254.index = i1255[0]
  i1254.advance = i1255[1]
  i1254.bearing = i1255[2]
  i1254.glyphWidth = i1255[3]
  i1254.glyphHeight = i1255[4]
  i1254.minX = i1255[5]
  i1254.maxX = i1255[6]
  i1254.minY = i1255[7]
  i1254.maxY = i1255[8]
  i1254.uvBottomLeftX = i1255[9]
  i1254.uvBottomLeftY = i1255[10]
  i1254.uvBottomRightX = i1255[11]
  i1254.uvBottomRightY = i1255[12]
  i1254.uvTopLeftX = i1255[13]
  i1254.uvTopLeftY = i1255[14]
  i1254.uvTopRightX = i1255[15]
  i1254.uvTopRightY = i1255[16]
  return i1254
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.TextAsset"] = function (request, data, root) {
  var i1256 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.TextAsset' )
  var i1257 = data
  i1256.name = i1257[0]
  i1256.bytes64 = i1257[1]
  i1256.data = i1257[2]
  return i1256
}

Deserializers["UnityEngine.Rendering.VolumeProfile"] = function (request, data, root) {
  var i1258 = root || request.c( 'UnityEngine.Rendering.VolumeProfile' )
  var i1259 = data
  var i1261 = i1259[0]
  var i1260 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.Rendering.VolumeComponent')))
  for(var i = 0; i < i1261.length; i += 2) {
  request.r(i1261[i + 0], i1261[i + 1], 1, i1260, '')
  }
  i1258.components = i1260
  return i1258
}

Deserializers["UnityEngine.Rendering.Universal.Tonemapping"] = function (request, data, root) {
  var i1264 = root || request.c( 'UnityEngine.Rendering.Universal.Tonemapping' )
  var i1265 = data
  i1264.mode = request.d('UnityEngine.Rendering.Universal.TonemappingModeParameter', i1265[0], i1264.mode)
  i1264.neutralHDRRangeReductionMode = request.d('UnityEngine.Rendering.Universal.NeutralRangeReductionModeParameter', i1265[1], i1264.neutralHDRRangeReductionMode)
  i1264.acesPreset = request.d('UnityEngine.Rendering.Universal.HDRACESPresetParameter', i1265[2], i1264.acesPreset)
  i1264.hueShiftAmount = request.d('UnityEngine.Rendering.ClampedFloatParameter', i1265[3], i1264.hueShiftAmount)
  i1264.detectPaperWhite = request.d('UnityEngine.Rendering.BoolParameter', i1265[4], i1264.detectPaperWhite)
  i1264.paperWhite = request.d('UnityEngine.Rendering.ClampedFloatParameter', i1265[5], i1264.paperWhite)
  i1264.detectBrightnessLimits = request.d('UnityEngine.Rendering.BoolParameter', i1265[6], i1264.detectBrightnessLimits)
  i1264.minNits = request.d('UnityEngine.Rendering.ClampedFloatParameter', i1265[7], i1264.minNits)
  i1264.maxNits = request.d('UnityEngine.Rendering.ClampedFloatParameter', i1265[8], i1264.maxNits)
  i1264.active = !!i1265[9]
  return i1264
}

Deserializers["UnityEngine.Rendering.Universal.TonemappingModeParameter"] = function (request, data, root) {
  var i1266 = root || request.c( 'UnityEngine.Rendering.Universal.TonemappingModeParameter' )
  var i1267 = data
  i1266.m_Value = i1267[0]
  i1266.m_OverrideState = !!i1267[1]
  return i1266
}

Deserializers["UnityEngine.Rendering.Universal.NeutralRangeReductionModeParameter"] = function (request, data, root) {
  var i1268 = root || request.c( 'UnityEngine.Rendering.Universal.NeutralRangeReductionModeParameter' )
  var i1269 = data
  i1268.m_Value = i1269[0]
  i1268.m_OverrideState = !!i1269[1]
  return i1268
}

Deserializers["UnityEngine.Rendering.Universal.HDRACESPresetParameter"] = function (request, data, root) {
  var i1270 = root || request.c( 'UnityEngine.Rendering.Universal.HDRACESPresetParameter' )
  var i1271 = data
  i1270.m_Value = i1271[0]
  i1270.m_OverrideState = !!i1271[1]
  return i1270
}

Deserializers["UnityEngine.Rendering.ClampedFloatParameter"] = function (request, data, root) {
  var i1272 = root || request.c( 'UnityEngine.Rendering.ClampedFloatParameter' )
  var i1273 = data
  i1272.m_Value = i1273[0]
  i1272.m_OverrideState = !!i1273[1]
  return i1272
}

Deserializers["UnityEngine.Rendering.BoolParameter"] = function (request, data, root) {
  var i1274 = root || request.c( 'UnityEngine.Rendering.BoolParameter' )
  var i1275 = data
  i1274.m_Value = !!i1275[0]
  i1274.m_OverrideState = !!i1275[1]
  return i1274
}

Deserializers["UnityEngine.Rendering.Universal.Bloom"] = function (request, data, root) {
  var i1276 = root || request.c( 'UnityEngine.Rendering.Universal.Bloom' )
  var i1277 = data
  i1276.skipIterations = request.d('UnityEngine.Rendering.ClampedIntParameter', i1277[0], i1276.skipIterations)
  i1276.threshold = request.d('UnityEngine.Rendering.MinFloatParameter', i1277[1], i1276.threshold)
  i1276.intensity = request.d('UnityEngine.Rendering.MinFloatParameter', i1277[2], i1276.intensity)
  i1276.scatter = request.d('UnityEngine.Rendering.ClampedFloatParameter', i1277[3], i1276.scatter)
  i1276.clamp = request.d('UnityEngine.Rendering.MinFloatParameter', i1277[4], i1276.clamp)
  i1276.tint = request.d('UnityEngine.Rendering.ColorParameter', i1277[5], i1276.tint)
  i1276.highQualityFiltering = request.d('UnityEngine.Rendering.BoolParameter', i1277[6], i1276.highQualityFiltering)
  i1276.downscale = request.d('UnityEngine.Rendering.Universal.DownscaleParameter', i1277[7], i1276.downscale)
  i1276.maxIterations = request.d('UnityEngine.Rendering.ClampedIntParameter', i1277[8], i1276.maxIterations)
  i1276.dirtTexture = request.d('UnityEngine.Rendering.TextureParameter', i1277[9], i1276.dirtTexture)
  i1276.dirtIntensity = request.d('UnityEngine.Rendering.MinFloatParameter', i1277[10], i1276.dirtIntensity)
  i1276.active = !!i1277[11]
  return i1276
}

Deserializers["UnityEngine.Rendering.ClampedIntParameter"] = function (request, data, root) {
  var i1278 = root || request.c( 'UnityEngine.Rendering.ClampedIntParameter' )
  var i1279 = data
  i1278.m_Value = i1279[0]
  i1278.m_OverrideState = !!i1279[1]
  return i1278
}

Deserializers["UnityEngine.Rendering.MinFloatParameter"] = function (request, data, root) {
  var i1280 = root || request.c( 'UnityEngine.Rendering.MinFloatParameter' )
  var i1281 = data
  i1280.m_Value = i1281[0]
  i1280.m_OverrideState = !!i1281[1]
  return i1280
}

Deserializers["UnityEngine.Rendering.ColorParameter"] = function (request, data, root) {
  var i1282 = root || request.c( 'UnityEngine.Rendering.ColorParameter' )
  var i1283 = data
  i1282.m_Value = new pc.Color(i1283[0], i1283[1], i1283[2], i1283[3])
  i1282.m_OverrideState = !!i1283[4]
  return i1282
}

Deserializers["UnityEngine.Rendering.Universal.DownscaleParameter"] = function (request, data, root) {
  var i1284 = root || request.c( 'UnityEngine.Rendering.Universal.DownscaleParameter' )
  var i1285 = data
  i1284.m_Value = i1285[0]
  i1284.m_OverrideState = !!i1285[1]
  return i1284
}

Deserializers["UnityEngine.Rendering.TextureParameter"] = function (request, data, root) {
  var i1286 = root || request.c( 'UnityEngine.Rendering.TextureParameter' )
  var i1287 = data
  i1286.dimension = i1287[0]
  request.r(i1287[1], i1287[2], 0, i1286, 'm_Value')
  i1286.m_OverrideState = !!i1287[3]
  return i1286
}

Deserializers["UnityEngine.Rendering.Universal.MotionBlur"] = function (request, data, root) {
  var i1288 = root || request.c( 'UnityEngine.Rendering.Universal.MotionBlur' )
  var i1289 = data
  i1288.mode = request.d('UnityEngine.Rendering.Universal.MotionBlurModeParameter', i1289[0], i1288.mode)
  i1288.quality = request.d('UnityEngine.Rendering.Universal.MotionBlurQualityParameter', i1289[1], i1288.quality)
  i1288.intensity = request.d('UnityEngine.Rendering.ClampedFloatParameter', i1289[2], i1288.intensity)
  i1288.clamp = request.d('UnityEngine.Rendering.ClampedFloatParameter', i1289[3], i1288.clamp)
  i1288.active = !!i1289[4]
  return i1288
}

Deserializers["UnityEngine.Rendering.Universal.MotionBlurModeParameter"] = function (request, data, root) {
  var i1290 = root || request.c( 'UnityEngine.Rendering.Universal.MotionBlurModeParameter' )
  var i1291 = data
  i1290.m_Value = i1291[0]
  i1290.m_OverrideState = !!i1291[1]
  return i1290
}

Deserializers["UnityEngine.Rendering.Universal.MotionBlurQualityParameter"] = function (request, data, root) {
  var i1292 = root || request.c( 'UnityEngine.Rendering.Universal.MotionBlurQualityParameter' )
  var i1293 = data
  i1292.m_Value = i1293[0]
  i1292.m_OverrideState = !!i1293[1]
  return i1292
}

Deserializers["UnityEngine.Rendering.Universal.Vignette"] = function (request, data, root) {
  var i1294 = root || request.c( 'UnityEngine.Rendering.Universal.Vignette' )
  var i1295 = data
  i1294.color = request.d('UnityEngine.Rendering.ColorParameter', i1295[0], i1294.color)
  i1294.center = request.d('UnityEngine.Rendering.Vector2Parameter', i1295[1], i1294.center)
  i1294.intensity = request.d('UnityEngine.Rendering.ClampedFloatParameter', i1295[2], i1294.intensity)
  i1294.smoothness = request.d('UnityEngine.Rendering.ClampedFloatParameter', i1295[3], i1294.smoothness)
  i1294.rounded = request.d('UnityEngine.Rendering.BoolParameter', i1295[4], i1294.rounded)
  i1294.active = !!i1295[5]
  return i1294
}

Deserializers["UnityEngine.Rendering.Vector2Parameter"] = function (request, data, root) {
  var i1296 = root || request.c( 'UnityEngine.Rendering.Vector2Parameter' )
  var i1297 = data
  i1296.m_Value = new pc.Vec2( i1297[0], i1297[1] )
  i1296.m_OverrideState = !!i1297[2]
  return i1296
}

Deserializers["TMPro.TMP_FontAsset"] = function (request, data, root) {
  var i1298 = root || request.c( 'TMPro.TMP_FontAsset' )
  var i1299 = data
  i1298.normalStyle = i1299[0]
  i1298.normalSpacingOffset = i1299[1]
  i1298.boldStyle = i1299[2]
  i1298.boldSpacing = i1299[3]
  i1298.italicStyle = i1299[4]
  i1298.tabSize = i1299[5]
  request.r(i1299[6], i1299[7], 0, i1298, 'atlas')
  i1298.m_SourceFontFileGUID = i1299[8]
  i1298.m_CreationSettings = request.d('TMPro.FontAssetCreationSettings', i1299[9], i1298.m_CreationSettings)
  request.r(i1299[10], i1299[11], 0, i1298, 'm_SourceFontFile')
  i1298.m_SourceFontFilePath = i1299[12]
  i1298.m_AtlasPopulationMode = i1299[13]
  i1298.InternalDynamicOS = !!i1299[14]
  var i1301 = i1299[15]
  var i1300 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.TextCore.Glyph')))
  for(var i = 0; i < i1301.length; i += 1) {
    i1300.add(request.d('UnityEngine.TextCore.Glyph', i1301[i + 0]));
  }
  i1298.m_GlyphTable = i1300
  var i1303 = i1299[16]
  var i1302 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_Character')))
  for(var i = 0; i < i1303.length; i += 1) {
    i1302.add(request.d('TMPro.TMP_Character', i1303[i + 0]));
  }
  i1298.m_CharacterTable = i1302
  var i1305 = i1299[17]
  var i1304 = []
  for(var i = 0; i < i1305.length; i += 2) {
  request.r(i1305[i + 0], i1305[i + 1], 2, i1304, '')
  }
  i1298.m_AtlasTextures = i1304
  i1298.m_AtlasTextureIndex = i1299[18]
  i1298.m_IsMultiAtlasTexturesEnabled = !!i1299[19]
  i1298.m_GetFontFeatures = !!i1299[20]
  i1298.m_ClearDynamicDataOnBuild = !!i1299[21]
  i1298.m_AtlasWidth = i1299[22]
  i1298.m_AtlasHeight = i1299[23]
  i1298.m_AtlasPadding = i1299[24]
  i1298.m_AtlasRenderMode = i1299[25]
  var i1307 = i1299[26]
  var i1306 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.TextCore.GlyphRect')))
  for(var i = 0; i < i1307.length; i += 1) {
    i1306.add(request.d('UnityEngine.TextCore.GlyphRect', i1307[i + 0]));
  }
  i1298.m_UsedGlyphRects = i1306
  var i1309 = i1299[27]
  var i1308 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.TextCore.GlyphRect')))
  for(var i = 0; i < i1309.length; i += 1) {
    i1308.add(request.d('UnityEngine.TextCore.GlyphRect', i1309[i + 0]));
  }
  i1298.m_FreeGlyphRects = i1308
  i1298.m_FontFeatureTable = request.d('TMPro.TMP_FontFeatureTable', i1299[28], i1298.m_FontFeatureTable)
  i1298.m_ShouldReimportFontFeatures = !!i1299[29]
  var i1311 = i1299[30]
  var i1310 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_FontAsset')))
  for(var i = 0; i < i1311.length; i += 2) {
  request.r(i1311[i + 0], i1311[i + 1], 1, i1310, '')
  }
  i1298.m_FallbackFontAssetTable = i1310
  var i1313 = i1299[31]
  var i1312 = []
  for(var i = 0; i < i1313.length; i += 1) {
    i1312.push( request.d('TMPro.TMP_FontWeightPair', i1313[i + 0]) );
  }
  i1298.m_FontWeightTable = i1312
  var i1315 = i1299[32]
  var i1314 = []
  for(var i = 0; i < i1315.length; i += 1) {
    i1314.push( request.d('TMPro.TMP_FontWeightPair', i1315[i + 0]) );
  }
  i1298.fontWeights = i1314
  i1298.m_fontInfo = request.d('TMPro.FaceInfo_Legacy', i1299[33], i1298.m_fontInfo)
  var i1317 = i1299[34]
  var i1316 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_Glyph')))
  for(var i = 0; i < i1317.length; i += 1) {
    i1316.add(request.d('TMPro.TMP_Glyph', i1317[i + 0]));
  }
  i1298.m_glyphInfoList = i1316
  i1298.m_KerningTable = request.d('TMPro.KerningTable', i1299[35], i1298.m_KerningTable)
  var i1319 = i1299[36]
  var i1318 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_FontAsset')))
  for(var i = 0; i < i1319.length; i += 2) {
  request.r(i1319[i + 0], i1319[i + 1], 1, i1318, '')
  }
  i1298.fallbackFontAssets = i1318
  i1298.m_Version = i1299[37]
  i1298.m_FaceInfo = request.d('UnityEngine.TextCore.FaceInfo', i1299[38], i1298.m_FaceInfo)
  request.r(i1299[39], i1299[40], 0, i1298, 'm_Material')
  return i1298
}

Deserializers["TMPro.FontAssetCreationSettings"] = function (request, data, root) {
  var i1320 = root || request.c( 'TMPro.FontAssetCreationSettings' )
  var i1321 = data
  i1320.sourceFontFileName = i1321[0]
  i1320.sourceFontFileGUID = i1321[1]
  i1320.faceIndex = i1321[2]
  i1320.pointSizeSamplingMode = i1321[3]
  i1320.pointSize = i1321[4]
  i1320.padding = i1321[5]
  i1320.paddingMode = i1321[6]
  i1320.packingMode = i1321[7]
  i1320.atlasWidth = i1321[8]
  i1320.atlasHeight = i1321[9]
  i1320.characterSetSelectionMode = i1321[10]
  i1320.characterSequence = i1321[11]
  i1320.referencedFontAssetGUID = i1321[12]
  i1320.referencedTextAssetGUID = i1321[13]
  i1320.fontStyle = i1321[14]
  i1320.fontStyleModifier = i1321[15]
  i1320.renderMode = i1321[16]
  i1320.includeFontFeatures = !!i1321[17]
  return i1320
}

Deserializers["UnityEngine.TextCore.Glyph"] = function (request, data, root) {
  var i1324 = root || request.c( 'UnityEngine.TextCore.Glyph' )
  var i1325 = data
  i1324.m_Index = i1325[0]
  i1324.m_Metrics = request.d('UnityEngine.TextCore.GlyphMetrics', i1325[1], i1324.m_Metrics)
  i1324.m_GlyphRect = request.d('UnityEngine.TextCore.GlyphRect', i1325[2], i1324.m_GlyphRect)
  i1324.m_Scale = i1325[3]
  i1324.m_AtlasIndex = i1325[4]
  i1324.m_ClassDefinitionType = i1325[5]
  return i1324
}

Deserializers["UnityEngine.TextCore.GlyphMetrics"] = function (request, data, root) {
  var i1326 = root || request.c( 'UnityEngine.TextCore.GlyphMetrics' )
  var i1327 = data
  i1326.m_Width = i1327[0]
  i1326.m_Height = i1327[1]
  i1326.m_HorizontalBearingX = i1327[2]
  i1326.m_HorizontalBearingY = i1327[3]
  i1326.m_HorizontalAdvance = i1327[4]
  return i1326
}

Deserializers["UnityEngine.TextCore.GlyphRect"] = function (request, data, root) {
  var i1328 = root || request.c( 'UnityEngine.TextCore.GlyphRect' )
  var i1329 = data
  i1328.m_X = i1329[0]
  i1328.m_Y = i1329[1]
  i1328.m_Width = i1329[2]
  i1328.m_Height = i1329[3]
  return i1328
}

Deserializers["TMPro.TMP_Character"] = function (request, data, root) {
  var i1332 = root || request.c( 'TMPro.TMP_Character' )
  var i1333 = data
  i1332.m_ElementType = i1333[0]
  i1332.m_Unicode = i1333[1]
  i1332.m_GlyphIndex = i1333[2]
  i1332.m_Scale = i1333[3]
  return i1332
}

Deserializers["TMPro.TMP_FontFeatureTable"] = function (request, data, root) {
  var i1338 = root || request.c( 'TMPro.TMP_FontFeatureTable' )
  var i1339 = data
  var i1341 = i1339[0]
  var i1340 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.MultipleSubstitutionRecord')))
  for(var i = 0; i < i1341.length; i += 1) {
    i1340.add(request.d('TMPro.MultipleSubstitutionRecord', i1341[i + 0]));
  }
  i1338.m_MultipleSubstitutionRecords = i1340
  var i1343 = i1339[1]
  var i1342 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.LigatureSubstitutionRecord')))
  for(var i = 0; i < i1343.length; i += 1) {
    i1342.add(request.d('TMPro.LigatureSubstitutionRecord', i1343[i + 0]));
  }
  i1338.m_LigatureSubstitutionRecords = i1342
  var i1345 = i1339[2]
  var i1344 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.TextCore.LowLevel.GlyphPairAdjustmentRecord')))
  for(var i = 0; i < i1345.length; i += 1) {
    i1344.add(request.d('UnityEngine.TextCore.LowLevel.GlyphPairAdjustmentRecord', i1345[i + 0]));
  }
  i1338.m_GlyphPairAdjustmentRecords = i1344
  var i1347 = i1339[3]
  var i1346 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.MarkToBaseAdjustmentRecord')))
  for(var i = 0; i < i1347.length; i += 1) {
    i1346.add(request.d('TMPro.MarkToBaseAdjustmentRecord', i1347[i + 0]));
  }
  i1338.m_MarkToBaseAdjustmentRecords = i1346
  var i1349 = i1339[4]
  var i1348 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.MarkToMarkAdjustmentRecord')))
  for(var i = 0; i < i1349.length; i += 1) {
    i1348.add(request.d('TMPro.MarkToMarkAdjustmentRecord', i1349[i + 0]));
  }
  i1338.m_MarkToMarkAdjustmentRecords = i1348
  return i1338
}

Deserializers["TMPro.MultipleSubstitutionRecord"] = function (request, data, root) {
  var i1352 = root || request.c( 'TMPro.MultipleSubstitutionRecord' )
  var i1353 = data
  i1352.m_TargetGlyphID = i1353[0]
  i1352.m_SubstituteGlyphIDs = i1353[1]
  return i1352
}

Deserializers["TMPro.LigatureSubstitutionRecord"] = function (request, data, root) {
  var i1356 = root || request.c( 'TMPro.LigatureSubstitutionRecord' )
  var i1357 = data
  i1356.m_ComponentGlyphIDs = i1357[0]
  i1356.m_LigatureGlyphID = i1357[1]
  return i1356
}

Deserializers["UnityEngine.TextCore.LowLevel.GlyphPairAdjustmentRecord"] = function (request, data, root) {
  var i1360 = root || request.c( 'UnityEngine.TextCore.LowLevel.GlyphPairAdjustmentRecord' )
  var i1361 = data
  i1360.m_FirstAdjustmentRecord = request.d('UnityEngine.TextCore.LowLevel.GlyphAdjustmentRecord', i1361[0], i1360.m_FirstAdjustmentRecord)
  i1360.m_SecondAdjustmentRecord = request.d('UnityEngine.TextCore.LowLevel.GlyphAdjustmentRecord', i1361[1], i1360.m_SecondAdjustmentRecord)
  i1360.m_FeatureLookupFlags = i1361[2]
  return i1360
}

Deserializers["TMPro.MarkToBaseAdjustmentRecord"] = function (request, data, root) {
  var i1364 = root || request.c( 'TMPro.MarkToBaseAdjustmentRecord' )
  var i1365 = data
  i1364.m_BaseGlyphID = i1365[0]
  i1364.m_BaseGlyphAnchorPoint = request.d('TMPro.GlyphAnchorPoint', i1365[1], i1364.m_BaseGlyphAnchorPoint)
  i1364.m_MarkGlyphID = i1365[2]
  i1364.m_MarkPositionAdjustment = request.d('TMPro.MarkPositionAdjustment', i1365[3], i1364.m_MarkPositionAdjustment)
  return i1364
}

Deserializers["TMPro.MarkToMarkAdjustmentRecord"] = function (request, data, root) {
  var i1368 = root || request.c( 'TMPro.MarkToMarkAdjustmentRecord' )
  var i1369 = data
  i1368.m_BaseMarkGlyphID = i1369[0]
  i1368.m_BaseMarkGlyphAnchorPoint = request.d('TMPro.GlyphAnchorPoint', i1369[1], i1368.m_BaseMarkGlyphAnchorPoint)
  i1368.m_CombiningMarkGlyphID = i1369[2]
  i1368.m_CombiningMarkPositionAdjustment = request.d('TMPro.MarkPositionAdjustment', i1369[3], i1368.m_CombiningMarkPositionAdjustment)
  return i1368
}

Deserializers["TMPro.TMP_FontWeightPair"] = function (request, data, root) {
  var i1374 = root || request.c( 'TMPro.TMP_FontWeightPair' )
  var i1375 = data
  request.r(i1375[0], i1375[1], 0, i1374, 'regularTypeface')
  request.r(i1375[2], i1375[3], 0, i1374, 'italicTypeface')
  return i1374
}

Deserializers["TMPro.FaceInfo_Legacy"] = function (request, data, root) {
  var i1376 = root || request.c( 'TMPro.FaceInfo_Legacy' )
  var i1377 = data
  i1376.Name = i1377[0]
  i1376.PointSize = i1377[1]
  i1376.Scale = i1377[2]
  i1376.CharacterCount = i1377[3]
  i1376.LineHeight = i1377[4]
  i1376.Baseline = i1377[5]
  i1376.Ascender = i1377[6]
  i1376.CapHeight = i1377[7]
  i1376.Descender = i1377[8]
  i1376.CenterLine = i1377[9]
  i1376.SuperscriptOffset = i1377[10]
  i1376.SubscriptOffset = i1377[11]
  i1376.SubSize = i1377[12]
  i1376.Underline = i1377[13]
  i1376.UnderlineThickness = i1377[14]
  i1376.strikethrough = i1377[15]
  i1376.strikethroughThickness = i1377[16]
  i1376.TabWidth = i1377[17]
  i1376.Padding = i1377[18]
  i1376.AtlasWidth = i1377[19]
  i1376.AtlasHeight = i1377[20]
  return i1376
}

Deserializers["TMPro.TMP_Glyph"] = function (request, data, root) {
  var i1380 = root || request.c( 'TMPro.TMP_Glyph' )
  var i1381 = data
  i1380.id = i1381[0]
  i1380.x = i1381[1]
  i1380.y = i1381[2]
  i1380.width = i1381[3]
  i1380.height = i1381[4]
  i1380.xOffset = i1381[5]
  i1380.yOffset = i1381[6]
  i1380.xAdvance = i1381[7]
  i1380.scale = i1381[8]
  return i1380
}

Deserializers["TMPro.KerningTable"] = function (request, data, root) {
  var i1382 = root || request.c( 'TMPro.KerningTable' )
  var i1383 = data
  var i1385 = i1383[0]
  var i1384 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.KerningPair')))
  for(var i = 0; i < i1385.length; i += 1) {
    i1384.add(request.d('TMPro.KerningPair', i1385[i + 0]));
  }
  i1382.kerningPairs = i1384
  return i1382
}

Deserializers["TMPro.KerningPair"] = function (request, data, root) {
  var i1388 = root || request.c( 'TMPro.KerningPair' )
  var i1389 = data
  i1388.xOffset = i1389[0]
  i1388.m_FirstGlyph = i1389[1]
  i1388.m_FirstGlyphAdjustments = request.d('TMPro.GlyphValueRecord_Legacy', i1389[2], i1388.m_FirstGlyphAdjustments)
  i1388.m_SecondGlyph = i1389[3]
  i1388.m_SecondGlyphAdjustments = request.d('TMPro.GlyphValueRecord_Legacy', i1389[4], i1388.m_SecondGlyphAdjustments)
  i1388.m_IgnoreSpacingAdjustments = !!i1389[5]
  return i1388
}

Deserializers["UnityEngine.TextCore.FaceInfo"] = function (request, data, root) {
  var i1390 = root || request.c( 'UnityEngine.TextCore.FaceInfo' )
  var i1391 = data
  i1390.m_FaceIndex = i1391[0]
  i1390.m_FamilyName = i1391[1]
  i1390.m_StyleName = i1391[2]
  i1390.m_PointSize = i1391[3]
  i1390.m_Scale = i1391[4]
  i1390.m_UnitsPerEM = i1391[5]
  i1390.m_LineHeight = i1391[6]
  i1390.m_AscentLine = i1391[7]
  i1390.m_CapLine = i1391[8]
  i1390.m_MeanLine = i1391[9]
  i1390.m_Baseline = i1391[10]
  i1390.m_DescentLine = i1391[11]
  i1390.m_SuperscriptOffset = i1391[12]
  i1390.m_SuperscriptSize = i1391[13]
  i1390.m_SubscriptOffset = i1391[14]
  i1390.m_SubscriptSize = i1391[15]
  i1390.m_UnderlineOffset = i1391[16]
  i1390.m_UnderlineThickness = i1391[17]
  i1390.m_StrikethroughOffset = i1391[18]
  i1390.m_StrikethroughThickness = i1391[19]
  i1390.m_TabWidth = i1391[20]
  return i1390
}

Deserializers["TMPro.TMP_Settings"] = function (request, data, root) {
  var i1392 = root || request.c( 'TMPro.TMP_Settings' )
  var i1393 = data
  i1392.assetVersion = i1393[0]
  i1392.m_TextWrappingMode = i1393[1]
  i1392.m_enableKerning = !!i1393[2]
  var i1395 = i1393[3]
  var i1394 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.TextCore.OTL_FeatureTag')))
  for(var i = 0; i < i1395.length; i += 1) {
    i1394.add(i1395[i + 0]);
  }
  i1392.m_ActiveFontFeatures = i1394
  i1392.m_enableExtraPadding = !!i1393[4]
  i1392.m_enableTintAllSprites = !!i1393[5]
  i1392.m_enableParseEscapeCharacters = !!i1393[6]
  i1392.m_EnableRaycastTarget = !!i1393[7]
  i1392.m_GetFontFeaturesAtRuntime = !!i1393[8]
  i1392.m_missingGlyphCharacter = i1393[9]
  i1392.m_ClearDynamicDataOnBuild = !!i1393[10]
  i1392.m_warningsDisabled = !!i1393[11]
  request.r(i1393[12], i1393[13], 0, i1392, 'm_defaultFontAsset')
  i1392.m_defaultFontAssetPath = i1393[14]
  i1392.m_defaultFontSize = i1393[15]
  i1392.m_defaultAutoSizeMinRatio = i1393[16]
  i1392.m_defaultAutoSizeMaxRatio = i1393[17]
  i1392.m_defaultTextMeshProTextContainerSize = new pc.Vec2( i1393[18], i1393[19] )
  i1392.m_defaultTextMeshProUITextContainerSize = new pc.Vec2( i1393[20], i1393[21] )
  i1392.m_autoSizeTextContainer = !!i1393[22]
  i1392.m_IsTextObjectScaleStatic = !!i1393[23]
  var i1397 = i1393[24]
  var i1396 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_FontAsset')))
  for(var i = 0; i < i1397.length; i += 2) {
  request.r(i1397[i + 0], i1397[i + 1], 1, i1396, '')
  }
  i1392.m_fallbackFontAssets = i1396
  i1392.m_matchMaterialPreset = !!i1393[25]
  i1392.m_HideSubTextObjects = !!i1393[26]
  request.r(i1393[27], i1393[28], 0, i1392, 'm_defaultSpriteAsset')
  i1392.m_defaultSpriteAssetPath = i1393[29]
  i1392.m_enableEmojiSupport = !!i1393[30]
  i1392.m_MissingCharacterSpriteUnicode = i1393[31]
  var i1399 = i1393[32]
  var i1398 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_Asset')))
  for(var i = 0; i < i1399.length; i += 2) {
  request.r(i1399[i + 0], i1399[i + 1], 1, i1398, '')
  }
  i1392.m_EmojiFallbackTextAssets = i1398
  i1392.m_defaultColorGradientPresetsPath = i1393[33]
  request.r(i1393[34], i1393[35], 0, i1392, 'm_defaultStyleSheet')
  i1392.m_StyleSheetsResourcePath = i1393[36]
  request.r(i1393[37], i1393[38], 0, i1392, 'm_leadingCharacters')
  request.r(i1393[39], i1393[40], 0, i1392, 'm_followingCharacters')
  i1392.m_UseModernHangulLineBreakingRules = !!i1393[41]
  return i1392
}

Deserializers["UnityEngine.TextCore.LowLevel.GlyphAdjustmentRecord"] = function (request, data, root) {
  var i1402 = root || request.c( 'UnityEngine.TextCore.LowLevel.GlyphAdjustmentRecord' )
  var i1403 = data
  i1402.m_GlyphIndex = i1403[0]
  i1402.m_GlyphValueRecord = request.d('UnityEngine.TextCore.LowLevel.GlyphValueRecord', i1403[1], i1402.m_GlyphValueRecord)
  return i1402
}

Deserializers["UnityEngine.TextCore.LowLevel.GlyphValueRecord"] = function (request, data, root) {
  var i1404 = root || request.c( 'UnityEngine.TextCore.LowLevel.GlyphValueRecord' )
  var i1405 = data
  i1404.m_XPlacement = i1405[0]
  i1404.m_YPlacement = i1405[1]
  i1404.m_XAdvance = i1405[2]
  i1404.m_YAdvance = i1405[3]
  return i1404
}

Deserializers["TMPro.TMP_SpriteAsset"] = function (request, data, root) {
  var i1406 = root || request.c( 'TMPro.TMP_SpriteAsset' )
  var i1407 = data
  request.r(i1407[0], i1407[1], 0, i1406, 'spriteSheet')
  var i1409 = i1407[2]
  var i1408 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_Sprite')))
  for(var i = 0; i < i1409.length; i += 1) {
    i1408.add(request.d('TMPro.TMP_Sprite', i1409[i + 0]));
  }
  i1406.spriteInfoList = i1408
  var i1411 = i1407[3]
  var i1410 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_SpriteAsset')))
  for(var i = 0; i < i1411.length; i += 2) {
  request.r(i1411[i + 0], i1411[i + 1], 1, i1410, '')
  }
  i1406.fallbackSpriteAssets = i1410
  var i1413 = i1407[4]
  var i1412 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_SpriteCharacter')))
  for(var i = 0; i < i1413.length; i += 1) {
    i1412.add(request.d('TMPro.TMP_SpriteCharacter', i1413[i + 0]));
  }
  i1406.m_SpriteCharacterTable = i1412
  var i1415 = i1407[5]
  var i1414 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_SpriteGlyph')))
  for(var i = 0; i < i1415.length; i += 1) {
    i1414.add(request.d('TMPro.TMP_SpriteGlyph', i1415[i + 0]));
  }
  i1406.m_GlyphTable = i1414
  i1406.m_Version = i1407[6]
  i1406.m_FaceInfo = request.d('UnityEngine.TextCore.FaceInfo', i1407[7], i1406.m_FaceInfo)
  request.r(i1407[8], i1407[9], 0, i1406, 'm_Material')
  return i1406
}

Deserializers["TMPro.TMP_Sprite"] = function (request, data, root) {
  var i1418 = root || request.c( 'TMPro.TMP_Sprite' )
  var i1419 = data
  i1418.name = i1419[0]
  i1418.hashCode = i1419[1]
  i1418.unicode = i1419[2]
  i1418.pivot = new pc.Vec2( i1419[3], i1419[4] )
  request.r(i1419[5], i1419[6], 0, i1418, 'sprite')
  i1418.id = i1419[7]
  i1418.x = i1419[8]
  i1418.y = i1419[9]
  i1418.width = i1419[10]
  i1418.height = i1419[11]
  i1418.xOffset = i1419[12]
  i1418.yOffset = i1419[13]
  i1418.xAdvance = i1419[14]
  i1418.scale = i1419[15]
  return i1418
}

Deserializers["TMPro.TMP_SpriteCharacter"] = function (request, data, root) {
  var i1424 = root || request.c( 'TMPro.TMP_SpriteCharacter' )
  var i1425 = data
  i1424.m_Name = i1425[0]
  i1424.m_ElementType = i1425[1]
  i1424.m_Unicode = i1425[2]
  i1424.m_GlyphIndex = i1425[3]
  i1424.m_Scale = i1425[4]
  return i1424
}

Deserializers["TMPro.TMP_SpriteGlyph"] = function (request, data, root) {
  var i1428 = root || request.c( 'TMPro.TMP_SpriteGlyph' )
  var i1429 = data
  request.r(i1429[0], i1429[1], 0, i1428, 'sprite')
  i1428.m_Index = i1429[2]
  i1428.m_Metrics = request.d('UnityEngine.TextCore.GlyphMetrics', i1429[3], i1428.m_Metrics)
  i1428.m_GlyphRect = request.d('UnityEngine.TextCore.GlyphRect', i1429[4], i1428.m_GlyphRect)
  i1428.m_Scale = i1429[5]
  i1428.m_AtlasIndex = i1429[6]
  i1428.m_ClassDefinitionType = i1429[7]
  return i1428
}

Deserializers["TMPro.TMP_StyleSheet"] = function (request, data, root) {
  var i1430 = root || request.c( 'TMPro.TMP_StyleSheet' )
  var i1431 = data
  var i1433 = i1431[0]
  var i1432 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_Style')))
  for(var i = 0; i < i1433.length; i += 1) {
    i1432.add(request.d('TMPro.TMP_Style', i1433[i + 0]));
  }
  i1430.m_StyleList = i1432
  return i1430
}

Deserializers["TMPro.TMP_Style"] = function (request, data, root) {
  var i1436 = root || request.c( 'TMPro.TMP_Style' )
  var i1437 = data
  i1436.m_Name = i1437[0]
  i1436.m_HashCode = i1437[1]
  i1436.m_OpeningDefinition = i1437[2]
  i1436.m_ClosingDefinition = i1437[3]
  i1436.m_OpeningTagArray = i1437[4]
  i1436.m_ClosingTagArray = i1437[5]
  return i1436
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Resources"] = function (request, data, root) {
  var i1438 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Resources' )
  var i1439 = data
  var i1441 = i1439[0]
  var i1440 = []
  for(var i = 0; i < i1441.length; i += 1) {
    i1440.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Resources+File', i1441[i + 0]) );
  }
  i1438.files = i1440
  i1438.componentToPrefabIds = i1439[1]
  return i1438
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Resources+File"] = function (request, data, root) {
  var i1444 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Resources+File' )
  var i1445 = data
  i1444.path = i1445[0]
  request.r(i1445[1], i1445[2], 0, i1444, 'unityObject')
  return i1444
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings"] = function (request, data, root) {
  var i1446 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings' )
  var i1447 = data
  var i1449 = i1447[0]
  var i1448 = []
  for(var i = 0; i < i1449.length; i += 1) {
    i1448.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+ScriptsExecutionOrder', i1449[i + 0]) );
  }
  i1446.scriptsExecutionOrder = i1448
  var i1451 = i1447[1]
  var i1450 = []
  for(var i = 0; i < i1451.length; i += 1) {
    i1450.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+SortingLayer', i1451[i + 0]) );
  }
  i1446.sortingLayers = i1450
  var i1453 = i1447[2]
  var i1452 = []
  for(var i = 0; i < i1453.length; i += 1) {
    i1452.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+CullingLayer', i1453[i + 0]) );
  }
  i1446.cullingLayers = i1452
  i1446.timeSettings = request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+TimeSettings', i1447[3], i1446.timeSettings)
  i1446.physicsSettings = request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings', i1447[4], i1446.physicsSettings)
  i1446.physics2DSettings = request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings', i1447[5], i1446.physics2DSettings)
  i1446.qualitySettings = request.d('Luna.Unity.DTO.UnityEngine.Assets.QualitySettings', i1447[6], i1446.qualitySettings)
  i1446.enableRealtimeShadows = !!i1447[7]
  i1446.enableAutoInstancing = !!i1447[8]
  i1446.enableStaticBatching = !!i1447[9]
  i1446.enableDynamicBatching = !!i1447[10]
  i1446.lightmapEncodingQuality = i1447[11]
  i1446.desiredColorSpace = i1447[12]
  var i1455 = i1447[13]
  var i1454 = []
  for(var i = 0; i < i1455.length; i += 1) {
    i1454.push( i1455[i + 0] );
  }
  i1446.allTags = i1454
  return i1446
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+ScriptsExecutionOrder"] = function (request, data, root) {
  var i1458 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+ScriptsExecutionOrder' )
  var i1459 = data
  i1458.name = i1459[0]
  i1458.value = i1459[1]
  return i1458
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+SortingLayer"] = function (request, data, root) {
  var i1462 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+SortingLayer' )
  var i1463 = data
  i1462.id = i1463[0]
  i1462.name = i1463[1]
  i1462.value = i1463[2]
  return i1462
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+CullingLayer"] = function (request, data, root) {
  var i1466 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+CullingLayer' )
  var i1467 = data
  i1466.id = i1467[0]
  i1466.name = i1467[1]
  return i1466
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+TimeSettings"] = function (request, data, root) {
  var i1468 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+TimeSettings' )
  var i1469 = data
  i1468.fixedDeltaTime = i1469[0]
  i1468.maximumDeltaTime = i1469[1]
  i1468.timeScale = i1469[2]
  i1468.maximumParticleTimestep = i1469[3]
  return i1468
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings"] = function (request, data, root) {
  var i1470 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings' )
  var i1471 = data
  i1470.gravity = new pc.Vec3( i1471[0], i1471[1], i1471[2] )
  i1470.defaultSolverIterations = i1471[3]
  i1470.bounceThreshold = i1471[4]
  i1470.autoSyncTransforms = !!i1471[5]
  i1470.autoSimulation = !!i1471[6]
  var i1473 = i1471[7]
  var i1472 = []
  for(var i = 0; i < i1473.length; i += 1) {
    i1472.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings+CollisionMask', i1473[i + 0]) );
  }
  i1470.collisionMatrix = i1472
  return i1470
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings+CollisionMask"] = function (request, data, root) {
  var i1476 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings+CollisionMask' )
  var i1477 = data
  i1476.enabled = !!i1477[0]
  i1476.layerId = i1477[1]
  i1476.otherLayerId = i1477[2]
  return i1476
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings"] = function (request, data, root) {
  var i1478 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings' )
  var i1479 = data
  request.r(i1479[0], i1479[1], 0, i1478, 'material')
  i1478.gravity = new pc.Vec2( i1479[2], i1479[3] )
  i1478.positionIterations = i1479[4]
  i1478.velocityIterations = i1479[5]
  i1478.velocityThreshold = i1479[6]
  i1478.maxLinearCorrection = i1479[7]
  i1478.maxAngularCorrection = i1479[8]
  i1478.maxTranslationSpeed = i1479[9]
  i1478.maxRotationSpeed = i1479[10]
  i1478.baumgarteScale = i1479[11]
  i1478.baumgarteTOIScale = i1479[12]
  i1478.timeToSleep = i1479[13]
  i1478.linearSleepTolerance = i1479[14]
  i1478.angularSleepTolerance = i1479[15]
  i1478.defaultContactOffset = i1479[16]
  i1478.autoSimulation = !!i1479[17]
  i1478.queriesHitTriggers = !!i1479[18]
  i1478.queriesStartInColliders = !!i1479[19]
  i1478.callbacksOnDisable = !!i1479[20]
  i1478.reuseCollisionCallbacks = !!i1479[21]
  i1478.autoSyncTransforms = !!i1479[22]
  var i1481 = i1479[23]
  var i1480 = []
  for(var i = 0; i < i1481.length; i += 1) {
    i1480.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings+CollisionMask', i1481[i + 0]) );
  }
  i1478.collisionMatrix = i1480
  return i1478
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings+CollisionMask"] = function (request, data, root) {
  var i1484 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings+CollisionMask' )
  var i1485 = data
  i1484.enabled = !!i1485[0]
  i1484.layerId = i1485[1]
  i1484.otherLayerId = i1485[2]
  return i1484
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.QualitySettings"] = function (request, data, root) {
  var i1486 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.QualitySettings' )
  var i1487 = data
  var i1489 = i1487[0]
  var i1488 = []
  for(var i = 0; i < i1489.length; i += 1) {
    i1488.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.QualitySettings', i1489[i + 0]) );
  }
  i1486.qualityLevels = i1488
  var i1491 = i1487[1]
  var i1490 = []
  for(var i = 0; i < i1491.length; i += 1) {
    i1490.push( i1491[i + 0] );
  }
  i1486.names = i1490
  i1486.shadows = i1487[2]
  i1486.anisotropicFiltering = i1487[3]
  i1486.antiAliasing = i1487[4]
  i1486.lodBias = i1487[5]
  i1486.shadowCascades = i1487[6]
  i1486.shadowDistance = i1487[7]
  i1486.shadowmaskMode = i1487[8]
  i1486.shadowProjection = i1487[9]
  i1486.shadowResolution = i1487[10]
  i1486.softParticles = !!i1487[11]
  i1486.softVegetation = !!i1487[12]
  i1486.activeColorSpace = i1487[13]
  i1486.desiredColorSpace = i1487[14]
  i1486.masterTextureLimit = i1487[15]
  i1486.maxQueuedFrames = i1487[16]
  i1486.particleRaycastBudget = i1487[17]
  i1486.pixelLightCount = i1487[18]
  i1486.realtimeReflectionProbes = !!i1487[19]
  i1486.shadowCascade2Split = i1487[20]
  i1486.shadowCascade4Split = new pc.Vec3( i1487[21], i1487[22], i1487[23] )
  i1486.streamingMipmapsActive = !!i1487[24]
  i1486.vSyncCount = i1487[25]
  i1486.asyncUploadBufferSize = i1487[26]
  i1486.asyncUploadTimeSlice = i1487[27]
  i1486.billboardsFaceCameraPosition = !!i1487[28]
  i1486.shadowNearPlaneOffset = i1487[29]
  i1486.streamingMipmapsMemoryBudget = i1487[30]
  i1486.maximumLODLevel = i1487[31]
  i1486.streamingMipmapsAddAllCameras = !!i1487[32]
  i1486.streamingMipmapsMaxLevelReduction = i1487[33]
  i1486.streamingMipmapsRenderersPerFrame = i1487[34]
  i1486.resolutionScalingFixedDPIFactor = i1487[35]
  i1486.streamingMipmapsMaxFileIORequests = i1487[36]
  i1486.currentQualityLevel = i1487[37]
  return i1486
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShapeFrame"] = function (request, data, root) {
  var i1496 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShapeFrame' )
  var i1497 = data
  i1496.weight = i1497[0]
  i1496.vertices = i1497[1]
  i1496.normals = i1497[2]
  i1496.tangents = i1497[3]
  return i1496
}

Deserializers["TMPro.GlyphAnchorPoint"] = function (request, data, root) {
  var i1498 = root || request.c( 'TMPro.GlyphAnchorPoint' )
  var i1499 = data
  i1498.m_XCoordinate = i1499[0]
  i1498.m_YCoordinate = i1499[1]
  return i1498
}

Deserializers["TMPro.MarkPositionAdjustment"] = function (request, data, root) {
  var i1500 = root || request.c( 'TMPro.MarkPositionAdjustment' )
  var i1501 = data
  i1500.m_XPositionAdjustment = i1501[0]
  i1500.m_YPositionAdjustment = i1501[1]
  return i1500
}

Deserializers["TMPro.GlyphValueRecord_Legacy"] = function (request, data, root) {
  var i1502 = root || request.c( 'TMPro.GlyphValueRecord_Legacy' )
  var i1503 = data
  i1502.xPlacement = i1503[0]
  i1502.yPlacement = i1503[1]
  i1502.xAdvance = i1503[2]
  i1502.yAdvance = i1503[3]
  return i1502
}

Deserializers.fields = {"Luna.Unity.DTO.UnityEngine.Assets.Mesh":{"name":0,"halfPrecision":1,"useSimplification":2,"useUInt32IndexFormat":3,"vertexCount":4,"aabb":5,"streams":6,"vertices":7,"subMeshes":8,"bindposes":9,"blendShapes":10},"Luna.Unity.DTO.UnityEngine.Assets.Mesh+SubMesh":{"triangles":0},"Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShape":{"name":0,"frames":1},"Luna.Unity.DTO.UnityEngine.Assets.Material":{"name":0,"shader":1,"renderQueue":3,"enableInstancing":4,"floatParameters":5,"colorParameters":6,"vectorParameters":7,"textureParameters":8,"materialFlags":9},"Luna.Unity.DTO.UnityEngine.Assets.Material+FloatParameter":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Material+ColorParameter":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Material+VectorParameter":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Material+TextureParameter":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Material+MaterialFlag":{"name":0,"enabled":1},"Luna.Unity.DTO.UnityEngine.Textures.Texture2D":{"name":0,"width":1,"height":2,"mipmapCount":3,"anisoLevel":4,"filterMode":5,"hdr":6,"format":7,"wrapMode":8,"alphaIsTransparency":9,"alphaSource":10,"graphicsFormat":11,"sRGBTexture":12,"desiredColorSpace":13,"wrapU":14,"wrapV":15},"Luna.Unity.DTO.UnityEngine.Components.Transform":{"position":0,"scale":3,"rotation":6},"Luna.Unity.DTO.UnityEngine.Components.MeshFilter":{"sharedMesh":0},"Luna.Unity.DTO.UnityEngine.Components.MeshRenderer":{"additionalVertexStreams":0,"enabled":2,"sharedMaterial":3,"sharedMaterials":5,"receiveShadows":6,"shadowCastingMode":7,"sortingLayerID":8,"sortingOrder":9,"lightmapIndex":10,"lightmapSceneIndex":11,"lightmapScaleOffset":12,"lightProbeUsage":16,"reflectionProbeUsage":17},"Luna.Unity.DTO.UnityEngine.Components.MeshCollider":{"sharedMesh":0,"convex":2,"enabled":3,"isTrigger":4,"material":5},"Luna.Unity.DTO.UnityEngine.Scene.GameObject":{"name":0,"tagId":1,"enabled":2,"isStatic":3,"layer":4},"Luna.Unity.DTO.UnityEngine.Components.SphereCollider":{"center":0,"radius":3,"enabled":4,"isTrigger":5,"material":6},"Luna.Unity.DTO.UnityEngine.Components.Rigidbody":{"mass":0,"drag":1,"angularDrag":2,"useGravity":3,"isKinematic":4,"constraints":5,"maxAngularVelocity":6,"collisionDetectionMode":7,"interpolation":8},"Luna.Unity.DTO.UnityEngine.Components.ParticleSystem":{"main":0,"colorBySpeed":1,"colorOverLifetime":2,"emission":3,"rotationBySpeed":4,"rotationOverLifetime":5,"shape":6,"sizeBySpeed":7,"sizeOverLifetime":8,"textureSheetAnimation":9,"velocityOverLifetime":10,"noise":11,"inheritVelocity":12,"forceOverLifetime":13,"limitVelocityOverLifetime":14,"useAutoRandomSeed":15,"randomSeed":16},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.MainModule":{"duration":0,"loop":1,"prewarm":2,"startDelay":3,"startLifetime":4,"startSpeed":5,"startSize3D":6,"startSizeX":7,"startSizeY":8,"startSizeZ":9,"startRotation3D":10,"startRotationX":11,"startRotationY":12,"startRotationZ":13,"startColor":14,"gravityModifier":15,"simulationSpace":16,"customSimulationSpace":17,"simulationSpeed":19,"useUnscaledTime":20,"scalingMode":21,"playOnAwake":22,"maxParticles":23,"emitterVelocityMode":24,"stopAction":25},"Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve":{"mode":0,"curveMin":1,"curveMax":2,"curveMultiplier":3,"constantMin":4,"constantMax":5},"Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxGradient":{"mode":0,"gradientMin":1,"gradientMax":2,"colorMin":3,"colorMax":7},"Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Gradient":{"mode":0,"colorKeys":1,"alphaKeys":2},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ColorBySpeedModule":{"enabled":0,"color":1,"range":2},"Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientColorKey":{"color":0,"time":4},"Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientAlphaKey":{"alpha":0,"time":1},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ColorOverLifetimeModule":{"enabled":0,"color":1},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.EmissionModule":{"enabled":0,"rateOverTime":1,"rateOverDistance":2,"bursts":3},"Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Burst":{"count":0,"cycleCount":1,"minCount":2,"maxCount":3,"repeatInterval":4,"time":5},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.RotationBySpeedModule":{"enabled":0,"x":1,"y":2,"z":3,"separateAxes":4,"range":5},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.RotationOverLifetimeModule":{"enabled":0,"x":1,"y":2,"z":3,"separateAxes":4},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ShapeModule":{"enabled":0,"shapeType":1,"randomDirectionAmount":2,"sphericalDirectionAmount":3,"randomPositionAmount":4,"alignToDirection":5,"radius":6,"radiusMode":7,"radiusSpread":8,"radiusSpeed":9,"radiusThickness":10,"angle":11,"length":12,"boxThickness":13,"meshShapeType":16,"mesh":17,"meshRenderer":19,"skinnedMeshRenderer":21,"useMeshMaterialIndex":23,"meshMaterialIndex":24,"useMeshColors":25,"normalOffset":26,"arc":27,"arcMode":28,"arcSpread":29,"arcSpeed":30,"donutRadius":31,"position":32,"rotation":35,"scale":38},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.SizeBySpeedModule":{"enabled":0,"x":1,"y":2,"z":3,"separateAxes":4,"range":5},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.SizeOverLifetimeModule":{"enabled":0,"x":1,"y":2,"z":3,"separateAxes":4},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.TextureSheetAnimationModule":{"enabled":0,"mode":1,"animation":2,"numTilesX":3,"numTilesY":4,"useRandomRow":5,"frameOverTime":6,"startFrame":7,"cycleCount":8,"rowIndex":9,"flipU":10,"flipV":11,"spriteCount":12,"sprites":13},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.VelocityOverLifetimeModule":{"enabled":0,"x":1,"y":2,"z":3,"radial":4,"speedModifier":5,"space":6,"orbitalX":7,"orbitalY":8,"orbitalZ":9,"orbitalOffsetX":10,"orbitalOffsetY":11,"orbitalOffsetZ":12},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.NoiseModule":{"enabled":0,"separateAxes":1,"strengthX":2,"strengthY":3,"strengthZ":4,"frequency":5,"damping":6,"octaveCount":7,"octaveMultiplier":8,"octaveScale":9,"quality":10,"scrollSpeed":11,"scrollSpeedMultiplier":12,"remapEnabled":13,"remapX":14,"remapY":15,"remapZ":16,"positionAmount":17,"rotationAmount":18,"sizeAmount":19},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.InheritVelocityModule":{"enabled":0,"mode":1,"curve":2},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ForceOverLifetimeModule":{"enabled":0,"x":1,"y":2,"z":3,"space":4,"randomized":5},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.LimitVelocityOverLifetimeModule":{"enabled":0,"limit":1,"limitX":2,"limitY":3,"limitZ":4,"dampen":5,"separateAxes":6,"space":7,"drag":8,"multiplyDragByParticleSize":9,"multiplyDragByParticleVelocity":10},"Luna.Unity.DTO.UnityEngine.Components.ParticleSystemRenderer":{"mesh":0,"meshCount":2,"activeVertexStreamsCount":3,"alignment":4,"renderMode":5,"sortMode":6,"lengthScale":7,"velocityScale":8,"cameraVelocityScale":9,"normalDirection":10,"sortingFudge":11,"minParticleSize":12,"maxParticleSize":13,"pivot":14,"trailMaterial":17,"applyActiveColorSpace":19,"enabled":20,"sharedMaterial":21,"sharedMaterials":23,"receiveShadows":24,"shadowCastingMode":25,"sortingLayerID":26,"sortingOrder":27,"lightmapIndex":28,"lightmapSceneIndex":29,"lightmapScaleOffset":30,"lightProbeUsage":34,"reflectionProbeUsage":35},"Luna.Unity.DTO.UnityEngine.Textures.Cubemap":{"name":0,"atlasId":1,"mipmapCount":2,"hdr":3,"size":4,"anisoLevel":5,"filterMode":6,"rects":7,"wrapU":8,"wrapV":9},"Luna.Unity.DTO.UnityEngine.Scene.Scene":{"name":0,"index":1,"startup":2},"Luna.Unity.DTO.UnityEngine.Components.Camera":{"aspect":0,"orthographic":1,"orthographicSize":2,"backgroundColor":3,"nearClipPlane":7,"farClipPlane":8,"fieldOfView":9,"depth":10,"clearFlags":11,"cullingMask":12,"rect":13,"targetTexture":14,"usePhysicalProperties":16,"focalLength":17,"sensorSize":18,"lensShift":20,"gateFit":22,"commandBufferCount":23,"cameraType":24,"enabled":25},"Luna.Unity.DTO.UnityEngine.Components.Light":{"type":0,"color":1,"cullingMask":5,"intensity":6,"range":7,"spotAngle":8,"shadows":9,"shadowNormalBias":10,"shadowBias":11,"shadowStrength":12,"shadowResolution":13,"lightmapBakeType":14,"renderMode":15,"cookie":16,"cookieSize":18,"shadowNearPlane":19,"enabled":20},"Luna.Unity.DTO.UnityEngine.Components.AudioSource":{"clip":0,"outputAudioMixerGroup":2,"playOnAwake":4,"loop":5,"time":6,"volume":7,"pitch":8,"enabled":9},"Luna.Unity.DTO.UnityEngine.Components.HingeJoint":{"useMotor":0,"useLimits":1,"useSpring":2,"limits":3,"motor":4,"spring":5,"connectedBody":6,"axis":8,"anchor":11,"connectedAnchor":14,"autoConfigureConnectedAnchor":17,"massScale":18,"connectedMassScale":19,"enableCollision":20,"breakForce":21,"breakTorque":22},"Luna.Unity.DTO.UnityEngine.Components.CapsuleCollider":{"center":0,"radius":3,"height":4,"direction":5,"enabled":6,"isTrigger":7,"material":8},"Luna.Unity.DTO.UnityEngine.Components.SkinnedMeshRenderer":{"sharedMesh":0,"bones":2,"updateWhenOffscreen":3,"localBounds":4,"rootBone":5,"blendShapesWeights":7,"enabled":8,"sharedMaterial":9,"sharedMaterials":11,"receiveShadows":12,"shadowCastingMode":13,"sortingLayerID":14,"sortingOrder":15,"lightmapIndex":16,"lightmapSceneIndex":17,"lightmapScaleOffset":18,"lightProbeUsage":22,"reflectionProbeUsage":23},"Luna.Unity.DTO.UnityEngine.Components.SkinnedMeshRenderer+BlendShapeWeight":{"weight":0},"Luna.Unity.DTO.UnityEngine.Components.BoxCollider":{"center":0,"size":3,"enabled":6,"isTrigger":7,"material":8},"Luna.Unity.DTO.UnityEngine.Components.RectTransform":{"pivot":0,"anchorMin":2,"anchorMax":4,"sizeDelta":6,"anchoredPosition3D":8,"rotation":11,"scale":15},"Luna.Unity.DTO.UnityEngine.Components.Canvas":{"planeDistance":0,"referencePixelsPerUnit":1,"isFallbackOverlay":2,"renderMode":3,"renderOrder":4,"sortingLayerName":5,"sortingOrder":6,"scaleFactor":7,"worldCamera":8,"overrideSorting":10,"pixelPerfect":11,"targetDisplay":12,"overridePixelPerfect":13,"enabled":14},"Luna.Unity.DTO.UnityEngine.Components.CanvasRenderer":{"cullTransparentMesh":0},"Luna.Unity.DTO.UnityEngine.Assets.RenderSettings":{"ambientIntensity":0,"reflectionIntensity":1,"ambientMode":2,"ambientLight":3,"ambientSkyColor":7,"ambientGroundColor":11,"ambientEquatorColor":15,"fogColor":19,"fogEndDistance":23,"fogStartDistance":24,"fogDensity":25,"fog":26,"skybox":27,"fogMode":29,"lightmaps":30,"lightProbes":31,"lightmapsMode":32,"mixedBakeMode":33,"environmentLightingMode":34,"ambientProbe":35,"referenceAmbientProbe":36,"useReferenceAmbientProbe":37,"customReflection":38,"defaultReflection":40,"defaultReflectionMode":42,"defaultReflectionResolution":43,"sunLightObjectId":44,"pixelLightCount":45,"defaultReflectionHDR":46,"hasLightDataAsset":47,"hasManualGenerate":48},"Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+Lightmap":{"lightmapColor":0,"lightmapDirection":2},"Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+LightProbes":{"bakedProbes":0,"positions":1,"hullRays":2,"tetrahedra":3,"neighbours":4,"matrices":5},"Luna.Unity.DTO.UnityEngine.Assets.UniversalRenderPipelineAsset":{"AdditionalLightsPerObjectLimit":0,"AdditionalLightsRenderingMode":1,"LightRenderingMode":2,"ColorGradingLutSize":3,"ColorGradingMode":4,"MainLightRenderingMode":5,"MainLightRenderingModeValue":6,"SupportsMainLightShadows":7,"MixedLightingSupported":8,"MsaaQuality":9,"MSAA":10,"OpaqueDownsampling":11,"MainLightShadowmapResolution":12,"MainLightShadowmapResolutionValue":13,"SupportsSoftShadows":14,"SoftShadowQuality":15,"SoftShadowQualityValue":16,"ShadowDistance":17,"ShadowCascadeCount":18,"Cascade2Split":19,"Cascade3Split":20,"Cascade4Split":22,"CascadeBorder":25,"ShadowDepthBias":26,"ShadowNormalBias":27,"RenderScale":28,"RequireDepthTexture":29,"RequireOpaqueTexture":30,"SupportsHDR":31,"SupportsTerrainHoles":32},"Luna.Unity.DTO.UnityEngine.Assets.LightRenderingMode":{"Disabled":0,"PerVertex":1,"PerPixel":2},"Luna.Unity.DTO.UnityEngine.Assets.ColorGradingMode":{"LowDynamicRange":0,"HighDynamicRange":1},"Luna.Unity.DTO.UnityEngine.Assets.MsaaQuality":{"Disabled":0,"_2x":1,"_4x":2,"_8x":3},"Luna.Unity.DTO.UnityEngine.Assets.Downsampling":{"None":0,"_2xBilinear":1,"_4xBox":2,"_4xBilinear":3},"Luna.Unity.DTO.UnityEngine.Assets.ShadowResolution":{"_256":0,"_512":1,"_1024":2,"_2048":3,"_4096":4},"Luna.Unity.DTO.UnityEngine.Assets.SoftShadowQuality":{"UsePipelineSettings":0,"Low":1,"Medium":2,"High":3},"Luna.Unity.DTO.UnityEngine.Assets.PhysicMaterial":{"name":0,"bounciness":1,"dynamicFriction":2,"staticFriction":3,"frictionCombine":4,"bounceCombine":5},"Luna.Unity.DTO.UnityEngine.Assets.Shader":{"ShaderCompilationErrors":0,"name":1,"guid":2,"shaderDefinedKeywords":3,"passes":4,"usePasses":5,"defaultParameterValues":6,"unityFallbackShader":7,"readDepth":9,"hasDepthOnlyPass":10,"isCreatedByShaderGraph":11,"disableBatching":12,"compiled":13},"Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError":{"shaderName":0,"errorMessage":1},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass":{"id":0,"subShaderIndex":1,"name":2,"passType":3,"grabPassTextureName":4,"usePass":5,"zTest":6,"zWrite":7,"culling":8,"blending":9,"alphaBlending":10,"colorWriteMask":11,"offsetUnits":12,"offsetFactor":13,"stencilRef":14,"stencilReadMask":15,"stencilWriteMask":16,"stencilOp":17,"stencilOpFront":18,"stencilOpBack":19,"tags":20,"passDefinedKeywords":21,"passDefinedKeywordGroups":22,"variants":23,"excludedVariants":24,"hasDepthReader":25},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value":{"val":0,"name":1},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending":{"src":0,"dst":1,"op":2},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp":{"pass":0,"fail":1,"zFail":2,"comp":3},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Tag":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+KeywordGroup":{"keywords":0,"hasDiscard":1},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant":{"passId":0,"subShaderIndex":1,"keywords":2,"vertexProgram":3,"fragmentProgram":4,"exportedForWebGl2":5,"readDepth":6},"Luna.Unity.DTO.UnityEngine.Assets.Shader+UsePass":{"shader":0,"pass":2},"Luna.Unity.DTO.UnityEngine.Assets.Shader+DefaultParameterValue":{"name":0,"type":1,"value":2,"textureValue":6,"shaderPropertyFlag":7},"Luna.Unity.DTO.UnityEngine.Textures.Sprite":{"name":0,"texture":1,"aabb":3,"vertices":4,"triangles":5,"textureRect":6,"packedRect":10,"border":14,"transparency":18,"bounds":19,"pixelsPerUnit":20,"textureWidth":21,"textureHeight":22,"nativeSize":23,"pivot":25,"textureRectOffset":27},"Luna.Unity.DTO.UnityEngine.Assets.AudioClip":{"name":0},"Luna.Unity.DTO.UnityEngine.Assets.Font":{"name":0,"ascent":1,"originalLineHeight":2,"fontSize":3,"characterInfo":4,"texture":5,"originalFontSize":7},"Luna.Unity.DTO.UnityEngine.Assets.Font+CharacterInfo":{"index":0,"advance":1,"bearing":2,"glyphWidth":3,"glyphHeight":4,"minX":5,"maxX":6,"minY":7,"maxY":8,"uvBottomLeftX":9,"uvBottomLeftY":10,"uvBottomRightX":11,"uvBottomRightY":12,"uvTopLeftX":13,"uvTopLeftY":14,"uvTopRightX":15,"uvTopRightY":16},"Luna.Unity.DTO.UnityEngine.Assets.TextAsset":{"name":0,"bytes64":1,"data":2},"Luna.Unity.DTO.UnityEngine.Assets.Resources":{"files":0,"componentToPrefabIds":1},"Luna.Unity.DTO.UnityEngine.Assets.Resources+File":{"path":0,"unityObject":1},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings":{"scriptsExecutionOrder":0,"sortingLayers":1,"cullingLayers":2,"timeSettings":3,"physicsSettings":4,"physics2DSettings":5,"qualitySettings":6,"enableRealtimeShadows":7,"enableAutoInstancing":8,"enableStaticBatching":9,"enableDynamicBatching":10,"lightmapEncodingQuality":11,"desiredColorSpace":12,"allTags":13},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+ScriptsExecutionOrder":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+SortingLayer":{"id":0,"name":1,"value":2},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+CullingLayer":{"id":0,"name":1},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+TimeSettings":{"fixedDeltaTime":0,"maximumDeltaTime":1,"timeScale":2,"maximumParticleTimestep":3},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings":{"gravity":0,"defaultSolverIterations":3,"bounceThreshold":4,"autoSyncTransforms":5,"autoSimulation":6,"collisionMatrix":7},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings+CollisionMask":{"enabled":0,"layerId":1,"otherLayerId":2},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings":{"material":0,"gravity":2,"positionIterations":4,"velocityIterations":5,"velocityThreshold":6,"maxLinearCorrection":7,"maxAngularCorrection":8,"maxTranslationSpeed":9,"maxRotationSpeed":10,"baumgarteScale":11,"baumgarteTOIScale":12,"timeToSleep":13,"linearSleepTolerance":14,"angularSleepTolerance":15,"defaultContactOffset":16,"autoSimulation":17,"queriesHitTriggers":18,"queriesStartInColliders":19,"callbacksOnDisable":20,"reuseCollisionCallbacks":21,"autoSyncTransforms":22,"collisionMatrix":23},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings+CollisionMask":{"enabled":0,"layerId":1,"otherLayerId":2},"Luna.Unity.DTO.UnityEngine.Assets.QualitySettings":{"qualityLevels":0,"names":1,"shadows":2,"anisotropicFiltering":3,"antiAliasing":4,"lodBias":5,"shadowCascades":6,"shadowDistance":7,"shadowmaskMode":8,"shadowProjection":9,"shadowResolution":10,"softParticles":11,"softVegetation":12,"activeColorSpace":13,"desiredColorSpace":14,"masterTextureLimit":15,"maxQueuedFrames":16,"particleRaycastBudget":17,"pixelLightCount":18,"realtimeReflectionProbes":19,"shadowCascade2Split":20,"shadowCascade4Split":21,"streamingMipmapsActive":24,"vSyncCount":25,"asyncUploadBufferSize":26,"asyncUploadTimeSlice":27,"billboardsFaceCameraPosition":28,"shadowNearPlaneOffset":29,"streamingMipmapsMemoryBudget":30,"maximumLODLevel":31,"streamingMipmapsAddAllCameras":32,"streamingMipmapsMaxLevelReduction":33,"streamingMipmapsRenderersPerFrame":34,"resolutionScalingFixedDPIFactor":35,"streamingMipmapsMaxFileIORequests":36,"currentQualityLevel":37},"Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShapeFrame":{"weight":0,"vertices":1,"normals":2,"tangents":3}}

Deserializers.requiredComponents = {"100":[101],"102":[101],"103":[101],"104":[101],"105":[101],"106":[101],"26":[27],"107":[14],"108":[9],"109":[9],"110":[9],"111":[9],"23":[9],"112":[9],"113":[114],"115":[114],"116":[114],"117":[114],"118":[114],"119":[114],"120":[114],"121":[114],"122":[114],"123":[114],"124":[114],"125":[114],"126":[114],"127":[14],"128":[5],"129":[130],"131":[130],"33":[32],"132":[46],"133":[33],"70":[32],"134":[14],"16":[14],"18":[17],"135":[32],"136":[5,32],"39":[32,37],"137":[32],"138":[37,32],"139":[5],"140":[37,32],"141":[32],"142":[143],"144":[143],"145":[143],"146":[32],"147":[32],"36":[33],"38":[37,32],"148":[32],"35":[33],"51":[32],"149":[32],"45":[32],"150":[32],"56":[32],"151":[32],"42":[32],"59":[32],"152":[32],"153":[37,32],"154":[32],"58":[32],"55":[32],"155":[32],"54":[37,32],"63":[32],"156":[46],"157":[46],"47":[46],"158":[46],"159":[14],"160":[14]}

Deserializers.types = ["UnityEngine.Shader","UnityEngine.Texture2D","UnityEngine.Transform","UnityEngine.MeshFilter","UnityEngine.Mesh","UnityEngine.MeshRenderer","UnityEngine.Material","UnityEngine.MeshCollider","UnityEngine.SphereCollider","UnityEngine.Rigidbody","UnityEngine.MonoBehaviour","BallBehavior","UnityEngine.ParticleSystem","UnityEngine.ParticleSystemRenderer","UnityEngine.Camera","UnityEngine.AudioListener","UnityEngine.Rendering.Universal.UniversalAdditionalCameraData","UnityEngine.Light","UnityEngine.Rendering.Universal.UniversalAdditionalLightData","UnityEngine.Rendering.Volume","UnityEngine.Rendering.VolumeProfile","UnityEngine.AudioSource","UnityEngine.AudioClip","UnityEngine.HingeJoint","BasketBehavior","UnityEngine.CapsuleCollider","UnityEngine.Cloth","UnityEngine.SkinnedMeshRenderer","UnityEngine.BoxCollider","UnityEngine.PhysicsMaterial","InputManager","UnityEngine.GameObject","UnityEngine.RectTransform","UnityEngine.Canvas","UnityEngine.EventSystems.UIBehaviour","UnityEngine.UI.CanvasScaler","UnityEngine.UI.GraphicRaycaster","UnityEngine.CanvasRenderer","UnityEngine.UI.Image","TMPro.TextMeshProUGUI","TMPro.TMP_FontAsset","UnityEngine.Sprite","UnityEngine.UI.VerticalLayoutGroup","UnityEngine.UI.Button","GameManager","UnityEngine.UI.HorizontalLayoutGroup","UnityEngine.EventSystems.EventSystem","UnityEngine.EventSystems.StandaloneInputModule","LunaGameManager","UnityEngine.Cubemap","UnityEngine.Rendering.UI.DebugUIHandlerCanvas","UnityEngine.UI.ContentSizeFitter","UnityEngine.Rendering.UI.DebugUIHandlerContainer","UnityEngine.Rendering.UI.DebugUIHandlerPanel","UnityEngine.UI.Text","UnityEngine.UI.ScrollRect","UnityEngine.UI.LayoutElement","UnityEngine.Font","UnityEngine.UI.Scrollbar","UnityEngine.UI.Mask","UnityEngine.EventSystems.EventTrigger","UnityEngine.Rendering.UI.DebugUIHandlerValue","UnityEngine.Rendering.UI.DebugUIHandlerToggle","UnityEngine.UI.Toggle","UnityEngine.Rendering.UI.DebugUIHandlerIntField","UnityEngine.Rendering.UI.DebugUIHandlerUIntField","UnityEngine.Rendering.UI.DebugUIHandlerFloatField","UnityEngine.Rendering.UI.DebugUIHandlerEnumField","UnityEngine.Rendering.UI.DebugUIHandlerButton","UnityEngine.Rendering.UI.DebugUIHandlerFoldout","UnityEngine.Rendering.UI.UIFoldout","UnityEngine.Rendering.UI.DebugUIHandlerColor","UnityEngine.Rendering.UI.DebugUIHandlerIndirectFloatField","UnityEngine.Rendering.UI.DebugUIHandlerVector2","UnityEngine.Rendering.UI.DebugUIHandlerVector3","UnityEngine.Rendering.UI.DebugUIHandlerVector4","UnityEngine.Rendering.UI.DebugUIHandlerVBox","UnityEngine.Rendering.UI.DebugUIHandlerHBox","UnityEngine.Rendering.UI.DebugUIHandlerGroup","UnityEngine.Rendering.UI.DebugUIHandlerBitField","UnityEngine.Rendering.UI.DebugUIHandlerIndirectToggle","UnityEngine.Rendering.UI.DebugUIHandlerToggleHistory","UnityEngine.Rendering.UI.DebugUIHandlerEnumHistory","UnityEngine.Rendering.UI.DebugUIHandlerRow","UnityEngine.Rendering.UI.DebugUIHandlerMessageBox","UnityEngine.Rendering.UI.DebugUIHandlerProgressBar","UnityEngine.Rendering.UI.DebugUIHandlerValueTuple","UnityEngine.Rendering.UI.DebugUIHandlerObject","UnityEngine.Rendering.UI.DebugUIHandlerObjectList","UnityEngine.Rendering.UI.DebugUIHandlerObjectPopupField","UnityEngine.Rendering.UI.DebugUIHandlerRenderingLayerField","UnityEngine.Rendering.UI.DebugUIHandlerPersistentCanvas","UnityEngine.Rendering.Universal.Tonemapping","UnityEngine.Rendering.Universal.Bloom","UnityEngine.Rendering.Universal.MotionBlur","UnityEngine.Rendering.Universal.Vignette","TMPro.TMP_Settings","TMPro.TMP_SpriteAsset","TMPro.TMP_StyleSheet","UnityEngine.TextAsset","UnityEngine.AudioLowPassFilter","UnityEngine.AudioBehaviour","UnityEngine.AudioHighPassFilter","UnityEngine.AudioReverbFilter","UnityEngine.AudioDistortionFilter","UnityEngine.AudioEchoFilter","UnityEngine.AudioChorusFilter","UnityEngine.FlareLayer","UnityEngine.CharacterJoint","UnityEngine.ConfigurableJoint","UnityEngine.ConstantForce","UnityEngine.FixedJoint","UnityEngine.SpringJoint","UnityEngine.CompositeCollider2D","UnityEngine.Rigidbody2D","UnityEngine.Joint2D","UnityEngine.AnchoredJoint2D","UnityEngine.SpringJoint2D","UnityEngine.DistanceJoint2D","UnityEngine.FrictionJoint2D","UnityEngine.HingeJoint2D","UnityEngine.RelativeJoint2D","UnityEngine.SliderJoint2D","UnityEngine.TargetJoint2D","UnityEngine.FixedJoint2D","UnityEngine.WheelJoint2D","UnityEngine.ConstantForce2D","UnityEngine.StreamingController","UnityEngine.TextMesh","UnityEngine.Tilemaps.TilemapRenderer","UnityEngine.Tilemaps.Tilemap","UnityEngine.Tilemaps.TilemapCollider2D","UnityEngine.InputSystem.UI.InputSystemUIInputModule","UnityEngine.InputSystem.UI.TrackedDeviceRaycaster","UnityEngine.Rendering.Universal.PixelPerfectCamera","TMPro.TextContainer","TMPro.TextMeshPro","TMPro.TMP_Dropdown","TMPro.TMP_SelectionCaret","TMPro.TMP_SubMesh","TMPro.TMP_SubMeshUI","TMPro.TMP_Text","Unity.VisualScripting.SceneVariables","Unity.VisualScripting.Variables","Unity.VisualScripting.ScriptMachine","Unity.VisualScripting.StateMachine","UnityEngine.UI.Dropdown","UnityEngine.UI.Graphic","UnityEngine.UI.AspectRatioFitter","UnityEngine.UI.GridLayoutGroup","UnityEngine.UI.HorizontalOrVerticalLayoutGroup","UnityEngine.UI.LayoutGroup","UnityEngine.UI.MaskableGraphic","UnityEngine.UI.RawImage","UnityEngine.UI.RectMask2D","UnityEngine.UI.Slider","UnityEngine.EventSystems.BaseInputModule","UnityEngine.EventSystems.PointerInputModule","UnityEngine.EventSystems.TouchInputModule","UnityEngine.EventSystems.Physics2DRaycaster","UnityEngine.EventSystems.PhysicsRaycaster"]

Deserializers.unityVersion = "6000.0.60f1";

Deserializers.productName = "INDIEZ_PerformanceTest";

Deserializers.lunaInitializationTime = "11/25/2025 03:49:18";

Deserializers.lunaDaysRunning = "9.0";

Deserializers.lunaVersion = "7.0.0";

Deserializers.lunaSHA = "3bcc3e343f23b4c67e768a811a8d088c7f7adbc5";

Deserializers.creativeName = "INDIEZ_PerformanceTest";

Deserializers.lunaAppID = "34764";

Deserializers.projectId = "0746943d558dd7841a3c7e4f41444c2a";

Deserializers.packagesInfo = "com.unity.inputsystem: 1.14.2\ncom.unity.render-pipelines.universal: 17.0.4\ncom.unity.ugui: 2.0.0";

Deserializers.externalJsLibraries = "";

Deserializers.androidLink = ( typeof window !== "undefined")&&window.$environment.packageConfig.androidLink?window.$environment.packageConfig.androidLink:'Empty';

Deserializers.iosLink = ( typeof window !== "undefined")&&window.$environment.packageConfig.iosLink?window.$environment.packageConfig.iosLink:'Empty';

Deserializers.base64Enabled = "False";

Deserializers.minifyEnabled = "True";

Deserializers.isForceUncompressed = "False";

Deserializers.isAntiAliasingEnabled = "False";

Deserializers.isRuntimeAnalysisEnabledForCode = "True";

Deserializers.runtimeAnalysisExcludedClassesCount = "1603";

Deserializers.runtimeAnalysisExcludedMethodsCount = "4064";

Deserializers.runtimeAnalysisExcludedModules = "physics2d, reflection, prefabs, mecanim-wasm";

Deserializers.isRuntimeAnalysisEnabledForShaders = "True";

Deserializers.isRealtimeShadowsEnabled = "False";

Deserializers.isReferenceAmbientProbeBaked = "False";

Deserializers.isLunaCompilerV2Used = "False";

Deserializers.companyName = "DefaultCompany";

Deserializers.buildPlatform = "WebGL";

Deserializers.applicationIdentifier = "com.DefaultCompany.INDIEZ-PerformanceTest";

Deserializers.disableAntiAliasing = true;

Deserializers.graphicsConstraint = 24;

Deserializers.linearColorSpace = false;

Deserializers.buildID = "7cc425a1-a9db-4485-908e-8fd2f036f578";

Deserializers.runtimeInitializeOnLoadInfos = [[["UnityEngine","Rendering","DebugUpdater","RuntimeInit"],["UnityEngine","Experimental","Rendering","ScriptableRuntimeReflectionSystemSettings","ScriptingDirtyReflectionSystemInstance"]],[["Unity","VisualScripting","RuntimeVSUsageUtility","RuntimeInitializeOnLoadBeforeSceneLoad"],["UnityEngine","InputSystem","InputSystem","RunInitialUpdate"],["Unity","AI","Navigation","NavMeshModifierVolume","ClearNavMeshModifiers"],["Unity","AI","Navigation","NavMeshLink","ClearTrackedList"],["Unity","AI","Navigation","NavMeshSurface","ClearNavMeshSurfaces"],["Unity","AI","Navigation","NavMeshModifier","ClearNavMeshModifiers"],["UnityEngine","AI","NavMesh","ClearPreUpdateListeners"]],[["$BurstDirectCallInitializer","Initialize"],["$BurstDirectCallInitializer","Initialize"],["$BurstDirectCallInitializer","Initialize"],["$BurstDirectCallInitializer","Initialize"]],[["UnityEngine","Experimental","Rendering","XRSystem","XRSystemInit"]],[["UnityEngine","InputSystem","Plugins","InputForUI","InputSystemProvider","Bootstrap"],["UnityEngine","InputSystem","UI","InputSystemUIInputModule","ResetDefaultActions"],["UnityEngine","InputSystem","InputSystem","RunInitializeInPlayer"]]];

Deserializers.typeNameToIdMap = function(){ var i = 0; return Deserializers.types.reduce( function( res, item ) { res[ item ] = i++; return res; }, {} ) }()

