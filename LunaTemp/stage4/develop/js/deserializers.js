var Deserializers = {}
Deserializers["UnityEngine.JointSpring"] = function (request, data, root) {
  var i5264 = root || request.c( 'UnityEngine.JointSpring' )
  var i5265 = data
  i5264.spring = i5265[0]
  i5264.damper = i5265[1]
  i5264.targetPosition = i5265[2]
  return i5264
}

Deserializers["UnityEngine.JointMotor"] = function (request, data, root) {
  var i5266 = root || request.c( 'UnityEngine.JointMotor' )
  var i5267 = data
  i5266.m_TargetVelocity = i5267[0]
  i5266.m_Force = i5267[1]
  i5266.m_FreeSpin = i5267[2]
  return i5266
}

Deserializers["UnityEngine.JointLimits"] = function (request, data, root) {
  var i5268 = root || request.c( 'UnityEngine.JointLimits' )
  var i5269 = data
  i5268.m_Min = i5269[0]
  i5268.m_Max = i5269[1]
  i5268.m_Bounciness = i5269[2]
  i5268.m_BounceMinVelocity = i5269[3]
  i5268.m_ContactDistance = i5269[4]
  i5268.minBounce = i5269[5]
  i5268.maxBounce = i5269[6]
  return i5268
}

Deserializers["UnityEngine.JointDrive"] = function (request, data, root) {
  var i5270 = root || request.c( 'UnityEngine.JointDrive' )
  var i5271 = data
  i5270.m_PositionSpring = i5271[0]
  i5270.m_PositionDamper = i5271[1]
  i5270.m_MaximumForce = i5271[2]
  i5270.m_UseAcceleration = i5271[3]
  return i5270
}

Deserializers["UnityEngine.SoftJointLimitSpring"] = function (request, data, root) {
  var i5272 = root || request.c( 'UnityEngine.SoftJointLimitSpring' )
  var i5273 = data
  i5272.m_Spring = i5273[0]
  i5272.m_Damper = i5273[1]
  return i5272
}

Deserializers["UnityEngine.SoftJointLimit"] = function (request, data, root) {
  var i5274 = root || request.c( 'UnityEngine.SoftJointLimit' )
  var i5275 = data
  i5274.m_Limit = i5275[0]
  i5274.m_Bounciness = i5275[1]
  i5274.m_ContactDistance = i5275[2]
  return i5274
}

Deserializers["UnityEngine.WheelFrictionCurve"] = function (request, data, root) {
  var i5276 = root || request.c( 'UnityEngine.WheelFrictionCurve' )
  var i5277 = data
  i5276.m_ExtremumSlip = i5277[0]
  i5276.m_ExtremumValue = i5277[1]
  i5276.m_AsymptoteSlip = i5277[2]
  i5276.m_AsymptoteValue = i5277[3]
  i5276.m_Stiffness = i5277[4]
  return i5276
}

Deserializers["UnityEngine.JointAngleLimits2D"] = function (request, data, root) {
  var i5278 = root || request.c( 'UnityEngine.JointAngleLimits2D' )
  var i5279 = data
  i5278.m_LowerAngle = i5279[0]
  i5278.m_UpperAngle = i5279[1]
  return i5278
}

Deserializers["UnityEngine.JointMotor2D"] = function (request, data, root) {
  var i5280 = root || request.c( 'UnityEngine.JointMotor2D' )
  var i5281 = data
  i5280.m_MotorSpeed = i5281[0]
  i5280.m_MaximumMotorTorque = i5281[1]
  return i5280
}

Deserializers["UnityEngine.JointSuspension2D"] = function (request, data, root) {
  var i5282 = root || request.c( 'UnityEngine.JointSuspension2D' )
  var i5283 = data
  i5282.m_DampingRatio = i5283[0]
  i5282.m_Frequency = i5283[1]
  i5282.m_Angle = i5283[2]
  return i5282
}

Deserializers["UnityEngine.JointTranslationLimits2D"] = function (request, data, root) {
  var i5284 = root || request.c( 'UnityEngine.JointTranslationLimits2D' )
  var i5285 = data
  i5284.m_LowerTranslation = i5285[0]
  i5284.m_UpperTranslation = i5285[1]
  return i5284
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Mesh"] = function (request, data, root) {
  var i5286 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Mesh' )
  var i5287 = data
  i5286.name = i5287[0]
  i5286.halfPrecision = !!i5287[1]
  i5286.useSimplification = !!i5287[2]
  i5286.useUInt32IndexFormat = !!i5287[3]
  i5286.vertexCount = i5287[4]
  i5286.aabb = i5287[5]
  var i5289 = i5287[6]
  var i5288 = []
  for(var i = 0; i < i5289.length; i += 1) {
    i5288.push( !!i5289[i + 0] );
  }
  i5286.streams = i5288
  i5286.vertices = i5287[7]
  var i5291 = i5287[8]
  var i5290 = []
  for(var i = 0; i < i5291.length; i += 1) {
    i5290.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Mesh+SubMesh', i5291[i + 0]) );
  }
  i5286.subMeshes = i5290
  var i5293 = i5287[9]
  var i5292 = []
  for(var i = 0; i < i5293.length; i += 16) {
    i5292.push( new pc.Mat4().setData(i5293[i + 0], i5293[i + 1], i5293[i + 2], i5293[i + 3],  i5293[i + 4], i5293[i + 5], i5293[i + 6], i5293[i + 7],  i5293[i + 8], i5293[i + 9], i5293[i + 10], i5293[i + 11],  i5293[i + 12], i5293[i + 13], i5293[i + 14], i5293[i + 15]) );
  }
  i5286.bindposes = i5292
  var i5295 = i5287[10]
  var i5294 = []
  for(var i = 0; i < i5295.length; i += 1) {
    i5294.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShape', i5295[i + 0]) );
  }
  i5286.blendShapes = i5294
  return i5286
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Mesh+SubMesh"] = function (request, data, root) {
  var i5300 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Mesh+SubMesh' )
  var i5301 = data
  i5300.triangles = i5301[0]
  return i5300
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShape"] = function (request, data, root) {
  var i5306 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShape' )
  var i5307 = data
  i5306.name = i5307[0]
  var i5309 = i5307[1]
  var i5308 = []
  for(var i = 0; i < i5309.length; i += 1) {
    i5308.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShapeFrame', i5309[i + 0]) );
  }
  i5306.frames = i5308
  return i5306
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material"] = function (request, data, root) {
  var i5310 = root || new pc.UnityMaterial()
  var i5311 = data
  i5310.name = i5311[0]
  request.r(i5311[1], i5311[2], 0, i5310, 'shader')
  i5310.renderQueue = i5311[3]
  i5310.enableInstancing = !!i5311[4]
  var i5313 = i5311[5]
  var i5312 = []
  for(var i = 0; i < i5313.length; i += 1) {
    i5312.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+FloatParameter', i5313[i + 0]) );
  }
  i5310.floatParameters = i5312
  var i5315 = i5311[6]
  var i5314 = []
  for(var i = 0; i < i5315.length; i += 1) {
    i5314.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+ColorParameter', i5315[i + 0]) );
  }
  i5310.colorParameters = i5314
  var i5317 = i5311[7]
  var i5316 = []
  for(var i = 0; i < i5317.length; i += 1) {
    i5316.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+VectorParameter', i5317[i + 0]) );
  }
  i5310.vectorParameters = i5316
  var i5319 = i5311[8]
  var i5318 = []
  for(var i = 0; i < i5319.length; i += 1) {
    i5318.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+TextureParameter', i5319[i + 0]) );
  }
  i5310.textureParameters = i5318
  var i5321 = i5311[9]
  var i5320 = []
  for(var i = 0; i < i5321.length; i += 1) {
    i5320.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+MaterialFlag', i5321[i + 0]) );
  }
  i5310.materialFlags = i5320
  return i5310
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+FloatParameter"] = function (request, data, root) {
  var i5324 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+FloatParameter' )
  var i5325 = data
  i5324.name = i5325[0]
  i5324.value = i5325[1]
  return i5324
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+ColorParameter"] = function (request, data, root) {
  var i5328 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+ColorParameter' )
  var i5329 = data
  i5328.name = i5329[0]
  i5328.value = new pc.Color(i5329[1], i5329[2], i5329[3], i5329[4])
  return i5328
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+VectorParameter"] = function (request, data, root) {
  var i5332 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+VectorParameter' )
  var i5333 = data
  i5332.name = i5333[0]
  i5332.value = new pc.Vec4( i5333[1], i5333[2], i5333[3], i5333[4] )
  return i5332
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+TextureParameter"] = function (request, data, root) {
  var i5336 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+TextureParameter' )
  var i5337 = data
  i5336.name = i5337[0]
  request.r(i5337[1], i5337[2], 0, i5336, 'value')
  return i5336
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+MaterialFlag"] = function (request, data, root) {
  var i5340 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+MaterialFlag' )
  var i5341 = data
  i5340.name = i5341[0]
  i5340.enabled = !!i5341[1]
  return i5340
}

Deserializers["Luna.Unity.DTO.UnityEngine.Textures.Texture2D"] = function (request, data, root) {
  var i5342 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Textures.Texture2D' )
  var i5343 = data
  i5342.name = i5343[0]
  i5342.width = i5343[1]
  i5342.height = i5343[2]
  i5342.mipmapCount = i5343[3]
  i5342.anisoLevel = i5343[4]
  i5342.filterMode = i5343[5]
  i5342.hdr = !!i5343[6]
  i5342.format = i5343[7]
  i5342.wrapMode = i5343[8]
  i5342.alphaIsTransparency = !!i5343[9]
  i5342.alphaSource = i5343[10]
  i5342.graphicsFormat = i5343[11]
  i5342.sRGBTexture = !!i5343[12]
  i5342.desiredColorSpace = i5343[13]
  i5342.wrapU = i5343[14]
  i5342.wrapV = i5343[15]
  return i5342
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Transform"] = function (request, data, root) {
  var i5344 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Transform' )
  var i5345 = data
  i5344.position = new pc.Vec3( i5345[0], i5345[1], i5345[2] )
  i5344.scale = new pc.Vec3( i5345[3], i5345[4], i5345[5] )
  i5344.rotation = new pc.Quat(i5345[6], i5345[7], i5345[8], i5345[9])
  return i5344
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.MeshFilter"] = function (request, data, root) {
  var i5346 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.MeshFilter' )
  var i5347 = data
  request.r(i5347[0], i5347[1], 0, i5346, 'sharedMesh')
  return i5346
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.MeshRenderer"] = function (request, data, root) {
  var i5348 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.MeshRenderer' )
  var i5349 = data
  request.r(i5349[0], i5349[1], 0, i5348, 'additionalVertexStreams')
  i5348.enabled = !!i5349[2]
  request.r(i5349[3], i5349[4], 0, i5348, 'sharedMaterial')
  var i5351 = i5349[5]
  var i5350 = []
  for(var i = 0; i < i5351.length; i += 2) {
  request.r(i5351[i + 0], i5351[i + 1], 2, i5350, '')
  }
  i5348.sharedMaterials = i5350
  i5348.receiveShadows = !!i5349[6]
  i5348.shadowCastingMode = i5349[7]
  i5348.sortingLayerID = i5349[8]
  i5348.sortingOrder = i5349[9]
  i5348.lightmapIndex = i5349[10]
  i5348.lightmapSceneIndex = i5349[11]
  i5348.lightmapScaleOffset = new pc.Vec4( i5349[12], i5349[13], i5349[14], i5349[15] )
  i5348.lightProbeUsage = i5349[16]
  i5348.reflectionProbeUsage = i5349[17]
  return i5348
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.MeshCollider"] = function (request, data, root) {
  var i5354 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.MeshCollider' )
  var i5355 = data
  request.r(i5355[0], i5355[1], 0, i5354, 'sharedMesh')
  i5354.convex = !!i5355[2]
  i5354.enabled = !!i5355[3]
  i5354.isTrigger = !!i5355[4]
  request.r(i5355[5], i5355[6], 0, i5354, 'material')
  return i5354
}

Deserializers["Luna.Unity.DTO.UnityEngine.Scene.GameObject"] = function (request, data, root) {
  var i5356 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Scene.GameObject' )
  var i5357 = data
  i5356.name = i5357[0]
  i5356.tagId = i5357[1]
  i5356.enabled = !!i5357[2]
  i5356.isStatic = !!i5357[3]
  i5356.layer = i5357[4]
  return i5356
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.SphereCollider"] = function (request, data, root) {
  var i5358 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.SphereCollider' )
  var i5359 = data
  i5358.center = new pc.Vec3( i5359[0], i5359[1], i5359[2] )
  i5358.radius = i5359[3]
  i5358.enabled = !!i5359[4]
  i5358.isTrigger = !!i5359[5]
  request.r(i5359[6], i5359[7], 0, i5358, 'material')
  return i5358
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Rigidbody"] = function (request, data, root) {
  var i5360 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Rigidbody' )
  var i5361 = data
  i5360.mass = i5361[0]
  i5360.drag = i5361[1]
  i5360.angularDrag = i5361[2]
  i5360.useGravity = !!i5361[3]
  i5360.isKinematic = !!i5361[4]
  i5360.constraints = i5361[5]
  i5360.maxAngularVelocity = i5361[6]
  i5360.collisionDetectionMode = i5361[7]
  i5360.interpolation = i5361[8]
  return i5360
}

Deserializers["BallBehavior"] = function (request, data, root) {
  var i5362 = root || request.c( 'BallBehavior' )
  var i5363 = data
  request.r(i5363[0], i5363[1], 0, i5362, 'ballEffect')
  i5362.ballSpeed = i5363[2]
  request.r(i5363[3], i5363[4], 0, i5362, 'dunkTriggerBottom')
  request.r(i5363[5], i5363[6], 0, i5362, 'dunkTriggerTop')
  request.r(i5363[7], i5363[8], 0, i5362, 'basketRingTrigger')
  return i5362
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.ParticleSystem"] = function (request, data, root) {
  var i5364 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.ParticleSystem' )
  var i5365 = data
  i5364.main = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.MainModule', i5365[0], i5364.main)
  i5364.colorBySpeed = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ColorBySpeedModule', i5365[1], i5364.colorBySpeed)
  i5364.colorOverLifetime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ColorOverLifetimeModule', i5365[2], i5364.colorOverLifetime)
  i5364.emission = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.EmissionModule', i5365[3], i5364.emission)
  i5364.rotationBySpeed = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.RotationBySpeedModule', i5365[4], i5364.rotationBySpeed)
  i5364.rotationOverLifetime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.RotationOverLifetimeModule', i5365[5], i5364.rotationOverLifetime)
  i5364.shape = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ShapeModule', i5365[6], i5364.shape)
  i5364.sizeBySpeed = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.SizeBySpeedModule', i5365[7], i5364.sizeBySpeed)
  i5364.sizeOverLifetime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.SizeOverLifetimeModule', i5365[8], i5364.sizeOverLifetime)
  i5364.textureSheetAnimation = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.TextureSheetAnimationModule', i5365[9], i5364.textureSheetAnimation)
  i5364.velocityOverLifetime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.VelocityOverLifetimeModule', i5365[10], i5364.velocityOverLifetime)
  i5364.noise = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.NoiseModule', i5365[11], i5364.noise)
  i5364.inheritVelocity = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.InheritVelocityModule', i5365[12], i5364.inheritVelocity)
  i5364.forceOverLifetime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ForceOverLifetimeModule', i5365[13], i5364.forceOverLifetime)
  i5364.limitVelocityOverLifetime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.LimitVelocityOverLifetimeModule', i5365[14], i5364.limitVelocityOverLifetime)
  i5364.useAutoRandomSeed = !!i5365[15]
  i5364.randomSeed = i5365[16]
  return i5364
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.MainModule"] = function (request, data, root) {
  var i5366 = root || new pc.ParticleSystemMain()
  var i5367 = data
  i5366.duration = i5367[0]
  i5366.loop = !!i5367[1]
  i5366.prewarm = !!i5367[2]
  i5366.startDelay = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i5367[3], i5366.startDelay)
  i5366.startLifetime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i5367[4], i5366.startLifetime)
  i5366.startSpeed = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i5367[5], i5366.startSpeed)
  i5366.startSize3D = !!i5367[6]
  i5366.startSizeX = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i5367[7], i5366.startSizeX)
  i5366.startSizeY = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i5367[8], i5366.startSizeY)
  i5366.startSizeZ = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i5367[9], i5366.startSizeZ)
  i5366.startRotation3D = !!i5367[10]
  i5366.startRotationX = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i5367[11], i5366.startRotationX)
  i5366.startRotationY = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i5367[12], i5366.startRotationY)
  i5366.startRotationZ = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i5367[13], i5366.startRotationZ)
  i5366.startColor = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxGradient', i5367[14], i5366.startColor)
  i5366.gravityModifier = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i5367[15], i5366.gravityModifier)
  i5366.simulationSpace = i5367[16]
  request.r(i5367[17], i5367[18], 0, i5366, 'customSimulationSpace')
  i5366.simulationSpeed = i5367[19]
  i5366.useUnscaledTime = !!i5367[20]
  i5366.scalingMode = i5367[21]
  i5366.playOnAwake = !!i5367[22]
  i5366.maxParticles = i5367[23]
  i5366.emitterVelocityMode = i5367[24]
  i5366.stopAction = i5367[25]
  return i5366
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve"] = function (request, data, root) {
  var i5368 = root || new pc.MinMaxCurve()
  var i5369 = data
  i5368.mode = i5369[0]
  i5368.curveMin = new pc.AnimationCurve( { keys_flow: i5369[1] } )
  i5368.curveMax = new pc.AnimationCurve( { keys_flow: i5369[2] } )
  i5368.curveMultiplier = i5369[3]
  i5368.constantMin = i5369[4]
  i5368.constantMax = i5369[5]
  return i5368
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxGradient"] = function (request, data, root) {
  var i5370 = root || new pc.MinMaxGradient()
  var i5371 = data
  i5370.mode = i5371[0]
  i5370.gradientMin = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Gradient', i5371[1], i5370.gradientMin)
  i5370.gradientMax = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Gradient', i5371[2], i5370.gradientMax)
  i5370.colorMin = new pc.Color(i5371[3], i5371[4], i5371[5], i5371[6])
  i5370.colorMax = new pc.Color(i5371[7], i5371[8], i5371[9], i5371[10])
  return i5370
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Gradient"] = function (request, data, root) {
  var i5372 = root || request.c( 'Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Gradient' )
  var i5373 = data
  i5372.mode = i5373[0]
  var i5375 = i5373[1]
  var i5374 = []
  for(var i = 0; i < i5375.length; i += 1) {
    i5374.push( request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientColorKey', i5375[i + 0]) );
  }
  i5372.colorKeys = i5374
  var i5377 = i5373[2]
  var i5376 = []
  for(var i = 0; i < i5377.length; i += 1) {
    i5376.push( request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientAlphaKey', i5377[i + 0]) );
  }
  i5372.alphaKeys = i5376
  return i5372
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ColorBySpeedModule"] = function (request, data, root) {
  var i5378 = root || new pc.ParticleSystemColorBySpeed()
  var i5379 = data
  i5378.enabled = !!i5379[0]
  i5378.color = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxGradient', i5379[1], i5378.color)
  i5378.range = new pc.Vec2( i5379[2], i5379[3] )
  return i5378
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientColorKey"] = function (request, data, root) {
  var i5382 = root || request.c( 'Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientColorKey' )
  var i5383 = data
  i5382.color = new pc.Color(i5383[0], i5383[1], i5383[2], i5383[3])
  i5382.time = i5383[4]
  return i5382
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientAlphaKey"] = function (request, data, root) {
  var i5386 = root || request.c( 'Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientAlphaKey' )
  var i5387 = data
  i5386.alpha = i5387[0]
  i5386.time = i5387[1]
  return i5386
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ColorOverLifetimeModule"] = function (request, data, root) {
  var i5388 = root || new pc.ParticleSystemColorOverLifetime()
  var i5389 = data
  i5388.enabled = !!i5389[0]
  i5388.color = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxGradient', i5389[1], i5388.color)
  return i5388
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.EmissionModule"] = function (request, data, root) {
  var i5390 = root || new pc.ParticleSystemEmitter()
  var i5391 = data
  i5390.enabled = !!i5391[0]
  i5390.rateOverTime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i5391[1], i5390.rateOverTime)
  i5390.rateOverDistance = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i5391[2], i5390.rateOverDistance)
  var i5393 = i5391[3]
  var i5392 = []
  for(var i = 0; i < i5393.length; i += 1) {
    i5392.push( request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Burst', i5393[i + 0]) );
  }
  i5390.bursts = i5392
  return i5390
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Burst"] = function (request, data, root) {
  var i5396 = root || new pc.ParticleSystemBurst()
  var i5397 = data
  i5396.count = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i5397[0], i5396.count)
  i5396.cycleCount = i5397[1]
  i5396.minCount = i5397[2]
  i5396.maxCount = i5397[3]
  i5396.repeatInterval = i5397[4]
  i5396.time = i5397[5]
  return i5396
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.RotationBySpeedModule"] = function (request, data, root) {
  var i5398 = root || new pc.ParticleSystemRotationBySpeed()
  var i5399 = data
  i5398.enabled = !!i5399[0]
  i5398.x = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i5399[1], i5398.x)
  i5398.y = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i5399[2], i5398.y)
  i5398.z = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i5399[3], i5398.z)
  i5398.separateAxes = !!i5399[4]
  i5398.range = new pc.Vec2( i5399[5], i5399[6] )
  return i5398
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.RotationOverLifetimeModule"] = function (request, data, root) {
  var i5400 = root || new pc.ParticleSystemRotationOverLifetime()
  var i5401 = data
  i5400.enabled = !!i5401[0]
  i5400.x = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i5401[1], i5400.x)
  i5400.y = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i5401[2], i5400.y)
  i5400.z = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i5401[3], i5400.z)
  i5400.separateAxes = !!i5401[4]
  return i5400
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ShapeModule"] = function (request, data, root) {
  var i5402 = root || new pc.ParticleSystemShape()
  var i5403 = data
  i5402.enabled = !!i5403[0]
  i5402.shapeType = i5403[1]
  i5402.randomDirectionAmount = i5403[2]
  i5402.sphericalDirectionAmount = i5403[3]
  i5402.randomPositionAmount = i5403[4]
  i5402.alignToDirection = !!i5403[5]
  i5402.radius = i5403[6]
  i5402.radiusMode = i5403[7]
  i5402.radiusSpread = i5403[8]
  i5402.radiusSpeed = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i5403[9], i5402.radiusSpeed)
  i5402.radiusThickness = i5403[10]
  i5402.angle = i5403[11]
  i5402.length = i5403[12]
  i5402.boxThickness = new pc.Vec3( i5403[13], i5403[14], i5403[15] )
  i5402.meshShapeType = i5403[16]
  request.r(i5403[17], i5403[18], 0, i5402, 'mesh')
  request.r(i5403[19], i5403[20], 0, i5402, 'meshRenderer')
  request.r(i5403[21], i5403[22], 0, i5402, 'skinnedMeshRenderer')
  i5402.useMeshMaterialIndex = !!i5403[23]
  i5402.meshMaterialIndex = i5403[24]
  i5402.useMeshColors = !!i5403[25]
  i5402.normalOffset = i5403[26]
  i5402.arc = i5403[27]
  i5402.arcMode = i5403[28]
  i5402.arcSpread = i5403[29]
  i5402.arcSpeed = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i5403[30], i5402.arcSpeed)
  i5402.donutRadius = i5403[31]
  i5402.position = new pc.Vec3( i5403[32], i5403[33], i5403[34] )
  i5402.rotation = new pc.Vec3( i5403[35], i5403[36], i5403[37] )
  i5402.scale = new pc.Vec3( i5403[38], i5403[39], i5403[40] )
  return i5402
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.SizeBySpeedModule"] = function (request, data, root) {
  var i5404 = root || new pc.ParticleSystemSizeBySpeed()
  var i5405 = data
  i5404.enabled = !!i5405[0]
  i5404.x = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i5405[1], i5404.x)
  i5404.y = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i5405[2], i5404.y)
  i5404.z = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i5405[3], i5404.z)
  i5404.separateAxes = !!i5405[4]
  i5404.range = new pc.Vec2( i5405[5], i5405[6] )
  return i5404
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.SizeOverLifetimeModule"] = function (request, data, root) {
  var i5406 = root || new pc.ParticleSystemSizeOverLifetime()
  var i5407 = data
  i5406.enabled = !!i5407[0]
  i5406.x = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i5407[1], i5406.x)
  i5406.y = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i5407[2], i5406.y)
  i5406.z = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i5407[3], i5406.z)
  i5406.separateAxes = !!i5407[4]
  return i5406
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.TextureSheetAnimationModule"] = function (request, data, root) {
  var i5408 = root || new pc.ParticleSystemTextureSheetAnimation()
  var i5409 = data
  i5408.enabled = !!i5409[0]
  i5408.mode = i5409[1]
  i5408.animation = i5409[2]
  i5408.numTilesX = i5409[3]
  i5408.numTilesY = i5409[4]
  i5408.useRandomRow = !!i5409[5]
  i5408.frameOverTime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i5409[6], i5408.frameOverTime)
  i5408.startFrame = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i5409[7], i5408.startFrame)
  i5408.cycleCount = i5409[8]
  i5408.rowIndex = i5409[9]
  i5408.flipU = i5409[10]
  i5408.flipV = i5409[11]
  i5408.spriteCount = i5409[12]
  var i5411 = i5409[13]
  var i5410 = []
  for(var i = 0; i < i5411.length; i += 2) {
  request.r(i5411[i + 0], i5411[i + 1], 2, i5410, '')
  }
  i5408.sprites = i5410
  return i5408
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.VelocityOverLifetimeModule"] = function (request, data, root) {
  var i5414 = root || new pc.ParticleSystemVelocityOverLifetime()
  var i5415 = data
  i5414.enabled = !!i5415[0]
  i5414.x = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i5415[1], i5414.x)
  i5414.y = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i5415[2], i5414.y)
  i5414.z = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i5415[3], i5414.z)
  i5414.radial = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i5415[4], i5414.radial)
  i5414.speedModifier = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i5415[5], i5414.speedModifier)
  i5414.space = i5415[6]
  i5414.orbitalX = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i5415[7], i5414.orbitalX)
  i5414.orbitalY = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i5415[8], i5414.orbitalY)
  i5414.orbitalZ = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i5415[9], i5414.orbitalZ)
  i5414.orbitalOffsetX = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i5415[10], i5414.orbitalOffsetX)
  i5414.orbitalOffsetY = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i5415[11], i5414.orbitalOffsetY)
  i5414.orbitalOffsetZ = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i5415[12], i5414.orbitalOffsetZ)
  return i5414
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.NoiseModule"] = function (request, data, root) {
  var i5416 = root || new pc.ParticleSystemNoise()
  var i5417 = data
  i5416.enabled = !!i5417[0]
  i5416.separateAxes = !!i5417[1]
  i5416.strengthX = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i5417[2], i5416.strengthX)
  i5416.strengthY = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i5417[3], i5416.strengthY)
  i5416.strengthZ = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i5417[4], i5416.strengthZ)
  i5416.frequency = i5417[5]
  i5416.damping = !!i5417[6]
  i5416.octaveCount = i5417[7]
  i5416.octaveMultiplier = i5417[8]
  i5416.octaveScale = i5417[9]
  i5416.quality = i5417[10]
  i5416.scrollSpeed = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i5417[11], i5416.scrollSpeed)
  i5416.scrollSpeedMultiplier = i5417[12]
  i5416.remapEnabled = !!i5417[13]
  i5416.remapX = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i5417[14], i5416.remapX)
  i5416.remapY = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i5417[15], i5416.remapY)
  i5416.remapZ = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i5417[16], i5416.remapZ)
  i5416.positionAmount = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i5417[17], i5416.positionAmount)
  i5416.rotationAmount = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i5417[18], i5416.rotationAmount)
  i5416.sizeAmount = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i5417[19], i5416.sizeAmount)
  return i5416
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.InheritVelocityModule"] = function (request, data, root) {
  var i5418 = root || new pc.ParticleSystemInheritVelocity()
  var i5419 = data
  i5418.enabled = !!i5419[0]
  i5418.mode = i5419[1]
  i5418.curve = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i5419[2], i5418.curve)
  return i5418
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ForceOverLifetimeModule"] = function (request, data, root) {
  var i5420 = root || new pc.ParticleSystemForceOverLifetime()
  var i5421 = data
  i5420.enabled = !!i5421[0]
  i5420.x = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i5421[1], i5420.x)
  i5420.y = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i5421[2], i5420.y)
  i5420.z = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i5421[3], i5420.z)
  i5420.space = i5421[4]
  i5420.randomized = !!i5421[5]
  return i5420
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.LimitVelocityOverLifetimeModule"] = function (request, data, root) {
  var i5422 = root || new pc.ParticleSystemLimitVelocityOverLifetime()
  var i5423 = data
  i5422.enabled = !!i5423[0]
  i5422.limit = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i5423[1], i5422.limit)
  i5422.limitX = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i5423[2], i5422.limitX)
  i5422.limitY = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i5423[3], i5422.limitY)
  i5422.limitZ = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i5423[4], i5422.limitZ)
  i5422.dampen = i5423[5]
  i5422.separateAxes = !!i5423[6]
  i5422.space = i5423[7]
  i5422.drag = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i5423[8], i5422.drag)
  i5422.multiplyDragByParticleSize = !!i5423[9]
  i5422.multiplyDragByParticleVelocity = !!i5423[10]
  return i5422
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.ParticleSystemRenderer"] = function (request, data, root) {
  var i5424 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.ParticleSystemRenderer' )
  var i5425 = data
  request.r(i5425[0], i5425[1], 0, i5424, 'mesh')
  i5424.meshCount = i5425[2]
  i5424.activeVertexStreamsCount = i5425[3]
  i5424.alignment = i5425[4]
  i5424.renderMode = i5425[5]
  i5424.sortMode = i5425[6]
  i5424.lengthScale = i5425[7]
  i5424.velocityScale = i5425[8]
  i5424.cameraVelocityScale = i5425[9]
  i5424.normalDirection = i5425[10]
  i5424.sortingFudge = i5425[11]
  i5424.minParticleSize = i5425[12]
  i5424.maxParticleSize = i5425[13]
  i5424.pivot = new pc.Vec3( i5425[14], i5425[15], i5425[16] )
  request.r(i5425[17], i5425[18], 0, i5424, 'trailMaterial')
  i5424.applyActiveColorSpace = !!i5425[19]
  i5424.enabled = !!i5425[20]
  request.r(i5425[21], i5425[22], 0, i5424, 'sharedMaterial')
  var i5427 = i5425[23]
  var i5426 = []
  for(var i = 0; i < i5427.length; i += 2) {
  request.r(i5427[i + 0], i5427[i + 1], 2, i5426, '')
  }
  i5424.sharedMaterials = i5426
  i5424.receiveShadows = !!i5425[24]
  i5424.shadowCastingMode = i5425[25]
  i5424.sortingLayerID = i5425[26]
  i5424.sortingOrder = i5425[27]
  i5424.lightmapIndex = i5425[28]
  i5424.lightmapSceneIndex = i5425[29]
  i5424.lightmapScaleOffset = new pc.Vec4( i5425[30], i5425[31], i5425[32], i5425[33] )
  i5424.lightProbeUsage = i5425[34]
  i5424.reflectionProbeUsage = i5425[35]
  return i5424
}

Deserializers["Luna.Unity.DTO.UnityEngine.Textures.Cubemap"] = function (request, data, root) {
  var i5428 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Textures.Cubemap' )
  var i5429 = data
  i5428.name = i5429[0]
  i5428.atlasId = i5429[1]
  i5428.mipmapCount = i5429[2]
  i5428.hdr = !!i5429[3]
  i5428.size = i5429[4]
  i5428.anisoLevel = i5429[5]
  i5428.filterMode = i5429[6]
  var i5431 = i5429[7]
  var i5430 = []
  for(var i = 0; i < i5431.length; i += 4) {
    i5430.push( UnityEngine.Rect.MinMaxRect(i5431[i + 0], i5431[i + 1], i5431[i + 2], i5431[i + 3]) );
  }
  i5428.rects = i5430
  i5428.wrapU = i5429[8]
  i5428.wrapV = i5429[9]
  return i5428
}

Deserializers["Luna.Unity.DTO.UnityEngine.Scene.Scene"] = function (request, data, root) {
  var i5434 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Scene.Scene' )
  var i5435 = data
  i5434.name = i5435[0]
  i5434.index = i5435[1]
  i5434.startup = !!i5435[2]
  return i5434
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Camera"] = function (request, data, root) {
  var i5436 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Camera' )
  var i5437 = data
  i5436.aspect = i5437[0]
  i5436.orthographic = !!i5437[1]
  i5436.orthographicSize = i5437[2]
  i5436.backgroundColor = new pc.Color(i5437[3], i5437[4], i5437[5], i5437[6])
  i5436.nearClipPlane = i5437[7]
  i5436.farClipPlane = i5437[8]
  i5436.fieldOfView = i5437[9]
  i5436.depth = i5437[10]
  i5436.clearFlags = i5437[11]
  i5436.cullingMask = i5437[12]
  i5436.rect = i5437[13]
  request.r(i5437[14], i5437[15], 0, i5436, 'targetTexture')
  i5436.usePhysicalProperties = !!i5437[16]
  i5436.focalLength = i5437[17]
  i5436.sensorSize = new pc.Vec2( i5437[18], i5437[19] )
  i5436.lensShift = new pc.Vec2( i5437[20], i5437[21] )
  i5436.gateFit = i5437[22]
  i5436.commandBufferCount = i5437[23]
  i5436.cameraType = i5437[24]
  i5436.enabled = !!i5437[25]
  return i5436
}

Deserializers["UnityEngine.Rendering.Universal.UniversalAdditionalCameraData"] = function (request, data, root) {
  var i5438 = root || request.c( 'UnityEngine.Rendering.Universal.UniversalAdditionalCameraData' )
  var i5439 = data
  i5438.m_RenderShadows = !!i5439[0]
  i5438.m_RequiresDepthTextureOption = i5439[1]
  i5438.m_RequiresOpaqueTextureOption = i5439[2]
  i5438.m_CameraType = i5439[3]
  var i5441 = i5439[4]
  var i5440 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.Camera')))
  for(var i = 0; i < i5441.length; i += 2) {
  request.r(i5441[i + 0], i5441[i + 1], 1, i5440, '')
  }
  i5438.m_Cameras = i5440
  i5438.m_RendererIndex = i5439[5]
  i5438.m_VolumeLayerMask = UnityEngine.LayerMask.FromIntegerValue( i5439[6] )
  request.r(i5439[7], i5439[8], 0, i5438, 'm_VolumeTrigger')
  i5438.m_VolumeFrameworkUpdateModeOption = i5439[9]
  i5438.m_RenderPostProcessing = !!i5439[10]
  i5438.m_Antialiasing = i5439[11]
  i5438.m_AntialiasingQuality = i5439[12]
  i5438.m_StopNaN = !!i5439[13]
  i5438.m_Dithering = !!i5439[14]
  i5438.m_ClearDepth = !!i5439[15]
  i5438.m_AllowXRRendering = !!i5439[16]
  i5438.m_AllowHDROutput = !!i5439[17]
  i5438.m_UseScreenCoordOverride = !!i5439[18]
  i5438.m_ScreenSizeOverride = new pc.Vec4( i5439[19], i5439[20], i5439[21], i5439[22] )
  i5438.m_ScreenCoordScaleBias = new pc.Vec4( i5439[23], i5439[24], i5439[25], i5439[26] )
  i5438.m_RequiresDepthTexture = !!i5439[27]
  i5438.m_RequiresColorTexture = !!i5439[28]
  i5438.m_Version = i5439[29]
  i5438.m_TaaSettings = request.d('UnityEngine.Rendering.Universal.TemporalAA+Settings', i5439[30], i5438.m_TaaSettings)
  return i5438
}

Deserializers["UnityEngine.Rendering.Universal.TemporalAA+Settings"] = function (request, data, root) {
  var i5444 = root || request.c( 'UnityEngine.Rendering.Universal.TemporalAA+Settings' )
  var i5445 = data
  i5444.m_Quality = i5445[0]
  i5444.m_FrameInfluence = i5445[1]
  i5444.m_JitterScale = i5445[2]
  i5444.m_MipBias = i5445[3]
  i5444.m_VarianceClampScale = i5445[4]
  i5444.m_ContrastAdaptiveSharpening = i5445[5]
  return i5444
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Light"] = function (request, data, root) {
  var i5446 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Light' )
  var i5447 = data
  i5446.type = i5447[0]
  i5446.color = new pc.Color(i5447[1], i5447[2], i5447[3], i5447[4])
  i5446.cullingMask = i5447[5]
  i5446.intensity = i5447[6]
  i5446.range = i5447[7]
  i5446.spotAngle = i5447[8]
  i5446.shadows = i5447[9]
  i5446.shadowNormalBias = i5447[10]
  i5446.shadowBias = i5447[11]
  i5446.shadowStrength = i5447[12]
  i5446.shadowResolution = i5447[13]
  i5446.lightmapBakeType = i5447[14]
  i5446.renderMode = i5447[15]
  request.r(i5447[16], i5447[17], 0, i5446, 'cookie')
  i5446.cookieSize = i5447[18]
  i5446.shadowNearPlane = i5447[19]
  i5446.enabled = !!i5447[20]
  return i5446
}

Deserializers["UnityEngine.Rendering.Universal.UniversalAdditionalLightData"] = function (request, data, root) {
  var i5448 = root || request.c( 'UnityEngine.Rendering.Universal.UniversalAdditionalLightData' )
  var i5449 = data
  i5448.m_Version = i5449[0]
  i5448.m_UsePipelineSettings = !!i5449[1]
  i5448.m_AdditionalLightsShadowResolutionTier = i5449[2]
  i5448.m_LightLayerMask = i5449[3]
  i5448.m_RenderingLayers = i5449[4]
  i5448.m_CustomShadowLayers = !!i5449[5]
  i5448.m_ShadowLayerMask = i5449[6]
  i5448.m_ShadowRenderingLayers = i5449[7]
  i5448.m_LightCookieSize = new pc.Vec2( i5449[8], i5449[9] )
  i5448.m_LightCookieOffset = new pc.Vec2( i5449[10], i5449[11] )
  i5448.m_SoftShadowQuality = i5449[12]
  return i5448
}

Deserializers["UnityEngine.Rendering.Volume"] = function (request, data, root) {
  var i5450 = root || request.c( 'UnityEngine.Rendering.Volume' )
  var i5451 = data
  i5450.priority = i5451[0]
  i5450.blendDistance = i5451[1]
  i5450.weight = i5451[2]
  request.r(i5451[3], i5451[4], 0, i5450, 'sharedProfile')
  i5450.m_IsGlobal = !!i5451[5]
  return i5450
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.AudioSource"] = function (request, data, root) {
  var i5452 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.AudioSource' )
  var i5453 = data
  request.r(i5453[0], i5453[1], 0, i5452, 'clip')
  request.r(i5453[2], i5453[3], 0, i5452, 'outputAudioMixerGroup')
  i5452.playOnAwake = !!i5453[4]
  i5452.loop = !!i5453[5]
  i5452.time = i5453[6]
  i5452.volume = i5453[7]
  i5452.pitch = i5453[8]
  i5452.enabled = !!i5453[9]
  return i5452
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.HingeJoint"] = function (request, data, root) {
  var i5454 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.HingeJoint' )
  var i5455 = data
  i5454.useMotor = !!i5455[0]
  i5454.useLimits = !!i5455[1]
  i5454.useSpring = !!i5455[2]
  i5454.limits = request.d('UnityEngine.JointLimits', i5455[3], i5454.limits)
  i5454.motor = request.d('UnityEngine.JointMotor', i5455[4], i5454.motor)
  i5454.spring = request.d('UnityEngine.JointSpring', i5455[5], i5454.spring)
  request.r(i5455[6], i5455[7], 0, i5454, 'connectedBody')
  i5454.axis = new pc.Vec3( i5455[8], i5455[9], i5455[10] )
  i5454.anchor = new pc.Vec3( i5455[11], i5455[12], i5455[13] )
  i5454.connectedAnchor = new pc.Vec3( i5455[14], i5455[15], i5455[16] )
  i5454.autoConfigureConnectedAnchor = !!i5455[17]
  i5454.massScale = i5455[18]
  i5454.connectedMassScale = i5455[19]
  i5454.enableCollision = !!i5455[20]
  i5454.breakForce = i5455[21]
  i5454.breakTorque = i5455[22]
  return i5454
}

Deserializers["BasketBehavior"] = function (request, data, root) {
  var i5456 = root || request.c( 'BasketBehavior' )
  var i5457 = data
  i5456.basketMoveDistance = i5457[0]
  i5456.basketMoveSpeed = i5457[1]
  return i5456
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.CapsuleCollider"] = function (request, data, root) {
  var i5458 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.CapsuleCollider' )
  var i5459 = data
  i5458.center = new pc.Vec3( i5459[0], i5459[1], i5459[2] )
  i5458.radius = i5459[3]
  i5458.height = i5459[4]
  i5458.direction = i5459[5]
  i5458.enabled = !!i5459[6]
  i5458.isTrigger = !!i5459[7]
  request.r(i5459[8], i5459[9], 0, i5458, 'material')
  return i5458
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.SkinnedMeshRenderer"] = function (request, data, root) {
  var i5460 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.SkinnedMeshRenderer' )
  var i5461 = data
  request.r(i5461[0], i5461[1], 0, i5460, 'sharedMesh')
  var i5463 = i5461[2]
  var i5462 = []
  for(var i = 0; i < i5463.length; i += 2) {
  request.r(i5463[i + 0], i5463[i + 1], 2, i5462, '')
  }
  i5460.bones = i5462
  i5460.updateWhenOffscreen = !!i5461[3]
  i5460.localBounds = i5461[4]
  request.r(i5461[5], i5461[6], 0, i5460, 'rootBone')
  var i5465 = i5461[7]
  var i5464 = []
  for(var i = 0; i < i5465.length; i += 1) {
    i5464.push( request.d('Luna.Unity.DTO.UnityEngine.Components.SkinnedMeshRenderer+BlendShapeWeight', i5465[i + 0]) );
  }
  i5460.blendShapesWeights = i5464
  i5460.enabled = !!i5461[8]
  request.r(i5461[9], i5461[10], 0, i5460, 'sharedMaterial')
  var i5467 = i5461[11]
  var i5466 = []
  for(var i = 0; i < i5467.length; i += 2) {
  request.r(i5467[i + 0], i5467[i + 1], 2, i5466, '')
  }
  i5460.sharedMaterials = i5466
  i5460.receiveShadows = !!i5461[12]
  i5460.shadowCastingMode = i5461[13]
  i5460.sortingLayerID = i5461[14]
  i5460.sortingOrder = i5461[15]
  i5460.lightmapIndex = i5461[16]
  i5460.lightmapSceneIndex = i5461[17]
  i5460.lightmapScaleOffset = new pc.Vec4( i5461[18], i5461[19], i5461[20], i5461[21] )
  i5460.lightProbeUsage = i5461[22]
  i5460.reflectionProbeUsage = i5461[23]
  return i5460
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.SkinnedMeshRenderer+BlendShapeWeight"] = function (request, data, root) {
  var i5472 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.SkinnedMeshRenderer+BlendShapeWeight' )
  var i5473 = data
  i5472.weight = i5473[0]
  return i5472
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.BoxCollider"] = function (request, data, root) {
  var i5474 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.BoxCollider' )
  var i5475 = data
  i5474.center = new pc.Vec3( i5475[0], i5475[1], i5475[2] )
  i5474.size = new pc.Vec3( i5475[3], i5475[4], i5475[5] )
  i5474.enabled = !!i5475[6]
  i5474.isTrigger = !!i5475[7]
  request.r(i5475[8], i5475[9], 0, i5474, 'material')
  return i5474
}

Deserializers["InputManager"] = function (request, data, root) {
  var i5476 = root || request.c( 'InputManager' )
  var i5477 = data
  request.r(i5477[0], i5477[1], 0, i5476, 'mainCamera')
  i5476.ballLayer = UnityEngine.LayerMask.FromIntegerValue( i5477[2] )
  i5476.ballSelectionLayer = UnityEngine.LayerMask.FromIntegerValue( i5477[3] )
  request.r(i5477[4], i5477[5], 0, i5476, 'ballSelectionParent')
  request.r(i5477[6], i5477[7], 0, i5476, 'ballSelectionRing')
  i5476.minHoldTime = i5477[8]
  i5476.maxFlickTime = i5477[9]
  i5476.minHoldDistance = i5477[10]
  i5476.minFlickDistance = i5477[11]
  i5476.throwForce = i5477[12]
  i5476.maxThrowHeight = i5477[13]
  i5476.maxThrowDepth = i5477[14]
  i5476.maxThrowHorizontal = i5477[15]
  i5476.minThrowHorizontal = i5477[16]
  i5476.minThrowSpeed = i5477[17]
  i5476.maxThrowSpeed = i5477[18]
  i5476.throwSensitivity = i5477[19]
  i5476.fixedZPosition = i5477[20]
  i5476.selectionDragSpeed = i5477[21]
  return i5476
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.RectTransform"] = function (request, data, root) {
  var i5478 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.RectTransform' )
  var i5479 = data
  i5478.pivot = new pc.Vec2( i5479[0], i5479[1] )
  i5478.anchorMin = new pc.Vec2( i5479[2], i5479[3] )
  i5478.anchorMax = new pc.Vec2( i5479[4], i5479[5] )
  i5478.sizeDelta = new pc.Vec2( i5479[6], i5479[7] )
  i5478.anchoredPosition3D = new pc.Vec3( i5479[8], i5479[9], i5479[10] )
  i5478.rotation = new pc.Quat(i5479[11], i5479[12], i5479[13], i5479[14])
  i5478.scale = new pc.Vec3( i5479[15], i5479[16], i5479[17] )
  return i5478
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Canvas"] = function (request, data, root) {
  var i5480 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Canvas' )
  var i5481 = data
  i5480.planeDistance = i5481[0]
  i5480.referencePixelsPerUnit = i5481[1]
  i5480.isFallbackOverlay = !!i5481[2]
  i5480.renderMode = i5481[3]
  i5480.renderOrder = i5481[4]
  i5480.sortingLayerName = i5481[5]
  i5480.sortingOrder = i5481[6]
  i5480.scaleFactor = i5481[7]
  request.r(i5481[8], i5481[9], 0, i5480, 'worldCamera')
  i5480.overrideSorting = !!i5481[10]
  i5480.pixelPerfect = !!i5481[11]
  i5480.targetDisplay = i5481[12]
  i5480.overridePixelPerfect = !!i5481[13]
  i5480.enabled = !!i5481[14]
  return i5480
}

Deserializers["UnityEngine.UI.CanvasScaler"] = function (request, data, root) {
  var i5482 = root || request.c( 'UnityEngine.UI.CanvasScaler' )
  var i5483 = data
  i5482.m_UiScaleMode = i5483[0]
  i5482.m_ReferencePixelsPerUnit = i5483[1]
  i5482.m_ScaleFactor = i5483[2]
  i5482.m_ReferenceResolution = new pc.Vec2( i5483[3], i5483[4] )
  i5482.m_ScreenMatchMode = i5483[5]
  i5482.m_MatchWidthOrHeight = i5483[6]
  i5482.m_PhysicalUnit = i5483[7]
  i5482.m_FallbackScreenDPI = i5483[8]
  i5482.m_DefaultSpriteDPI = i5483[9]
  i5482.m_DynamicPixelsPerUnit = i5483[10]
  i5482.m_PresetInfoIsWorld = !!i5483[11]
  return i5482
}

Deserializers["UnityEngine.UI.GraphicRaycaster"] = function (request, data, root) {
  var i5484 = root || request.c( 'UnityEngine.UI.GraphicRaycaster' )
  var i5485 = data
  i5484.m_IgnoreReversedGraphics = !!i5485[0]
  i5484.m_BlockingObjects = i5485[1]
  i5484.m_BlockingMask = UnityEngine.LayerMask.FromIntegerValue( i5485[2] )
  return i5484
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.CanvasRenderer"] = function (request, data, root) {
  var i5486 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.CanvasRenderer' )
  var i5487 = data
  i5486.cullTransparentMesh = !!i5487[0]
  return i5486
}

Deserializers["UnityEngine.UI.Image"] = function (request, data, root) {
  var i5488 = root || request.c( 'UnityEngine.UI.Image' )
  var i5489 = data
  request.r(i5489[0], i5489[1], 0, i5488, 'm_Sprite')
  i5488.m_Type = i5489[2]
  i5488.m_PreserveAspect = !!i5489[3]
  i5488.m_FillCenter = !!i5489[4]
  i5488.m_FillMethod = i5489[5]
  i5488.m_FillAmount = i5489[6]
  i5488.m_FillClockwise = !!i5489[7]
  i5488.m_FillOrigin = i5489[8]
  i5488.m_UseSpriteMesh = !!i5489[9]
  i5488.m_PixelsPerUnitMultiplier = i5489[10]
  request.r(i5489[11], i5489[12], 0, i5488, 'm_Material')
  i5488.m_Maskable = !!i5489[13]
  i5488.m_Color = new pc.Color(i5489[14], i5489[15], i5489[16], i5489[17])
  i5488.m_RaycastTarget = !!i5489[18]
  i5488.m_RaycastPadding = new pc.Vec4( i5489[19], i5489[20], i5489[21], i5489[22] )
  return i5488
}

Deserializers["TMPro.TextMeshProUGUI"] = function (request, data, root) {
  var i5490 = root || request.c( 'TMPro.TextMeshProUGUI' )
  var i5491 = data
  i5490.m_hasFontAssetChanged = !!i5491[0]
  request.r(i5491[1], i5491[2], 0, i5490, 'm_baseMaterial')
  i5490.m_maskOffset = new pc.Vec4( i5491[3], i5491[4], i5491[5], i5491[6] )
  i5490.m_text = i5491[7]
  i5490.m_isRightToLeft = !!i5491[8]
  request.r(i5491[9], i5491[10], 0, i5490, 'm_fontAsset')
  request.r(i5491[11], i5491[12], 0, i5490, 'm_sharedMaterial')
  var i5493 = i5491[13]
  var i5492 = []
  for(var i = 0; i < i5493.length; i += 2) {
  request.r(i5493[i + 0], i5493[i + 1], 2, i5492, '')
  }
  i5490.m_fontSharedMaterials = i5492
  request.r(i5491[14], i5491[15], 0, i5490, 'm_fontMaterial')
  var i5495 = i5491[16]
  var i5494 = []
  for(var i = 0; i < i5495.length; i += 2) {
  request.r(i5495[i + 0], i5495[i + 1], 2, i5494, '')
  }
  i5490.m_fontMaterials = i5494
  i5490.m_fontColor32 = UnityEngine.Color32.ConstructColor(i5491[17], i5491[18], i5491[19], i5491[20])
  i5490.m_fontColor = new pc.Color(i5491[21], i5491[22], i5491[23], i5491[24])
  i5490.m_enableVertexGradient = !!i5491[25]
  i5490.m_colorMode = i5491[26]
  i5490.m_fontColorGradient = request.d('TMPro.VertexGradient', i5491[27], i5490.m_fontColorGradient)
  request.r(i5491[28], i5491[29], 0, i5490, 'm_fontColorGradientPreset')
  request.r(i5491[30], i5491[31], 0, i5490, 'm_spriteAsset')
  i5490.m_tintAllSprites = !!i5491[32]
  request.r(i5491[33], i5491[34], 0, i5490, 'm_StyleSheet')
  i5490.m_TextStyleHashCode = i5491[35]
  i5490.m_overrideHtmlColors = !!i5491[36]
  i5490.m_faceColor = UnityEngine.Color32.ConstructColor(i5491[37], i5491[38], i5491[39], i5491[40])
  i5490.m_fontSize = i5491[41]
  i5490.m_fontSizeBase = i5491[42]
  i5490.m_fontWeight = i5491[43]
  i5490.m_enableAutoSizing = !!i5491[44]
  i5490.m_fontSizeMin = i5491[45]
  i5490.m_fontSizeMax = i5491[46]
  i5490.m_fontStyle = i5491[47]
  i5490.m_HorizontalAlignment = i5491[48]
  i5490.m_VerticalAlignment = i5491[49]
  i5490.m_textAlignment = i5491[50]
  i5490.m_characterSpacing = i5491[51]
  i5490.m_wordSpacing = i5491[52]
  i5490.m_lineSpacing = i5491[53]
  i5490.m_lineSpacingMax = i5491[54]
  i5490.m_paragraphSpacing = i5491[55]
  i5490.m_charWidthMaxAdj = i5491[56]
  i5490.m_TextWrappingMode = i5491[57]
  i5490.m_wordWrappingRatios = i5491[58]
  i5490.m_overflowMode = i5491[59]
  request.r(i5491[60], i5491[61], 0, i5490, 'm_linkedTextComponent')
  request.r(i5491[62], i5491[63], 0, i5490, 'parentLinkedComponent')
  i5490.m_enableKerning = !!i5491[64]
  var i5497 = i5491[65]
  var i5496 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.TextCore.OTL_FeatureTag')))
  for(var i = 0; i < i5497.length; i += 1) {
    i5496.add(i5497[i + 0]);
  }
  i5490.m_ActiveFontFeatures = i5496
  i5490.m_enableExtraPadding = !!i5491[66]
  i5490.checkPaddingRequired = !!i5491[67]
  i5490.m_isRichText = !!i5491[68]
  i5490.m_parseCtrlCharacters = !!i5491[69]
  i5490.m_isOrthographic = !!i5491[70]
  i5490.m_isCullingEnabled = !!i5491[71]
  i5490.m_horizontalMapping = i5491[72]
  i5490.m_verticalMapping = i5491[73]
  i5490.m_uvLineOffset = i5491[74]
  i5490.m_geometrySortingOrder = i5491[75]
  i5490.m_IsTextObjectScaleStatic = !!i5491[76]
  i5490.m_VertexBufferAutoSizeReduction = !!i5491[77]
  i5490.m_useMaxVisibleDescender = !!i5491[78]
  i5490.m_pageToDisplay = i5491[79]
  i5490.m_margin = new pc.Vec4( i5491[80], i5491[81], i5491[82], i5491[83] )
  i5490.m_isUsingLegacyAnimationComponent = !!i5491[84]
  i5490.m_isVolumetricText = !!i5491[85]
  request.r(i5491[86], i5491[87], 0, i5490, 'm_Material')
  i5490.m_EmojiFallbackSupport = !!i5491[88]
  i5490.m_Maskable = !!i5491[89]
  i5490.m_Color = new pc.Color(i5491[90], i5491[91], i5491[92], i5491[93])
  i5490.m_RaycastTarget = !!i5491[94]
  i5490.m_RaycastPadding = new pc.Vec4( i5491[95], i5491[96], i5491[97], i5491[98] )
  return i5490
}

Deserializers["TMPro.VertexGradient"] = function (request, data, root) {
  var i5498 = root || request.c( 'TMPro.VertexGradient' )
  var i5499 = data
  i5498.topLeft = new pc.Color(i5499[0], i5499[1], i5499[2], i5499[3])
  i5498.topRight = new pc.Color(i5499[4], i5499[5], i5499[6], i5499[7])
  i5498.bottomLeft = new pc.Color(i5499[8], i5499[9], i5499[10], i5499[11])
  i5498.bottomRight = new pc.Color(i5499[12], i5499[13], i5499[14], i5499[15])
  return i5498
}

Deserializers["UnityEngine.UI.VerticalLayoutGroup"] = function (request, data, root) {
  var i5502 = root || request.c( 'UnityEngine.UI.VerticalLayoutGroup' )
  var i5503 = data
  i5502.m_Spacing = i5503[0]
  i5502.m_ChildForceExpandWidth = !!i5503[1]
  i5502.m_ChildForceExpandHeight = !!i5503[2]
  i5502.m_ChildControlWidth = !!i5503[3]
  i5502.m_ChildControlHeight = !!i5503[4]
  i5502.m_ChildScaleWidth = !!i5503[5]
  i5502.m_ChildScaleHeight = !!i5503[6]
  i5502.m_ReverseArrangement = !!i5503[7]
  i5502.m_Padding = UnityEngine.RectOffset.FromPaddings(i5503[8], i5503[9], i5503[10], i5503[11])
  i5502.m_ChildAlignment = i5503[12]
  return i5502
}

Deserializers["UnityEngine.UI.Button"] = function (request, data, root) {
  var i5504 = root || request.c( 'UnityEngine.UI.Button' )
  var i5505 = data
  i5504.m_OnClick = request.d('UnityEngine.UI.Button+ButtonClickedEvent', i5505[0], i5504.m_OnClick)
  i5504.m_Navigation = request.d('UnityEngine.UI.Navigation', i5505[1], i5504.m_Navigation)
  i5504.m_Transition = i5505[2]
  i5504.m_Colors = request.d('UnityEngine.UI.ColorBlock', i5505[3], i5504.m_Colors)
  i5504.m_SpriteState = request.d('UnityEngine.UI.SpriteState', i5505[4], i5504.m_SpriteState)
  i5504.m_AnimationTriggers = request.d('UnityEngine.UI.AnimationTriggers', i5505[5], i5504.m_AnimationTriggers)
  i5504.m_Interactable = !!i5505[6]
  request.r(i5505[7], i5505[8], 0, i5504, 'm_TargetGraphic')
  return i5504
}

Deserializers["UnityEngine.UI.Button+ButtonClickedEvent"] = function (request, data, root) {
  var i5506 = root || request.c( 'UnityEngine.UI.Button+ButtonClickedEvent' )
  var i5507 = data
  i5506.m_PersistentCalls = request.d('UnityEngine.Events.PersistentCallGroup', i5507[0], i5506.m_PersistentCalls)
  return i5506
}

Deserializers["UnityEngine.Events.PersistentCallGroup"] = function (request, data, root) {
  var i5508 = root || request.c( 'UnityEngine.Events.PersistentCallGroup' )
  var i5509 = data
  var i5511 = i5509[0]
  var i5510 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.Events.PersistentCall')))
  for(var i = 0; i < i5511.length; i += 1) {
    i5510.add(request.d('UnityEngine.Events.PersistentCall', i5511[i + 0]));
  }
  i5508.m_Calls = i5510
  return i5508
}

Deserializers["UnityEngine.Events.PersistentCall"] = function (request, data, root) {
  var i5514 = root || request.c( 'UnityEngine.Events.PersistentCall' )
  var i5515 = data
  request.r(i5515[0], i5515[1], 0, i5514, 'm_Target')
  i5514.m_TargetAssemblyTypeName = i5515[2]
  i5514.m_MethodName = i5515[3]
  i5514.m_Mode = i5515[4]
  i5514.m_Arguments = request.d('UnityEngine.Events.ArgumentCache', i5515[5], i5514.m_Arguments)
  i5514.m_CallState = i5515[6]
  return i5514
}

Deserializers["UnityEngine.Events.ArgumentCache"] = function (request, data, root) {
  var i5516 = root || request.c( 'UnityEngine.Events.ArgumentCache' )
  var i5517 = data
  request.r(i5517[0], i5517[1], 0, i5516, 'm_ObjectArgument')
  i5516.m_ObjectArgumentAssemblyTypeName = i5517[2]
  i5516.m_IntArgument = i5517[3]
  i5516.m_FloatArgument = i5517[4]
  i5516.m_StringArgument = i5517[5]
  i5516.m_BoolArgument = !!i5517[6]
  return i5516
}

Deserializers["UnityEngine.UI.Navigation"] = function (request, data, root) {
  var i5518 = root || request.c( 'UnityEngine.UI.Navigation' )
  var i5519 = data
  i5518.m_Mode = i5519[0]
  i5518.m_WrapAround = !!i5519[1]
  request.r(i5519[2], i5519[3], 0, i5518, 'm_SelectOnUp')
  request.r(i5519[4], i5519[5], 0, i5518, 'm_SelectOnDown')
  request.r(i5519[6], i5519[7], 0, i5518, 'm_SelectOnLeft')
  request.r(i5519[8], i5519[9], 0, i5518, 'm_SelectOnRight')
  return i5518
}

Deserializers["UnityEngine.UI.ColorBlock"] = function (request, data, root) {
  var i5520 = root || request.c( 'UnityEngine.UI.ColorBlock' )
  var i5521 = data
  i5520.m_NormalColor = new pc.Color(i5521[0], i5521[1], i5521[2], i5521[3])
  i5520.m_HighlightedColor = new pc.Color(i5521[4], i5521[5], i5521[6], i5521[7])
  i5520.m_PressedColor = new pc.Color(i5521[8], i5521[9], i5521[10], i5521[11])
  i5520.m_SelectedColor = new pc.Color(i5521[12], i5521[13], i5521[14], i5521[15])
  i5520.m_DisabledColor = new pc.Color(i5521[16], i5521[17], i5521[18], i5521[19])
  i5520.m_ColorMultiplier = i5521[20]
  i5520.m_FadeDuration = i5521[21]
  return i5520
}

Deserializers["UnityEngine.UI.SpriteState"] = function (request, data, root) {
  var i5522 = root || request.c( 'UnityEngine.UI.SpriteState' )
  var i5523 = data
  request.r(i5523[0], i5523[1], 0, i5522, 'm_HighlightedSprite')
  request.r(i5523[2], i5523[3], 0, i5522, 'm_PressedSprite')
  request.r(i5523[4], i5523[5], 0, i5522, 'm_SelectedSprite')
  request.r(i5523[6], i5523[7], 0, i5522, 'm_DisabledSprite')
  return i5522
}

Deserializers["UnityEngine.UI.AnimationTriggers"] = function (request, data, root) {
  var i5524 = root || request.c( 'UnityEngine.UI.AnimationTriggers' )
  var i5525 = data
  i5524.m_NormalTrigger = i5525[0]
  i5524.m_HighlightedTrigger = i5525[1]
  i5524.m_PressedTrigger = i5525[2]
  i5524.m_SelectedTrigger = i5525[3]
  i5524.m_DisabledTrigger = i5525[4]
  return i5524
}

Deserializers["UnityEngine.UI.HorizontalLayoutGroup"] = function (request, data, root) {
  var i5526 = root || request.c( 'UnityEngine.UI.HorizontalLayoutGroup' )
  var i5527 = data
  i5526.m_Spacing = i5527[0]
  i5526.m_ChildForceExpandWidth = !!i5527[1]
  i5526.m_ChildForceExpandHeight = !!i5527[2]
  i5526.m_ChildControlWidth = !!i5527[3]
  i5526.m_ChildControlHeight = !!i5527[4]
  i5526.m_ChildScaleWidth = !!i5527[5]
  i5526.m_ChildScaleHeight = !!i5527[6]
  i5526.m_ReverseArrangement = !!i5527[7]
  i5526.m_Padding = UnityEngine.RectOffset.FromPaddings(i5527[8], i5527[9], i5527[10], i5527[11])
  i5526.m_ChildAlignment = i5527[12]
  return i5526
}

Deserializers["UnityEngine.EventSystems.EventSystem"] = function (request, data, root) {
  var i5528 = root || request.c( 'UnityEngine.EventSystems.EventSystem' )
  var i5529 = data
  request.r(i5529[0], i5529[1], 0, i5528, 'm_FirstSelected')
  i5528.m_sendNavigationEvents = !!i5529[2]
  i5528.m_DragThreshold = i5529[3]
  return i5528
}

Deserializers["UnityEngine.EventSystems.StandaloneInputModule"] = function (request, data, root) {
  var i5530 = root || request.c( 'UnityEngine.EventSystems.StandaloneInputModule' )
  var i5531 = data
  i5530.m_HorizontalAxis = i5531[0]
  i5530.m_VerticalAxis = i5531[1]
  i5530.m_SubmitButton = i5531[2]
  i5530.m_CancelButton = i5531[3]
  i5530.m_InputActionsPerSecond = i5531[4]
  i5530.m_RepeatDelay = i5531[5]
  i5530.m_ForceModuleActive = !!i5531[6]
  i5530.m_SendPointerHoverToParent = !!i5531[7]
  return i5530
}

Deserializers["GameManager"] = function (request, data, root) {
  var i5532 = root || request.c( 'GameManager' )
  var i5533 = data
  i5532.scoreBase = i5533[0]
  i5532.scoreDunk = i5533[1]
  i5532.timeLimit = i5533[2]
  i5532.timeBonus = i5533[3]
  i5532.targetFPS = i5533[4]
  i5532.minStreakStart = i5533[5]
  request.r(i5533[6], i5533[7], 0, i5532, 'basket')
  var i5535 = i5533[8]
  var i5534 = []
  for(var i = 0; i < i5535.length; i += 1) {
    i5534.push( i5535[i + 0] );
  }
  i5532.quotesScoring = i5534
  var i5537 = i5533[9]
  var i5536 = []
  for(var i = 0; i < i5537.length; i += 1) {
    i5536.push( i5537[i + 0] );
  }
  i5532.quotesBonuses = i5536
  request.r(i5533[10], i5533[11], 0, i5532, 'inputManager')
  var i5539 = i5533[12]
  var i5538 = []
  for(var i = 0; i < i5539.length; i += 2) {
  request.r(i5539[i + 0], i5539[i + 1], 2, i5538, '')
  }
  i5532.ballMaterials = i5538
  var i5541 = i5533[13]
  var i5540 = []
  for(var i = 0; i < i5541.length; i += 2) {
  request.r(i5541[i + 0], i5541[i + 1], 2, i5540, '')
  }
  i5532.ballInScene = i5540
  var i5543 = i5533[14]
  var i5542 = []
  for(var i = 0; i < i5543.length; i += 2) {
  request.r(i5543[i + 0], i5543[i + 1], 2, i5542, '')
  }
  i5532.basketAudio = i5542
  var i5545 = i5533[15]
  var i5544 = []
  for(var i = 0; i < i5545.length; i += 2) {
  request.r(i5545[i + 0], i5545[i + 1], 2, i5544, '')
  }
  i5532.netAudio = i5544
  request.r(i5533[16], i5533[17], 0, i5532, 'perfectAudio')
  request.r(i5533[18], i5533[19], 0, i5532, 'globalVolume')
  request.r(i5533[20], i5533[21], 0, i5532, 'perfectEffect')
  request.r(i5533[22], i5533[23], 0, i5532, 'basketEffect')
  request.r(i5533[24], i5533[25], 0, i5532, 'currentScoreText')
  request.r(i5533[26], i5533[27], 0, i5532, 'highScoreText')
  request.r(i5533[28], i5533[29], 0, i5532, 'timeText')
  request.r(i5533[30], i5533[31], 0, i5532, 'quoteText')
  request.r(i5533[32], i5533[33], 0, i5532, 'playingOverlay')
  request.r(i5533[34], i5533[35], 0, i5532, 'selectingBallOverlay')
  request.r(i5533[36], i5533[37], 0, i5532, 'selectBallButton')
  request.r(i5533[38], i5533[39], 0, i5532, 'moveBasketButton')
  request.r(i5533[40], i5533[41], 0, i5532, 'restartButton')
  request.r(i5533[42], i5533[43], 0, i5532, 'confirmBallButton')
  request.r(i5533[44], i5533[45], 0, i5532, 'backToGameButton')
  request.r(i5533[46], i5533[47], 0, i5532, 'randomBallButton')
  request.r(i5533[48], i5533[49], 0, i5532, 'mainCamera')
  request.r(i5533[50], i5533[51], 0, i5532, 'selectionCamera')
  request.r(i5533[52], i5533[53], 0, i5532, 'selectionCameraGameObject')
  request.r(i5533[54], i5533[55], 0, i5532, 'uncheckedSprite')
  request.r(i5533[56], i5533[57], 0, i5532, 'checkedSprite')
  request.r(i5533[58], i5533[59], 0, i5532, 'rotateRing1')
  return i5532
}

Deserializers["LunaGameManager"] = function (request, data, root) {
  var i5552 = root || request.c( 'LunaGameManager' )
  var i5553 = data
  i5552.enableLunaAnalytics = !!i5553[0]
  i5552.maxParticles = i5553[1]
  return i5552
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.RenderSettings"] = function (request, data, root) {
  var i5554 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.RenderSettings' )
  var i5555 = data
  i5554.ambientIntensity = i5555[0]
  i5554.reflectionIntensity = i5555[1]
  i5554.ambientMode = i5555[2]
  i5554.ambientLight = new pc.Color(i5555[3], i5555[4], i5555[5], i5555[6])
  i5554.ambientSkyColor = new pc.Color(i5555[7], i5555[8], i5555[9], i5555[10])
  i5554.ambientGroundColor = new pc.Color(i5555[11], i5555[12], i5555[13], i5555[14])
  i5554.ambientEquatorColor = new pc.Color(i5555[15], i5555[16], i5555[17], i5555[18])
  i5554.fogColor = new pc.Color(i5555[19], i5555[20], i5555[21], i5555[22])
  i5554.fogEndDistance = i5555[23]
  i5554.fogStartDistance = i5555[24]
  i5554.fogDensity = i5555[25]
  i5554.fog = !!i5555[26]
  request.r(i5555[27], i5555[28], 0, i5554, 'skybox')
  i5554.fogMode = i5555[29]
  var i5557 = i5555[30]
  var i5556 = []
  for(var i = 0; i < i5557.length; i += 1) {
    i5556.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+Lightmap', i5557[i + 0]) );
  }
  i5554.lightmaps = i5556
  i5554.lightProbes = request.d('Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+LightProbes', i5555[31], i5554.lightProbes)
  i5554.lightmapsMode = i5555[32]
  i5554.mixedBakeMode = i5555[33]
  i5554.environmentLightingMode = i5555[34]
  i5554.ambientProbe = new pc.SphericalHarmonicsL2(i5555[35])
  i5554.referenceAmbientProbe = new pc.SphericalHarmonicsL2(i5555[36])
  i5554.useReferenceAmbientProbe = !!i5555[37]
  request.r(i5555[38], i5555[39], 0, i5554, 'customReflection')
  request.r(i5555[40], i5555[41], 0, i5554, 'defaultReflection')
  i5554.defaultReflectionMode = i5555[42]
  i5554.defaultReflectionResolution = i5555[43]
  i5554.sunLightObjectId = i5555[44]
  i5554.pixelLightCount = i5555[45]
  i5554.defaultReflectionHDR = !!i5555[46]
  i5554.hasLightDataAsset = !!i5555[47]
  i5554.hasManualGenerate = !!i5555[48]
  return i5554
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+Lightmap"] = function (request, data, root) {
  var i5560 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+Lightmap' )
  var i5561 = data
  request.r(i5561[0], i5561[1], 0, i5560, 'lightmapColor')
  request.r(i5561[2], i5561[3], 0, i5560, 'lightmapDirection')
  return i5560
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+LightProbes"] = function (request, data, root) {
  var i5562 = root || new UnityEngine.LightProbes()
  var i5563 = data
  return i5562
}

Deserializers["UnityEngine.Rendering.UI.DebugUIHandlerCanvas"] = function (request, data, root) {
  var i5570 = root || request.c( 'UnityEngine.Rendering.UI.DebugUIHandlerCanvas' )
  var i5571 = data
  request.r(i5571[0], i5571[1], 0, i5570, 'panelPrefab')
  var i5573 = i5571[2]
  var i5572 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.Rendering.UI.DebugUIPrefabBundle')))
  for(var i = 0; i < i5573.length; i += 1) {
    i5572.add(request.d('UnityEngine.Rendering.UI.DebugUIPrefabBundle', i5573[i + 0]));
  }
  i5570.prefabs = i5572
  return i5570
}

Deserializers["UnityEngine.Rendering.UI.DebugUIPrefabBundle"] = function (request, data, root) {
  var i5576 = root || request.c( 'UnityEngine.Rendering.UI.DebugUIPrefabBundle' )
  var i5577 = data
  i5576.type = i5577[0]
  request.r(i5577[1], i5577[2], 0, i5576, 'prefab')
  return i5576
}

Deserializers["UnityEngine.UI.ContentSizeFitter"] = function (request, data, root) {
  var i5578 = root || request.c( 'UnityEngine.UI.ContentSizeFitter' )
  var i5579 = data
  i5578.m_HorizontalFit = i5579[0]
  i5578.m_VerticalFit = i5579[1]
  return i5578
}

Deserializers["UnityEngine.Rendering.UI.DebugUIHandlerContainer"] = function (request, data, root) {
  var i5580 = root || request.c( 'UnityEngine.Rendering.UI.DebugUIHandlerContainer' )
  var i5581 = data
  request.r(i5581[0], i5581[1], 0, i5580, 'contentHolder')
  return i5580
}

Deserializers["UnityEngine.Rendering.UI.DebugUIHandlerPanel"] = function (request, data, root) {
  var i5582 = root || request.c( 'UnityEngine.Rendering.UI.DebugUIHandlerPanel' )
  var i5583 = data
  request.r(i5583[0], i5583[1], 0, i5582, 'nameLabel')
  request.r(i5583[2], i5583[3], 0, i5582, 'scrollRect')
  request.r(i5583[4], i5583[5], 0, i5582, 'viewport')
  request.r(i5583[6], i5583[7], 0, i5582, 'Canvas')
  return i5582
}

Deserializers["UnityEngine.UI.LayoutElement"] = function (request, data, root) {
  var i5584 = root || request.c( 'UnityEngine.UI.LayoutElement' )
  var i5585 = data
  i5584.m_IgnoreLayout = !!i5585[0]
  i5584.m_MinWidth = i5585[1]
  i5584.m_MinHeight = i5585[2]
  i5584.m_PreferredWidth = i5585[3]
  i5584.m_PreferredHeight = i5585[4]
  i5584.m_FlexibleWidth = i5585[5]
  i5584.m_FlexibleHeight = i5585[6]
  i5584.m_LayoutPriority = i5585[7]
  return i5584
}

Deserializers["UnityEngine.UI.Text"] = function (request, data, root) {
  var i5586 = root || request.c( 'UnityEngine.UI.Text' )
  var i5587 = data
  i5586.m_FontData = request.d('UnityEngine.UI.FontData', i5587[0], i5586.m_FontData)
  i5586.m_Text = i5587[1]
  request.r(i5587[2], i5587[3], 0, i5586, 'm_Material')
  i5586.m_Maskable = !!i5587[4]
  i5586.m_Color = new pc.Color(i5587[5], i5587[6], i5587[7], i5587[8])
  i5586.m_RaycastTarget = !!i5587[9]
  i5586.m_RaycastPadding = new pc.Vec4( i5587[10], i5587[11], i5587[12], i5587[13] )
  return i5586
}

Deserializers["UnityEngine.UI.FontData"] = function (request, data, root) {
  var i5588 = root || request.c( 'UnityEngine.UI.FontData' )
  var i5589 = data
  request.r(i5589[0], i5589[1], 0, i5588, 'm_Font')
  i5588.m_FontSize = i5589[2]
  i5588.m_FontStyle = i5589[3]
  i5588.m_BestFit = !!i5589[4]
  i5588.m_MinSize = i5589[5]
  i5588.m_MaxSize = i5589[6]
  i5588.m_Alignment = i5589[7]
  i5588.m_AlignByGeometry = !!i5589[8]
  i5588.m_RichText = !!i5589[9]
  i5588.m_HorizontalOverflow = i5589[10]
  i5588.m_VerticalOverflow = i5589[11]
  i5588.m_LineSpacing = i5589[12]
  return i5588
}

Deserializers["UnityEngine.UI.ScrollRect"] = function (request, data, root) {
  var i5590 = root || request.c( 'UnityEngine.UI.ScrollRect' )
  var i5591 = data
  request.r(i5591[0], i5591[1], 0, i5590, 'm_Content')
  i5590.m_Horizontal = !!i5591[2]
  i5590.m_Vertical = !!i5591[3]
  i5590.m_MovementType = i5591[4]
  i5590.m_Elasticity = i5591[5]
  i5590.m_Inertia = !!i5591[6]
  i5590.m_DecelerationRate = i5591[7]
  i5590.m_ScrollSensitivity = i5591[8]
  request.r(i5591[9], i5591[10], 0, i5590, 'm_Viewport')
  request.r(i5591[11], i5591[12], 0, i5590, 'm_HorizontalScrollbar')
  request.r(i5591[13], i5591[14], 0, i5590, 'm_VerticalScrollbar')
  i5590.m_HorizontalScrollbarVisibility = i5591[15]
  i5590.m_VerticalScrollbarVisibility = i5591[16]
  i5590.m_HorizontalScrollbarSpacing = i5591[17]
  i5590.m_VerticalScrollbarSpacing = i5591[18]
  i5590.m_OnValueChanged = request.d('UnityEngine.UI.ScrollRect+ScrollRectEvent', i5591[19], i5590.m_OnValueChanged)
  return i5590
}

Deserializers["UnityEngine.UI.ScrollRect+ScrollRectEvent"] = function (request, data, root) {
  var i5592 = root || request.c( 'UnityEngine.UI.ScrollRect+ScrollRectEvent' )
  var i5593 = data
  i5592.m_PersistentCalls = request.d('UnityEngine.Events.PersistentCallGroup', i5593[0], i5592.m_PersistentCalls)
  return i5592
}

Deserializers["UnityEngine.UI.Mask"] = function (request, data, root) {
  var i5594 = root || request.c( 'UnityEngine.UI.Mask' )
  var i5595 = data
  i5594.m_ShowMaskGraphic = !!i5595[0]
  return i5594
}

Deserializers["UnityEngine.UI.Scrollbar"] = function (request, data, root) {
  var i5596 = root || request.c( 'UnityEngine.UI.Scrollbar' )
  var i5597 = data
  request.r(i5597[0], i5597[1], 0, i5596, 'm_HandleRect')
  i5596.m_Direction = i5597[2]
  i5596.m_Value = i5597[3]
  i5596.m_Size = i5597[4]
  i5596.m_NumberOfSteps = i5597[5]
  i5596.m_OnValueChanged = request.d('UnityEngine.UI.Scrollbar+ScrollEvent', i5597[6], i5596.m_OnValueChanged)
  i5596.m_Navigation = request.d('UnityEngine.UI.Navigation', i5597[7], i5596.m_Navigation)
  i5596.m_Transition = i5597[8]
  i5596.m_Colors = request.d('UnityEngine.UI.ColorBlock', i5597[9], i5596.m_Colors)
  i5596.m_SpriteState = request.d('UnityEngine.UI.SpriteState', i5597[10], i5596.m_SpriteState)
  i5596.m_AnimationTriggers = request.d('UnityEngine.UI.AnimationTriggers', i5597[11], i5596.m_AnimationTriggers)
  i5596.m_Interactable = !!i5597[12]
  request.r(i5597[13], i5597[14], 0, i5596, 'm_TargetGraphic')
  return i5596
}

Deserializers["UnityEngine.UI.Scrollbar+ScrollEvent"] = function (request, data, root) {
  var i5598 = root || request.c( 'UnityEngine.UI.Scrollbar+ScrollEvent' )
  var i5599 = data
  i5598.m_PersistentCalls = request.d('UnityEngine.Events.PersistentCallGroup', i5599[0], i5598.m_PersistentCalls)
  return i5598
}

Deserializers["UnityEngine.EventSystems.EventTrigger"] = function (request, data, root) {
  var i5600 = root || request.c( 'UnityEngine.EventSystems.EventTrigger' )
  var i5601 = data
  var i5603 = i5601[0]
  var i5602 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.EventSystems.EventTrigger+Entry')))
  for(var i = 0; i < i5603.length; i += 1) {
    i5602.add(request.d('UnityEngine.EventSystems.EventTrigger+Entry', i5603[i + 0]));
  }
  i5600.m_Delegates = i5602
  return i5600
}

Deserializers["UnityEngine.EventSystems.EventTrigger+Entry"] = function (request, data, root) {
  var i5606 = root || request.c( 'UnityEngine.EventSystems.EventTrigger+Entry' )
  var i5607 = data
  i5606.eventID = i5607[0]
  i5606.callback = request.d('UnityEngine.EventSystems.EventTrigger+TriggerEvent', i5607[1], i5606.callback)
  return i5606
}

Deserializers["UnityEngine.EventSystems.EventTrigger+TriggerEvent"] = function (request, data, root) {
  var i5608 = root || request.c( 'UnityEngine.EventSystems.EventTrigger+TriggerEvent' )
  var i5609 = data
  i5608.m_PersistentCalls = request.d('UnityEngine.Events.PersistentCallGroup', i5609[0], i5608.m_PersistentCalls)
  return i5608
}

Deserializers["UnityEngine.Rendering.UI.DebugUIHandlerValue"] = function (request, data, root) {
  var i5610 = root || request.c( 'UnityEngine.Rendering.UI.DebugUIHandlerValue' )
  var i5611 = data
  request.r(i5611[0], i5611[1], 0, i5610, 'nameLabel')
  request.r(i5611[2], i5611[3], 0, i5610, 'valueLabel')
  i5610.colorDefault = new pc.Color(i5611[4], i5611[5], i5611[6], i5611[7])
  i5610.colorSelected = new pc.Color(i5611[8], i5611[9], i5611[10], i5611[11])
  return i5610
}

Deserializers["UnityEngine.Rendering.UI.DebugUIHandlerToggle"] = function (request, data, root) {
  var i5612 = root || request.c( 'UnityEngine.Rendering.UI.DebugUIHandlerToggle' )
  var i5613 = data
  request.r(i5613[0], i5613[1], 0, i5612, 'nameLabel')
  request.r(i5613[2], i5613[3], 0, i5612, 'valueToggle')
  request.r(i5613[4], i5613[5], 0, i5612, 'checkmarkImage')
  i5612.colorDefault = new pc.Color(i5613[6], i5613[7], i5613[8], i5613[9])
  i5612.colorSelected = new pc.Color(i5613[10], i5613[11], i5613[12], i5613[13])
  return i5612
}

Deserializers["UnityEngine.UI.Toggle"] = function (request, data, root) {
  var i5614 = root || request.c( 'UnityEngine.UI.Toggle' )
  var i5615 = data
  i5614.toggleTransition = i5615[0]
  request.r(i5615[1], i5615[2], 0, i5614, 'graphic')
  i5614.onValueChanged = request.d('UnityEngine.UI.Toggle+ToggleEvent', i5615[3], i5614.onValueChanged)
  request.r(i5615[4], i5615[5], 0, i5614, 'm_Group')
  i5614.m_IsOn = !!i5615[6]
  i5614.m_Navigation = request.d('UnityEngine.UI.Navigation', i5615[7], i5614.m_Navigation)
  i5614.m_Transition = i5615[8]
  i5614.m_Colors = request.d('UnityEngine.UI.ColorBlock', i5615[9], i5614.m_Colors)
  i5614.m_SpriteState = request.d('UnityEngine.UI.SpriteState', i5615[10], i5614.m_SpriteState)
  i5614.m_AnimationTriggers = request.d('UnityEngine.UI.AnimationTriggers', i5615[11], i5614.m_AnimationTriggers)
  i5614.m_Interactable = !!i5615[12]
  request.r(i5615[13], i5615[14], 0, i5614, 'm_TargetGraphic')
  return i5614
}

Deserializers["UnityEngine.UI.Toggle+ToggleEvent"] = function (request, data, root) {
  var i5616 = root || request.c( 'UnityEngine.UI.Toggle+ToggleEvent' )
  var i5617 = data
  i5616.m_PersistentCalls = request.d('UnityEngine.Events.PersistentCallGroup', i5617[0], i5616.m_PersistentCalls)
  return i5616
}

Deserializers["UnityEngine.Rendering.UI.DebugUIHandlerIntField"] = function (request, data, root) {
  var i5618 = root || request.c( 'UnityEngine.Rendering.UI.DebugUIHandlerIntField' )
  var i5619 = data
  request.r(i5619[0], i5619[1], 0, i5618, 'nameLabel')
  request.r(i5619[2], i5619[3], 0, i5618, 'valueLabel')
  i5618.colorDefault = new pc.Color(i5619[4], i5619[5], i5619[6], i5619[7])
  i5618.colorSelected = new pc.Color(i5619[8], i5619[9], i5619[10], i5619[11])
  return i5618
}

Deserializers["UnityEngine.Rendering.UI.DebugUIHandlerUIntField"] = function (request, data, root) {
  var i5620 = root || request.c( 'UnityEngine.Rendering.UI.DebugUIHandlerUIntField' )
  var i5621 = data
  request.r(i5621[0], i5621[1], 0, i5620, 'nameLabel')
  request.r(i5621[2], i5621[3], 0, i5620, 'valueLabel')
  i5620.colorDefault = new pc.Color(i5621[4], i5621[5], i5621[6], i5621[7])
  i5620.colorSelected = new pc.Color(i5621[8], i5621[9], i5621[10], i5621[11])
  return i5620
}

Deserializers["UnityEngine.Rendering.UI.DebugUIHandlerFloatField"] = function (request, data, root) {
  var i5622 = root || request.c( 'UnityEngine.Rendering.UI.DebugUIHandlerFloatField' )
  var i5623 = data
  request.r(i5623[0], i5623[1], 0, i5622, 'nameLabel')
  request.r(i5623[2], i5623[3], 0, i5622, 'valueLabel')
  i5622.colorDefault = new pc.Color(i5623[4], i5623[5], i5623[6], i5623[7])
  i5622.colorSelected = new pc.Color(i5623[8], i5623[9], i5623[10], i5623[11])
  return i5622
}

Deserializers["UnityEngine.Rendering.UI.DebugUIHandlerEnumField"] = function (request, data, root) {
  var i5624 = root || request.c( 'UnityEngine.Rendering.UI.DebugUIHandlerEnumField' )
  var i5625 = data
  request.r(i5625[0], i5625[1], 0, i5624, 'nextButtonText')
  request.r(i5625[2], i5625[3], 0, i5624, 'previousButtonText')
  request.r(i5625[4], i5625[5], 0, i5624, 'nameLabel')
  request.r(i5625[6], i5625[7], 0, i5624, 'valueLabel')
  i5624.colorDefault = new pc.Color(i5625[8], i5625[9], i5625[10], i5625[11])
  i5624.colorSelected = new pc.Color(i5625[12], i5625[13], i5625[14], i5625[15])
  return i5624
}

Deserializers["UnityEngine.Rendering.UI.DebugUIHandlerButton"] = function (request, data, root) {
  var i5626 = root || request.c( 'UnityEngine.Rendering.UI.DebugUIHandlerButton' )
  var i5627 = data
  request.r(i5627[0], i5627[1], 0, i5626, 'nameLabel')
  i5626.colorDefault = new pc.Color(i5627[2], i5627[3], i5627[4], i5627[5])
  i5626.colorSelected = new pc.Color(i5627[6], i5627[7], i5627[8], i5627[9])
  return i5626
}

Deserializers["UnityEngine.Rendering.UI.DebugUIHandlerFoldout"] = function (request, data, root) {
  var i5628 = root || request.c( 'UnityEngine.Rendering.UI.DebugUIHandlerFoldout' )
  var i5629 = data
  request.r(i5629[0], i5629[1], 0, i5628, 'nameLabel')
  request.r(i5629[2], i5629[3], 0, i5628, 'valueToggle')
  i5628.colorDefault = new pc.Color(i5629[4], i5629[5], i5629[6], i5629[7])
  i5628.colorSelected = new pc.Color(i5629[8], i5629[9], i5629[10], i5629[11])
  return i5628
}

Deserializers["UnityEngine.Rendering.UI.UIFoldout"] = function (request, data, root) {
  var i5630 = root || request.c( 'UnityEngine.Rendering.UI.UIFoldout' )
  var i5631 = data
  request.r(i5631[0], i5631[1], 0, i5630, 'content')
  request.r(i5631[2], i5631[3], 0, i5630, 'arrowOpened')
  request.r(i5631[4], i5631[5], 0, i5630, 'arrowClosed')
  i5630.toggleTransition = i5631[6]
  request.r(i5631[7], i5631[8], 0, i5630, 'graphic')
  i5630.onValueChanged = request.d('UnityEngine.UI.Toggle+ToggleEvent', i5631[9], i5630.onValueChanged)
  request.r(i5631[10], i5631[11], 0, i5630, 'm_Group')
  i5630.m_IsOn = !!i5631[12]
  i5630.m_Navigation = request.d('UnityEngine.UI.Navigation', i5631[13], i5630.m_Navigation)
  i5630.m_Transition = i5631[14]
  i5630.m_Colors = request.d('UnityEngine.UI.ColorBlock', i5631[15], i5630.m_Colors)
  i5630.m_SpriteState = request.d('UnityEngine.UI.SpriteState', i5631[16], i5630.m_SpriteState)
  i5630.m_AnimationTriggers = request.d('UnityEngine.UI.AnimationTriggers', i5631[17], i5630.m_AnimationTriggers)
  i5630.m_Interactable = !!i5631[18]
  request.r(i5631[19], i5631[20], 0, i5630, 'm_TargetGraphic')
  return i5630
}

Deserializers["UnityEngine.Rendering.UI.DebugUIHandlerColor"] = function (request, data, root) {
  var i5632 = root || request.c( 'UnityEngine.Rendering.UI.DebugUIHandlerColor' )
  var i5633 = data
  request.r(i5633[0], i5633[1], 0, i5632, 'nameLabel')
  request.r(i5633[2], i5633[3], 0, i5632, 'valueToggle')
  request.r(i5633[4], i5633[5], 0, i5632, 'colorImage')
  request.r(i5633[6], i5633[7], 0, i5632, 'fieldR')
  request.r(i5633[8], i5633[9], 0, i5632, 'fieldG')
  request.r(i5633[10], i5633[11], 0, i5632, 'fieldB')
  request.r(i5633[12], i5633[13], 0, i5632, 'fieldA')
  i5632.colorDefault = new pc.Color(i5633[14], i5633[15], i5633[16], i5633[17])
  i5632.colorSelected = new pc.Color(i5633[18], i5633[19], i5633[20], i5633[21])
  return i5632
}

Deserializers["UnityEngine.Rendering.UI.DebugUIHandlerIndirectFloatField"] = function (request, data, root) {
  var i5634 = root || request.c( 'UnityEngine.Rendering.UI.DebugUIHandlerIndirectFloatField' )
  var i5635 = data
  request.r(i5635[0], i5635[1], 0, i5634, 'nameLabel')
  request.r(i5635[2], i5635[3], 0, i5634, 'valueLabel')
  i5634.colorDefault = new pc.Color(i5635[4], i5635[5], i5635[6], i5635[7])
  i5634.colorSelected = new pc.Color(i5635[8], i5635[9], i5635[10], i5635[11])
  return i5634
}

Deserializers["UnityEngine.Rendering.UI.DebugUIHandlerVector2"] = function (request, data, root) {
  var i5636 = root || request.c( 'UnityEngine.Rendering.UI.DebugUIHandlerVector2' )
  var i5637 = data
  request.r(i5637[0], i5637[1], 0, i5636, 'nameLabel')
  request.r(i5637[2], i5637[3], 0, i5636, 'valueToggle')
  request.r(i5637[4], i5637[5], 0, i5636, 'fieldX')
  request.r(i5637[6], i5637[7], 0, i5636, 'fieldY')
  i5636.colorDefault = new pc.Color(i5637[8], i5637[9], i5637[10], i5637[11])
  i5636.colorSelected = new pc.Color(i5637[12], i5637[13], i5637[14], i5637[15])
  return i5636
}

Deserializers["UnityEngine.Rendering.UI.DebugUIHandlerVector3"] = function (request, data, root) {
  var i5638 = root || request.c( 'UnityEngine.Rendering.UI.DebugUIHandlerVector3' )
  var i5639 = data
  request.r(i5639[0], i5639[1], 0, i5638, 'nameLabel')
  request.r(i5639[2], i5639[3], 0, i5638, 'valueToggle')
  request.r(i5639[4], i5639[5], 0, i5638, 'fieldX')
  request.r(i5639[6], i5639[7], 0, i5638, 'fieldY')
  request.r(i5639[8], i5639[9], 0, i5638, 'fieldZ')
  i5638.colorDefault = new pc.Color(i5639[10], i5639[11], i5639[12], i5639[13])
  i5638.colorSelected = new pc.Color(i5639[14], i5639[15], i5639[16], i5639[17])
  return i5638
}

Deserializers["UnityEngine.Rendering.UI.DebugUIHandlerVector4"] = function (request, data, root) {
  var i5640 = root || request.c( 'UnityEngine.Rendering.UI.DebugUIHandlerVector4' )
  var i5641 = data
  request.r(i5641[0], i5641[1], 0, i5640, 'nameLabel')
  request.r(i5641[2], i5641[3], 0, i5640, 'valueToggle')
  request.r(i5641[4], i5641[5], 0, i5640, 'fieldX')
  request.r(i5641[6], i5641[7], 0, i5640, 'fieldY')
  request.r(i5641[8], i5641[9], 0, i5640, 'fieldZ')
  request.r(i5641[10], i5641[11], 0, i5640, 'fieldW')
  i5640.colorDefault = new pc.Color(i5641[12], i5641[13], i5641[14], i5641[15])
  i5640.colorSelected = new pc.Color(i5641[16], i5641[17], i5641[18], i5641[19])
  return i5640
}

Deserializers["UnityEngine.Rendering.UI.DebugUIHandlerVBox"] = function (request, data, root) {
  var i5642 = root || request.c( 'UnityEngine.Rendering.UI.DebugUIHandlerVBox' )
  var i5643 = data
  i5642.colorDefault = new pc.Color(i5643[0], i5643[1], i5643[2], i5643[3])
  i5642.colorSelected = new pc.Color(i5643[4], i5643[5], i5643[6], i5643[7])
  return i5642
}

Deserializers["UnityEngine.Rendering.UI.DebugUIHandlerHBox"] = function (request, data, root) {
  var i5644 = root || request.c( 'UnityEngine.Rendering.UI.DebugUIHandlerHBox' )
  var i5645 = data
  i5644.colorDefault = new pc.Color(i5645[0], i5645[1], i5645[2], i5645[3])
  i5644.colorSelected = new pc.Color(i5645[4], i5645[5], i5645[6], i5645[7])
  return i5644
}

Deserializers["UnityEngine.Rendering.UI.DebugUIHandlerGroup"] = function (request, data, root) {
  var i5646 = root || request.c( 'UnityEngine.Rendering.UI.DebugUIHandlerGroup' )
  var i5647 = data
  request.r(i5647[0], i5647[1], 0, i5646, 'nameLabel')
  request.r(i5647[2], i5647[3], 0, i5646, 'header')
  i5646.colorDefault = new pc.Color(i5647[4], i5647[5], i5647[6], i5647[7])
  i5646.colorSelected = new pc.Color(i5647[8], i5647[9], i5647[10], i5647[11])
  return i5646
}

Deserializers["UnityEngine.Rendering.UI.DebugUIHandlerBitField"] = function (request, data, root) {
  var i5648 = root || request.c( 'UnityEngine.Rendering.UI.DebugUIHandlerBitField' )
  var i5649 = data
  request.r(i5649[0], i5649[1], 0, i5648, 'nameLabel')
  request.r(i5649[2], i5649[3], 0, i5648, 'valueToggle')
  var i5651 = i5649[4]
  var i5650 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.Rendering.UI.DebugUIHandlerIndirectToggle')))
  for(var i = 0; i < i5651.length; i += 2) {
  request.r(i5651[i + 0], i5651[i + 1], 1, i5650, '')
  }
  i5648.toggles = i5650
  i5648.colorDefault = new pc.Color(i5649[5], i5649[6], i5649[7], i5649[8])
  i5648.colorSelected = new pc.Color(i5649[9], i5649[10], i5649[11], i5649[12])
  return i5648
}

Deserializers["UnityEngine.Rendering.UI.DebugUIHandlerIndirectToggle"] = function (request, data, root) {
  var i5654 = root || request.c( 'UnityEngine.Rendering.UI.DebugUIHandlerIndirectToggle' )
  var i5655 = data
  request.r(i5655[0], i5655[1], 0, i5654, 'nameLabel')
  request.r(i5655[2], i5655[3], 0, i5654, 'valueToggle')
  request.r(i5655[4], i5655[5], 0, i5654, 'checkmarkImage')
  i5654.colorDefault = new pc.Color(i5655[6], i5655[7], i5655[8], i5655[9])
  i5654.colorSelected = new pc.Color(i5655[10], i5655[11], i5655[12], i5655[13])
  return i5654
}

Deserializers["UnityEngine.Rendering.UI.DebugUIHandlerToggleHistory"] = function (request, data, root) {
  var i5656 = root || request.c( 'UnityEngine.Rendering.UI.DebugUIHandlerToggleHistory' )
  var i5657 = data
  request.r(i5657[0], i5657[1], 0, i5656, 'nameLabel')
  request.r(i5657[2], i5657[3], 0, i5656, 'valueToggle')
  request.r(i5657[4], i5657[5], 0, i5656, 'checkmarkImage')
  i5656.colorDefault = new pc.Color(i5657[6], i5657[7], i5657[8], i5657[9])
  i5656.colorSelected = new pc.Color(i5657[10], i5657[11], i5657[12], i5657[13])
  return i5656
}

Deserializers["UnityEngine.Rendering.UI.DebugUIHandlerEnumHistory"] = function (request, data, root) {
  var i5658 = root || request.c( 'UnityEngine.Rendering.UI.DebugUIHandlerEnumHistory' )
  var i5659 = data
  request.r(i5659[0], i5659[1], 0, i5658, 'nextButtonText')
  request.r(i5659[2], i5659[3], 0, i5658, 'previousButtonText')
  request.r(i5659[4], i5659[5], 0, i5658, 'nameLabel')
  request.r(i5659[6], i5659[7], 0, i5658, 'valueLabel')
  i5658.colorDefault = new pc.Color(i5659[8], i5659[9], i5659[10], i5659[11])
  i5658.colorSelected = new pc.Color(i5659[12], i5659[13], i5659[14], i5659[15])
  return i5658
}

Deserializers["UnityEngine.Rendering.UI.DebugUIHandlerRow"] = function (request, data, root) {
  var i5660 = root || request.c( 'UnityEngine.Rendering.UI.DebugUIHandlerRow' )
  var i5661 = data
  request.r(i5661[0], i5661[1], 0, i5660, 'nameLabel')
  request.r(i5661[2], i5661[3], 0, i5660, 'valueToggle')
  i5660.colorDefault = new pc.Color(i5661[4], i5661[5], i5661[6], i5661[7])
  i5660.colorSelected = new pc.Color(i5661[8], i5661[9], i5661[10], i5661[11])
  return i5660
}

Deserializers["UnityEngine.Rendering.UI.DebugUIHandlerMessageBox"] = function (request, data, root) {
  var i5662 = root || request.c( 'UnityEngine.Rendering.UI.DebugUIHandlerMessageBox' )
  var i5663 = data
  request.r(i5663[0], i5663[1], 0, i5662, 'nameLabel')
  i5662.colorDefault = new pc.Color(i5663[2], i5663[3], i5663[4], i5663[5])
  i5662.colorSelected = new pc.Color(i5663[6], i5663[7], i5663[8], i5663[9])
  return i5662
}

Deserializers["UnityEngine.Rendering.UI.DebugUIHandlerProgressBar"] = function (request, data, root) {
  var i5664 = root || request.c( 'UnityEngine.Rendering.UI.DebugUIHandlerProgressBar' )
  var i5665 = data
  request.r(i5665[0], i5665[1], 0, i5664, 'nameLabel')
  request.r(i5665[2], i5665[3], 0, i5664, 'valueLabel')
  request.r(i5665[4], i5665[5], 0, i5664, 'progressBarRect')
  i5664.colorDefault = new pc.Color(i5665[6], i5665[7], i5665[8], i5665[9])
  i5664.colorSelected = new pc.Color(i5665[10], i5665[11], i5665[12], i5665[13])
  return i5664
}

Deserializers["UnityEngine.Rendering.UI.DebugUIHandlerValueTuple"] = function (request, data, root) {
  var i5666 = root || request.c( 'UnityEngine.Rendering.UI.DebugUIHandlerValueTuple' )
  var i5667 = data
  request.r(i5667[0], i5667[1], 0, i5666, 'nameLabel')
  request.r(i5667[2], i5667[3], 0, i5666, 'valueLabel')
  i5666.colorDefault = new pc.Color(i5667[4], i5667[5], i5667[6], i5667[7])
  i5666.colorSelected = new pc.Color(i5667[8], i5667[9], i5667[10], i5667[11])
  return i5666
}

Deserializers["UnityEngine.Rendering.UI.DebugUIHandlerObject"] = function (request, data, root) {
  var i5668 = root || request.c( 'UnityEngine.Rendering.UI.DebugUIHandlerObject' )
  var i5669 = data
  request.r(i5669[0], i5669[1], 0, i5668, 'nameLabel')
  request.r(i5669[2], i5669[3], 0, i5668, 'valueLabel')
  i5668.colorDefault = new pc.Color(i5669[4], i5669[5], i5669[6], i5669[7])
  i5668.colorSelected = new pc.Color(i5669[8], i5669[9], i5669[10], i5669[11])
  return i5668
}

Deserializers["UnityEngine.Rendering.UI.DebugUIHandlerObjectList"] = function (request, data, root) {
  var i5670 = root || request.c( 'UnityEngine.Rendering.UI.DebugUIHandlerObjectList' )
  var i5671 = data
  request.r(i5671[0], i5671[1], 0, i5670, 'nextButtonText')
  request.r(i5671[2], i5671[3], 0, i5670, 'previousButtonText')
  request.r(i5671[4], i5671[5], 0, i5670, 'nameLabel')
  request.r(i5671[6], i5671[7], 0, i5670, 'valueLabel')
  i5670.colorDefault = new pc.Color(i5671[8], i5671[9], i5671[10], i5671[11])
  i5670.colorSelected = new pc.Color(i5671[12], i5671[13], i5671[14], i5671[15])
  return i5670
}

Deserializers["UnityEngine.Rendering.UI.DebugUIHandlerObjectPopupField"] = function (request, data, root) {
  var i5672 = root || request.c( 'UnityEngine.Rendering.UI.DebugUIHandlerObjectPopupField' )
  var i5673 = data
  request.r(i5673[0], i5673[1], 0, i5672, 'nextButtonText')
  request.r(i5673[2], i5673[3], 0, i5672, 'previousButtonText')
  request.r(i5673[4], i5673[5], 0, i5672, 'nameLabel')
  request.r(i5673[6], i5673[7], 0, i5672, 'valueLabel')
  i5672.colorDefault = new pc.Color(i5673[8], i5673[9], i5673[10], i5673[11])
  i5672.colorSelected = new pc.Color(i5673[12], i5673[13], i5673[14], i5673[15])
  return i5672
}

Deserializers["UnityEngine.Rendering.UI.DebugUIHandlerRenderingLayerField"] = function (request, data, root) {
  var i5674 = root || request.c( 'UnityEngine.Rendering.UI.DebugUIHandlerRenderingLayerField' )
  var i5675 = data
  request.r(i5675[0], i5675[1], 0, i5674, 'nameLabel')
  request.r(i5675[2], i5675[3], 0, i5674, 'valueToggle')
  var i5677 = i5675[4]
  var i5676 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.Rendering.UI.DebugUIHandlerIndirectToggle')))
  for(var i = 0; i < i5677.length; i += 2) {
  request.r(i5677[i + 0], i5677[i + 1], 1, i5676, '')
  }
  i5674.toggles = i5676
  i5674.colorDefault = new pc.Color(i5675[5], i5675[6], i5675[7], i5675[8])
  i5674.colorSelected = new pc.Color(i5675[9], i5675[10], i5675[11], i5675[12])
  return i5674
}

Deserializers["UnityEngine.Rendering.UI.DebugUIHandlerPersistentCanvas"] = function (request, data, root) {
  var i5678 = root || request.c( 'UnityEngine.Rendering.UI.DebugUIHandlerPersistentCanvas' )
  var i5679 = data
  request.r(i5679[0], i5679[1], 0, i5678, 'panel')
  request.r(i5679[2], i5679[3], 0, i5678, 'valuePrefab')
  return i5678
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.UniversalRenderPipelineAsset"] = function (request, data, root) {
  var i5680 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.UniversalRenderPipelineAsset' )
  var i5681 = data
  i5680.AdditionalLightsPerObjectLimit = i5681[0]
  i5680.AdditionalLightsRenderingMode = i5681[1]
  i5680.LightRenderingMode = request.d('Luna.Unity.DTO.UnityEngine.Assets.LightRenderingMode', i5681[2], i5680.LightRenderingMode)
  i5680.ColorGradingLutSize = i5681[3]
  i5680.ColorGradingMode = request.d('Luna.Unity.DTO.UnityEngine.Assets.ColorGradingMode', i5681[4], i5680.ColorGradingMode)
  i5680.MainLightRenderingMode = request.d('Luna.Unity.DTO.UnityEngine.Assets.LightRenderingMode', i5681[5], i5680.MainLightRenderingMode)
  i5680.MainLightRenderingModeValue = i5681[6]
  i5680.SupportsMainLightShadows = !!i5681[7]
  i5680.MixedLightingSupported = !!i5681[8]
  i5680.MsaaQuality = request.d('Luna.Unity.DTO.UnityEngine.Assets.MsaaQuality', i5681[9], i5680.MsaaQuality)
  i5680.MSAA = i5681[10]
  i5680.OpaqueDownsampling = request.d('Luna.Unity.DTO.UnityEngine.Assets.Downsampling', i5681[11], i5680.OpaqueDownsampling)
  i5680.MainLightShadowmapResolution = request.d('Luna.Unity.DTO.UnityEngine.Assets.ShadowResolution', i5681[12], i5680.MainLightShadowmapResolution)
  i5680.MainLightShadowmapResolutionValue = i5681[13]
  i5680.SupportsSoftShadows = !!i5681[14]
  i5680.SoftShadowQuality = request.d('Luna.Unity.DTO.UnityEngine.Assets.SoftShadowQuality', i5681[15], i5680.SoftShadowQuality)
  i5680.SoftShadowQualityValue = i5681[16]
  i5680.ShadowDistance = i5681[17]
  i5680.ShadowCascadeCount = i5681[18]
  i5680.Cascade2Split = i5681[19]
  i5680.Cascade3Split = new pc.Vec2( i5681[20], i5681[21] )
  i5680.Cascade4Split = new pc.Vec3( i5681[22], i5681[23], i5681[24] )
  i5680.CascadeBorder = i5681[25]
  i5680.ShadowDepthBias = i5681[26]
  i5680.ShadowNormalBias = i5681[27]
  i5680.RenderScale = i5681[28]
  i5680.RequireDepthTexture = !!i5681[29]
  i5680.RequireOpaqueTexture = !!i5681[30]
  i5680.SupportsHDR = !!i5681[31]
  i5680.SupportsTerrainHoles = !!i5681[32]
  return i5680
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.LightRenderingMode"] = function (request, data, root) {
  var i5682 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.LightRenderingMode' )
  var i5683 = data
  i5682.Disabled = i5683[0]
  i5682.PerVertex = i5683[1]
  i5682.PerPixel = i5683[2]
  return i5682
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ColorGradingMode"] = function (request, data, root) {
  var i5684 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ColorGradingMode' )
  var i5685 = data
  i5684.LowDynamicRange = i5685[0]
  i5684.HighDynamicRange = i5685[1]
  return i5684
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.MsaaQuality"] = function (request, data, root) {
  var i5686 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.MsaaQuality' )
  var i5687 = data
  i5686.Disabled = i5687[0]
  i5686._2x = i5687[1]
  i5686._4x = i5687[2]
  i5686._8x = i5687[3]
  return i5686
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Downsampling"] = function (request, data, root) {
  var i5688 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Downsampling' )
  var i5689 = data
  i5688.None = i5689[0]
  i5688._2xBilinear = i5689[1]
  i5688._4xBox = i5689[2]
  i5688._4xBilinear = i5689[3]
  return i5688
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ShadowResolution"] = function (request, data, root) {
  var i5690 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ShadowResolution' )
  var i5691 = data
  i5690._256 = i5691[0]
  i5690._512 = i5691[1]
  i5690._1024 = i5691[2]
  i5690._2048 = i5691[3]
  i5690._4096 = i5691[4]
  return i5690
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.SoftShadowQuality"] = function (request, data, root) {
  var i5692 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.SoftShadowQuality' )
  var i5693 = data
  i5692.UsePipelineSettings = i5693[0]
  i5692.Low = i5693[1]
  i5692.Medium = i5693[2]
  i5692.High = i5693[3]
  return i5692
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.PhysicMaterial"] = function (request, data, root) {
  var i5694 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.PhysicMaterial' )
  var i5695 = data
  i5694.name = i5695[0]
  i5694.bounciness = i5695[1]
  i5694.dynamicFriction = i5695[2]
  i5694.staticFriction = i5695[3]
  i5694.frictionCombine = i5695[4]
  i5694.bounceCombine = i5695[5]
  return i5694
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader"] = function (request, data, root) {
  var i5696 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader' )
  var i5697 = data
  var i5699 = i5697[0]
  var i5698 = new (System.Collections.Generic.List$1(Bridge.ns('Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError')))
  for(var i = 0; i < i5699.length; i += 1) {
    i5698.add(request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError', i5699[i + 0]));
  }
  i5696.ShaderCompilationErrors = i5698
  i5696.name = i5697[1]
  i5696.guid = i5697[2]
  var i5701 = i5697[3]
  var i5700 = []
  for(var i = 0; i < i5701.length; i += 1) {
    i5700.push( i5701[i + 0] );
  }
  i5696.shaderDefinedKeywords = i5700
  var i5703 = i5697[4]
  var i5702 = []
  for(var i = 0; i < i5703.length; i += 1) {
    i5702.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass', i5703[i + 0]) );
  }
  i5696.passes = i5702
  var i5705 = i5697[5]
  var i5704 = []
  for(var i = 0; i < i5705.length; i += 1) {
    i5704.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+UsePass', i5705[i + 0]) );
  }
  i5696.usePasses = i5704
  var i5707 = i5697[6]
  var i5706 = []
  for(var i = 0; i < i5707.length; i += 1) {
    i5706.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+DefaultParameterValue', i5707[i + 0]) );
  }
  i5696.defaultParameterValues = i5706
  request.r(i5697[7], i5697[8], 0, i5696, 'unityFallbackShader')
  i5696.readDepth = !!i5697[9]
  i5696.hasDepthOnlyPass = !!i5697[10]
  i5696.isCreatedByShaderGraph = !!i5697[11]
  i5696.disableBatching = !!i5697[12]
  i5696.compiled = !!i5697[13]
  return i5696
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError"] = function (request, data, root) {
  var i5710 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError' )
  var i5711 = data
  i5710.shaderName = i5711[0]
  i5710.errorMessage = i5711[1]
  return i5710
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass"] = function (request, data, root) {
  var i5714 = root || new pc.UnityShaderPass()
  var i5715 = data
  i5714.id = i5715[0]
  i5714.subShaderIndex = i5715[1]
  i5714.name = i5715[2]
  i5714.passType = i5715[3]
  i5714.grabPassTextureName = i5715[4]
  i5714.usePass = !!i5715[5]
  i5714.zTest = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i5715[6], i5714.zTest)
  i5714.zWrite = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i5715[7], i5714.zWrite)
  i5714.culling = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i5715[8], i5714.culling)
  i5714.blending = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending', i5715[9], i5714.blending)
  i5714.alphaBlending = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending', i5715[10], i5714.alphaBlending)
  i5714.colorWriteMask = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i5715[11], i5714.colorWriteMask)
  i5714.offsetUnits = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i5715[12], i5714.offsetUnits)
  i5714.offsetFactor = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i5715[13], i5714.offsetFactor)
  i5714.stencilRef = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i5715[14], i5714.stencilRef)
  i5714.stencilReadMask = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i5715[15], i5714.stencilReadMask)
  i5714.stencilWriteMask = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i5715[16], i5714.stencilWriteMask)
  i5714.stencilOp = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp', i5715[17], i5714.stencilOp)
  i5714.stencilOpFront = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp', i5715[18], i5714.stencilOpFront)
  i5714.stencilOpBack = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp', i5715[19], i5714.stencilOpBack)
  var i5717 = i5715[20]
  var i5716 = []
  for(var i = 0; i < i5717.length; i += 1) {
    i5716.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Tag', i5717[i + 0]) );
  }
  i5714.tags = i5716
  var i5719 = i5715[21]
  var i5718 = []
  for(var i = 0; i < i5719.length; i += 1) {
    i5718.push( i5719[i + 0] );
  }
  i5714.passDefinedKeywords = i5718
  var i5721 = i5715[22]
  var i5720 = []
  for(var i = 0; i < i5721.length; i += 1) {
    i5720.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+KeywordGroup', i5721[i + 0]) );
  }
  i5714.passDefinedKeywordGroups = i5720
  var i5723 = i5715[23]
  var i5722 = []
  for(var i = 0; i < i5723.length; i += 1) {
    i5722.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant', i5723[i + 0]) );
  }
  i5714.variants = i5722
  var i5725 = i5715[24]
  var i5724 = []
  for(var i = 0; i < i5725.length; i += 1) {
    i5724.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant', i5725[i + 0]) );
  }
  i5714.excludedVariants = i5724
  i5714.hasDepthReader = !!i5715[25]
  return i5714
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value"] = function (request, data, root) {
  var i5726 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value' )
  var i5727 = data
  i5726.val = i5727[0]
  i5726.name = i5727[1]
  return i5726
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending"] = function (request, data, root) {
  var i5728 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending' )
  var i5729 = data
  i5728.src = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i5729[0], i5728.src)
  i5728.dst = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i5729[1], i5728.dst)
  i5728.op = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i5729[2], i5728.op)
  return i5728
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp"] = function (request, data, root) {
  var i5730 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp' )
  var i5731 = data
  i5730.pass = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i5731[0], i5730.pass)
  i5730.fail = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i5731[1], i5730.fail)
  i5730.zFail = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i5731[2], i5730.zFail)
  i5730.comp = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i5731[3], i5730.comp)
  return i5730
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Tag"] = function (request, data, root) {
  var i5734 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Tag' )
  var i5735 = data
  i5734.name = i5735[0]
  i5734.value = i5735[1]
  return i5734
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+KeywordGroup"] = function (request, data, root) {
  var i5738 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+KeywordGroup' )
  var i5739 = data
  var i5741 = i5739[0]
  var i5740 = []
  for(var i = 0; i < i5741.length; i += 1) {
    i5740.push( i5741[i + 0] );
  }
  i5738.keywords = i5740
  i5738.hasDiscard = !!i5739[1]
  return i5738
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant"] = function (request, data, root) {
  var i5744 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant' )
  var i5745 = data
  i5744.passId = i5745[0]
  i5744.subShaderIndex = i5745[1]
  var i5747 = i5745[2]
  var i5746 = []
  for(var i = 0; i < i5747.length; i += 1) {
    i5746.push( i5747[i + 0] );
  }
  i5744.keywords = i5746
  i5744.vertexProgram = i5745[3]
  i5744.fragmentProgram = i5745[4]
  i5744.exportedForWebGl2 = !!i5745[5]
  i5744.readDepth = !!i5745[6]
  return i5744
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+UsePass"] = function (request, data, root) {
  var i5750 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+UsePass' )
  var i5751 = data
  request.r(i5751[0], i5751[1], 0, i5750, 'shader')
  i5750.pass = i5751[2]
  return i5750
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+DefaultParameterValue"] = function (request, data, root) {
  var i5754 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+DefaultParameterValue' )
  var i5755 = data
  i5754.name = i5755[0]
  i5754.type = i5755[1]
  i5754.value = new pc.Vec4( i5755[2], i5755[3], i5755[4], i5755[5] )
  i5754.textureValue = i5755[6]
  i5754.shaderPropertyFlag = i5755[7]
  return i5754
}

Deserializers["Luna.Unity.DTO.UnityEngine.Textures.Sprite"] = function (request, data, root) {
  var i5756 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Textures.Sprite' )
  var i5757 = data
  i5756.name = i5757[0]
  request.r(i5757[1], i5757[2], 0, i5756, 'texture')
  i5756.aabb = i5757[3]
  i5756.vertices = i5757[4]
  i5756.triangles = i5757[5]
  i5756.textureRect = UnityEngine.Rect.MinMaxRect(i5757[6], i5757[7], i5757[8], i5757[9])
  i5756.packedRect = UnityEngine.Rect.MinMaxRect(i5757[10], i5757[11], i5757[12], i5757[13])
  i5756.border = new pc.Vec4( i5757[14], i5757[15], i5757[16], i5757[17] )
  i5756.transparency = i5757[18]
  i5756.bounds = i5757[19]
  i5756.pixelsPerUnit = i5757[20]
  i5756.textureWidth = i5757[21]
  i5756.textureHeight = i5757[22]
  i5756.nativeSize = new pc.Vec2( i5757[23], i5757[24] )
  i5756.pivot = new pc.Vec2( i5757[25], i5757[26] )
  i5756.textureRectOffset = new pc.Vec2( i5757[27], i5757[28] )
  return i5756
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.AudioClip"] = function (request, data, root) {
  var i5758 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.AudioClip' )
  var i5759 = data
  i5758.name = i5759[0]
  return i5758
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Font"] = function (request, data, root) {
  var i5760 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Font' )
  var i5761 = data
  i5760.name = i5761[0]
  i5760.ascent = i5761[1]
  i5760.originalLineHeight = i5761[2]
  i5760.fontSize = i5761[3]
  var i5763 = i5761[4]
  var i5762 = []
  for(var i = 0; i < i5763.length; i += 1) {
    i5762.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Font+CharacterInfo', i5763[i + 0]) );
  }
  i5760.characterInfo = i5762
  request.r(i5761[5], i5761[6], 0, i5760, 'texture')
  i5760.originalFontSize = i5761[7]
  return i5760
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Font+CharacterInfo"] = function (request, data, root) {
  var i5766 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Font+CharacterInfo' )
  var i5767 = data
  i5766.index = i5767[0]
  i5766.advance = i5767[1]
  i5766.bearing = i5767[2]
  i5766.glyphWidth = i5767[3]
  i5766.glyphHeight = i5767[4]
  i5766.minX = i5767[5]
  i5766.maxX = i5767[6]
  i5766.minY = i5767[7]
  i5766.maxY = i5767[8]
  i5766.uvBottomLeftX = i5767[9]
  i5766.uvBottomLeftY = i5767[10]
  i5766.uvBottomRightX = i5767[11]
  i5766.uvBottomRightY = i5767[12]
  i5766.uvTopLeftX = i5767[13]
  i5766.uvTopLeftY = i5767[14]
  i5766.uvTopRightX = i5767[15]
  i5766.uvTopRightY = i5767[16]
  return i5766
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.TextAsset"] = function (request, data, root) {
  var i5768 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.TextAsset' )
  var i5769 = data
  i5768.name = i5769[0]
  i5768.bytes64 = i5769[1]
  i5768.data = i5769[2]
  return i5768
}

Deserializers["UnityEngine.Rendering.VolumeProfile"] = function (request, data, root) {
  var i5770 = root || request.c( 'UnityEngine.Rendering.VolumeProfile' )
  var i5771 = data
  var i5773 = i5771[0]
  var i5772 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.Rendering.VolumeComponent')))
  for(var i = 0; i < i5773.length; i += 2) {
  request.r(i5773[i + 0], i5773[i + 1], 1, i5772, '')
  }
  i5770.components = i5772
  return i5770
}

Deserializers["UnityEngine.Rendering.Universal.Tonemapping"] = function (request, data, root) {
  var i5776 = root || request.c( 'UnityEngine.Rendering.Universal.Tonemapping' )
  var i5777 = data
  i5776.mode = request.d('UnityEngine.Rendering.Universal.TonemappingModeParameter', i5777[0], i5776.mode)
  i5776.neutralHDRRangeReductionMode = request.d('UnityEngine.Rendering.Universal.NeutralRangeReductionModeParameter', i5777[1], i5776.neutralHDRRangeReductionMode)
  i5776.acesPreset = request.d('UnityEngine.Rendering.Universal.HDRACESPresetParameter', i5777[2], i5776.acesPreset)
  i5776.hueShiftAmount = request.d('UnityEngine.Rendering.ClampedFloatParameter', i5777[3], i5776.hueShiftAmount)
  i5776.detectPaperWhite = request.d('UnityEngine.Rendering.BoolParameter', i5777[4], i5776.detectPaperWhite)
  i5776.paperWhite = request.d('UnityEngine.Rendering.ClampedFloatParameter', i5777[5], i5776.paperWhite)
  i5776.detectBrightnessLimits = request.d('UnityEngine.Rendering.BoolParameter', i5777[6], i5776.detectBrightnessLimits)
  i5776.minNits = request.d('UnityEngine.Rendering.ClampedFloatParameter', i5777[7], i5776.minNits)
  i5776.maxNits = request.d('UnityEngine.Rendering.ClampedFloatParameter', i5777[8], i5776.maxNits)
  i5776.active = !!i5777[9]
  return i5776
}

Deserializers["UnityEngine.Rendering.Universal.TonemappingModeParameter"] = function (request, data, root) {
  var i5778 = root || request.c( 'UnityEngine.Rendering.Universal.TonemappingModeParameter' )
  var i5779 = data
  i5778.m_Value = i5779[0]
  i5778.m_OverrideState = !!i5779[1]
  return i5778
}

Deserializers["UnityEngine.Rendering.Universal.NeutralRangeReductionModeParameter"] = function (request, data, root) {
  var i5780 = root || request.c( 'UnityEngine.Rendering.Universal.NeutralRangeReductionModeParameter' )
  var i5781 = data
  i5780.m_Value = i5781[0]
  i5780.m_OverrideState = !!i5781[1]
  return i5780
}

Deserializers["UnityEngine.Rendering.Universal.HDRACESPresetParameter"] = function (request, data, root) {
  var i5782 = root || request.c( 'UnityEngine.Rendering.Universal.HDRACESPresetParameter' )
  var i5783 = data
  i5782.m_Value = i5783[0]
  i5782.m_OverrideState = !!i5783[1]
  return i5782
}

Deserializers["UnityEngine.Rendering.ClampedFloatParameter"] = function (request, data, root) {
  var i5784 = root || request.c( 'UnityEngine.Rendering.ClampedFloatParameter' )
  var i5785 = data
  i5784.m_Value = i5785[0]
  i5784.m_OverrideState = !!i5785[1]
  return i5784
}

Deserializers["UnityEngine.Rendering.BoolParameter"] = function (request, data, root) {
  var i5786 = root || request.c( 'UnityEngine.Rendering.BoolParameter' )
  var i5787 = data
  i5786.m_Value = !!i5787[0]
  i5786.m_OverrideState = !!i5787[1]
  return i5786
}

Deserializers["UnityEngine.Rendering.Universal.Bloom"] = function (request, data, root) {
  var i5788 = root || request.c( 'UnityEngine.Rendering.Universal.Bloom' )
  var i5789 = data
  i5788.skipIterations = request.d('UnityEngine.Rendering.ClampedIntParameter', i5789[0], i5788.skipIterations)
  i5788.threshold = request.d('UnityEngine.Rendering.MinFloatParameter', i5789[1], i5788.threshold)
  i5788.intensity = request.d('UnityEngine.Rendering.MinFloatParameter', i5789[2], i5788.intensity)
  i5788.scatter = request.d('UnityEngine.Rendering.ClampedFloatParameter', i5789[3], i5788.scatter)
  i5788.clamp = request.d('UnityEngine.Rendering.MinFloatParameter', i5789[4], i5788.clamp)
  i5788.tint = request.d('UnityEngine.Rendering.ColorParameter', i5789[5], i5788.tint)
  i5788.highQualityFiltering = request.d('UnityEngine.Rendering.BoolParameter', i5789[6], i5788.highQualityFiltering)
  i5788.downscale = request.d('UnityEngine.Rendering.Universal.DownscaleParameter', i5789[7], i5788.downscale)
  i5788.maxIterations = request.d('UnityEngine.Rendering.ClampedIntParameter', i5789[8], i5788.maxIterations)
  i5788.dirtTexture = request.d('UnityEngine.Rendering.TextureParameter', i5789[9], i5788.dirtTexture)
  i5788.dirtIntensity = request.d('UnityEngine.Rendering.MinFloatParameter', i5789[10], i5788.dirtIntensity)
  i5788.active = !!i5789[11]
  return i5788
}

Deserializers["UnityEngine.Rendering.ClampedIntParameter"] = function (request, data, root) {
  var i5790 = root || request.c( 'UnityEngine.Rendering.ClampedIntParameter' )
  var i5791 = data
  i5790.m_Value = i5791[0]
  i5790.m_OverrideState = !!i5791[1]
  return i5790
}

Deserializers["UnityEngine.Rendering.MinFloatParameter"] = function (request, data, root) {
  var i5792 = root || request.c( 'UnityEngine.Rendering.MinFloatParameter' )
  var i5793 = data
  i5792.m_Value = i5793[0]
  i5792.m_OverrideState = !!i5793[1]
  return i5792
}

Deserializers["UnityEngine.Rendering.ColorParameter"] = function (request, data, root) {
  var i5794 = root || request.c( 'UnityEngine.Rendering.ColorParameter' )
  var i5795 = data
  i5794.m_Value = new pc.Color(i5795[0], i5795[1], i5795[2], i5795[3])
  i5794.m_OverrideState = !!i5795[4]
  return i5794
}

Deserializers["UnityEngine.Rendering.Universal.DownscaleParameter"] = function (request, data, root) {
  var i5796 = root || request.c( 'UnityEngine.Rendering.Universal.DownscaleParameter' )
  var i5797 = data
  i5796.m_Value = i5797[0]
  i5796.m_OverrideState = !!i5797[1]
  return i5796
}

Deserializers["UnityEngine.Rendering.TextureParameter"] = function (request, data, root) {
  var i5798 = root || request.c( 'UnityEngine.Rendering.TextureParameter' )
  var i5799 = data
  i5798.dimension = i5799[0]
  request.r(i5799[1], i5799[2], 0, i5798, 'm_Value')
  i5798.m_OverrideState = !!i5799[3]
  return i5798
}

Deserializers["UnityEngine.Rendering.Universal.MotionBlur"] = function (request, data, root) {
  var i5800 = root || request.c( 'UnityEngine.Rendering.Universal.MotionBlur' )
  var i5801 = data
  i5800.mode = request.d('UnityEngine.Rendering.Universal.MotionBlurModeParameter', i5801[0], i5800.mode)
  i5800.quality = request.d('UnityEngine.Rendering.Universal.MotionBlurQualityParameter', i5801[1], i5800.quality)
  i5800.intensity = request.d('UnityEngine.Rendering.ClampedFloatParameter', i5801[2], i5800.intensity)
  i5800.clamp = request.d('UnityEngine.Rendering.ClampedFloatParameter', i5801[3], i5800.clamp)
  i5800.active = !!i5801[4]
  return i5800
}

Deserializers["UnityEngine.Rendering.Universal.MotionBlurModeParameter"] = function (request, data, root) {
  var i5802 = root || request.c( 'UnityEngine.Rendering.Universal.MotionBlurModeParameter' )
  var i5803 = data
  i5802.m_Value = i5803[0]
  i5802.m_OverrideState = !!i5803[1]
  return i5802
}

Deserializers["UnityEngine.Rendering.Universal.MotionBlurQualityParameter"] = function (request, data, root) {
  var i5804 = root || request.c( 'UnityEngine.Rendering.Universal.MotionBlurQualityParameter' )
  var i5805 = data
  i5804.m_Value = i5805[0]
  i5804.m_OverrideState = !!i5805[1]
  return i5804
}

Deserializers["UnityEngine.Rendering.Universal.Vignette"] = function (request, data, root) {
  var i5806 = root || request.c( 'UnityEngine.Rendering.Universal.Vignette' )
  var i5807 = data
  i5806.color = request.d('UnityEngine.Rendering.ColorParameter', i5807[0], i5806.color)
  i5806.center = request.d('UnityEngine.Rendering.Vector2Parameter', i5807[1], i5806.center)
  i5806.intensity = request.d('UnityEngine.Rendering.ClampedFloatParameter', i5807[2], i5806.intensity)
  i5806.smoothness = request.d('UnityEngine.Rendering.ClampedFloatParameter', i5807[3], i5806.smoothness)
  i5806.rounded = request.d('UnityEngine.Rendering.BoolParameter', i5807[4], i5806.rounded)
  i5806.active = !!i5807[5]
  return i5806
}

Deserializers["UnityEngine.Rendering.Vector2Parameter"] = function (request, data, root) {
  var i5808 = root || request.c( 'UnityEngine.Rendering.Vector2Parameter' )
  var i5809 = data
  i5808.m_Value = new pc.Vec2( i5809[0], i5809[1] )
  i5808.m_OverrideState = !!i5809[2]
  return i5808
}

Deserializers["TMPro.TMP_FontAsset"] = function (request, data, root) {
  var i5810 = root || request.c( 'TMPro.TMP_FontAsset' )
  var i5811 = data
  i5810.normalStyle = i5811[0]
  i5810.normalSpacingOffset = i5811[1]
  i5810.boldStyle = i5811[2]
  i5810.boldSpacing = i5811[3]
  i5810.italicStyle = i5811[4]
  i5810.tabSize = i5811[5]
  request.r(i5811[6], i5811[7], 0, i5810, 'atlas')
  i5810.m_SourceFontFileGUID = i5811[8]
  i5810.m_CreationSettings = request.d('TMPro.FontAssetCreationSettings', i5811[9], i5810.m_CreationSettings)
  request.r(i5811[10], i5811[11], 0, i5810, 'm_SourceFontFile')
  i5810.m_SourceFontFilePath = i5811[12]
  i5810.m_AtlasPopulationMode = i5811[13]
  i5810.InternalDynamicOS = !!i5811[14]
  var i5813 = i5811[15]
  var i5812 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.TextCore.Glyph')))
  for(var i = 0; i < i5813.length; i += 1) {
    i5812.add(request.d('UnityEngine.TextCore.Glyph', i5813[i + 0]));
  }
  i5810.m_GlyphTable = i5812
  var i5815 = i5811[16]
  var i5814 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_Character')))
  for(var i = 0; i < i5815.length; i += 1) {
    i5814.add(request.d('TMPro.TMP_Character', i5815[i + 0]));
  }
  i5810.m_CharacterTable = i5814
  var i5817 = i5811[17]
  var i5816 = []
  for(var i = 0; i < i5817.length; i += 2) {
  request.r(i5817[i + 0], i5817[i + 1], 2, i5816, '')
  }
  i5810.m_AtlasTextures = i5816
  i5810.m_AtlasTextureIndex = i5811[18]
  i5810.m_IsMultiAtlasTexturesEnabled = !!i5811[19]
  i5810.m_GetFontFeatures = !!i5811[20]
  i5810.m_ClearDynamicDataOnBuild = !!i5811[21]
  i5810.m_AtlasWidth = i5811[22]
  i5810.m_AtlasHeight = i5811[23]
  i5810.m_AtlasPadding = i5811[24]
  i5810.m_AtlasRenderMode = i5811[25]
  var i5819 = i5811[26]
  var i5818 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.TextCore.GlyphRect')))
  for(var i = 0; i < i5819.length; i += 1) {
    i5818.add(request.d('UnityEngine.TextCore.GlyphRect', i5819[i + 0]));
  }
  i5810.m_UsedGlyphRects = i5818
  var i5821 = i5811[27]
  var i5820 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.TextCore.GlyphRect')))
  for(var i = 0; i < i5821.length; i += 1) {
    i5820.add(request.d('UnityEngine.TextCore.GlyphRect', i5821[i + 0]));
  }
  i5810.m_FreeGlyphRects = i5820
  i5810.m_FontFeatureTable = request.d('TMPro.TMP_FontFeatureTable', i5811[28], i5810.m_FontFeatureTable)
  i5810.m_ShouldReimportFontFeatures = !!i5811[29]
  var i5823 = i5811[30]
  var i5822 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_FontAsset')))
  for(var i = 0; i < i5823.length; i += 2) {
  request.r(i5823[i + 0], i5823[i + 1], 1, i5822, '')
  }
  i5810.m_FallbackFontAssetTable = i5822
  var i5825 = i5811[31]
  var i5824 = []
  for(var i = 0; i < i5825.length; i += 1) {
    i5824.push( request.d('TMPro.TMP_FontWeightPair', i5825[i + 0]) );
  }
  i5810.m_FontWeightTable = i5824
  var i5827 = i5811[32]
  var i5826 = []
  for(var i = 0; i < i5827.length; i += 1) {
    i5826.push( request.d('TMPro.TMP_FontWeightPair', i5827[i + 0]) );
  }
  i5810.fontWeights = i5826
  i5810.m_fontInfo = request.d('TMPro.FaceInfo_Legacy', i5811[33], i5810.m_fontInfo)
  var i5829 = i5811[34]
  var i5828 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_Glyph')))
  for(var i = 0; i < i5829.length; i += 1) {
    i5828.add(request.d('TMPro.TMP_Glyph', i5829[i + 0]));
  }
  i5810.m_glyphInfoList = i5828
  i5810.m_KerningTable = request.d('TMPro.KerningTable', i5811[35], i5810.m_KerningTable)
  var i5831 = i5811[36]
  var i5830 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_FontAsset')))
  for(var i = 0; i < i5831.length; i += 2) {
  request.r(i5831[i + 0], i5831[i + 1], 1, i5830, '')
  }
  i5810.fallbackFontAssets = i5830
  i5810.m_Version = i5811[37]
  i5810.m_FaceInfo = request.d('UnityEngine.TextCore.FaceInfo', i5811[38], i5810.m_FaceInfo)
  request.r(i5811[39], i5811[40], 0, i5810, 'm_Material')
  return i5810
}

Deserializers["TMPro.FontAssetCreationSettings"] = function (request, data, root) {
  var i5832 = root || request.c( 'TMPro.FontAssetCreationSettings' )
  var i5833 = data
  i5832.sourceFontFileName = i5833[0]
  i5832.sourceFontFileGUID = i5833[1]
  i5832.faceIndex = i5833[2]
  i5832.pointSizeSamplingMode = i5833[3]
  i5832.pointSize = i5833[4]
  i5832.padding = i5833[5]
  i5832.paddingMode = i5833[6]
  i5832.packingMode = i5833[7]
  i5832.atlasWidth = i5833[8]
  i5832.atlasHeight = i5833[9]
  i5832.characterSetSelectionMode = i5833[10]
  i5832.characterSequence = i5833[11]
  i5832.referencedFontAssetGUID = i5833[12]
  i5832.referencedTextAssetGUID = i5833[13]
  i5832.fontStyle = i5833[14]
  i5832.fontStyleModifier = i5833[15]
  i5832.renderMode = i5833[16]
  i5832.includeFontFeatures = !!i5833[17]
  return i5832
}

Deserializers["UnityEngine.TextCore.Glyph"] = function (request, data, root) {
  var i5836 = root || request.c( 'UnityEngine.TextCore.Glyph' )
  var i5837 = data
  i5836.m_Index = i5837[0]
  i5836.m_Metrics = request.d('UnityEngine.TextCore.GlyphMetrics', i5837[1], i5836.m_Metrics)
  i5836.m_GlyphRect = request.d('UnityEngine.TextCore.GlyphRect', i5837[2], i5836.m_GlyphRect)
  i5836.m_Scale = i5837[3]
  i5836.m_AtlasIndex = i5837[4]
  i5836.m_ClassDefinitionType = i5837[5]
  return i5836
}

Deserializers["TMPro.TMP_Character"] = function (request, data, root) {
  var i5840 = root || request.c( 'TMPro.TMP_Character' )
  var i5841 = data
  i5840.m_ElementType = i5841[0]
  i5840.m_Unicode = i5841[1]
  i5840.m_GlyphIndex = i5841[2]
  i5840.m_Scale = i5841[3]
  return i5840
}

Deserializers["UnityEngine.TextCore.GlyphRect"] = function (request, data, root) {
  var i5846 = root || request.c( 'UnityEngine.TextCore.GlyphRect' )
  var i5847 = data
  i5846.m_X = i5847[0]
  i5846.m_Y = i5847[1]
  i5846.m_Width = i5847[2]
  i5846.m_Height = i5847[3]
  return i5846
}

Deserializers["TMPro.TMP_FontFeatureTable"] = function (request, data, root) {
  var i5848 = root || request.c( 'TMPro.TMP_FontFeatureTable' )
  var i5849 = data
  var i5851 = i5849[0]
  var i5850 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.MultipleSubstitutionRecord')))
  for(var i = 0; i < i5851.length; i += 1) {
    i5850.add(request.d('TMPro.MultipleSubstitutionRecord', i5851[i + 0]));
  }
  i5848.m_MultipleSubstitutionRecords = i5850
  var i5853 = i5849[1]
  var i5852 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.LigatureSubstitutionRecord')))
  for(var i = 0; i < i5853.length; i += 1) {
    i5852.add(request.d('TMPro.LigatureSubstitutionRecord', i5853[i + 0]));
  }
  i5848.m_LigatureSubstitutionRecords = i5852
  var i5855 = i5849[2]
  var i5854 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.TextCore.LowLevel.GlyphPairAdjustmentRecord')))
  for(var i = 0; i < i5855.length; i += 1) {
    i5854.add(request.d('UnityEngine.TextCore.LowLevel.GlyphPairAdjustmentRecord', i5855[i + 0]));
  }
  i5848.m_GlyphPairAdjustmentRecords = i5854
  var i5857 = i5849[3]
  var i5856 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.MarkToBaseAdjustmentRecord')))
  for(var i = 0; i < i5857.length; i += 1) {
    i5856.add(request.d('TMPro.MarkToBaseAdjustmentRecord', i5857[i + 0]));
  }
  i5848.m_MarkToBaseAdjustmentRecords = i5856
  var i5859 = i5849[4]
  var i5858 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.MarkToMarkAdjustmentRecord')))
  for(var i = 0; i < i5859.length; i += 1) {
    i5858.add(request.d('TMPro.MarkToMarkAdjustmentRecord', i5859[i + 0]));
  }
  i5848.m_MarkToMarkAdjustmentRecords = i5858
  return i5848
}

Deserializers["TMPro.MultipleSubstitutionRecord"] = function (request, data, root) {
  var i5862 = root || request.c( 'TMPro.MultipleSubstitutionRecord' )
  var i5863 = data
  i5862.m_TargetGlyphID = i5863[0]
  i5862.m_SubstituteGlyphIDs = i5863[1]
  return i5862
}

Deserializers["TMPro.LigatureSubstitutionRecord"] = function (request, data, root) {
  var i5866 = root || request.c( 'TMPro.LigatureSubstitutionRecord' )
  var i5867 = data
  i5866.m_ComponentGlyphIDs = i5867[0]
  i5866.m_LigatureGlyphID = i5867[1]
  return i5866
}

Deserializers["UnityEngine.TextCore.LowLevel.GlyphPairAdjustmentRecord"] = function (request, data, root) {
  var i5870 = root || request.c( 'UnityEngine.TextCore.LowLevel.GlyphPairAdjustmentRecord' )
  var i5871 = data
  i5870.m_FirstAdjustmentRecord = request.d('UnityEngine.TextCore.LowLevel.GlyphAdjustmentRecord', i5871[0], i5870.m_FirstAdjustmentRecord)
  i5870.m_SecondAdjustmentRecord = request.d('UnityEngine.TextCore.LowLevel.GlyphAdjustmentRecord', i5871[1], i5870.m_SecondAdjustmentRecord)
  i5870.m_FeatureLookupFlags = i5871[2]
  return i5870
}

Deserializers["TMPro.MarkToBaseAdjustmentRecord"] = function (request, data, root) {
  var i5874 = root || request.c( 'TMPro.MarkToBaseAdjustmentRecord' )
  var i5875 = data
  i5874.m_BaseGlyphID = i5875[0]
  i5874.m_BaseGlyphAnchorPoint = request.d('TMPro.GlyphAnchorPoint', i5875[1], i5874.m_BaseGlyphAnchorPoint)
  i5874.m_MarkGlyphID = i5875[2]
  i5874.m_MarkPositionAdjustment = request.d('TMPro.MarkPositionAdjustment', i5875[3], i5874.m_MarkPositionAdjustment)
  return i5874
}

Deserializers["TMPro.MarkToMarkAdjustmentRecord"] = function (request, data, root) {
  var i5878 = root || request.c( 'TMPro.MarkToMarkAdjustmentRecord' )
  var i5879 = data
  i5878.m_BaseMarkGlyphID = i5879[0]
  i5878.m_BaseMarkGlyphAnchorPoint = request.d('TMPro.GlyphAnchorPoint', i5879[1], i5878.m_BaseMarkGlyphAnchorPoint)
  i5878.m_CombiningMarkGlyphID = i5879[2]
  i5878.m_CombiningMarkPositionAdjustment = request.d('TMPro.MarkPositionAdjustment', i5879[3], i5878.m_CombiningMarkPositionAdjustment)
  return i5878
}

Deserializers["TMPro.TMP_FontWeightPair"] = function (request, data, root) {
  var i5884 = root || request.c( 'TMPro.TMP_FontWeightPair' )
  var i5885 = data
  request.r(i5885[0], i5885[1], 0, i5884, 'regularTypeface')
  request.r(i5885[2], i5885[3], 0, i5884, 'italicTypeface')
  return i5884
}

Deserializers["TMPro.FaceInfo_Legacy"] = function (request, data, root) {
  var i5886 = root || request.c( 'TMPro.FaceInfo_Legacy' )
  var i5887 = data
  i5886.Name = i5887[0]
  i5886.PointSize = i5887[1]
  i5886.Scale = i5887[2]
  i5886.CharacterCount = i5887[3]
  i5886.LineHeight = i5887[4]
  i5886.Baseline = i5887[5]
  i5886.Ascender = i5887[6]
  i5886.CapHeight = i5887[7]
  i5886.Descender = i5887[8]
  i5886.CenterLine = i5887[9]
  i5886.SuperscriptOffset = i5887[10]
  i5886.SubscriptOffset = i5887[11]
  i5886.SubSize = i5887[12]
  i5886.Underline = i5887[13]
  i5886.UnderlineThickness = i5887[14]
  i5886.strikethrough = i5887[15]
  i5886.strikethroughThickness = i5887[16]
  i5886.TabWidth = i5887[17]
  i5886.Padding = i5887[18]
  i5886.AtlasWidth = i5887[19]
  i5886.AtlasHeight = i5887[20]
  return i5886
}

Deserializers["TMPro.TMP_Glyph"] = function (request, data, root) {
  var i5890 = root || request.c( 'TMPro.TMP_Glyph' )
  var i5891 = data
  i5890.id = i5891[0]
  i5890.x = i5891[1]
  i5890.y = i5891[2]
  i5890.width = i5891[3]
  i5890.height = i5891[4]
  i5890.xOffset = i5891[5]
  i5890.yOffset = i5891[6]
  i5890.xAdvance = i5891[7]
  i5890.scale = i5891[8]
  return i5890
}

Deserializers["TMPro.KerningTable"] = function (request, data, root) {
  var i5892 = root || request.c( 'TMPro.KerningTable' )
  var i5893 = data
  var i5895 = i5893[0]
  var i5894 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.KerningPair')))
  for(var i = 0; i < i5895.length; i += 1) {
    i5894.add(request.d('TMPro.KerningPair', i5895[i + 0]));
  }
  i5892.kerningPairs = i5894
  return i5892
}

Deserializers["TMPro.KerningPair"] = function (request, data, root) {
  var i5898 = root || request.c( 'TMPro.KerningPair' )
  var i5899 = data
  i5898.xOffset = i5899[0]
  i5898.m_FirstGlyph = i5899[1]
  i5898.m_FirstGlyphAdjustments = request.d('TMPro.GlyphValueRecord_Legacy', i5899[2], i5898.m_FirstGlyphAdjustments)
  i5898.m_SecondGlyph = i5899[3]
  i5898.m_SecondGlyphAdjustments = request.d('TMPro.GlyphValueRecord_Legacy', i5899[4], i5898.m_SecondGlyphAdjustments)
  i5898.m_IgnoreSpacingAdjustments = !!i5899[5]
  return i5898
}

Deserializers["UnityEngine.TextCore.FaceInfo"] = function (request, data, root) {
  var i5900 = root || request.c( 'UnityEngine.TextCore.FaceInfo' )
  var i5901 = data
  i5900.m_FaceIndex = i5901[0]
  i5900.m_FamilyName = i5901[1]
  i5900.m_StyleName = i5901[2]
  i5900.m_PointSize = i5901[3]
  i5900.m_Scale = i5901[4]
  i5900.m_UnitsPerEM = i5901[5]
  i5900.m_LineHeight = i5901[6]
  i5900.m_AscentLine = i5901[7]
  i5900.m_CapLine = i5901[8]
  i5900.m_MeanLine = i5901[9]
  i5900.m_Baseline = i5901[10]
  i5900.m_DescentLine = i5901[11]
  i5900.m_SuperscriptOffset = i5901[12]
  i5900.m_SuperscriptSize = i5901[13]
  i5900.m_SubscriptOffset = i5901[14]
  i5900.m_SubscriptSize = i5901[15]
  i5900.m_UnderlineOffset = i5901[16]
  i5900.m_UnderlineThickness = i5901[17]
  i5900.m_StrikethroughOffset = i5901[18]
  i5900.m_StrikethroughThickness = i5901[19]
  i5900.m_TabWidth = i5901[20]
  return i5900
}

Deserializers["TMPro.TMP_Settings"] = function (request, data, root) {
  var i5902 = root || request.c( 'TMPro.TMP_Settings' )
  var i5903 = data
  i5902.assetVersion = i5903[0]
  i5902.m_TextWrappingMode = i5903[1]
  i5902.m_enableKerning = !!i5903[2]
  var i5905 = i5903[3]
  var i5904 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.TextCore.OTL_FeatureTag')))
  for(var i = 0; i < i5905.length; i += 1) {
    i5904.add(i5905[i + 0]);
  }
  i5902.m_ActiveFontFeatures = i5904
  i5902.m_enableExtraPadding = !!i5903[4]
  i5902.m_enableTintAllSprites = !!i5903[5]
  i5902.m_enableParseEscapeCharacters = !!i5903[6]
  i5902.m_EnableRaycastTarget = !!i5903[7]
  i5902.m_GetFontFeaturesAtRuntime = !!i5903[8]
  i5902.m_missingGlyphCharacter = i5903[9]
  i5902.m_ClearDynamicDataOnBuild = !!i5903[10]
  i5902.m_warningsDisabled = !!i5903[11]
  request.r(i5903[12], i5903[13], 0, i5902, 'm_defaultFontAsset')
  i5902.m_defaultFontAssetPath = i5903[14]
  i5902.m_defaultFontSize = i5903[15]
  i5902.m_defaultAutoSizeMinRatio = i5903[16]
  i5902.m_defaultAutoSizeMaxRatio = i5903[17]
  i5902.m_defaultTextMeshProTextContainerSize = new pc.Vec2( i5903[18], i5903[19] )
  i5902.m_defaultTextMeshProUITextContainerSize = new pc.Vec2( i5903[20], i5903[21] )
  i5902.m_autoSizeTextContainer = !!i5903[22]
  i5902.m_IsTextObjectScaleStatic = !!i5903[23]
  var i5907 = i5903[24]
  var i5906 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_FontAsset')))
  for(var i = 0; i < i5907.length; i += 2) {
  request.r(i5907[i + 0], i5907[i + 1], 1, i5906, '')
  }
  i5902.m_fallbackFontAssets = i5906
  i5902.m_matchMaterialPreset = !!i5903[25]
  i5902.m_HideSubTextObjects = !!i5903[26]
  request.r(i5903[27], i5903[28], 0, i5902, 'm_defaultSpriteAsset')
  i5902.m_defaultSpriteAssetPath = i5903[29]
  i5902.m_enableEmojiSupport = !!i5903[30]
  i5902.m_MissingCharacterSpriteUnicode = i5903[31]
  var i5909 = i5903[32]
  var i5908 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_Asset')))
  for(var i = 0; i < i5909.length; i += 2) {
  request.r(i5909[i + 0], i5909[i + 1], 1, i5908, '')
  }
  i5902.m_EmojiFallbackTextAssets = i5908
  i5902.m_defaultColorGradientPresetsPath = i5903[33]
  request.r(i5903[34], i5903[35], 0, i5902, 'm_defaultStyleSheet')
  i5902.m_StyleSheetsResourcePath = i5903[36]
  request.r(i5903[37], i5903[38], 0, i5902, 'm_leadingCharacters')
  request.r(i5903[39], i5903[40], 0, i5902, 'm_followingCharacters')
  i5902.m_UseModernHangulLineBreakingRules = !!i5903[41]
  return i5902
}

Deserializers["UnityEngine.TextCore.GlyphMetrics"] = function (request, data, root) {
  var i5912 = root || request.c( 'UnityEngine.TextCore.GlyphMetrics' )
  var i5913 = data
  i5912.m_Width = i5913[0]
  i5912.m_Height = i5913[1]
  i5912.m_HorizontalBearingX = i5913[2]
  i5912.m_HorizontalBearingY = i5913[3]
  i5912.m_HorizontalAdvance = i5913[4]
  return i5912
}

Deserializers["UnityEngine.TextCore.LowLevel.GlyphAdjustmentRecord"] = function (request, data, root) {
  var i5914 = root || request.c( 'UnityEngine.TextCore.LowLevel.GlyphAdjustmentRecord' )
  var i5915 = data
  i5914.m_GlyphIndex = i5915[0]
  i5914.m_GlyphValueRecord = request.d('UnityEngine.TextCore.LowLevel.GlyphValueRecord', i5915[1], i5914.m_GlyphValueRecord)
  return i5914
}

Deserializers["UnityEngine.TextCore.LowLevel.GlyphValueRecord"] = function (request, data, root) {
  var i5916 = root || request.c( 'UnityEngine.TextCore.LowLevel.GlyphValueRecord' )
  var i5917 = data
  i5916.m_XPlacement = i5917[0]
  i5916.m_YPlacement = i5917[1]
  i5916.m_XAdvance = i5917[2]
  i5916.m_YAdvance = i5917[3]
  return i5916
}

Deserializers["TMPro.TMP_SpriteAsset"] = function (request, data, root) {
  var i5918 = root || request.c( 'TMPro.TMP_SpriteAsset' )
  var i5919 = data
  request.r(i5919[0], i5919[1], 0, i5918, 'spriteSheet')
  var i5921 = i5919[2]
  var i5920 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_Sprite')))
  for(var i = 0; i < i5921.length; i += 1) {
    i5920.add(request.d('TMPro.TMP_Sprite', i5921[i + 0]));
  }
  i5918.spriteInfoList = i5920
  var i5923 = i5919[3]
  var i5922 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_SpriteAsset')))
  for(var i = 0; i < i5923.length; i += 2) {
  request.r(i5923[i + 0], i5923[i + 1], 1, i5922, '')
  }
  i5918.fallbackSpriteAssets = i5922
  var i5925 = i5919[4]
  var i5924 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_SpriteCharacter')))
  for(var i = 0; i < i5925.length; i += 1) {
    i5924.add(request.d('TMPro.TMP_SpriteCharacter', i5925[i + 0]));
  }
  i5918.m_SpriteCharacterTable = i5924
  var i5927 = i5919[5]
  var i5926 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_SpriteGlyph')))
  for(var i = 0; i < i5927.length; i += 1) {
    i5926.add(request.d('TMPro.TMP_SpriteGlyph', i5927[i + 0]));
  }
  i5918.m_GlyphTable = i5926
  i5918.m_Version = i5919[6]
  i5918.m_FaceInfo = request.d('UnityEngine.TextCore.FaceInfo', i5919[7], i5918.m_FaceInfo)
  request.r(i5919[8], i5919[9], 0, i5918, 'm_Material')
  return i5918
}

Deserializers["TMPro.TMP_Sprite"] = function (request, data, root) {
  var i5930 = root || request.c( 'TMPro.TMP_Sprite' )
  var i5931 = data
  i5930.name = i5931[0]
  i5930.hashCode = i5931[1]
  i5930.unicode = i5931[2]
  i5930.pivot = new pc.Vec2( i5931[3], i5931[4] )
  request.r(i5931[5], i5931[6], 0, i5930, 'sprite')
  i5930.id = i5931[7]
  i5930.x = i5931[8]
  i5930.y = i5931[9]
  i5930.width = i5931[10]
  i5930.height = i5931[11]
  i5930.xOffset = i5931[12]
  i5930.yOffset = i5931[13]
  i5930.xAdvance = i5931[14]
  i5930.scale = i5931[15]
  return i5930
}

Deserializers["TMPro.TMP_SpriteCharacter"] = function (request, data, root) {
  var i5936 = root || request.c( 'TMPro.TMP_SpriteCharacter' )
  var i5937 = data
  i5936.m_Name = i5937[0]
  i5936.m_ElementType = i5937[1]
  i5936.m_Unicode = i5937[2]
  i5936.m_GlyphIndex = i5937[3]
  i5936.m_Scale = i5937[4]
  return i5936
}

Deserializers["TMPro.TMP_SpriteGlyph"] = function (request, data, root) {
  var i5940 = root || request.c( 'TMPro.TMP_SpriteGlyph' )
  var i5941 = data
  request.r(i5941[0], i5941[1], 0, i5940, 'sprite')
  i5940.m_Index = i5941[2]
  i5940.m_Metrics = request.d('UnityEngine.TextCore.GlyphMetrics', i5941[3], i5940.m_Metrics)
  i5940.m_GlyphRect = request.d('UnityEngine.TextCore.GlyphRect', i5941[4], i5940.m_GlyphRect)
  i5940.m_Scale = i5941[5]
  i5940.m_AtlasIndex = i5941[6]
  i5940.m_ClassDefinitionType = i5941[7]
  return i5940
}

Deserializers["TMPro.TMP_StyleSheet"] = function (request, data, root) {
  var i5942 = root || request.c( 'TMPro.TMP_StyleSheet' )
  var i5943 = data
  var i5945 = i5943[0]
  var i5944 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_Style')))
  for(var i = 0; i < i5945.length; i += 1) {
    i5944.add(request.d('TMPro.TMP_Style', i5945[i + 0]));
  }
  i5942.m_StyleList = i5944
  return i5942
}

Deserializers["TMPro.TMP_Style"] = function (request, data, root) {
  var i5948 = root || request.c( 'TMPro.TMP_Style' )
  var i5949 = data
  i5948.m_Name = i5949[0]
  i5948.m_HashCode = i5949[1]
  i5948.m_OpeningDefinition = i5949[2]
  i5948.m_ClosingDefinition = i5949[3]
  i5948.m_OpeningTagArray = i5949[4]
  i5948.m_ClosingTagArray = i5949[5]
  return i5948
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Resources"] = function (request, data, root) {
  var i5950 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Resources' )
  var i5951 = data
  var i5953 = i5951[0]
  var i5952 = []
  for(var i = 0; i < i5953.length; i += 1) {
    i5952.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Resources+File', i5953[i + 0]) );
  }
  i5950.files = i5952
  i5950.componentToPrefabIds = i5951[1]
  return i5950
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Resources+File"] = function (request, data, root) {
  var i5956 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Resources+File' )
  var i5957 = data
  i5956.path = i5957[0]
  request.r(i5957[1], i5957[2], 0, i5956, 'unityObject')
  return i5956
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings"] = function (request, data, root) {
  var i5958 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings' )
  var i5959 = data
  var i5961 = i5959[0]
  var i5960 = []
  for(var i = 0; i < i5961.length; i += 1) {
    i5960.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+ScriptsExecutionOrder', i5961[i + 0]) );
  }
  i5958.scriptsExecutionOrder = i5960
  var i5963 = i5959[1]
  var i5962 = []
  for(var i = 0; i < i5963.length; i += 1) {
    i5962.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+SortingLayer', i5963[i + 0]) );
  }
  i5958.sortingLayers = i5962
  var i5965 = i5959[2]
  var i5964 = []
  for(var i = 0; i < i5965.length; i += 1) {
    i5964.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+CullingLayer', i5965[i + 0]) );
  }
  i5958.cullingLayers = i5964
  i5958.timeSettings = request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+TimeSettings', i5959[3], i5958.timeSettings)
  i5958.physicsSettings = request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings', i5959[4], i5958.physicsSettings)
  i5958.physics2DSettings = request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings', i5959[5], i5958.physics2DSettings)
  i5958.qualitySettings = request.d('Luna.Unity.DTO.UnityEngine.Assets.QualitySettings', i5959[6], i5958.qualitySettings)
  i5958.enableRealtimeShadows = !!i5959[7]
  i5958.enableAutoInstancing = !!i5959[8]
  i5958.enableStaticBatching = !!i5959[9]
  i5958.enableDynamicBatching = !!i5959[10]
  i5958.lightmapEncodingQuality = i5959[11]
  i5958.desiredColorSpace = i5959[12]
  var i5967 = i5959[13]
  var i5966 = []
  for(var i = 0; i < i5967.length; i += 1) {
    i5966.push( i5967[i + 0] );
  }
  i5958.allTags = i5966
  return i5958
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+ScriptsExecutionOrder"] = function (request, data, root) {
  var i5970 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+ScriptsExecutionOrder' )
  var i5971 = data
  i5970.name = i5971[0]
  i5970.value = i5971[1]
  return i5970
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+SortingLayer"] = function (request, data, root) {
  var i5974 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+SortingLayer' )
  var i5975 = data
  i5974.id = i5975[0]
  i5974.name = i5975[1]
  i5974.value = i5975[2]
  return i5974
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+CullingLayer"] = function (request, data, root) {
  var i5978 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+CullingLayer' )
  var i5979 = data
  i5978.id = i5979[0]
  i5978.name = i5979[1]
  return i5978
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+TimeSettings"] = function (request, data, root) {
  var i5980 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+TimeSettings' )
  var i5981 = data
  i5980.fixedDeltaTime = i5981[0]
  i5980.maximumDeltaTime = i5981[1]
  i5980.timeScale = i5981[2]
  i5980.maximumParticleTimestep = i5981[3]
  return i5980
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings"] = function (request, data, root) {
  var i5982 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings' )
  var i5983 = data
  i5982.gravity = new pc.Vec3( i5983[0], i5983[1], i5983[2] )
  i5982.defaultSolverIterations = i5983[3]
  i5982.bounceThreshold = i5983[4]
  i5982.autoSyncTransforms = !!i5983[5]
  i5982.autoSimulation = !!i5983[6]
  var i5985 = i5983[7]
  var i5984 = []
  for(var i = 0; i < i5985.length; i += 1) {
    i5984.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings+CollisionMask', i5985[i + 0]) );
  }
  i5982.collisionMatrix = i5984
  return i5982
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings+CollisionMask"] = function (request, data, root) {
  var i5988 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings+CollisionMask' )
  var i5989 = data
  i5988.enabled = !!i5989[0]
  i5988.layerId = i5989[1]
  i5988.otherLayerId = i5989[2]
  return i5988
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings"] = function (request, data, root) {
  var i5990 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings' )
  var i5991 = data
  request.r(i5991[0], i5991[1], 0, i5990, 'material')
  i5990.gravity = new pc.Vec2( i5991[2], i5991[3] )
  i5990.positionIterations = i5991[4]
  i5990.velocityIterations = i5991[5]
  i5990.velocityThreshold = i5991[6]
  i5990.maxLinearCorrection = i5991[7]
  i5990.maxAngularCorrection = i5991[8]
  i5990.maxTranslationSpeed = i5991[9]
  i5990.maxRotationSpeed = i5991[10]
  i5990.baumgarteScale = i5991[11]
  i5990.baumgarteTOIScale = i5991[12]
  i5990.timeToSleep = i5991[13]
  i5990.linearSleepTolerance = i5991[14]
  i5990.angularSleepTolerance = i5991[15]
  i5990.defaultContactOffset = i5991[16]
  i5990.autoSimulation = !!i5991[17]
  i5990.queriesHitTriggers = !!i5991[18]
  i5990.queriesStartInColliders = !!i5991[19]
  i5990.callbacksOnDisable = !!i5991[20]
  i5990.reuseCollisionCallbacks = !!i5991[21]
  i5990.autoSyncTransforms = !!i5991[22]
  var i5993 = i5991[23]
  var i5992 = []
  for(var i = 0; i < i5993.length; i += 1) {
    i5992.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings+CollisionMask', i5993[i + 0]) );
  }
  i5990.collisionMatrix = i5992
  return i5990
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings+CollisionMask"] = function (request, data, root) {
  var i5996 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings+CollisionMask' )
  var i5997 = data
  i5996.enabled = !!i5997[0]
  i5996.layerId = i5997[1]
  i5996.otherLayerId = i5997[2]
  return i5996
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.QualitySettings"] = function (request, data, root) {
  var i5998 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.QualitySettings' )
  var i5999 = data
  var i6001 = i5999[0]
  var i6000 = []
  for(var i = 0; i < i6001.length; i += 1) {
    i6000.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.QualitySettings', i6001[i + 0]) );
  }
  i5998.qualityLevels = i6000
  var i6003 = i5999[1]
  var i6002 = []
  for(var i = 0; i < i6003.length; i += 1) {
    i6002.push( i6003[i + 0] );
  }
  i5998.names = i6002
  i5998.shadows = i5999[2]
  i5998.anisotropicFiltering = i5999[3]
  i5998.antiAliasing = i5999[4]
  i5998.lodBias = i5999[5]
  i5998.shadowCascades = i5999[6]
  i5998.shadowDistance = i5999[7]
  i5998.shadowmaskMode = i5999[8]
  i5998.shadowProjection = i5999[9]
  i5998.shadowResolution = i5999[10]
  i5998.softParticles = !!i5999[11]
  i5998.softVegetation = !!i5999[12]
  i5998.activeColorSpace = i5999[13]
  i5998.desiredColorSpace = i5999[14]
  i5998.masterTextureLimit = i5999[15]
  i5998.maxQueuedFrames = i5999[16]
  i5998.particleRaycastBudget = i5999[17]
  i5998.pixelLightCount = i5999[18]
  i5998.realtimeReflectionProbes = !!i5999[19]
  i5998.shadowCascade2Split = i5999[20]
  i5998.shadowCascade4Split = new pc.Vec3( i5999[21], i5999[22], i5999[23] )
  i5998.streamingMipmapsActive = !!i5999[24]
  i5998.vSyncCount = i5999[25]
  i5998.asyncUploadBufferSize = i5999[26]
  i5998.asyncUploadTimeSlice = i5999[27]
  i5998.billboardsFaceCameraPosition = !!i5999[28]
  i5998.shadowNearPlaneOffset = i5999[29]
  i5998.streamingMipmapsMemoryBudget = i5999[30]
  i5998.maximumLODLevel = i5999[31]
  i5998.streamingMipmapsAddAllCameras = !!i5999[32]
  i5998.streamingMipmapsMaxLevelReduction = i5999[33]
  i5998.streamingMipmapsRenderersPerFrame = i5999[34]
  i5998.resolutionScalingFixedDPIFactor = i5999[35]
  i5998.streamingMipmapsMaxFileIORequests = i5999[36]
  i5998.currentQualityLevel = i5999[37]
  return i5998
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShapeFrame"] = function (request, data, root) {
  var i6008 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShapeFrame' )
  var i6009 = data
  i6008.weight = i6009[0]
  i6008.vertices = i6009[1]
  i6008.normals = i6009[2]
  i6008.tangents = i6009[3]
  return i6008
}

Deserializers["TMPro.GlyphAnchorPoint"] = function (request, data, root) {
  var i6010 = root || request.c( 'TMPro.GlyphAnchorPoint' )
  var i6011 = data
  i6010.m_XCoordinate = i6011[0]
  i6010.m_YCoordinate = i6011[1]
  return i6010
}

Deserializers["TMPro.MarkPositionAdjustment"] = function (request, data, root) {
  var i6012 = root || request.c( 'TMPro.MarkPositionAdjustment' )
  var i6013 = data
  i6012.m_XPositionAdjustment = i6013[0]
  i6012.m_YPositionAdjustment = i6013[1]
  return i6012
}

Deserializers["TMPro.GlyphValueRecord_Legacy"] = function (request, data, root) {
  var i6014 = root || request.c( 'TMPro.GlyphValueRecord_Legacy' )
  var i6015 = data
  i6014.xPlacement = i6015[0]
  i6014.yPlacement = i6015[1]
  i6014.xAdvance = i6015[2]
  i6014.yAdvance = i6015[3]
  return i6014
}

Deserializers.fields = {"Luna.Unity.DTO.UnityEngine.Assets.Mesh":{"name":0,"halfPrecision":1,"useSimplification":2,"useUInt32IndexFormat":3,"vertexCount":4,"aabb":5,"streams":6,"vertices":7,"subMeshes":8,"bindposes":9,"blendShapes":10},"Luna.Unity.DTO.UnityEngine.Assets.Mesh+SubMesh":{"triangles":0},"Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShape":{"name":0,"frames":1},"Luna.Unity.DTO.UnityEngine.Assets.Material":{"name":0,"shader":1,"renderQueue":3,"enableInstancing":4,"floatParameters":5,"colorParameters":6,"vectorParameters":7,"textureParameters":8,"materialFlags":9},"Luna.Unity.DTO.UnityEngine.Assets.Material+FloatParameter":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Material+ColorParameter":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Material+VectorParameter":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Material+TextureParameter":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Material+MaterialFlag":{"name":0,"enabled":1},"Luna.Unity.DTO.UnityEngine.Textures.Texture2D":{"name":0,"width":1,"height":2,"mipmapCount":3,"anisoLevel":4,"filterMode":5,"hdr":6,"format":7,"wrapMode":8,"alphaIsTransparency":9,"alphaSource":10,"graphicsFormat":11,"sRGBTexture":12,"desiredColorSpace":13,"wrapU":14,"wrapV":15},"Luna.Unity.DTO.UnityEngine.Components.Transform":{"position":0,"scale":3,"rotation":6},"Luna.Unity.DTO.UnityEngine.Components.MeshFilter":{"sharedMesh":0},"Luna.Unity.DTO.UnityEngine.Components.MeshRenderer":{"additionalVertexStreams":0,"enabled":2,"sharedMaterial":3,"sharedMaterials":5,"receiveShadows":6,"shadowCastingMode":7,"sortingLayerID":8,"sortingOrder":9,"lightmapIndex":10,"lightmapSceneIndex":11,"lightmapScaleOffset":12,"lightProbeUsage":16,"reflectionProbeUsage":17},"Luna.Unity.DTO.UnityEngine.Components.MeshCollider":{"sharedMesh":0,"convex":2,"enabled":3,"isTrigger":4,"material":5},"Luna.Unity.DTO.UnityEngine.Scene.GameObject":{"name":0,"tagId":1,"enabled":2,"isStatic":3,"layer":4},"Luna.Unity.DTO.UnityEngine.Components.SphereCollider":{"center":0,"radius":3,"enabled":4,"isTrigger":5,"material":6},"Luna.Unity.DTO.UnityEngine.Components.Rigidbody":{"mass":0,"drag":1,"angularDrag":2,"useGravity":3,"isKinematic":4,"constraints":5,"maxAngularVelocity":6,"collisionDetectionMode":7,"interpolation":8},"Luna.Unity.DTO.UnityEngine.Components.ParticleSystem":{"main":0,"colorBySpeed":1,"colorOverLifetime":2,"emission":3,"rotationBySpeed":4,"rotationOverLifetime":5,"shape":6,"sizeBySpeed":7,"sizeOverLifetime":8,"textureSheetAnimation":9,"velocityOverLifetime":10,"noise":11,"inheritVelocity":12,"forceOverLifetime":13,"limitVelocityOverLifetime":14,"useAutoRandomSeed":15,"randomSeed":16},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.MainModule":{"duration":0,"loop":1,"prewarm":2,"startDelay":3,"startLifetime":4,"startSpeed":5,"startSize3D":6,"startSizeX":7,"startSizeY":8,"startSizeZ":9,"startRotation3D":10,"startRotationX":11,"startRotationY":12,"startRotationZ":13,"startColor":14,"gravityModifier":15,"simulationSpace":16,"customSimulationSpace":17,"simulationSpeed":19,"useUnscaledTime":20,"scalingMode":21,"playOnAwake":22,"maxParticles":23,"emitterVelocityMode":24,"stopAction":25},"Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve":{"mode":0,"curveMin":1,"curveMax":2,"curveMultiplier":3,"constantMin":4,"constantMax":5},"Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxGradient":{"mode":0,"gradientMin":1,"gradientMax":2,"colorMin":3,"colorMax":7},"Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Gradient":{"mode":0,"colorKeys":1,"alphaKeys":2},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ColorBySpeedModule":{"enabled":0,"color":1,"range":2},"Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientColorKey":{"color":0,"time":4},"Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientAlphaKey":{"alpha":0,"time":1},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ColorOverLifetimeModule":{"enabled":0,"color":1},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.EmissionModule":{"enabled":0,"rateOverTime":1,"rateOverDistance":2,"bursts":3},"Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Burst":{"count":0,"cycleCount":1,"minCount":2,"maxCount":3,"repeatInterval":4,"time":5},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.RotationBySpeedModule":{"enabled":0,"x":1,"y":2,"z":3,"separateAxes":4,"range":5},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.RotationOverLifetimeModule":{"enabled":0,"x":1,"y":2,"z":3,"separateAxes":4},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ShapeModule":{"enabled":0,"shapeType":1,"randomDirectionAmount":2,"sphericalDirectionAmount":3,"randomPositionAmount":4,"alignToDirection":5,"radius":6,"radiusMode":7,"radiusSpread":8,"radiusSpeed":9,"radiusThickness":10,"angle":11,"length":12,"boxThickness":13,"meshShapeType":16,"mesh":17,"meshRenderer":19,"skinnedMeshRenderer":21,"useMeshMaterialIndex":23,"meshMaterialIndex":24,"useMeshColors":25,"normalOffset":26,"arc":27,"arcMode":28,"arcSpread":29,"arcSpeed":30,"donutRadius":31,"position":32,"rotation":35,"scale":38},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.SizeBySpeedModule":{"enabled":0,"x":1,"y":2,"z":3,"separateAxes":4,"range":5},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.SizeOverLifetimeModule":{"enabled":0,"x":1,"y":2,"z":3,"separateAxes":4},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.TextureSheetAnimationModule":{"enabled":0,"mode":1,"animation":2,"numTilesX":3,"numTilesY":4,"useRandomRow":5,"frameOverTime":6,"startFrame":7,"cycleCount":8,"rowIndex":9,"flipU":10,"flipV":11,"spriteCount":12,"sprites":13},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.VelocityOverLifetimeModule":{"enabled":0,"x":1,"y":2,"z":3,"radial":4,"speedModifier":5,"space":6,"orbitalX":7,"orbitalY":8,"orbitalZ":9,"orbitalOffsetX":10,"orbitalOffsetY":11,"orbitalOffsetZ":12},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.NoiseModule":{"enabled":0,"separateAxes":1,"strengthX":2,"strengthY":3,"strengthZ":4,"frequency":5,"damping":6,"octaveCount":7,"octaveMultiplier":8,"octaveScale":9,"quality":10,"scrollSpeed":11,"scrollSpeedMultiplier":12,"remapEnabled":13,"remapX":14,"remapY":15,"remapZ":16,"positionAmount":17,"rotationAmount":18,"sizeAmount":19},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.InheritVelocityModule":{"enabled":0,"mode":1,"curve":2},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ForceOverLifetimeModule":{"enabled":0,"x":1,"y":2,"z":3,"space":4,"randomized":5},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.LimitVelocityOverLifetimeModule":{"enabled":0,"limit":1,"limitX":2,"limitY":3,"limitZ":4,"dampen":5,"separateAxes":6,"space":7,"drag":8,"multiplyDragByParticleSize":9,"multiplyDragByParticleVelocity":10},"Luna.Unity.DTO.UnityEngine.Components.ParticleSystemRenderer":{"mesh":0,"meshCount":2,"activeVertexStreamsCount":3,"alignment":4,"renderMode":5,"sortMode":6,"lengthScale":7,"velocityScale":8,"cameraVelocityScale":9,"normalDirection":10,"sortingFudge":11,"minParticleSize":12,"maxParticleSize":13,"pivot":14,"trailMaterial":17,"applyActiveColorSpace":19,"enabled":20,"sharedMaterial":21,"sharedMaterials":23,"receiveShadows":24,"shadowCastingMode":25,"sortingLayerID":26,"sortingOrder":27,"lightmapIndex":28,"lightmapSceneIndex":29,"lightmapScaleOffset":30,"lightProbeUsage":34,"reflectionProbeUsage":35},"Luna.Unity.DTO.UnityEngine.Textures.Cubemap":{"name":0,"atlasId":1,"mipmapCount":2,"hdr":3,"size":4,"anisoLevel":5,"filterMode":6,"rects":7,"wrapU":8,"wrapV":9},"Luna.Unity.DTO.UnityEngine.Scene.Scene":{"name":0,"index":1,"startup":2},"Luna.Unity.DTO.UnityEngine.Components.Camera":{"aspect":0,"orthographic":1,"orthographicSize":2,"backgroundColor":3,"nearClipPlane":7,"farClipPlane":8,"fieldOfView":9,"depth":10,"clearFlags":11,"cullingMask":12,"rect":13,"targetTexture":14,"usePhysicalProperties":16,"focalLength":17,"sensorSize":18,"lensShift":20,"gateFit":22,"commandBufferCount":23,"cameraType":24,"enabled":25},"Luna.Unity.DTO.UnityEngine.Components.Light":{"type":0,"color":1,"cullingMask":5,"intensity":6,"range":7,"spotAngle":8,"shadows":9,"shadowNormalBias":10,"shadowBias":11,"shadowStrength":12,"shadowResolution":13,"lightmapBakeType":14,"renderMode":15,"cookie":16,"cookieSize":18,"shadowNearPlane":19,"enabled":20},"Luna.Unity.DTO.UnityEngine.Components.AudioSource":{"clip":0,"outputAudioMixerGroup":2,"playOnAwake":4,"loop":5,"time":6,"volume":7,"pitch":8,"enabled":9},"Luna.Unity.DTO.UnityEngine.Components.HingeJoint":{"useMotor":0,"useLimits":1,"useSpring":2,"limits":3,"motor":4,"spring":5,"connectedBody":6,"axis":8,"anchor":11,"connectedAnchor":14,"autoConfigureConnectedAnchor":17,"massScale":18,"connectedMassScale":19,"enableCollision":20,"breakForce":21,"breakTorque":22},"Luna.Unity.DTO.UnityEngine.Components.CapsuleCollider":{"center":0,"radius":3,"height":4,"direction":5,"enabled":6,"isTrigger":7,"material":8},"Luna.Unity.DTO.UnityEngine.Components.SkinnedMeshRenderer":{"sharedMesh":0,"bones":2,"updateWhenOffscreen":3,"localBounds":4,"rootBone":5,"blendShapesWeights":7,"enabled":8,"sharedMaterial":9,"sharedMaterials":11,"receiveShadows":12,"shadowCastingMode":13,"sortingLayerID":14,"sortingOrder":15,"lightmapIndex":16,"lightmapSceneIndex":17,"lightmapScaleOffset":18,"lightProbeUsage":22,"reflectionProbeUsage":23},"Luna.Unity.DTO.UnityEngine.Components.SkinnedMeshRenderer+BlendShapeWeight":{"weight":0},"Luna.Unity.DTO.UnityEngine.Components.BoxCollider":{"center":0,"size":3,"enabled":6,"isTrigger":7,"material":8},"Luna.Unity.DTO.UnityEngine.Components.RectTransform":{"pivot":0,"anchorMin":2,"anchorMax":4,"sizeDelta":6,"anchoredPosition3D":8,"rotation":11,"scale":15},"Luna.Unity.DTO.UnityEngine.Components.Canvas":{"planeDistance":0,"referencePixelsPerUnit":1,"isFallbackOverlay":2,"renderMode":3,"renderOrder":4,"sortingLayerName":5,"sortingOrder":6,"scaleFactor":7,"worldCamera":8,"overrideSorting":10,"pixelPerfect":11,"targetDisplay":12,"overridePixelPerfect":13,"enabled":14},"Luna.Unity.DTO.UnityEngine.Components.CanvasRenderer":{"cullTransparentMesh":0},"Luna.Unity.DTO.UnityEngine.Assets.RenderSettings":{"ambientIntensity":0,"reflectionIntensity":1,"ambientMode":2,"ambientLight":3,"ambientSkyColor":7,"ambientGroundColor":11,"ambientEquatorColor":15,"fogColor":19,"fogEndDistance":23,"fogStartDistance":24,"fogDensity":25,"fog":26,"skybox":27,"fogMode":29,"lightmaps":30,"lightProbes":31,"lightmapsMode":32,"mixedBakeMode":33,"environmentLightingMode":34,"ambientProbe":35,"referenceAmbientProbe":36,"useReferenceAmbientProbe":37,"customReflection":38,"defaultReflection":40,"defaultReflectionMode":42,"defaultReflectionResolution":43,"sunLightObjectId":44,"pixelLightCount":45,"defaultReflectionHDR":46,"hasLightDataAsset":47,"hasManualGenerate":48},"Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+Lightmap":{"lightmapColor":0,"lightmapDirection":2},"Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+LightProbes":{"bakedProbes":0,"positions":1,"hullRays":2,"tetrahedra":3,"neighbours":4,"matrices":5},"Luna.Unity.DTO.UnityEngine.Assets.UniversalRenderPipelineAsset":{"AdditionalLightsPerObjectLimit":0,"AdditionalLightsRenderingMode":1,"LightRenderingMode":2,"ColorGradingLutSize":3,"ColorGradingMode":4,"MainLightRenderingMode":5,"MainLightRenderingModeValue":6,"SupportsMainLightShadows":7,"MixedLightingSupported":8,"MsaaQuality":9,"MSAA":10,"OpaqueDownsampling":11,"MainLightShadowmapResolution":12,"MainLightShadowmapResolutionValue":13,"SupportsSoftShadows":14,"SoftShadowQuality":15,"SoftShadowQualityValue":16,"ShadowDistance":17,"ShadowCascadeCount":18,"Cascade2Split":19,"Cascade3Split":20,"Cascade4Split":22,"CascadeBorder":25,"ShadowDepthBias":26,"ShadowNormalBias":27,"RenderScale":28,"RequireDepthTexture":29,"RequireOpaqueTexture":30,"SupportsHDR":31,"SupportsTerrainHoles":32},"Luna.Unity.DTO.UnityEngine.Assets.LightRenderingMode":{"Disabled":0,"PerVertex":1,"PerPixel":2},"Luna.Unity.DTO.UnityEngine.Assets.ColorGradingMode":{"LowDynamicRange":0,"HighDynamicRange":1},"Luna.Unity.DTO.UnityEngine.Assets.MsaaQuality":{"Disabled":0,"_2x":1,"_4x":2,"_8x":3},"Luna.Unity.DTO.UnityEngine.Assets.Downsampling":{"None":0,"_2xBilinear":1,"_4xBox":2,"_4xBilinear":3},"Luna.Unity.DTO.UnityEngine.Assets.ShadowResolution":{"_256":0,"_512":1,"_1024":2,"_2048":3,"_4096":4},"Luna.Unity.DTO.UnityEngine.Assets.SoftShadowQuality":{"UsePipelineSettings":0,"Low":1,"Medium":2,"High":3},"Luna.Unity.DTO.UnityEngine.Assets.PhysicMaterial":{"name":0,"bounciness":1,"dynamicFriction":2,"staticFriction":3,"frictionCombine":4,"bounceCombine":5},"Luna.Unity.DTO.UnityEngine.Assets.Shader":{"ShaderCompilationErrors":0,"name":1,"guid":2,"shaderDefinedKeywords":3,"passes":4,"usePasses":5,"defaultParameterValues":6,"unityFallbackShader":7,"readDepth":9,"hasDepthOnlyPass":10,"isCreatedByShaderGraph":11,"disableBatching":12,"compiled":13},"Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError":{"shaderName":0,"errorMessage":1},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass":{"id":0,"subShaderIndex":1,"name":2,"passType":3,"grabPassTextureName":4,"usePass":5,"zTest":6,"zWrite":7,"culling":8,"blending":9,"alphaBlending":10,"colorWriteMask":11,"offsetUnits":12,"offsetFactor":13,"stencilRef":14,"stencilReadMask":15,"stencilWriteMask":16,"stencilOp":17,"stencilOpFront":18,"stencilOpBack":19,"tags":20,"passDefinedKeywords":21,"passDefinedKeywordGroups":22,"variants":23,"excludedVariants":24,"hasDepthReader":25},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value":{"val":0,"name":1},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending":{"src":0,"dst":1,"op":2},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp":{"pass":0,"fail":1,"zFail":2,"comp":3},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Tag":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+KeywordGroup":{"keywords":0,"hasDiscard":1},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant":{"passId":0,"subShaderIndex":1,"keywords":2,"vertexProgram":3,"fragmentProgram":4,"exportedForWebGl2":5,"readDepth":6},"Luna.Unity.DTO.UnityEngine.Assets.Shader+UsePass":{"shader":0,"pass":2},"Luna.Unity.DTO.UnityEngine.Assets.Shader+DefaultParameterValue":{"name":0,"type":1,"value":2,"textureValue":6,"shaderPropertyFlag":7},"Luna.Unity.DTO.UnityEngine.Textures.Sprite":{"name":0,"texture":1,"aabb":3,"vertices":4,"triangles":5,"textureRect":6,"packedRect":10,"border":14,"transparency":18,"bounds":19,"pixelsPerUnit":20,"textureWidth":21,"textureHeight":22,"nativeSize":23,"pivot":25,"textureRectOffset":27},"Luna.Unity.DTO.UnityEngine.Assets.AudioClip":{"name":0},"Luna.Unity.DTO.UnityEngine.Assets.Font":{"name":0,"ascent":1,"originalLineHeight":2,"fontSize":3,"characterInfo":4,"texture":5,"originalFontSize":7},"Luna.Unity.DTO.UnityEngine.Assets.Font+CharacterInfo":{"index":0,"advance":1,"bearing":2,"glyphWidth":3,"glyphHeight":4,"minX":5,"maxX":6,"minY":7,"maxY":8,"uvBottomLeftX":9,"uvBottomLeftY":10,"uvBottomRightX":11,"uvBottomRightY":12,"uvTopLeftX":13,"uvTopLeftY":14,"uvTopRightX":15,"uvTopRightY":16},"Luna.Unity.DTO.UnityEngine.Assets.TextAsset":{"name":0,"bytes64":1,"data":2},"Luna.Unity.DTO.UnityEngine.Assets.Resources":{"files":0,"componentToPrefabIds":1},"Luna.Unity.DTO.UnityEngine.Assets.Resources+File":{"path":0,"unityObject":1},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings":{"scriptsExecutionOrder":0,"sortingLayers":1,"cullingLayers":2,"timeSettings":3,"physicsSettings":4,"physics2DSettings":5,"qualitySettings":6,"enableRealtimeShadows":7,"enableAutoInstancing":8,"enableStaticBatching":9,"enableDynamicBatching":10,"lightmapEncodingQuality":11,"desiredColorSpace":12,"allTags":13},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+ScriptsExecutionOrder":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+SortingLayer":{"id":0,"name":1,"value":2},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+CullingLayer":{"id":0,"name":1},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+TimeSettings":{"fixedDeltaTime":0,"maximumDeltaTime":1,"timeScale":2,"maximumParticleTimestep":3},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings":{"gravity":0,"defaultSolverIterations":3,"bounceThreshold":4,"autoSyncTransforms":5,"autoSimulation":6,"collisionMatrix":7},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings+CollisionMask":{"enabled":0,"layerId":1,"otherLayerId":2},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings":{"material":0,"gravity":2,"positionIterations":4,"velocityIterations":5,"velocityThreshold":6,"maxLinearCorrection":7,"maxAngularCorrection":8,"maxTranslationSpeed":9,"maxRotationSpeed":10,"baumgarteScale":11,"baumgarteTOIScale":12,"timeToSleep":13,"linearSleepTolerance":14,"angularSleepTolerance":15,"defaultContactOffset":16,"autoSimulation":17,"queriesHitTriggers":18,"queriesStartInColliders":19,"callbacksOnDisable":20,"reuseCollisionCallbacks":21,"autoSyncTransforms":22,"collisionMatrix":23},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings+CollisionMask":{"enabled":0,"layerId":1,"otherLayerId":2},"Luna.Unity.DTO.UnityEngine.Assets.QualitySettings":{"qualityLevels":0,"names":1,"shadows":2,"anisotropicFiltering":3,"antiAliasing":4,"lodBias":5,"shadowCascades":6,"shadowDistance":7,"shadowmaskMode":8,"shadowProjection":9,"shadowResolution":10,"softParticles":11,"softVegetation":12,"activeColorSpace":13,"desiredColorSpace":14,"masterTextureLimit":15,"maxQueuedFrames":16,"particleRaycastBudget":17,"pixelLightCount":18,"realtimeReflectionProbes":19,"shadowCascade2Split":20,"shadowCascade4Split":21,"streamingMipmapsActive":24,"vSyncCount":25,"asyncUploadBufferSize":26,"asyncUploadTimeSlice":27,"billboardsFaceCameraPosition":28,"shadowNearPlaneOffset":29,"streamingMipmapsMemoryBudget":30,"maximumLODLevel":31,"streamingMipmapsAddAllCameras":32,"streamingMipmapsMaxLevelReduction":33,"streamingMipmapsRenderersPerFrame":34,"resolutionScalingFixedDPIFactor":35,"streamingMipmapsMaxFileIORequests":36,"currentQualityLevel":37},"Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShapeFrame":{"weight":0,"vertices":1,"normals":2,"tangents":3}}

Deserializers.requiredComponents = {"100":[101],"102":[101],"103":[101],"104":[101],"105":[101],"106":[101],"26":[27],"107":[14],"108":[9],"109":[9],"110":[9],"111":[9],"23":[9],"112":[9],"113":[114],"115":[114],"116":[114],"117":[114],"118":[114],"119":[114],"120":[114],"121":[114],"122":[114],"123":[114],"124":[114],"125":[114],"126":[114],"127":[14],"128":[5],"129":[130],"131":[130],"33":[32],"132":[46],"133":[33],"70":[32],"134":[14],"16":[14],"18":[17],"135":[32],"136":[5,32],"39":[32,37],"137":[32],"138":[37,32],"139":[5],"140":[37,32],"141":[32],"142":[143],"144":[143],"145":[143],"146":[32],"147":[32],"36":[33],"38":[37,32],"148":[32],"35":[33],"51":[32],"149":[32],"45":[32],"150":[32],"56":[32],"151":[32],"42":[32],"59":[32],"152":[32],"153":[37,32],"154":[32],"58":[32],"55":[32],"155":[32],"54":[37,32],"63":[32],"156":[46],"157":[46],"47":[46],"158":[46],"159":[14],"160":[14]}

Deserializers.types = ["UnityEngine.Shader","UnityEngine.Texture2D","UnityEngine.Transform","UnityEngine.MeshFilter","UnityEngine.Mesh","UnityEngine.MeshRenderer","UnityEngine.Material","UnityEngine.MeshCollider","UnityEngine.SphereCollider","UnityEngine.Rigidbody","UnityEngine.MonoBehaviour","BallBehavior","UnityEngine.ParticleSystem","UnityEngine.ParticleSystemRenderer","UnityEngine.Camera","UnityEngine.AudioListener","UnityEngine.Rendering.Universal.UniversalAdditionalCameraData","UnityEngine.Light","UnityEngine.Rendering.Universal.UniversalAdditionalLightData","UnityEngine.Rendering.Volume","UnityEngine.Rendering.VolumeProfile","UnityEngine.AudioSource","UnityEngine.AudioClip","UnityEngine.HingeJoint","BasketBehavior","UnityEngine.CapsuleCollider","UnityEngine.Cloth","UnityEngine.SkinnedMeshRenderer","UnityEngine.BoxCollider","UnityEngine.PhysicsMaterial","InputManager","UnityEngine.GameObject","UnityEngine.RectTransform","UnityEngine.Canvas","UnityEngine.EventSystems.UIBehaviour","UnityEngine.UI.CanvasScaler","UnityEngine.UI.GraphicRaycaster","UnityEngine.CanvasRenderer","UnityEngine.UI.Image","TMPro.TextMeshProUGUI","TMPro.TMP_FontAsset","UnityEngine.Sprite","UnityEngine.UI.VerticalLayoutGroup","UnityEngine.UI.Button","GameManager","UnityEngine.UI.HorizontalLayoutGroup","UnityEngine.EventSystems.EventSystem","UnityEngine.EventSystems.StandaloneInputModule","LunaGameManager","UnityEngine.Cubemap","UnityEngine.Rendering.UI.DebugUIHandlerCanvas","UnityEngine.UI.ContentSizeFitter","UnityEngine.Rendering.UI.DebugUIHandlerContainer","UnityEngine.Rendering.UI.DebugUIHandlerPanel","UnityEngine.UI.Text","UnityEngine.UI.ScrollRect","UnityEngine.UI.LayoutElement","UnityEngine.Font","UnityEngine.UI.Scrollbar","UnityEngine.UI.Mask","UnityEngine.EventSystems.EventTrigger","UnityEngine.Rendering.UI.DebugUIHandlerValue","UnityEngine.Rendering.UI.DebugUIHandlerToggle","UnityEngine.UI.Toggle","UnityEngine.Rendering.UI.DebugUIHandlerIntField","UnityEngine.Rendering.UI.DebugUIHandlerUIntField","UnityEngine.Rendering.UI.DebugUIHandlerFloatField","UnityEngine.Rendering.UI.DebugUIHandlerEnumField","UnityEngine.Rendering.UI.DebugUIHandlerButton","UnityEngine.Rendering.UI.DebugUIHandlerFoldout","UnityEngine.Rendering.UI.UIFoldout","UnityEngine.Rendering.UI.DebugUIHandlerColor","UnityEngine.Rendering.UI.DebugUIHandlerIndirectFloatField","UnityEngine.Rendering.UI.DebugUIHandlerVector2","UnityEngine.Rendering.UI.DebugUIHandlerVector3","UnityEngine.Rendering.UI.DebugUIHandlerVector4","UnityEngine.Rendering.UI.DebugUIHandlerVBox","UnityEngine.Rendering.UI.DebugUIHandlerHBox","UnityEngine.Rendering.UI.DebugUIHandlerGroup","UnityEngine.Rendering.UI.DebugUIHandlerBitField","UnityEngine.Rendering.UI.DebugUIHandlerIndirectToggle","UnityEngine.Rendering.UI.DebugUIHandlerToggleHistory","UnityEngine.Rendering.UI.DebugUIHandlerEnumHistory","UnityEngine.Rendering.UI.DebugUIHandlerRow","UnityEngine.Rendering.UI.DebugUIHandlerMessageBox","UnityEngine.Rendering.UI.DebugUIHandlerProgressBar","UnityEngine.Rendering.UI.DebugUIHandlerValueTuple","UnityEngine.Rendering.UI.DebugUIHandlerObject","UnityEngine.Rendering.UI.DebugUIHandlerObjectList","UnityEngine.Rendering.UI.DebugUIHandlerObjectPopupField","UnityEngine.Rendering.UI.DebugUIHandlerRenderingLayerField","UnityEngine.Rendering.UI.DebugUIHandlerPersistentCanvas","UnityEngine.Rendering.Universal.Tonemapping","UnityEngine.Rendering.Universal.Bloom","UnityEngine.Rendering.Universal.MotionBlur","UnityEngine.Rendering.Universal.Vignette","TMPro.TMP_Settings","TMPro.TMP_SpriteAsset","TMPro.TMP_StyleSheet","UnityEngine.TextAsset","UnityEngine.AudioLowPassFilter","UnityEngine.AudioBehaviour","UnityEngine.AudioHighPassFilter","UnityEngine.AudioReverbFilter","UnityEngine.AudioDistortionFilter","UnityEngine.AudioEchoFilter","UnityEngine.AudioChorusFilter","UnityEngine.FlareLayer","UnityEngine.CharacterJoint","UnityEngine.ConfigurableJoint","UnityEngine.ConstantForce","UnityEngine.FixedJoint","UnityEngine.SpringJoint","UnityEngine.CompositeCollider2D","UnityEngine.Rigidbody2D","UnityEngine.Joint2D","UnityEngine.AnchoredJoint2D","UnityEngine.SpringJoint2D","UnityEngine.DistanceJoint2D","UnityEngine.FrictionJoint2D","UnityEngine.HingeJoint2D","UnityEngine.RelativeJoint2D","UnityEngine.SliderJoint2D","UnityEngine.TargetJoint2D","UnityEngine.FixedJoint2D","UnityEngine.WheelJoint2D","UnityEngine.ConstantForce2D","UnityEngine.StreamingController","UnityEngine.TextMesh","UnityEngine.Tilemaps.TilemapRenderer","UnityEngine.Tilemaps.Tilemap","UnityEngine.Tilemaps.TilemapCollider2D","UnityEngine.InputSystem.UI.InputSystemUIInputModule","UnityEngine.InputSystem.UI.TrackedDeviceRaycaster","UnityEngine.Rendering.Universal.PixelPerfectCamera","TMPro.TextContainer","TMPro.TextMeshPro","TMPro.TMP_Dropdown","TMPro.TMP_SelectionCaret","TMPro.TMP_SubMesh","TMPro.TMP_SubMeshUI","TMPro.TMP_Text","Unity.VisualScripting.SceneVariables","Unity.VisualScripting.Variables","Unity.VisualScripting.ScriptMachine","Unity.VisualScripting.StateMachine","UnityEngine.UI.Dropdown","UnityEngine.UI.Graphic","UnityEngine.UI.AspectRatioFitter","UnityEngine.UI.GridLayoutGroup","UnityEngine.UI.HorizontalOrVerticalLayoutGroup","UnityEngine.UI.LayoutGroup","UnityEngine.UI.MaskableGraphic","UnityEngine.UI.RawImage","UnityEngine.UI.RectMask2D","UnityEngine.UI.Slider","UnityEngine.EventSystems.BaseInputModule","UnityEngine.EventSystems.PointerInputModule","UnityEngine.EventSystems.TouchInputModule","UnityEngine.EventSystems.Physics2DRaycaster","UnityEngine.EventSystems.PhysicsRaycaster"]

Deserializers.unityVersion = "6000.0.60f1";

Deserializers.productName = "INDIEZ_PerformanceTest";

Deserializers.lunaInitializationTime = "11/25/2025 03:49:18";

Deserializers.lunaDaysRunning = "8.4";

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

Deserializers.runtimeAnalysisExcludedMethodsCount = "4074";

Deserializers.runtimeAnalysisExcludedModules = "physics2d, reflection, prefabs, mecanim-wasm";

Deserializers.isRuntimeAnalysisEnabledForShaders = "True";

Deserializers.isRealtimeShadowsEnabled = "False";

Deserializers.isReferenceAmbientProbeBaked = "False";

Deserializers.isLunaCompilerV2Used = "False";

Deserializers.companyName = "DefaultCompany";

Deserializers.buildPlatform = "Android";

Deserializers.applicationIdentifier = "com.UnityTechnologies.com.unity.template.urpblank";

Deserializers.disableAntiAliasing = true;

Deserializers.graphicsConstraint = 24;

Deserializers.linearColorSpace = true;

Deserializers.buildID = "514305b4-831b-49f2-9d00-5059815b6898";

Deserializers.runtimeInitializeOnLoadInfos = [[["UnityEngine","Rendering","DebugUpdater","RuntimeInit"],["UnityEngine","Experimental","Rendering","ScriptableRuntimeReflectionSystemSettings","ScriptingDirtyReflectionSystemInstance"]],[["Unity","VisualScripting","RuntimeVSUsageUtility","RuntimeInitializeOnLoadBeforeSceneLoad"],["UnityEngine","InputSystem","InputSystem","RunInitialUpdate"],["Unity","AI","Navigation","NavMeshModifierVolume","ClearNavMeshModifiers"],["Unity","AI","Navigation","NavMeshLink","ClearTrackedList"],["Unity","AI","Navigation","NavMeshSurface","ClearNavMeshSurfaces"],["Unity","AI","Navigation","NavMeshModifier","ClearNavMeshModifiers"],["UnityEngine","AI","NavMesh","ClearPreUpdateListeners"]],[["$BurstDirectCallInitializer","Initialize"],["$BurstDirectCallInitializer","Initialize"],["$BurstDirectCallInitializer","Initialize"],["$BurstDirectCallInitializer","Initialize"]],[["UnityEngine","Experimental","Rendering","XRSystem","XRSystemInit"]],[["UnityEngine","InputSystem","Plugins","InputForUI","InputSystemProvider","Bootstrap"],["UnityEngine","InputSystem","UI","InputSystemUIInputModule","ResetDefaultActions"],["UnityEngine","InputSystem","InputSystem","RunInitializeInPlayer"]]];

Deserializers.typeNameToIdMap = function(){ var i = 0; return Deserializers.types.reduce( function( res, item ) { res[ item ] = i++; return res; }, {} ) }()

