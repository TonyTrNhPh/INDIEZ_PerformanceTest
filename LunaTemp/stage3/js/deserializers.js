var Deserializers = {}
Deserializers["UnityEngine.JointSpring"] = function (request, data, root) {
  var i652 = root || request.c( 'UnityEngine.JointSpring' )
  var i653 = data
  i652.spring = i653[0]
  i652.damper = i653[1]
  i652.targetPosition = i653[2]
  return i652
}

Deserializers["UnityEngine.JointMotor"] = function (request, data, root) {
  var i654 = root || request.c( 'UnityEngine.JointMotor' )
  var i655 = data
  i654.m_TargetVelocity = i655[0]
  i654.m_Force = i655[1]
  i654.m_FreeSpin = i655[2]
  return i654
}

Deserializers["UnityEngine.JointLimits"] = function (request, data, root) {
  var i656 = root || request.c( 'UnityEngine.JointLimits' )
  var i657 = data
  i656.m_Min = i657[0]
  i656.m_Max = i657[1]
  i656.m_Bounciness = i657[2]
  i656.m_BounceMinVelocity = i657[3]
  i656.m_ContactDistance = i657[4]
  i656.minBounce = i657[5]
  i656.maxBounce = i657[6]
  return i656
}

Deserializers["UnityEngine.JointDrive"] = function (request, data, root) {
  var i658 = root || request.c( 'UnityEngine.JointDrive' )
  var i659 = data
  i658.m_PositionSpring = i659[0]
  i658.m_PositionDamper = i659[1]
  i658.m_MaximumForce = i659[2]
  i658.m_UseAcceleration = i659[3]
  return i658
}

Deserializers["UnityEngine.SoftJointLimitSpring"] = function (request, data, root) {
  var i660 = root || request.c( 'UnityEngine.SoftJointLimitSpring' )
  var i661 = data
  i660.m_Spring = i661[0]
  i660.m_Damper = i661[1]
  return i660
}

Deserializers["UnityEngine.SoftJointLimit"] = function (request, data, root) {
  var i662 = root || request.c( 'UnityEngine.SoftJointLimit' )
  var i663 = data
  i662.m_Limit = i663[0]
  i662.m_Bounciness = i663[1]
  i662.m_ContactDistance = i663[2]
  return i662
}

Deserializers["UnityEngine.WheelFrictionCurve"] = function (request, data, root) {
  var i664 = root || request.c( 'UnityEngine.WheelFrictionCurve' )
  var i665 = data
  i664.m_ExtremumSlip = i665[0]
  i664.m_ExtremumValue = i665[1]
  i664.m_AsymptoteSlip = i665[2]
  i664.m_AsymptoteValue = i665[3]
  i664.m_Stiffness = i665[4]
  return i664
}

Deserializers["UnityEngine.JointAngleLimits2D"] = function (request, data, root) {
  var i666 = root || request.c( 'UnityEngine.JointAngleLimits2D' )
  var i667 = data
  i666.m_LowerAngle = i667[0]
  i666.m_UpperAngle = i667[1]
  return i666
}

Deserializers["UnityEngine.JointMotor2D"] = function (request, data, root) {
  var i668 = root || request.c( 'UnityEngine.JointMotor2D' )
  var i669 = data
  i668.m_MotorSpeed = i669[0]
  i668.m_MaximumMotorTorque = i669[1]
  return i668
}

Deserializers["UnityEngine.JointSuspension2D"] = function (request, data, root) {
  var i670 = root || request.c( 'UnityEngine.JointSuspension2D' )
  var i671 = data
  i670.m_DampingRatio = i671[0]
  i670.m_Frequency = i671[1]
  i670.m_Angle = i671[2]
  return i670
}

Deserializers["UnityEngine.JointTranslationLimits2D"] = function (request, data, root) {
  var i672 = root || request.c( 'UnityEngine.JointTranslationLimits2D' )
  var i673 = data
  i672.m_LowerTranslation = i673[0]
  i672.m_UpperTranslation = i673[1]
  return i672
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Mesh"] = function (request, data, root) {
  var i674 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Mesh' )
  var i675 = data
  i674.name = i675[0]
  i674.halfPrecision = !!i675[1]
  i674.useSimplification = !!i675[2]
  i674.useUInt32IndexFormat = !!i675[3]
  i674.vertexCount = i675[4]
  i674.aabb = i675[5]
  var i677 = i675[6]
  var i676 = []
  for(var i = 0; i < i677.length; i += 1) {
    i676.push( !!i677[i + 0] );
  }
  i674.streams = i676
  i674.vertices = i675[7]
  var i679 = i675[8]
  var i678 = []
  for(var i = 0; i < i679.length; i += 1) {
    i678.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Mesh+SubMesh', i679[i + 0]) );
  }
  i674.subMeshes = i678
  var i681 = i675[9]
  var i680 = []
  for(var i = 0; i < i681.length; i += 16) {
    i680.push( new pc.Mat4().setData(i681[i + 0], i681[i + 1], i681[i + 2], i681[i + 3],  i681[i + 4], i681[i + 5], i681[i + 6], i681[i + 7],  i681[i + 8], i681[i + 9], i681[i + 10], i681[i + 11],  i681[i + 12], i681[i + 13], i681[i + 14], i681[i + 15]) );
  }
  i674.bindposes = i680
  var i683 = i675[10]
  var i682 = []
  for(var i = 0; i < i683.length; i += 1) {
    i682.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShape', i683[i + 0]) );
  }
  i674.blendShapes = i682
  return i674
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Mesh+SubMesh"] = function (request, data, root) {
  var i688 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Mesh+SubMesh' )
  var i689 = data
  i688.triangles = i689[0]
  return i688
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShape"] = function (request, data, root) {
  var i694 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShape' )
  var i695 = data
  i694.name = i695[0]
  var i697 = i695[1]
  var i696 = []
  for(var i = 0; i < i697.length; i += 1) {
    i696.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShapeFrame', i697[i + 0]) );
  }
  i694.frames = i696
  return i694
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material"] = function (request, data, root) {
  var i698 = root || new pc.UnityMaterial()
  var i699 = data
  i698.name = i699[0]
  request.r(i699[1], i699[2], 0, i698, 'shader')
  i698.renderQueue = i699[3]
  i698.enableInstancing = !!i699[4]
  var i701 = i699[5]
  var i700 = []
  for(var i = 0; i < i701.length; i += 1) {
    i700.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+FloatParameter', i701[i + 0]) );
  }
  i698.floatParameters = i700
  var i703 = i699[6]
  var i702 = []
  for(var i = 0; i < i703.length; i += 1) {
    i702.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+ColorParameter', i703[i + 0]) );
  }
  i698.colorParameters = i702
  var i705 = i699[7]
  var i704 = []
  for(var i = 0; i < i705.length; i += 1) {
    i704.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+VectorParameter', i705[i + 0]) );
  }
  i698.vectorParameters = i704
  var i707 = i699[8]
  var i706 = []
  for(var i = 0; i < i707.length; i += 1) {
    i706.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+TextureParameter', i707[i + 0]) );
  }
  i698.textureParameters = i706
  var i709 = i699[9]
  var i708 = []
  for(var i = 0; i < i709.length; i += 1) {
    i708.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+MaterialFlag', i709[i + 0]) );
  }
  i698.materialFlags = i708
  return i698
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+FloatParameter"] = function (request, data, root) {
  var i712 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+FloatParameter' )
  var i713 = data
  i712.name = i713[0]
  i712.value = i713[1]
  return i712
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+ColorParameter"] = function (request, data, root) {
  var i716 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+ColorParameter' )
  var i717 = data
  i716.name = i717[0]
  i716.value = new pc.Color(i717[1], i717[2], i717[3], i717[4])
  return i716
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+VectorParameter"] = function (request, data, root) {
  var i720 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+VectorParameter' )
  var i721 = data
  i720.name = i721[0]
  i720.value = new pc.Vec4( i721[1], i721[2], i721[3], i721[4] )
  return i720
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+TextureParameter"] = function (request, data, root) {
  var i724 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+TextureParameter' )
  var i725 = data
  i724.name = i725[0]
  request.r(i725[1], i725[2], 0, i724, 'value')
  return i724
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+MaterialFlag"] = function (request, data, root) {
  var i728 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+MaterialFlag' )
  var i729 = data
  i728.name = i729[0]
  i728.enabled = !!i729[1]
  return i728
}

Deserializers["Luna.Unity.DTO.UnityEngine.Textures.Texture2D"] = function (request, data, root) {
  var i730 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Textures.Texture2D' )
  var i731 = data
  i730.name = i731[0]
  i730.width = i731[1]
  i730.height = i731[2]
  i730.mipmapCount = i731[3]
  i730.anisoLevel = i731[4]
  i730.filterMode = i731[5]
  i730.hdr = !!i731[6]
  i730.format = i731[7]
  i730.wrapMode = i731[8]
  i730.alphaIsTransparency = !!i731[9]
  i730.alphaSource = i731[10]
  i730.graphicsFormat = i731[11]
  i730.sRGBTexture = !!i731[12]
  i730.desiredColorSpace = i731[13]
  i730.wrapU = i731[14]
  i730.wrapV = i731[15]
  return i730
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Transform"] = function (request, data, root) {
  var i732 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Transform' )
  var i733 = data
  i732.position = new pc.Vec3( i733[0], i733[1], i733[2] )
  i732.scale = new pc.Vec3( i733[3], i733[4], i733[5] )
  i732.rotation = new pc.Quat(i733[6], i733[7], i733[8], i733[9])
  return i732
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.MeshFilter"] = function (request, data, root) {
  var i734 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.MeshFilter' )
  var i735 = data
  request.r(i735[0], i735[1], 0, i734, 'sharedMesh')
  return i734
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.MeshRenderer"] = function (request, data, root) {
  var i736 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.MeshRenderer' )
  var i737 = data
  request.r(i737[0], i737[1], 0, i736, 'additionalVertexStreams')
  i736.enabled = !!i737[2]
  request.r(i737[3], i737[4], 0, i736, 'sharedMaterial')
  var i739 = i737[5]
  var i738 = []
  for(var i = 0; i < i739.length; i += 2) {
  request.r(i739[i + 0], i739[i + 1], 2, i738, '')
  }
  i736.sharedMaterials = i738
  i736.receiveShadows = !!i737[6]
  i736.shadowCastingMode = i737[7]
  i736.sortingLayerID = i737[8]
  i736.sortingOrder = i737[9]
  i736.lightmapIndex = i737[10]
  i736.lightmapSceneIndex = i737[11]
  i736.lightmapScaleOffset = new pc.Vec4( i737[12], i737[13], i737[14], i737[15] )
  i736.lightProbeUsage = i737[16]
  i736.reflectionProbeUsage = i737[17]
  return i736
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.MeshCollider"] = function (request, data, root) {
  var i742 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.MeshCollider' )
  var i743 = data
  request.r(i743[0], i743[1], 0, i742, 'sharedMesh')
  i742.convex = !!i743[2]
  i742.enabled = !!i743[3]
  i742.isTrigger = !!i743[4]
  request.r(i743[5], i743[6], 0, i742, 'material')
  return i742
}

Deserializers["Luna.Unity.DTO.UnityEngine.Scene.GameObject"] = function (request, data, root) {
  var i744 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Scene.GameObject' )
  var i745 = data
  i744.name = i745[0]
  i744.tagId = i745[1]
  i744.enabled = !!i745[2]
  i744.isStatic = !!i745[3]
  i744.layer = i745[4]
  return i744
}

Deserializers["Luna.Unity.DTO.UnityEngine.Textures.RenderTexture"] = function (request, data, root) {
  var i746 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Textures.RenderTexture' )
  var i747 = data
  i746.name = i747[0]
  i746.width = i747[1]
  i746.height = i747[2]
  i746.anisoLevel = i747[3]
  i746.filterMode = i747[4]
  i746.hdr = !!i747[5]
  i746.colorFormat = i747[6]
  i746.depthStencilFormat = i747[7]
  i746.renderTextureFormat = i747[8]
  i746.depth = i747[9]
  i746.wrapU = i747[10]
  i746.wrapV = i747[11]
  return i746
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.SphereCollider"] = function (request, data, root) {
  var i748 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.SphereCollider' )
  var i749 = data
  i748.center = new pc.Vec3( i749[0], i749[1], i749[2] )
  i748.radius = i749[3]
  i748.enabled = !!i749[4]
  i748.isTrigger = !!i749[5]
  request.r(i749[6], i749[7], 0, i748, 'material')
  return i748
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Rigidbody"] = function (request, data, root) {
  var i750 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Rigidbody' )
  var i751 = data
  i750.mass = i751[0]
  i750.drag = i751[1]
  i750.angularDrag = i751[2]
  i750.useGravity = !!i751[3]
  i750.isKinematic = !!i751[4]
  i750.constraints = i751[5]
  i750.maxAngularVelocity = i751[6]
  i750.collisionDetectionMode = i751[7]
  i750.interpolation = i751[8]
  return i750
}

Deserializers["BallBehavior"] = function (request, data, root) {
  var i752 = root || request.c( 'BallBehavior' )
  var i753 = data
  request.r(i753[0], i753[1], 0, i752, 'ballEffect')
  i752.ballSpeed = i753[2]
  request.r(i753[3], i753[4], 0, i752, 'dunkTriggerBottom')
  request.r(i753[5], i753[6], 0, i752, 'dunkTriggerTop')
  request.r(i753[7], i753[8], 0, i752, 'basketRingTrigger')
  return i752
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.ParticleSystem"] = function (request, data, root) {
  var i754 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.ParticleSystem' )
  var i755 = data
  i754.main = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.MainModule', i755[0], i754.main)
  i754.colorBySpeed = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ColorBySpeedModule', i755[1], i754.colorBySpeed)
  i754.colorOverLifetime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ColorOverLifetimeModule', i755[2], i754.colorOverLifetime)
  i754.emission = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.EmissionModule', i755[3], i754.emission)
  i754.rotationBySpeed = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.RotationBySpeedModule', i755[4], i754.rotationBySpeed)
  i754.rotationOverLifetime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.RotationOverLifetimeModule', i755[5], i754.rotationOverLifetime)
  i754.shape = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ShapeModule', i755[6], i754.shape)
  i754.sizeBySpeed = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.SizeBySpeedModule', i755[7], i754.sizeBySpeed)
  i754.sizeOverLifetime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.SizeOverLifetimeModule', i755[8], i754.sizeOverLifetime)
  i754.textureSheetAnimation = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.TextureSheetAnimationModule', i755[9], i754.textureSheetAnimation)
  i754.velocityOverLifetime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.VelocityOverLifetimeModule', i755[10], i754.velocityOverLifetime)
  i754.noise = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.NoiseModule', i755[11], i754.noise)
  i754.inheritVelocity = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.InheritVelocityModule', i755[12], i754.inheritVelocity)
  i754.forceOverLifetime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ForceOverLifetimeModule', i755[13], i754.forceOverLifetime)
  i754.limitVelocityOverLifetime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.LimitVelocityOverLifetimeModule', i755[14], i754.limitVelocityOverLifetime)
  i754.useAutoRandomSeed = !!i755[15]
  i754.randomSeed = i755[16]
  return i754
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.MainModule"] = function (request, data, root) {
  var i756 = root || new pc.ParticleSystemMain()
  var i757 = data
  i756.duration = i757[0]
  i756.loop = !!i757[1]
  i756.prewarm = !!i757[2]
  i756.startDelay = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i757[3], i756.startDelay)
  i756.startLifetime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i757[4], i756.startLifetime)
  i756.startSpeed = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i757[5], i756.startSpeed)
  i756.startSize3D = !!i757[6]
  i756.startSizeX = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i757[7], i756.startSizeX)
  i756.startSizeY = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i757[8], i756.startSizeY)
  i756.startSizeZ = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i757[9], i756.startSizeZ)
  i756.startRotation3D = !!i757[10]
  i756.startRotationX = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i757[11], i756.startRotationX)
  i756.startRotationY = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i757[12], i756.startRotationY)
  i756.startRotationZ = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i757[13], i756.startRotationZ)
  i756.startColor = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxGradient', i757[14], i756.startColor)
  i756.gravityModifier = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i757[15], i756.gravityModifier)
  i756.simulationSpace = i757[16]
  request.r(i757[17], i757[18], 0, i756, 'customSimulationSpace')
  i756.simulationSpeed = i757[19]
  i756.useUnscaledTime = !!i757[20]
  i756.scalingMode = i757[21]
  i756.playOnAwake = !!i757[22]
  i756.maxParticles = i757[23]
  i756.emitterVelocityMode = i757[24]
  i756.stopAction = i757[25]
  return i756
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve"] = function (request, data, root) {
  var i758 = root || new pc.MinMaxCurve()
  var i759 = data
  i758.mode = i759[0]
  i758.curveMin = new pc.AnimationCurve( { keys_flow: i759[1] } )
  i758.curveMax = new pc.AnimationCurve( { keys_flow: i759[2] } )
  i758.curveMultiplier = i759[3]
  i758.constantMin = i759[4]
  i758.constantMax = i759[5]
  return i758
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxGradient"] = function (request, data, root) {
  var i760 = root || new pc.MinMaxGradient()
  var i761 = data
  i760.mode = i761[0]
  i760.gradientMin = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Gradient', i761[1], i760.gradientMin)
  i760.gradientMax = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Gradient', i761[2], i760.gradientMax)
  i760.colorMin = new pc.Color(i761[3], i761[4], i761[5], i761[6])
  i760.colorMax = new pc.Color(i761[7], i761[8], i761[9], i761[10])
  return i760
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Gradient"] = function (request, data, root) {
  var i762 = root || request.c( 'Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Gradient' )
  var i763 = data
  i762.mode = i763[0]
  var i765 = i763[1]
  var i764 = []
  for(var i = 0; i < i765.length; i += 1) {
    i764.push( request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientColorKey', i765[i + 0]) );
  }
  i762.colorKeys = i764
  var i767 = i763[2]
  var i766 = []
  for(var i = 0; i < i767.length; i += 1) {
    i766.push( request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientAlphaKey', i767[i + 0]) );
  }
  i762.alphaKeys = i766
  return i762
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ColorBySpeedModule"] = function (request, data, root) {
  var i768 = root || new pc.ParticleSystemColorBySpeed()
  var i769 = data
  i768.enabled = !!i769[0]
  i768.color = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxGradient', i769[1], i768.color)
  i768.range = new pc.Vec2( i769[2], i769[3] )
  return i768
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientColorKey"] = function (request, data, root) {
  var i772 = root || request.c( 'Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientColorKey' )
  var i773 = data
  i772.color = new pc.Color(i773[0], i773[1], i773[2], i773[3])
  i772.time = i773[4]
  return i772
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientAlphaKey"] = function (request, data, root) {
  var i776 = root || request.c( 'Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientAlphaKey' )
  var i777 = data
  i776.alpha = i777[0]
  i776.time = i777[1]
  return i776
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ColorOverLifetimeModule"] = function (request, data, root) {
  var i778 = root || new pc.ParticleSystemColorOverLifetime()
  var i779 = data
  i778.enabled = !!i779[0]
  i778.color = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxGradient', i779[1], i778.color)
  return i778
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.EmissionModule"] = function (request, data, root) {
  var i780 = root || new pc.ParticleSystemEmitter()
  var i781 = data
  i780.enabled = !!i781[0]
  i780.rateOverTime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i781[1], i780.rateOverTime)
  i780.rateOverDistance = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i781[2], i780.rateOverDistance)
  var i783 = i781[3]
  var i782 = []
  for(var i = 0; i < i783.length; i += 1) {
    i782.push( request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Burst', i783[i + 0]) );
  }
  i780.bursts = i782
  return i780
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Burst"] = function (request, data, root) {
  var i786 = root || new pc.ParticleSystemBurst()
  var i787 = data
  i786.count = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i787[0], i786.count)
  i786.cycleCount = i787[1]
  i786.minCount = i787[2]
  i786.maxCount = i787[3]
  i786.repeatInterval = i787[4]
  i786.time = i787[5]
  return i786
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.RotationBySpeedModule"] = function (request, data, root) {
  var i788 = root || new pc.ParticleSystemRotationBySpeed()
  var i789 = data
  i788.enabled = !!i789[0]
  i788.x = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i789[1], i788.x)
  i788.y = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i789[2], i788.y)
  i788.z = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i789[3], i788.z)
  i788.separateAxes = !!i789[4]
  i788.range = new pc.Vec2( i789[5], i789[6] )
  return i788
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.RotationOverLifetimeModule"] = function (request, data, root) {
  var i790 = root || new pc.ParticleSystemRotationOverLifetime()
  var i791 = data
  i790.enabled = !!i791[0]
  i790.x = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i791[1], i790.x)
  i790.y = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i791[2], i790.y)
  i790.z = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i791[3], i790.z)
  i790.separateAxes = !!i791[4]
  return i790
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ShapeModule"] = function (request, data, root) {
  var i792 = root || new pc.ParticleSystemShape()
  var i793 = data
  i792.enabled = !!i793[0]
  i792.shapeType = i793[1]
  i792.randomDirectionAmount = i793[2]
  i792.sphericalDirectionAmount = i793[3]
  i792.randomPositionAmount = i793[4]
  i792.alignToDirection = !!i793[5]
  i792.radius = i793[6]
  i792.radiusMode = i793[7]
  i792.radiusSpread = i793[8]
  i792.radiusSpeed = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i793[9], i792.radiusSpeed)
  i792.radiusThickness = i793[10]
  i792.angle = i793[11]
  i792.length = i793[12]
  i792.boxThickness = new pc.Vec3( i793[13], i793[14], i793[15] )
  i792.meshShapeType = i793[16]
  request.r(i793[17], i793[18], 0, i792, 'mesh')
  request.r(i793[19], i793[20], 0, i792, 'meshRenderer')
  request.r(i793[21], i793[22], 0, i792, 'skinnedMeshRenderer')
  i792.useMeshMaterialIndex = !!i793[23]
  i792.meshMaterialIndex = i793[24]
  i792.useMeshColors = !!i793[25]
  i792.normalOffset = i793[26]
  i792.arc = i793[27]
  i792.arcMode = i793[28]
  i792.arcSpread = i793[29]
  i792.arcSpeed = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i793[30], i792.arcSpeed)
  i792.donutRadius = i793[31]
  i792.position = new pc.Vec3( i793[32], i793[33], i793[34] )
  i792.rotation = new pc.Vec3( i793[35], i793[36], i793[37] )
  i792.scale = new pc.Vec3( i793[38], i793[39], i793[40] )
  return i792
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.SizeBySpeedModule"] = function (request, data, root) {
  var i794 = root || new pc.ParticleSystemSizeBySpeed()
  var i795 = data
  i794.enabled = !!i795[0]
  i794.x = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i795[1], i794.x)
  i794.y = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i795[2], i794.y)
  i794.z = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i795[3], i794.z)
  i794.separateAxes = !!i795[4]
  i794.range = new pc.Vec2( i795[5], i795[6] )
  return i794
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.SizeOverLifetimeModule"] = function (request, data, root) {
  var i796 = root || new pc.ParticleSystemSizeOverLifetime()
  var i797 = data
  i796.enabled = !!i797[0]
  i796.x = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i797[1], i796.x)
  i796.y = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i797[2], i796.y)
  i796.z = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i797[3], i796.z)
  i796.separateAxes = !!i797[4]
  return i796
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.TextureSheetAnimationModule"] = function (request, data, root) {
  var i798 = root || new pc.ParticleSystemTextureSheetAnimation()
  var i799 = data
  i798.enabled = !!i799[0]
  i798.mode = i799[1]
  i798.animation = i799[2]
  i798.numTilesX = i799[3]
  i798.numTilesY = i799[4]
  i798.useRandomRow = !!i799[5]
  i798.frameOverTime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i799[6], i798.frameOverTime)
  i798.startFrame = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i799[7], i798.startFrame)
  i798.cycleCount = i799[8]
  i798.rowIndex = i799[9]
  i798.flipU = i799[10]
  i798.flipV = i799[11]
  i798.spriteCount = i799[12]
  var i801 = i799[13]
  var i800 = []
  for(var i = 0; i < i801.length; i += 2) {
  request.r(i801[i + 0], i801[i + 1], 2, i800, '')
  }
  i798.sprites = i800
  return i798
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.VelocityOverLifetimeModule"] = function (request, data, root) {
  var i804 = root || new pc.ParticleSystemVelocityOverLifetime()
  var i805 = data
  i804.enabled = !!i805[0]
  i804.x = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i805[1], i804.x)
  i804.y = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i805[2], i804.y)
  i804.z = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i805[3], i804.z)
  i804.radial = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i805[4], i804.radial)
  i804.speedModifier = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i805[5], i804.speedModifier)
  i804.space = i805[6]
  i804.orbitalX = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i805[7], i804.orbitalX)
  i804.orbitalY = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i805[8], i804.orbitalY)
  i804.orbitalZ = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i805[9], i804.orbitalZ)
  i804.orbitalOffsetX = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i805[10], i804.orbitalOffsetX)
  i804.orbitalOffsetY = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i805[11], i804.orbitalOffsetY)
  i804.orbitalOffsetZ = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i805[12], i804.orbitalOffsetZ)
  return i804
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.NoiseModule"] = function (request, data, root) {
  var i806 = root || new pc.ParticleSystemNoise()
  var i807 = data
  i806.enabled = !!i807[0]
  i806.separateAxes = !!i807[1]
  i806.strengthX = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i807[2], i806.strengthX)
  i806.strengthY = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i807[3], i806.strengthY)
  i806.strengthZ = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i807[4], i806.strengthZ)
  i806.frequency = i807[5]
  i806.damping = !!i807[6]
  i806.octaveCount = i807[7]
  i806.octaveMultiplier = i807[8]
  i806.octaveScale = i807[9]
  i806.quality = i807[10]
  i806.scrollSpeed = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i807[11], i806.scrollSpeed)
  i806.scrollSpeedMultiplier = i807[12]
  i806.remapEnabled = !!i807[13]
  i806.remapX = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i807[14], i806.remapX)
  i806.remapY = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i807[15], i806.remapY)
  i806.remapZ = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i807[16], i806.remapZ)
  i806.positionAmount = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i807[17], i806.positionAmount)
  i806.rotationAmount = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i807[18], i806.rotationAmount)
  i806.sizeAmount = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i807[19], i806.sizeAmount)
  return i806
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.InheritVelocityModule"] = function (request, data, root) {
  var i808 = root || new pc.ParticleSystemInheritVelocity()
  var i809 = data
  i808.enabled = !!i809[0]
  i808.mode = i809[1]
  i808.curve = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i809[2], i808.curve)
  return i808
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ForceOverLifetimeModule"] = function (request, data, root) {
  var i810 = root || new pc.ParticleSystemForceOverLifetime()
  var i811 = data
  i810.enabled = !!i811[0]
  i810.x = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i811[1], i810.x)
  i810.y = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i811[2], i810.y)
  i810.z = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i811[3], i810.z)
  i810.space = i811[4]
  i810.randomized = !!i811[5]
  return i810
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.LimitVelocityOverLifetimeModule"] = function (request, data, root) {
  var i812 = root || new pc.ParticleSystemLimitVelocityOverLifetime()
  var i813 = data
  i812.enabled = !!i813[0]
  i812.limit = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i813[1], i812.limit)
  i812.limitX = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i813[2], i812.limitX)
  i812.limitY = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i813[3], i812.limitY)
  i812.limitZ = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i813[4], i812.limitZ)
  i812.dampen = i813[5]
  i812.separateAxes = !!i813[6]
  i812.space = i813[7]
  i812.drag = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i813[8], i812.drag)
  i812.multiplyDragByParticleSize = !!i813[9]
  i812.multiplyDragByParticleVelocity = !!i813[10]
  return i812
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.ParticleSystemRenderer"] = function (request, data, root) {
  var i814 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.ParticleSystemRenderer' )
  var i815 = data
  request.r(i815[0], i815[1], 0, i814, 'mesh')
  i814.meshCount = i815[2]
  i814.activeVertexStreamsCount = i815[3]
  i814.alignment = i815[4]
  i814.renderMode = i815[5]
  i814.sortMode = i815[6]
  i814.lengthScale = i815[7]
  i814.velocityScale = i815[8]
  i814.cameraVelocityScale = i815[9]
  i814.normalDirection = i815[10]
  i814.sortingFudge = i815[11]
  i814.minParticleSize = i815[12]
  i814.maxParticleSize = i815[13]
  i814.pivot = new pc.Vec3( i815[14], i815[15], i815[16] )
  request.r(i815[17], i815[18], 0, i814, 'trailMaterial')
  i814.applyActiveColorSpace = !!i815[19]
  i814.enabled = !!i815[20]
  request.r(i815[21], i815[22], 0, i814, 'sharedMaterial')
  var i817 = i815[23]
  var i816 = []
  for(var i = 0; i < i817.length; i += 2) {
  request.r(i817[i + 0], i817[i + 1], 2, i816, '')
  }
  i814.sharedMaterials = i816
  i814.receiveShadows = !!i815[24]
  i814.shadowCastingMode = i815[25]
  i814.sortingLayerID = i815[26]
  i814.sortingOrder = i815[27]
  i814.lightmapIndex = i815[28]
  i814.lightmapSceneIndex = i815[29]
  i814.lightmapScaleOffset = new pc.Vec4( i815[30], i815[31], i815[32], i815[33] )
  i814.lightProbeUsage = i815[34]
  i814.reflectionProbeUsage = i815[35]
  return i814
}

Deserializers["Luna.Unity.DTO.UnityEngine.Textures.Cubemap"] = function (request, data, root) {
  var i818 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Textures.Cubemap' )
  var i819 = data
  i818.name = i819[0]
  i818.atlasId = i819[1]
  i818.mipmapCount = i819[2]
  i818.hdr = !!i819[3]
  i818.size = i819[4]
  i818.anisoLevel = i819[5]
  i818.filterMode = i819[6]
  var i821 = i819[7]
  var i820 = []
  for(var i = 0; i < i821.length; i += 4) {
    i820.push( UnityEngine.Rect.MinMaxRect(i821[i + 0], i821[i + 1], i821[i + 2], i821[i + 3]) );
  }
  i818.rects = i820
  i818.wrapU = i819[8]
  i818.wrapV = i819[9]
  return i818
}

Deserializers["Luna.Unity.DTO.UnityEngine.Scene.Scene"] = function (request, data, root) {
  var i824 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Scene.Scene' )
  var i825 = data
  i824.name = i825[0]
  i824.index = i825[1]
  i824.startup = !!i825[2]
  return i824
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Camera"] = function (request, data, root) {
  var i826 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Camera' )
  var i827 = data
  i826.aspect = i827[0]
  i826.orthographic = !!i827[1]
  i826.orthographicSize = i827[2]
  i826.backgroundColor = new pc.Color(i827[3], i827[4], i827[5], i827[6])
  i826.nearClipPlane = i827[7]
  i826.farClipPlane = i827[8]
  i826.fieldOfView = i827[9]
  i826.depth = i827[10]
  i826.clearFlags = i827[11]
  i826.cullingMask = i827[12]
  i826.rect = i827[13]
  request.r(i827[14], i827[15], 0, i826, 'targetTexture')
  i826.usePhysicalProperties = !!i827[16]
  i826.focalLength = i827[17]
  i826.sensorSize = new pc.Vec2( i827[18], i827[19] )
  i826.lensShift = new pc.Vec2( i827[20], i827[21] )
  i826.gateFit = i827[22]
  i826.commandBufferCount = i827[23]
  i826.cameraType = i827[24]
  i826.enabled = !!i827[25]
  return i826
}

Deserializers["UnityEngine.Rendering.Universal.UniversalAdditionalCameraData"] = function (request, data, root) {
  var i828 = root || request.c( 'UnityEngine.Rendering.Universal.UniversalAdditionalCameraData' )
  var i829 = data
  i828.m_RenderShadows = !!i829[0]
  i828.m_RequiresDepthTextureOption = i829[1]
  i828.m_RequiresOpaqueTextureOption = i829[2]
  i828.m_CameraType = i829[3]
  var i831 = i829[4]
  var i830 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.Camera')))
  for(var i = 0; i < i831.length; i += 2) {
  request.r(i831[i + 0], i831[i + 1], 1, i830, '')
  }
  i828.m_Cameras = i830
  i828.m_RendererIndex = i829[5]
  i828.m_VolumeLayerMask = UnityEngine.LayerMask.FromIntegerValue( i829[6] )
  request.r(i829[7], i829[8], 0, i828, 'm_VolumeTrigger')
  i828.m_VolumeFrameworkUpdateModeOption = i829[9]
  i828.m_RenderPostProcessing = !!i829[10]
  i828.m_Antialiasing = i829[11]
  i828.m_AntialiasingQuality = i829[12]
  i828.m_StopNaN = !!i829[13]
  i828.m_Dithering = !!i829[14]
  i828.m_ClearDepth = !!i829[15]
  i828.m_AllowXRRendering = !!i829[16]
  i828.m_AllowHDROutput = !!i829[17]
  i828.m_UseScreenCoordOverride = !!i829[18]
  i828.m_ScreenSizeOverride = new pc.Vec4( i829[19], i829[20], i829[21], i829[22] )
  i828.m_ScreenCoordScaleBias = new pc.Vec4( i829[23], i829[24], i829[25], i829[26] )
  i828.m_RequiresDepthTexture = !!i829[27]
  i828.m_RequiresColorTexture = !!i829[28]
  i828.m_Version = i829[29]
  i828.m_TaaSettings = request.d('UnityEngine.Rendering.Universal.TemporalAA+Settings', i829[30], i828.m_TaaSettings)
  return i828
}

Deserializers["UnityEngine.Rendering.Universal.TemporalAA+Settings"] = function (request, data, root) {
  var i834 = root || request.c( 'UnityEngine.Rendering.Universal.TemporalAA+Settings' )
  var i835 = data
  i834.m_Quality = i835[0]
  i834.m_FrameInfluence = i835[1]
  i834.m_JitterScale = i835[2]
  i834.m_MipBias = i835[3]
  i834.m_VarianceClampScale = i835[4]
  i834.m_ContrastAdaptiveSharpening = i835[5]
  return i834
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Light"] = function (request, data, root) {
  var i836 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Light' )
  var i837 = data
  i836.type = i837[0]
  i836.color = new pc.Color(i837[1], i837[2], i837[3], i837[4])
  i836.cullingMask = i837[5]
  i836.intensity = i837[6]
  i836.range = i837[7]
  i836.spotAngle = i837[8]
  i836.shadows = i837[9]
  i836.shadowNormalBias = i837[10]
  i836.shadowBias = i837[11]
  i836.shadowStrength = i837[12]
  i836.shadowResolution = i837[13]
  i836.lightmapBakeType = i837[14]
  i836.renderMode = i837[15]
  request.r(i837[16], i837[17], 0, i836, 'cookie')
  i836.cookieSize = i837[18]
  i836.shadowNearPlane = i837[19]
  i836.enabled = !!i837[20]
  return i836
}

Deserializers["UnityEngine.Rendering.Universal.UniversalAdditionalLightData"] = function (request, data, root) {
  var i838 = root || request.c( 'UnityEngine.Rendering.Universal.UniversalAdditionalLightData' )
  var i839 = data
  i838.m_Version = i839[0]
  i838.m_UsePipelineSettings = !!i839[1]
  i838.m_AdditionalLightsShadowResolutionTier = i839[2]
  i838.m_LightLayerMask = i839[3]
  i838.m_RenderingLayers = i839[4]
  i838.m_CustomShadowLayers = !!i839[5]
  i838.m_ShadowLayerMask = i839[6]
  i838.m_ShadowRenderingLayers = i839[7]
  i838.m_LightCookieSize = new pc.Vec2( i839[8], i839[9] )
  i838.m_LightCookieOffset = new pc.Vec2( i839[10], i839[11] )
  i838.m_SoftShadowQuality = i839[12]
  return i838
}

Deserializers["UnityEngine.Rendering.Volume"] = function (request, data, root) {
  var i840 = root || request.c( 'UnityEngine.Rendering.Volume' )
  var i841 = data
  i840.priority = i841[0]
  i840.blendDistance = i841[1]
  i840.weight = i841[2]
  request.r(i841[3], i841[4], 0, i840, 'sharedProfile')
  i840.m_IsGlobal = !!i841[5]
  return i840
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.AudioSource"] = function (request, data, root) {
  var i842 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.AudioSource' )
  var i843 = data
  request.r(i843[0], i843[1], 0, i842, 'clip')
  request.r(i843[2], i843[3], 0, i842, 'outputAudioMixerGroup')
  i842.playOnAwake = !!i843[4]
  i842.loop = !!i843[5]
  i842.time = i843[6]
  i842.volume = i843[7]
  i842.pitch = i843[8]
  i842.enabled = !!i843[9]
  return i842
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.HingeJoint"] = function (request, data, root) {
  var i844 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.HingeJoint' )
  var i845 = data
  i844.useMotor = !!i845[0]
  i844.useLimits = !!i845[1]
  i844.useSpring = !!i845[2]
  i844.limits = request.d('UnityEngine.JointLimits', i845[3], i844.limits)
  i844.motor = request.d('UnityEngine.JointMotor', i845[4], i844.motor)
  i844.spring = request.d('UnityEngine.JointSpring', i845[5], i844.spring)
  request.r(i845[6], i845[7], 0, i844, 'connectedBody')
  i844.axis = new pc.Vec3( i845[8], i845[9], i845[10] )
  i844.anchor = new pc.Vec3( i845[11], i845[12], i845[13] )
  i844.connectedAnchor = new pc.Vec3( i845[14], i845[15], i845[16] )
  i844.autoConfigureConnectedAnchor = !!i845[17]
  i844.massScale = i845[18]
  i844.connectedMassScale = i845[19]
  i844.enableCollision = !!i845[20]
  i844.breakForce = i845[21]
  i844.breakTorque = i845[22]
  return i844
}

Deserializers["BasketBehavior"] = function (request, data, root) {
  var i846 = root || request.c( 'BasketBehavior' )
  var i847 = data
  i846.basketMoveDistance = i847[0]
  i846.basketMoveSpeed = i847[1]
  return i846
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.CapsuleCollider"] = function (request, data, root) {
  var i848 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.CapsuleCollider' )
  var i849 = data
  i848.center = new pc.Vec3( i849[0], i849[1], i849[2] )
  i848.radius = i849[3]
  i848.height = i849[4]
  i848.direction = i849[5]
  i848.enabled = !!i849[6]
  i848.isTrigger = !!i849[7]
  request.r(i849[8], i849[9], 0, i848, 'material')
  return i848
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.SkinnedMeshRenderer"] = function (request, data, root) {
  var i850 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.SkinnedMeshRenderer' )
  var i851 = data
  request.r(i851[0], i851[1], 0, i850, 'sharedMesh')
  var i853 = i851[2]
  var i852 = []
  for(var i = 0; i < i853.length; i += 2) {
  request.r(i853[i + 0], i853[i + 1], 2, i852, '')
  }
  i850.bones = i852
  i850.updateWhenOffscreen = !!i851[3]
  i850.localBounds = i851[4]
  request.r(i851[5], i851[6], 0, i850, 'rootBone')
  var i855 = i851[7]
  var i854 = []
  for(var i = 0; i < i855.length; i += 1) {
    i854.push( request.d('Luna.Unity.DTO.UnityEngine.Components.SkinnedMeshRenderer+BlendShapeWeight', i855[i + 0]) );
  }
  i850.blendShapesWeights = i854
  i850.enabled = !!i851[8]
  request.r(i851[9], i851[10], 0, i850, 'sharedMaterial')
  var i857 = i851[11]
  var i856 = []
  for(var i = 0; i < i857.length; i += 2) {
  request.r(i857[i + 0], i857[i + 1], 2, i856, '')
  }
  i850.sharedMaterials = i856
  i850.receiveShadows = !!i851[12]
  i850.shadowCastingMode = i851[13]
  i850.sortingLayerID = i851[14]
  i850.sortingOrder = i851[15]
  i850.lightmapIndex = i851[16]
  i850.lightmapSceneIndex = i851[17]
  i850.lightmapScaleOffset = new pc.Vec4( i851[18], i851[19], i851[20], i851[21] )
  i850.lightProbeUsage = i851[22]
  i850.reflectionProbeUsage = i851[23]
  return i850
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.SkinnedMeshRenderer+BlendShapeWeight"] = function (request, data, root) {
  var i862 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.SkinnedMeshRenderer+BlendShapeWeight' )
  var i863 = data
  i862.weight = i863[0]
  return i862
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.BoxCollider"] = function (request, data, root) {
  var i864 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.BoxCollider' )
  var i865 = data
  i864.center = new pc.Vec3( i865[0], i865[1], i865[2] )
  i864.size = new pc.Vec3( i865[3], i865[4], i865[5] )
  i864.enabled = !!i865[6]
  i864.isTrigger = !!i865[7]
  request.r(i865[8], i865[9], 0, i864, 'material')
  return i864
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.SpriteRenderer"] = function (request, data, root) {
  var i866 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.SpriteRenderer' )
  var i867 = data
  i866.color = new pc.Color(i867[0], i867[1], i867[2], i867[3])
  request.r(i867[4], i867[5], 0, i866, 'sprite')
  i866.flipX = !!i867[6]
  i866.flipY = !!i867[7]
  i866.drawMode = i867[8]
  i866.size = new pc.Vec2( i867[9], i867[10] )
  i866.tileMode = i867[11]
  i866.adaptiveModeThreshold = i867[12]
  i866.maskInteraction = i867[13]
  i866.spriteSortPoint = i867[14]
  i866.enabled = !!i867[15]
  request.r(i867[16], i867[17], 0, i866, 'sharedMaterial')
  var i869 = i867[18]
  var i868 = []
  for(var i = 0; i < i869.length; i += 2) {
  request.r(i869[i + 0], i869[i + 1], 2, i868, '')
  }
  i866.sharedMaterials = i868
  i866.receiveShadows = !!i867[19]
  i866.shadowCastingMode = i867[20]
  i866.sortingLayerID = i867[21]
  i866.sortingOrder = i867[22]
  i866.lightmapIndex = i867[23]
  i866.lightmapSceneIndex = i867[24]
  i866.lightmapScaleOffset = new pc.Vec4( i867[25], i867[26], i867[27], i867[28] )
  i866.lightProbeUsage = i867[29]
  i866.reflectionProbeUsage = i867[30]
  return i866
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.TrailRenderer"] = function (request, data, root) {
  var i870 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.TrailRenderer' )
  var i871 = data
  var i873 = i871[0]
  var i872 = []
  for(var i = 0; i < i873.length; i += 3) {
    i872.push( new pc.Vec3( i873[i + 0], i873[i + 1], i873[i + 2] ) );
  }
  i870.positions = i872
  i870.positionCount = i871[1]
  i870.time = i871[2]
  i870.startWidth = i871[3]
  i870.endWidth = i871[4]
  i870.widthMultiplier = i871[5]
  i870.autodestruct = !!i871[6]
  i870.emitting = !!i871[7]
  i870.numCornerVertices = i871[8]
  i870.numCapVertices = i871[9]
  i870.minVertexDistance = i871[10]
  i870.colorGradient = i871[11] ? new pc.ColorGradient(i871[11][0], i871[11][1], i871[11][2]) : null
  i870.startColor = new pc.Color(i871[12], i871[13], i871[14], i871[15])
  i870.endColor = new pc.Color(i871[16], i871[17], i871[18], i871[19])
  i870.generateLightingData = !!i871[20]
  i870.textureMode = i871[21]
  i870.alignment = i871[22]
  i870.widthCurve = new pc.AnimationCurve( { keys_flow: i871[23] } )
  i870.enabled = !!i871[24]
  request.r(i871[25], i871[26], 0, i870, 'sharedMaterial')
  var i875 = i871[27]
  var i874 = []
  for(var i = 0; i < i875.length; i += 2) {
  request.r(i875[i + 0], i875[i + 1], 2, i874, '')
  }
  i870.sharedMaterials = i874
  i870.receiveShadows = !!i871[28]
  i870.shadowCastingMode = i871[29]
  i870.sortingLayerID = i871[30]
  i870.sortingOrder = i871[31]
  i870.lightmapIndex = i871[32]
  i870.lightmapSceneIndex = i871[33]
  i870.lightmapScaleOffset = new pc.Vec4( i871[34], i871[35], i871[36], i871[37] )
  i870.lightProbeUsage = i871[38]
  i870.reflectionProbeUsage = i871[39]
  return i870
}

Deserializers["InputManager"] = function (request, data, root) {
  var i878 = root || request.c( 'InputManager' )
  var i879 = data
  request.r(i879[0], i879[1], 0, i878, 'mainCamera')
  i878.ballLayer = UnityEngine.LayerMask.FromIntegerValue( i879[2] )
  i878.ballSelectionLayer = UnityEngine.LayerMask.FromIntegerValue( i879[3] )
  request.r(i879[4], i879[5], 0, i878, 'ballSelectionParent')
  request.r(i879[6], i879[7], 0, i878, 'ballSelectionRing')
  i878.minHoldTime = i879[8]
  i878.maxFlickTime = i879[9]
  i878.minHoldDistance = i879[10]
  i878.minFlickDistance = i879[11]
  i878.throwForce = i879[12]
  i878.maxThrowHeight = i879[13]
  i878.maxThrowDepth = i879[14]
  i878.maxThrowHorizontal = i879[15]
  i878.minThrowHorizontal = i879[16]
  i878.minThrowSpeed = i879[17]
  i878.maxThrowSpeed = i879[18]
  i878.throwSensitivity = i879[19]
  i878.fixedZPosition = i879[20]
  i878.selectionDragSpeed = i879[21]
  return i878
}

Deserializers["GameManager"] = function (request, data, root) {
  var i880 = root || request.c( 'GameManager' )
  var i881 = data
  i880.scoreBase = i881[0]
  i880.scoreDunk = i881[1]
  i880.timeLimit = i881[2]
  i880.timeBonus = i881[3]
  i880.targetFPS = i881[4]
  i880.minStreakStart = i881[5]
  request.r(i881[6], i881[7], 0, i880, 'basket')
  var i883 = i881[8]
  var i882 = []
  for(var i = 0; i < i883.length; i += 1) {
    i882.push( i883[i + 0] );
  }
  i880.quotesScoring = i882
  var i885 = i881[9]
  var i884 = []
  for(var i = 0; i < i885.length; i += 1) {
    i884.push( i885[i + 0] );
  }
  i880.quotesBonuses = i884
  request.r(i881[10], i881[11], 0, i880, 'inputManager')
  var i887 = i881[12]
  var i886 = []
  for(var i = 0; i < i887.length; i += 2) {
  request.r(i887[i + 0], i887[i + 1], 2, i886, '')
  }
  i880.ballMaterials = i886
  var i889 = i881[13]
  var i888 = []
  for(var i = 0; i < i889.length; i += 2) {
  request.r(i889[i + 0], i889[i + 1], 2, i888, '')
  }
  i880.ballInScene = i888
  var i891 = i881[14]
  var i890 = []
  for(var i = 0; i < i891.length; i += 2) {
  request.r(i891[i + 0], i891[i + 1], 2, i890, '')
  }
  i880.basketAudio = i890
  var i893 = i881[15]
  var i892 = []
  for(var i = 0; i < i893.length; i += 2) {
  request.r(i893[i + 0], i893[i + 1], 2, i892, '')
  }
  i880.netAudio = i892
  request.r(i881[16], i881[17], 0, i880, 'perfectAudio')
  request.r(i881[18], i881[19], 0, i880, 'globalVolume')
  request.r(i881[20], i881[21], 0, i880, 'perfectEffect')
  request.r(i881[22], i881[23], 0, i880, 'basketEffect')
  request.r(i881[24], i881[25], 0, i880, 'currentScoreText')
  request.r(i881[26], i881[27], 0, i880, 'highScoreText')
  request.r(i881[28], i881[29], 0, i880, 'timeText')
  request.r(i881[30], i881[31], 0, i880, 'quoteText')
  request.r(i881[32], i881[33], 0, i880, 'playingOverlay')
  request.r(i881[34], i881[35], 0, i880, 'selectingBallOverlay')
  request.r(i881[36], i881[37], 0, i880, 'selectBallButton')
  request.r(i881[38], i881[39], 0, i880, 'moveBasketButton')
  request.r(i881[40], i881[41], 0, i880, 'restartButton')
  request.r(i881[42], i881[43], 0, i880, 'confirmBallButton')
  request.r(i881[44], i881[45], 0, i880, 'backToGameButton')
  request.r(i881[46], i881[47], 0, i880, 'randomBallButton')
  request.r(i881[48], i881[49], 0, i880, 'mainCamera')
  request.r(i881[50], i881[51], 0, i880, 'selectionCamera')
  request.r(i881[52], i881[53], 0, i880, 'uncheckedSprite')
  request.r(i881[54], i881[55], 0, i880, 'checkedSprite')
  request.r(i881[56], i881[57], 0, i880, 'rotateRing1')
  return i880
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.RectTransform"] = function (request, data, root) {
  var i900 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.RectTransform' )
  var i901 = data
  i900.pivot = new pc.Vec2( i901[0], i901[1] )
  i900.anchorMin = new pc.Vec2( i901[2], i901[3] )
  i900.anchorMax = new pc.Vec2( i901[4], i901[5] )
  i900.sizeDelta = new pc.Vec2( i901[6], i901[7] )
  i900.anchoredPosition3D = new pc.Vec3( i901[8], i901[9], i901[10] )
  i900.rotation = new pc.Quat(i901[11], i901[12], i901[13], i901[14])
  i900.scale = new pc.Vec3( i901[15], i901[16], i901[17] )
  return i900
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Canvas"] = function (request, data, root) {
  var i902 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Canvas' )
  var i903 = data
  i902.planeDistance = i903[0]
  i902.referencePixelsPerUnit = i903[1]
  i902.isFallbackOverlay = !!i903[2]
  i902.renderMode = i903[3]
  i902.renderOrder = i903[4]
  i902.sortingLayerName = i903[5]
  i902.sortingOrder = i903[6]
  i902.scaleFactor = i903[7]
  request.r(i903[8], i903[9], 0, i902, 'worldCamera')
  i902.overrideSorting = !!i903[10]
  i902.pixelPerfect = !!i903[11]
  i902.targetDisplay = i903[12]
  i902.overridePixelPerfect = !!i903[13]
  i902.enabled = !!i903[14]
  return i902
}

Deserializers["UnityEngine.UI.CanvasScaler"] = function (request, data, root) {
  var i904 = root || request.c( 'UnityEngine.UI.CanvasScaler' )
  var i905 = data
  i904.m_UiScaleMode = i905[0]
  i904.m_ReferencePixelsPerUnit = i905[1]
  i904.m_ScaleFactor = i905[2]
  i904.m_ReferenceResolution = new pc.Vec2( i905[3], i905[4] )
  i904.m_ScreenMatchMode = i905[5]
  i904.m_MatchWidthOrHeight = i905[6]
  i904.m_PhysicalUnit = i905[7]
  i904.m_FallbackScreenDPI = i905[8]
  i904.m_DefaultSpriteDPI = i905[9]
  i904.m_DynamicPixelsPerUnit = i905[10]
  i904.m_PresetInfoIsWorld = !!i905[11]
  return i904
}

Deserializers["UnityEngine.UI.GraphicRaycaster"] = function (request, data, root) {
  var i906 = root || request.c( 'UnityEngine.UI.GraphicRaycaster' )
  var i907 = data
  i906.m_IgnoreReversedGraphics = !!i907[0]
  i906.m_BlockingObjects = i907[1]
  i906.m_BlockingMask = UnityEngine.LayerMask.FromIntegerValue( i907[2] )
  return i906
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.CanvasRenderer"] = function (request, data, root) {
  var i908 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.CanvasRenderer' )
  var i909 = data
  i908.cullTransparentMesh = !!i909[0]
  return i908
}

Deserializers["UnityEngine.UI.Image"] = function (request, data, root) {
  var i910 = root || request.c( 'UnityEngine.UI.Image' )
  var i911 = data
  request.r(i911[0], i911[1], 0, i910, 'm_Sprite')
  i910.m_Type = i911[2]
  i910.m_PreserveAspect = !!i911[3]
  i910.m_FillCenter = !!i911[4]
  i910.m_FillMethod = i911[5]
  i910.m_FillAmount = i911[6]
  i910.m_FillClockwise = !!i911[7]
  i910.m_FillOrigin = i911[8]
  i910.m_UseSpriteMesh = !!i911[9]
  i910.m_PixelsPerUnitMultiplier = i911[10]
  request.r(i911[11], i911[12], 0, i910, 'm_Material')
  i910.m_Maskable = !!i911[13]
  i910.m_Color = new pc.Color(i911[14], i911[15], i911[16], i911[17])
  i910.m_RaycastTarget = !!i911[18]
  i910.m_RaycastPadding = new pc.Vec4( i911[19], i911[20], i911[21], i911[22] )
  return i910
}

Deserializers["TMPro.TextMeshProUGUI"] = function (request, data, root) {
  var i912 = root || request.c( 'TMPro.TextMeshProUGUI' )
  var i913 = data
  i912.m_hasFontAssetChanged = !!i913[0]
  request.r(i913[1], i913[2], 0, i912, 'm_baseMaterial')
  i912.m_maskOffset = new pc.Vec4( i913[3], i913[4], i913[5], i913[6] )
  i912.m_text = i913[7]
  i912.m_isRightToLeft = !!i913[8]
  request.r(i913[9], i913[10], 0, i912, 'm_fontAsset')
  request.r(i913[11], i913[12], 0, i912, 'm_sharedMaterial')
  var i915 = i913[13]
  var i914 = []
  for(var i = 0; i < i915.length; i += 2) {
  request.r(i915[i + 0], i915[i + 1], 2, i914, '')
  }
  i912.m_fontSharedMaterials = i914
  request.r(i913[14], i913[15], 0, i912, 'm_fontMaterial')
  var i917 = i913[16]
  var i916 = []
  for(var i = 0; i < i917.length; i += 2) {
  request.r(i917[i + 0], i917[i + 1], 2, i916, '')
  }
  i912.m_fontMaterials = i916
  i912.m_fontColor32 = UnityEngine.Color32.ConstructColor(i913[17], i913[18], i913[19], i913[20])
  i912.m_fontColor = new pc.Color(i913[21], i913[22], i913[23], i913[24])
  i912.m_enableVertexGradient = !!i913[25]
  i912.m_colorMode = i913[26]
  i912.m_fontColorGradient = request.d('TMPro.VertexGradient', i913[27], i912.m_fontColorGradient)
  request.r(i913[28], i913[29], 0, i912, 'm_fontColorGradientPreset')
  request.r(i913[30], i913[31], 0, i912, 'm_spriteAsset')
  i912.m_tintAllSprites = !!i913[32]
  request.r(i913[33], i913[34], 0, i912, 'm_StyleSheet')
  i912.m_TextStyleHashCode = i913[35]
  i912.m_overrideHtmlColors = !!i913[36]
  i912.m_faceColor = UnityEngine.Color32.ConstructColor(i913[37], i913[38], i913[39], i913[40])
  i912.m_fontSize = i913[41]
  i912.m_fontSizeBase = i913[42]
  i912.m_fontWeight = i913[43]
  i912.m_enableAutoSizing = !!i913[44]
  i912.m_fontSizeMin = i913[45]
  i912.m_fontSizeMax = i913[46]
  i912.m_fontStyle = i913[47]
  i912.m_HorizontalAlignment = i913[48]
  i912.m_VerticalAlignment = i913[49]
  i912.m_textAlignment = i913[50]
  i912.m_characterSpacing = i913[51]
  i912.m_wordSpacing = i913[52]
  i912.m_lineSpacing = i913[53]
  i912.m_lineSpacingMax = i913[54]
  i912.m_paragraphSpacing = i913[55]
  i912.m_charWidthMaxAdj = i913[56]
  i912.m_TextWrappingMode = i913[57]
  i912.m_wordWrappingRatios = i913[58]
  i912.m_overflowMode = i913[59]
  request.r(i913[60], i913[61], 0, i912, 'm_linkedTextComponent')
  request.r(i913[62], i913[63], 0, i912, 'parentLinkedComponent')
  i912.m_enableKerning = !!i913[64]
  var i919 = i913[65]
  var i918 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.TextCore.OTL_FeatureTag')))
  for(var i = 0; i < i919.length; i += 1) {
    i918.add(i919[i + 0]);
  }
  i912.m_ActiveFontFeatures = i918
  i912.m_enableExtraPadding = !!i913[66]
  i912.checkPaddingRequired = !!i913[67]
  i912.m_isRichText = !!i913[68]
  i912.m_parseCtrlCharacters = !!i913[69]
  i912.m_isOrthographic = !!i913[70]
  i912.m_isCullingEnabled = !!i913[71]
  i912.m_horizontalMapping = i913[72]
  i912.m_verticalMapping = i913[73]
  i912.m_uvLineOffset = i913[74]
  i912.m_geometrySortingOrder = i913[75]
  i912.m_IsTextObjectScaleStatic = !!i913[76]
  i912.m_VertexBufferAutoSizeReduction = !!i913[77]
  i912.m_useMaxVisibleDescender = !!i913[78]
  i912.m_pageToDisplay = i913[79]
  i912.m_margin = new pc.Vec4( i913[80], i913[81], i913[82], i913[83] )
  i912.m_isUsingLegacyAnimationComponent = !!i913[84]
  i912.m_isVolumetricText = !!i913[85]
  request.r(i913[86], i913[87], 0, i912, 'm_Material')
  i912.m_EmojiFallbackSupport = !!i913[88]
  i912.m_Maskable = !!i913[89]
  i912.m_Color = new pc.Color(i913[90], i913[91], i913[92], i913[93])
  i912.m_RaycastTarget = !!i913[94]
  i912.m_RaycastPadding = new pc.Vec4( i913[95], i913[96], i913[97], i913[98] )
  return i912
}

Deserializers["TMPro.VertexGradient"] = function (request, data, root) {
  var i920 = root || request.c( 'TMPro.VertexGradient' )
  var i921 = data
  i920.topLeft = new pc.Color(i921[0], i921[1], i921[2], i921[3])
  i920.topRight = new pc.Color(i921[4], i921[5], i921[6], i921[7])
  i920.bottomLeft = new pc.Color(i921[8], i921[9], i921[10], i921[11])
  i920.bottomRight = new pc.Color(i921[12], i921[13], i921[14], i921[15])
  return i920
}

Deserializers["UnityEngine.UI.VerticalLayoutGroup"] = function (request, data, root) {
  var i924 = root || request.c( 'UnityEngine.UI.VerticalLayoutGroup' )
  var i925 = data
  i924.m_Spacing = i925[0]
  i924.m_ChildForceExpandWidth = !!i925[1]
  i924.m_ChildForceExpandHeight = !!i925[2]
  i924.m_ChildControlWidth = !!i925[3]
  i924.m_ChildControlHeight = !!i925[4]
  i924.m_ChildScaleWidth = !!i925[5]
  i924.m_ChildScaleHeight = !!i925[6]
  i924.m_ReverseArrangement = !!i925[7]
  i924.m_Padding = UnityEngine.RectOffset.FromPaddings(i925[8], i925[9], i925[10], i925[11])
  i924.m_ChildAlignment = i925[12]
  return i924
}

Deserializers["UnityEngine.UI.Button"] = function (request, data, root) {
  var i926 = root || request.c( 'UnityEngine.UI.Button' )
  var i927 = data
  i926.m_OnClick = request.d('UnityEngine.UI.Button+ButtonClickedEvent', i927[0], i926.m_OnClick)
  i926.m_Navigation = request.d('UnityEngine.UI.Navigation', i927[1], i926.m_Navigation)
  i926.m_Transition = i927[2]
  i926.m_Colors = request.d('UnityEngine.UI.ColorBlock', i927[3], i926.m_Colors)
  i926.m_SpriteState = request.d('UnityEngine.UI.SpriteState', i927[4], i926.m_SpriteState)
  i926.m_AnimationTriggers = request.d('UnityEngine.UI.AnimationTriggers', i927[5], i926.m_AnimationTriggers)
  i926.m_Interactable = !!i927[6]
  request.r(i927[7], i927[8], 0, i926, 'm_TargetGraphic')
  return i926
}

Deserializers["UnityEngine.UI.Button+ButtonClickedEvent"] = function (request, data, root) {
  var i928 = root || request.c( 'UnityEngine.UI.Button+ButtonClickedEvent' )
  var i929 = data
  i928.m_PersistentCalls = request.d('UnityEngine.Events.PersistentCallGroup', i929[0], i928.m_PersistentCalls)
  return i928
}

Deserializers["UnityEngine.Events.PersistentCallGroup"] = function (request, data, root) {
  var i930 = root || request.c( 'UnityEngine.Events.PersistentCallGroup' )
  var i931 = data
  var i933 = i931[0]
  var i932 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.Events.PersistentCall')))
  for(var i = 0; i < i933.length; i += 1) {
    i932.add(request.d('UnityEngine.Events.PersistentCall', i933[i + 0]));
  }
  i930.m_Calls = i932
  return i930
}

Deserializers["UnityEngine.Events.PersistentCall"] = function (request, data, root) {
  var i936 = root || request.c( 'UnityEngine.Events.PersistentCall' )
  var i937 = data
  request.r(i937[0], i937[1], 0, i936, 'm_Target')
  i936.m_TargetAssemblyTypeName = i937[2]
  i936.m_MethodName = i937[3]
  i936.m_Mode = i937[4]
  i936.m_Arguments = request.d('UnityEngine.Events.ArgumentCache', i937[5], i936.m_Arguments)
  i936.m_CallState = i937[6]
  return i936
}

Deserializers["UnityEngine.Events.ArgumentCache"] = function (request, data, root) {
  var i938 = root || request.c( 'UnityEngine.Events.ArgumentCache' )
  var i939 = data
  request.r(i939[0], i939[1], 0, i938, 'm_ObjectArgument')
  i938.m_ObjectArgumentAssemblyTypeName = i939[2]
  i938.m_IntArgument = i939[3]
  i938.m_FloatArgument = i939[4]
  i938.m_StringArgument = i939[5]
  i938.m_BoolArgument = !!i939[6]
  return i938
}

Deserializers["UnityEngine.UI.Navigation"] = function (request, data, root) {
  var i940 = root || request.c( 'UnityEngine.UI.Navigation' )
  var i941 = data
  i940.m_Mode = i941[0]
  i940.m_WrapAround = !!i941[1]
  request.r(i941[2], i941[3], 0, i940, 'm_SelectOnUp')
  request.r(i941[4], i941[5], 0, i940, 'm_SelectOnDown')
  request.r(i941[6], i941[7], 0, i940, 'm_SelectOnLeft')
  request.r(i941[8], i941[9], 0, i940, 'm_SelectOnRight')
  return i940
}

Deserializers["UnityEngine.UI.ColorBlock"] = function (request, data, root) {
  var i942 = root || request.c( 'UnityEngine.UI.ColorBlock' )
  var i943 = data
  i942.m_NormalColor = new pc.Color(i943[0], i943[1], i943[2], i943[3])
  i942.m_HighlightedColor = new pc.Color(i943[4], i943[5], i943[6], i943[7])
  i942.m_PressedColor = new pc.Color(i943[8], i943[9], i943[10], i943[11])
  i942.m_SelectedColor = new pc.Color(i943[12], i943[13], i943[14], i943[15])
  i942.m_DisabledColor = new pc.Color(i943[16], i943[17], i943[18], i943[19])
  i942.m_ColorMultiplier = i943[20]
  i942.m_FadeDuration = i943[21]
  return i942
}

Deserializers["UnityEngine.UI.SpriteState"] = function (request, data, root) {
  var i944 = root || request.c( 'UnityEngine.UI.SpriteState' )
  var i945 = data
  request.r(i945[0], i945[1], 0, i944, 'm_HighlightedSprite')
  request.r(i945[2], i945[3], 0, i944, 'm_PressedSprite')
  request.r(i945[4], i945[5], 0, i944, 'm_SelectedSprite')
  request.r(i945[6], i945[7], 0, i944, 'm_DisabledSprite')
  return i944
}

Deserializers["UnityEngine.UI.AnimationTriggers"] = function (request, data, root) {
  var i946 = root || request.c( 'UnityEngine.UI.AnimationTriggers' )
  var i947 = data
  i946.m_NormalTrigger = i947[0]
  i946.m_HighlightedTrigger = i947[1]
  i946.m_PressedTrigger = i947[2]
  i946.m_SelectedTrigger = i947[3]
  i946.m_DisabledTrigger = i947[4]
  return i946
}

Deserializers["UnityEngine.UI.HorizontalLayoutGroup"] = function (request, data, root) {
  var i948 = root || request.c( 'UnityEngine.UI.HorizontalLayoutGroup' )
  var i949 = data
  i948.m_Spacing = i949[0]
  i948.m_ChildForceExpandWidth = !!i949[1]
  i948.m_ChildForceExpandHeight = !!i949[2]
  i948.m_ChildControlWidth = !!i949[3]
  i948.m_ChildControlHeight = !!i949[4]
  i948.m_ChildScaleWidth = !!i949[5]
  i948.m_ChildScaleHeight = !!i949[6]
  i948.m_ReverseArrangement = !!i949[7]
  i948.m_Padding = UnityEngine.RectOffset.FromPaddings(i949[8], i949[9], i949[10], i949[11])
  i948.m_ChildAlignment = i949[12]
  return i948
}

Deserializers["UnityEngine.EventSystems.EventSystem"] = function (request, data, root) {
  var i950 = root || request.c( 'UnityEngine.EventSystems.EventSystem' )
  var i951 = data
  request.r(i951[0], i951[1], 0, i950, 'm_FirstSelected')
  i950.m_sendNavigationEvents = !!i951[2]
  i950.m_DragThreshold = i951[3]
  return i950
}

Deserializers["UnityEngine.EventSystems.StandaloneInputModule"] = function (request, data, root) {
  var i952 = root || request.c( 'UnityEngine.EventSystems.StandaloneInputModule' )
  var i953 = data
  i952.m_HorizontalAxis = i953[0]
  i952.m_VerticalAxis = i953[1]
  i952.m_SubmitButton = i953[2]
  i952.m_CancelButton = i953[3]
  i952.m_InputActionsPerSecond = i953[4]
  i952.m_RepeatDelay = i953[5]
  i952.m_ForceModuleActive = !!i953[6]
  i952.m_SendPointerHoverToParent = !!i953[7]
  return i952
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.RenderSettings"] = function (request, data, root) {
  var i954 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.RenderSettings' )
  var i955 = data
  i954.ambientIntensity = i955[0]
  i954.reflectionIntensity = i955[1]
  i954.ambientMode = i955[2]
  i954.ambientLight = new pc.Color(i955[3], i955[4], i955[5], i955[6])
  i954.ambientSkyColor = new pc.Color(i955[7], i955[8], i955[9], i955[10])
  i954.ambientGroundColor = new pc.Color(i955[11], i955[12], i955[13], i955[14])
  i954.ambientEquatorColor = new pc.Color(i955[15], i955[16], i955[17], i955[18])
  i954.fogColor = new pc.Color(i955[19], i955[20], i955[21], i955[22])
  i954.fogEndDistance = i955[23]
  i954.fogStartDistance = i955[24]
  i954.fogDensity = i955[25]
  i954.fog = !!i955[26]
  request.r(i955[27], i955[28], 0, i954, 'skybox')
  i954.fogMode = i955[29]
  var i957 = i955[30]
  var i956 = []
  for(var i = 0; i < i957.length; i += 1) {
    i956.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+Lightmap', i957[i + 0]) );
  }
  i954.lightmaps = i956
  i954.lightProbes = request.d('Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+LightProbes', i955[31], i954.lightProbes)
  i954.lightmapsMode = i955[32]
  i954.mixedBakeMode = i955[33]
  i954.environmentLightingMode = i955[34]
  i954.ambientProbe = new pc.SphericalHarmonicsL2(i955[35])
  i954.referenceAmbientProbe = new pc.SphericalHarmonicsL2(i955[36])
  i954.useReferenceAmbientProbe = !!i955[37]
  request.r(i955[38], i955[39], 0, i954, 'customReflection')
  request.r(i955[40], i955[41], 0, i954, 'defaultReflection')
  i954.defaultReflectionMode = i955[42]
  i954.defaultReflectionResolution = i955[43]
  i954.sunLightObjectId = i955[44]
  i954.pixelLightCount = i955[45]
  i954.defaultReflectionHDR = !!i955[46]
  i954.hasLightDataAsset = !!i955[47]
  i954.hasManualGenerate = !!i955[48]
  return i954
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+Lightmap"] = function (request, data, root) {
  var i960 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+Lightmap' )
  var i961 = data
  request.r(i961[0], i961[1], 0, i960, 'lightmapColor')
  request.r(i961[2], i961[3], 0, i960, 'lightmapDirection')
  return i960
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+LightProbes"] = function (request, data, root) {
  var i962 = root || new UnityEngine.LightProbes()
  var i963 = data
  return i962
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.UniversalRenderPipelineAsset"] = function (request, data, root) {
  var i968 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.UniversalRenderPipelineAsset' )
  var i969 = data
  i968.AdditionalLightsPerObjectLimit = i969[0]
  i968.AdditionalLightsRenderingMode = i969[1]
  i968.LightRenderingMode = request.d('Luna.Unity.DTO.UnityEngine.Assets.LightRenderingMode', i969[2], i968.LightRenderingMode)
  i968.ColorGradingLutSize = i969[3]
  i968.ColorGradingMode = request.d('Luna.Unity.DTO.UnityEngine.Assets.ColorGradingMode', i969[4], i968.ColorGradingMode)
  i968.MainLightRenderingMode = request.d('Luna.Unity.DTO.UnityEngine.Assets.LightRenderingMode', i969[5], i968.MainLightRenderingMode)
  i968.MainLightRenderingModeValue = i969[6]
  i968.SupportsMainLightShadows = !!i969[7]
  i968.MixedLightingSupported = !!i969[8]
  i968.MsaaQuality = request.d('Luna.Unity.DTO.UnityEngine.Assets.MsaaQuality', i969[9], i968.MsaaQuality)
  i968.MSAA = i969[10]
  i968.OpaqueDownsampling = request.d('Luna.Unity.DTO.UnityEngine.Assets.Downsampling', i969[11], i968.OpaqueDownsampling)
  i968.MainLightShadowmapResolution = request.d('Luna.Unity.DTO.UnityEngine.Assets.ShadowResolution', i969[12], i968.MainLightShadowmapResolution)
  i968.MainLightShadowmapResolutionValue = i969[13]
  i968.SupportsSoftShadows = !!i969[14]
  i968.SoftShadowQuality = request.d('Luna.Unity.DTO.UnityEngine.Assets.SoftShadowQuality', i969[15], i968.SoftShadowQuality)
  i968.SoftShadowQualityValue = i969[16]
  i968.ShadowDistance = i969[17]
  i968.ShadowCascadeCount = i969[18]
  i968.Cascade2Split = i969[19]
  i968.Cascade3Split = new pc.Vec2( i969[20], i969[21] )
  i968.Cascade4Split = new pc.Vec3( i969[22], i969[23], i969[24] )
  i968.CascadeBorder = i969[25]
  i968.ShadowDepthBias = i969[26]
  i968.ShadowNormalBias = i969[27]
  i968.RenderScale = i969[28]
  i968.RequireDepthTexture = !!i969[29]
  i968.RequireOpaqueTexture = !!i969[30]
  i968.SupportsHDR = !!i969[31]
  i968.SupportsTerrainHoles = !!i969[32]
  return i968
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.LightRenderingMode"] = function (request, data, root) {
  var i970 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.LightRenderingMode' )
  var i971 = data
  i970.Disabled = i971[0]
  i970.PerVertex = i971[1]
  i970.PerPixel = i971[2]
  return i970
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ColorGradingMode"] = function (request, data, root) {
  var i972 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ColorGradingMode' )
  var i973 = data
  i972.LowDynamicRange = i973[0]
  i972.HighDynamicRange = i973[1]
  return i972
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.MsaaQuality"] = function (request, data, root) {
  var i974 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.MsaaQuality' )
  var i975 = data
  i974.Disabled = i975[0]
  i974._2x = i975[1]
  i974._4x = i975[2]
  i974._8x = i975[3]
  return i974
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Downsampling"] = function (request, data, root) {
  var i976 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Downsampling' )
  var i977 = data
  i976.None = i977[0]
  i976._2xBilinear = i977[1]
  i976._4xBox = i977[2]
  i976._4xBilinear = i977[3]
  return i976
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ShadowResolution"] = function (request, data, root) {
  var i978 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ShadowResolution' )
  var i979 = data
  i978._256 = i979[0]
  i978._512 = i979[1]
  i978._1024 = i979[2]
  i978._2048 = i979[3]
  i978._4096 = i979[4]
  return i978
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.SoftShadowQuality"] = function (request, data, root) {
  var i980 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.SoftShadowQuality' )
  var i981 = data
  i980.UsePipelineSettings = i981[0]
  i980.Low = i981[1]
  i980.Medium = i981[2]
  i980.High = i981[3]
  return i980
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.PhysicMaterial"] = function (request, data, root) {
  var i982 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.PhysicMaterial' )
  var i983 = data
  i982.name = i983[0]
  i982.bounciness = i983[1]
  i982.dynamicFriction = i983[2]
  i982.staticFriction = i983[3]
  i982.frictionCombine = i983[4]
  i982.bounceCombine = i983[5]
  return i982
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader"] = function (request, data, root) {
  var i984 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader' )
  var i985 = data
  var i987 = i985[0]
  var i986 = new (System.Collections.Generic.List$1(Bridge.ns('Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError')))
  for(var i = 0; i < i987.length; i += 1) {
    i986.add(request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError', i987[i + 0]));
  }
  i984.ShaderCompilationErrors = i986
  i984.name = i985[1]
  i984.guid = i985[2]
  var i989 = i985[3]
  var i988 = []
  for(var i = 0; i < i989.length; i += 1) {
    i988.push( i989[i + 0] );
  }
  i984.shaderDefinedKeywords = i988
  var i991 = i985[4]
  var i990 = []
  for(var i = 0; i < i991.length; i += 1) {
    i990.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass', i991[i + 0]) );
  }
  i984.passes = i990
  var i993 = i985[5]
  var i992 = []
  for(var i = 0; i < i993.length; i += 1) {
    i992.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+UsePass', i993[i + 0]) );
  }
  i984.usePasses = i992
  var i995 = i985[6]
  var i994 = []
  for(var i = 0; i < i995.length; i += 1) {
    i994.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+DefaultParameterValue', i995[i + 0]) );
  }
  i984.defaultParameterValues = i994
  request.r(i985[7], i985[8], 0, i984, 'unityFallbackShader')
  i984.readDepth = !!i985[9]
  i984.hasDepthOnlyPass = !!i985[10]
  i984.isCreatedByShaderGraph = !!i985[11]
  i984.disableBatching = !!i985[12]
  i984.compiled = !!i985[13]
  return i984
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError"] = function (request, data, root) {
  var i998 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError' )
  var i999 = data
  i998.shaderName = i999[0]
  i998.errorMessage = i999[1]
  return i998
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass"] = function (request, data, root) {
  var i1002 = root || new pc.UnityShaderPass()
  var i1003 = data
  i1002.id = i1003[0]
  i1002.subShaderIndex = i1003[1]
  i1002.name = i1003[2]
  i1002.passType = i1003[3]
  i1002.grabPassTextureName = i1003[4]
  i1002.usePass = !!i1003[5]
  i1002.zTest = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i1003[6], i1002.zTest)
  i1002.zWrite = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i1003[7], i1002.zWrite)
  i1002.culling = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i1003[8], i1002.culling)
  i1002.blending = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending', i1003[9], i1002.blending)
  i1002.alphaBlending = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending', i1003[10], i1002.alphaBlending)
  i1002.colorWriteMask = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i1003[11], i1002.colorWriteMask)
  i1002.offsetUnits = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i1003[12], i1002.offsetUnits)
  i1002.offsetFactor = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i1003[13], i1002.offsetFactor)
  i1002.stencilRef = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i1003[14], i1002.stencilRef)
  i1002.stencilReadMask = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i1003[15], i1002.stencilReadMask)
  i1002.stencilWriteMask = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i1003[16], i1002.stencilWriteMask)
  i1002.stencilOp = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp', i1003[17], i1002.stencilOp)
  i1002.stencilOpFront = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp', i1003[18], i1002.stencilOpFront)
  i1002.stencilOpBack = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp', i1003[19], i1002.stencilOpBack)
  var i1005 = i1003[20]
  var i1004 = []
  for(var i = 0; i < i1005.length; i += 1) {
    i1004.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Tag', i1005[i + 0]) );
  }
  i1002.tags = i1004
  var i1007 = i1003[21]
  var i1006 = []
  for(var i = 0; i < i1007.length; i += 1) {
    i1006.push( i1007[i + 0] );
  }
  i1002.passDefinedKeywords = i1006
  var i1009 = i1003[22]
  var i1008 = []
  for(var i = 0; i < i1009.length; i += 1) {
    i1008.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+KeywordGroup', i1009[i + 0]) );
  }
  i1002.passDefinedKeywordGroups = i1008
  var i1011 = i1003[23]
  var i1010 = []
  for(var i = 0; i < i1011.length; i += 1) {
    i1010.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant', i1011[i + 0]) );
  }
  i1002.variants = i1010
  var i1013 = i1003[24]
  var i1012 = []
  for(var i = 0; i < i1013.length; i += 1) {
    i1012.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant', i1013[i + 0]) );
  }
  i1002.excludedVariants = i1012
  i1002.hasDepthReader = !!i1003[25]
  return i1002
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value"] = function (request, data, root) {
  var i1014 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value' )
  var i1015 = data
  i1014.val = i1015[0]
  i1014.name = i1015[1]
  return i1014
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending"] = function (request, data, root) {
  var i1016 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending' )
  var i1017 = data
  i1016.src = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i1017[0], i1016.src)
  i1016.dst = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i1017[1], i1016.dst)
  i1016.op = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i1017[2], i1016.op)
  return i1016
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp"] = function (request, data, root) {
  var i1018 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp' )
  var i1019 = data
  i1018.pass = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i1019[0], i1018.pass)
  i1018.fail = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i1019[1], i1018.fail)
  i1018.zFail = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i1019[2], i1018.zFail)
  i1018.comp = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i1019[3], i1018.comp)
  return i1018
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Tag"] = function (request, data, root) {
  var i1022 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Tag' )
  var i1023 = data
  i1022.name = i1023[0]
  i1022.value = i1023[1]
  return i1022
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+KeywordGroup"] = function (request, data, root) {
  var i1026 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+KeywordGroup' )
  var i1027 = data
  var i1029 = i1027[0]
  var i1028 = []
  for(var i = 0; i < i1029.length; i += 1) {
    i1028.push( i1029[i + 0] );
  }
  i1026.keywords = i1028
  i1026.hasDiscard = !!i1027[1]
  return i1026
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant"] = function (request, data, root) {
  var i1032 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant' )
  var i1033 = data
  i1032.passId = i1033[0]
  i1032.subShaderIndex = i1033[1]
  var i1035 = i1033[2]
  var i1034 = []
  for(var i = 0; i < i1035.length; i += 1) {
    i1034.push( i1035[i + 0] );
  }
  i1032.keywords = i1034
  i1032.vertexProgram = i1033[3]
  i1032.fragmentProgram = i1033[4]
  i1032.exportedForWebGl2 = !!i1033[5]
  i1032.readDepth = !!i1033[6]
  return i1032
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+UsePass"] = function (request, data, root) {
  var i1038 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+UsePass' )
  var i1039 = data
  request.r(i1039[0], i1039[1], 0, i1038, 'shader')
  i1038.pass = i1039[2]
  return i1038
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+DefaultParameterValue"] = function (request, data, root) {
  var i1042 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+DefaultParameterValue' )
  var i1043 = data
  i1042.name = i1043[0]
  i1042.type = i1043[1]
  i1042.value = new pc.Vec4( i1043[2], i1043[3], i1043[4], i1043[5] )
  i1042.textureValue = i1043[6]
  i1042.shaderPropertyFlag = i1043[7]
  return i1042
}

Deserializers["Luna.Unity.DTO.UnityEngine.Textures.Sprite"] = function (request, data, root) {
  var i1044 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Textures.Sprite' )
  var i1045 = data
  i1044.name = i1045[0]
  request.r(i1045[1], i1045[2], 0, i1044, 'texture')
  i1044.aabb = i1045[3]
  i1044.vertices = i1045[4]
  i1044.triangles = i1045[5]
  i1044.textureRect = UnityEngine.Rect.MinMaxRect(i1045[6], i1045[7], i1045[8], i1045[9])
  i1044.packedRect = UnityEngine.Rect.MinMaxRect(i1045[10], i1045[11], i1045[12], i1045[13])
  i1044.border = new pc.Vec4( i1045[14], i1045[15], i1045[16], i1045[17] )
  i1044.transparency = i1045[18]
  i1044.bounds = i1045[19]
  i1044.pixelsPerUnit = i1045[20]
  i1044.textureWidth = i1045[21]
  i1044.textureHeight = i1045[22]
  i1044.nativeSize = new pc.Vec2( i1045[23], i1045[24] )
  i1044.pivot = new pc.Vec2( i1045[25], i1045[26] )
  i1044.textureRectOffset = new pc.Vec2( i1045[27], i1045[28] )
  return i1044
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.AudioClip"] = function (request, data, root) {
  var i1046 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.AudioClip' )
  var i1047 = data
  i1046.name = i1047[0]
  return i1046
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Font"] = function (request, data, root) {
  var i1048 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Font' )
  var i1049 = data
  i1048.name = i1049[0]
  i1048.ascent = i1049[1]
  i1048.originalLineHeight = i1049[2]
  i1048.fontSize = i1049[3]
  var i1051 = i1049[4]
  var i1050 = []
  for(var i = 0; i < i1051.length; i += 1) {
    i1050.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Font+CharacterInfo', i1051[i + 0]) );
  }
  i1048.characterInfo = i1050
  request.r(i1049[5], i1049[6], 0, i1048, 'texture')
  i1048.originalFontSize = i1049[7]
  return i1048
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Font+CharacterInfo"] = function (request, data, root) {
  var i1054 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Font+CharacterInfo' )
  var i1055 = data
  i1054.index = i1055[0]
  i1054.advance = i1055[1]
  i1054.bearing = i1055[2]
  i1054.glyphWidth = i1055[3]
  i1054.glyphHeight = i1055[4]
  i1054.minX = i1055[5]
  i1054.maxX = i1055[6]
  i1054.minY = i1055[7]
  i1054.maxY = i1055[8]
  i1054.uvBottomLeftX = i1055[9]
  i1054.uvBottomLeftY = i1055[10]
  i1054.uvBottomRightX = i1055[11]
  i1054.uvBottomRightY = i1055[12]
  i1054.uvTopLeftX = i1055[13]
  i1054.uvTopLeftY = i1055[14]
  i1054.uvTopRightX = i1055[15]
  i1054.uvTopRightY = i1055[16]
  return i1054
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.TextAsset"] = function (request, data, root) {
  var i1056 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.TextAsset' )
  var i1057 = data
  i1056.name = i1057[0]
  i1056.bytes64 = i1057[1]
  i1056.data = i1057[2]
  return i1056
}

Deserializers["UnityEngine.Rendering.VolumeProfile"] = function (request, data, root) {
  var i1058 = root || request.c( 'UnityEngine.Rendering.VolumeProfile' )
  var i1059 = data
  var i1061 = i1059[0]
  var i1060 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.Rendering.VolumeComponent')))
  for(var i = 0; i < i1061.length; i += 2) {
  request.r(i1061[i + 0], i1061[i + 1], 1, i1060, '')
  }
  i1058.components = i1060
  return i1058
}

Deserializers["UnityEngine.Rendering.Universal.Tonemapping"] = function (request, data, root) {
  var i1064 = root || request.c( 'UnityEngine.Rendering.Universal.Tonemapping' )
  var i1065 = data
  i1064.mode = request.d('UnityEngine.Rendering.Universal.TonemappingModeParameter', i1065[0], i1064.mode)
  i1064.neutralHDRRangeReductionMode = request.d('UnityEngine.Rendering.Universal.NeutralRangeReductionModeParameter', i1065[1], i1064.neutralHDRRangeReductionMode)
  i1064.acesPreset = request.d('UnityEngine.Rendering.Universal.HDRACESPresetParameter', i1065[2], i1064.acesPreset)
  i1064.hueShiftAmount = request.d('UnityEngine.Rendering.ClampedFloatParameter', i1065[3], i1064.hueShiftAmount)
  i1064.detectPaperWhite = request.d('UnityEngine.Rendering.BoolParameter', i1065[4], i1064.detectPaperWhite)
  i1064.paperWhite = request.d('UnityEngine.Rendering.ClampedFloatParameter', i1065[5], i1064.paperWhite)
  i1064.detectBrightnessLimits = request.d('UnityEngine.Rendering.BoolParameter', i1065[6], i1064.detectBrightnessLimits)
  i1064.minNits = request.d('UnityEngine.Rendering.ClampedFloatParameter', i1065[7], i1064.minNits)
  i1064.maxNits = request.d('UnityEngine.Rendering.ClampedFloatParameter', i1065[8], i1064.maxNits)
  i1064.active = !!i1065[9]
  return i1064
}

Deserializers["UnityEngine.Rendering.Universal.TonemappingModeParameter"] = function (request, data, root) {
  var i1066 = root || request.c( 'UnityEngine.Rendering.Universal.TonemappingModeParameter' )
  var i1067 = data
  i1066.m_Value = i1067[0]
  i1066.m_OverrideState = !!i1067[1]
  return i1066
}

Deserializers["UnityEngine.Rendering.Universal.NeutralRangeReductionModeParameter"] = function (request, data, root) {
  var i1068 = root || request.c( 'UnityEngine.Rendering.Universal.NeutralRangeReductionModeParameter' )
  var i1069 = data
  i1068.m_Value = i1069[0]
  i1068.m_OverrideState = !!i1069[1]
  return i1068
}

Deserializers["UnityEngine.Rendering.Universal.HDRACESPresetParameter"] = function (request, data, root) {
  var i1070 = root || request.c( 'UnityEngine.Rendering.Universal.HDRACESPresetParameter' )
  var i1071 = data
  i1070.m_Value = i1071[0]
  i1070.m_OverrideState = !!i1071[1]
  return i1070
}

Deserializers["UnityEngine.Rendering.ClampedFloatParameter"] = function (request, data, root) {
  var i1072 = root || request.c( 'UnityEngine.Rendering.ClampedFloatParameter' )
  var i1073 = data
  i1072.m_Value = i1073[0]
  i1072.m_OverrideState = !!i1073[1]
  return i1072
}

Deserializers["UnityEngine.Rendering.BoolParameter"] = function (request, data, root) {
  var i1074 = root || request.c( 'UnityEngine.Rendering.BoolParameter' )
  var i1075 = data
  i1074.m_Value = !!i1075[0]
  i1074.m_OverrideState = !!i1075[1]
  return i1074
}

Deserializers["UnityEngine.Rendering.Universal.Bloom"] = function (request, data, root) {
  var i1076 = root || request.c( 'UnityEngine.Rendering.Universal.Bloom' )
  var i1077 = data
  i1076.skipIterations = request.d('UnityEngine.Rendering.ClampedIntParameter', i1077[0], i1076.skipIterations)
  i1076.threshold = request.d('UnityEngine.Rendering.MinFloatParameter', i1077[1], i1076.threshold)
  i1076.intensity = request.d('UnityEngine.Rendering.MinFloatParameter', i1077[2], i1076.intensity)
  i1076.scatter = request.d('UnityEngine.Rendering.ClampedFloatParameter', i1077[3], i1076.scatter)
  i1076.clamp = request.d('UnityEngine.Rendering.MinFloatParameter', i1077[4], i1076.clamp)
  i1076.tint = request.d('UnityEngine.Rendering.ColorParameter', i1077[5], i1076.tint)
  i1076.highQualityFiltering = request.d('UnityEngine.Rendering.BoolParameter', i1077[6], i1076.highQualityFiltering)
  i1076.downscale = request.d('UnityEngine.Rendering.Universal.DownscaleParameter', i1077[7], i1076.downscale)
  i1076.maxIterations = request.d('UnityEngine.Rendering.ClampedIntParameter', i1077[8], i1076.maxIterations)
  i1076.dirtTexture = request.d('UnityEngine.Rendering.TextureParameter', i1077[9], i1076.dirtTexture)
  i1076.dirtIntensity = request.d('UnityEngine.Rendering.MinFloatParameter', i1077[10], i1076.dirtIntensity)
  i1076.active = !!i1077[11]
  return i1076
}

Deserializers["UnityEngine.Rendering.ClampedIntParameter"] = function (request, data, root) {
  var i1078 = root || request.c( 'UnityEngine.Rendering.ClampedIntParameter' )
  var i1079 = data
  i1078.m_Value = i1079[0]
  i1078.m_OverrideState = !!i1079[1]
  return i1078
}

Deserializers["UnityEngine.Rendering.MinFloatParameter"] = function (request, data, root) {
  var i1080 = root || request.c( 'UnityEngine.Rendering.MinFloatParameter' )
  var i1081 = data
  i1080.m_Value = i1081[0]
  i1080.m_OverrideState = !!i1081[1]
  return i1080
}

Deserializers["UnityEngine.Rendering.ColorParameter"] = function (request, data, root) {
  var i1082 = root || request.c( 'UnityEngine.Rendering.ColorParameter' )
  var i1083 = data
  i1082.m_Value = new pc.Color(i1083[0], i1083[1], i1083[2], i1083[3])
  i1082.m_OverrideState = !!i1083[4]
  return i1082
}

Deserializers["UnityEngine.Rendering.Universal.DownscaleParameter"] = function (request, data, root) {
  var i1084 = root || request.c( 'UnityEngine.Rendering.Universal.DownscaleParameter' )
  var i1085 = data
  i1084.m_Value = i1085[0]
  i1084.m_OverrideState = !!i1085[1]
  return i1084
}

Deserializers["UnityEngine.Rendering.TextureParameter"] = function (request, data, root) {
  var i1086 = root || request.c( 'UnityEngine.Rendering.TextureParameter' )
  var i1087 = data
  i1086.dimension = i1087[0]
  request.r(i1087[1], i1087[2], 0, i1086, 'm_Value')
  i1086.m_OverrideState = !!i1087[3]
  return i1086
}

Deserializers["UnityEngine.Rendering.Universal.MotionBlur"] = function (request, data, root) {
  var i1088 = root || request.c( 'UnityEngine.Rendering.Universal.MotionBlur' )
  var i1089 = data
  i1088.mode = request.d('UnityEngine.Rendering.Universal.MotionBlurModeParameter', i1089[0], i1088.mode)
  i1088.quality = request.d('UnityEngine.Rendering.Universal.MotionBlurQualityParameter', i1089[1], i1088.quality)
  i1088.intensity = request.d('UnityEngine.Rendering.ClampedFloatParameter', i1089[2], i1088.intensity)
  i1088.clamp = request.d('UnityEngine.Rendering.ClampedFloatParameter', i1089[3], i1088.clamp)
  i1088.active = !!i1089[4]
  return i1088
}

Deserializers["UnityEngine.Rendering.Universal.MotionBlurModeParameter"] = function (request, data, root) {
  var i1090 = root || request.c( 'UnityEngine.Rendering.Universal.MotionBlurModeParameter' )
  var i1091 = data
  i1090.m_Value = i1091[0]
  i1090.m_OverrideState = !!i1091[1]
  return i1090
}

Deserializers["UnityEngine.Rendering.Universal.MotionBlurQualityParameter"] = function (request, data, root) {
  var i1092 = root || request.c( 'UnityEngine.Rendering.Universal.MotionBlurQualityParameter' )
  var i1093 = data
  i1092.m_Value = i1093[0]
  i1092.m_OverrideState = !!i1093[1]
  return i1092
}

Deserializers["UnityEngine.Rendering.Universal.Vignette"] = function (request, data, root) {
  var i1094 = root || request.c( 'UnityEngine.Rendering.Universal.Vignette' )
  var i1095 = data
  i1094.color = request.d('UnityEngine.Rendering.ColorParameter', i1095[0], i1094.color)
  i1094.center = request.d('UnityEngine.Rendering.Vector2Parameter', i1095[1], i1094.center)
  i1094.intensity = request.d('UnityEngine.Rendering.ClampedFloatParameter', i1095[2], i1094.intensity)
  i1094.smoothness = request.d('UnityEngine.Rendering.ClampedFloatParameter', i1095[3], i1094.smoothness)
  i1094.rounded = request.d('UnityEngine.Rendering.BoolParameter', i1095[4], i1094.rounded)
  i1094.active = !!i1095[5]
  return i1094
}

Deserializers["UnityEngine.Rendering.Vector2Parameter"] = function (request, data, root) {
  var i1096 = root || request.c( 'UnityEngine.Rendering.Vector2Parameter' )
  var i1097 = data
  i1096.m_Value = new pc.Vec2( i1097[0], i1097[1] )
  i1096.m_OverrideState = !!i1097[2]
  return i1096
}

Deserializers["TMPro.TMP_FontAsset"] = function (request, data, root) {
  var i1098 = root || request.c( 'TMPro.TMP_FontAsset' )
  var i1099 = data
  i1098.normalStyle = i1099[0]
  i1098.normalSpacingOffset = i1099[1]
  i1098.boldStyle = i1099[2]
  i1098.boldSpacing = i1099[3]
  i1098.italicStyle = i1099[4]
  i1098.tabSize = i1099[5]
  request.r(i1099[6], i1099[7], 0, i1098, 'atlas')
  i1098.m_SourceFontFileGUID = i1099[8]
  i1098.m_CreationSettings = request.d('TMPro.FontAssetCreationSettings', i1099[9], i1098.m_CreationSettings)
  request.r(i1099[10], i1099[11], 0, i1098, 'm_SourceFontFile')
  i1098.m_SourceFontFilePath = i1099[12]
  i1098.m_AtlasPopulationMode = i1099[13]
  i1098.InternalDynamicOS = !!i1099[14]
  var i1101 = i1099[15]
  var i1100 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.TextCore.Glyph')))
  for(var i = 0; i < i1101.length; i += 1) {
    i1100.add(request.d('UnityEngine.TextCore.Glyph', i1101[i + 0]));
  }
  i1098.m_GlyphTable = i1100
  var i1103 = i1099[16]
  var i1102 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_Character')))
  for(var i = 0; i < i1103.length; i += 1) {
    i1102.add(request.d('TMPro.TMP_Character', i1103[i + 0]));
  }
  i1098.m_CharacterTable = i1102
  var i1105 = i1099[17]
  var i1104 = []
  for(var i = 0; i < i1105.length; i += 2) {
  request.r(i1105[i + 0], i1105[i + 1], 2, i1104, '')
  }
  i1098.m_AtlasTextures = i1104
  i1098.m_AtlasTextureIndex = i1099[18]
  i1098.m_IsMultiAtlasTexturesEnabled = !!i1099[19]
  i1098.m_GetFontFeatures = !!i1099[20]
  i1098.m_ClearDynamicDataOnBuild = !!i1099[21]
  i1098.m_AtlasWidth = i1099[22]
  i1098.m_AtlasHeight = i1099[23]
  i1098.m_AtlasPadding = i1099[24]
  i1098.m_AtlasRenderMode = i1099[25]
  var i1107 = i1099[26]
  var i1106 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.TextCore.GlyphRect')))
  for(var i = 0; i < i1107.length; i += 1) {
    i1106.add(request.d('UnityEngine.TextCore.GlyphRect', i1107[i + 0]));
  }
  i1098.m_UsedGlyphRects = i1106
  var i1109 = i1099[27]
  var i1108 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.TextCore.GlyphRect')))
  for(var i = 0; i < i1109.length; i += 1) {
    i1108.add(request.d('UnityEngine.TextCore.GlyphRect', i1109[i + 0]));
  }
  i1098.m_FreeGlyphRects = i1108
  i1098.m_FontFeatureTable = request.d('TMPro.TMP_FontFeatureTable', i1099[28], i1098.m_FontFeatureTable)
  i1098.m_ShouldReimportFontFeatures = !!i1099[29]
  var i1111 = i1099[30]
  var i1110 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_FontAsset')))
  for(var i = 0; i < i1111.length; i += 2) {
  request.r(i1111[i + 0], i1111[i + 1], 1, i1110, '')
  }
  i1098.m_FallbackFontAssetTable = i1110
  var i1113 = i1099[31]
  var i1112 = []
  for(var i = 0; i < i1113.length; i += 1) {
    i1112.push( request.d('TMPro.TMP_FontWeightPair', i1113[i + 0]) );
  }
  i1098.m_FontWeightTable = i1112
  var i1115 = i1099[32]
  var i1114 = []
  for(var i = 0; i < i1115.length; i += 1) {
    i1114.push( request.d('TMPro.TMP_FontWeightPair', i1115[i + 0]) );
  }
  i1098.fontWeights = i1114
  i1098.m_fontInfo = request.d('TMPro.FaceInfo_Legacy', i1099[33], i1098.m_fontInfo)
  var i1117 = i1099[34]
  var i1116 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_Glyph')))
  for(var i = 0; i < i1117.length; i += 1) {
    i1116.add(request.d('TMPro.TMP_Glyph', i1117[i + 0]));
  }
  i1098.m_glyphInfoList = i1116
  i1098.m_KerningTable = request.d('TMPro.KerningTable', i1099[35], i1098.m_KerningTable)
  var i1119 = i1099[36]
  var i1118 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_FontAsset')))
  for(var i = 0; i < i1119.length; i += 2) {
  request.r(i1119[i + 0], i1119[i + 1], 1, i1118, '')
  }
  i1098.fallbackFontAssets = i1118
  i1098.m_Version = i1099[37]
  i1098.m_FaceInfo = request.d('UnityEngine.TextCore.FaceInfo', i1099[38], i1098.m_FaceInfo)
  request.r(i1099[39], i1099[40], 0, i1098, 'm_Material')
  return i1098
}

Deserializers["TMPro.FontAssetCreationSettings"] = function (request, data, root) {
  var i1120 = root || request.c( 'TMPro.FontAssetCreationSettings' )
  var i1121 = data
  i1120.sourceFontFileName = i1121[0]
  i1120.sourceFontFileGUID = i1121[1]
  i1120.faceIndex = i1121[2]
  i1120.pointSizeSamplingMode = i1121[3]
  i1120.pointSize = i1121[4]
  i1120.padding = i1121[5]
  i1120.paddingMode = i1121[6]
  i1120.packingMode = i1121[7]
  i1120.atlasWidth = i1121[8]
  i1120.atlasHeight = i1121[9]
  i1120.characterSetSelectionMode = i1121[10]
  i1120.characterSequence = i1121[11]
  i1120.referencedFontAssetGUID = i1121[12]
  i1120.referencedTextAssetGUID = i1121[13]
  i1120.fontStyle = i1121[14]
  i1120.fontStyleModifier = i1121[15]
  i1120.renderMode = i1121[16]
  i1120.includeFontFeatures = !!i1121[17]
  return i1120
}

Deserializers["UnityEngine.TextCore.Glyph"] = function (request, data, root) {
  var i1124 = root || request.c( 'UnityEngine.TextCore.Glyph' )
  var i1125 = data
  i1124.m_Index = i1125[0]
  i1124.m_Metrics = request.d('UnityEngine.TextCore.GlyphMetrics', i1125[1], i1124.m_Metrics)
  i1124.m_GlyphRect = request.d('UnityEngine.TextCore.GlyphRect', i1125[2], i1124.m_GlyphRect)
  i1124.m_Scale = i1125[3]
  i1124.m_AtlasIndex = i1125[4]
  i1124.m_ClassDefinitionType = i1125[5]
  return i1124
}

Deserializers["UnityEngine.TextCore.GlyphMetrics"] = function (request, data, root) {
  var i1126 = root || request.c( 'UnityEngine.TextCore.GlyphMetrics' )
  var i1127 = data
  i1126.m_Width = i1127[0]
  i1126.m_Height = i1127[1]
  i1126.m_HorizontalBearingX = i1127[2]
  i1126.m_HorizontalBearingY = i1127[3]
  i1126.m_HorizontalAdvance = i1127[4]
  return i1126
}

Deserializers["UnityEngine.TextCore.GlyphRect"] = function (request, data, root) {
  var i1128 = root || request.c( 'UnityEngine.TextCore.GlyphRect' )
  var i1129 = data
  i1128.m_X = i1129[0]
  i1128.m_Y = i1129[1]
  i1128.m_Width = i1129[2]
  i1128.m_Height = i1129[3]
  return i1128
}

Deserializers["TMPro.TMP_Character"] = function (request, data, root) {
  var i1132 = root || request.c( 'TMPro.TMP_Character' )
  var i1133 = data
  i1132.m_ElementType = i1133[0]
  i1132.m_Unicode = i1133[1]
  i1132.m_GlyphIndex = i1133[2]
  i1132.m_Scale = i1133[3]
  return i1132
}

Deserializers["TMPro.TMP_FontFeatureTable"] = function (request, data, root) {
  var i1138 = root || request.c( 'TMPro.TMP_FontFeatureTable' )
  var i1139 = data
  var i1141 = i1139[0]
  var i1140 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.MultipleSubstitutionRecord')))
  for(var i = 0; i < i1141.length; i += 1) {
    i1140.add(request.d('TMPro.MultipleSubstitutionRecord', i1141[i + 0]));
  }
  i1138.m_MultipleSubstitutionRecords = i1140
  var i1143 = i1139[1]
  var i1142 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.LigatureSubstitutionRecord')))
  for(var i = 0; i < i1143.length; i += 1) {
    i1142.add(request.d('TMPro.LigatureSubstitutionRecord', i1143[i + 0]));
  }
  i1138.m_LigatureSubstitutionRecords = i1142
  var i1145 = i1139[2]
  var i1144 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.TextCore.LowLevel.GlyphPairAdjustmentRecord')))
  for(var i = 0; i < i1145.length; i += 1) {
    i1144.add(request.d('UnityEngine.TextCore.LowLevel.GlyphPairAdjustmentRecord', i1145[i + 0]));
  }
  i1138.m_GlyphPairAdjustmentRecords = i1144
  var i1147 = i1139[3]
  var i1146 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.MarkToBaseAdjustmentRecord')))
  for(var i = 0; i < i1147.length; i += 1) {
    i1146.add(request.d('TMPro.MarkToBaseAdjustmentRecord', i1147[i + 0]));
  }
  i1138.m_MarkToBaseAdjustmentRecords = i1146
  var i1149 = i1139[4]
  var i1148 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.MarkToMarkAdjustmentRecord')))
  for(var i = 0; i < i1149.length; i += 1) {
    i1148.add(request.d('TMPro.MarkToMarkAdjustmentRecord', i1149[i + 0]));
  }
  i1138.m_MarkToMarkAdjustmentRecords = i1148
  return i1138
}

Deserializers["TMPro.MultipleSubstitutionRecord"] = function (request, data, root) {
  var i1152 = root || request.c( 'TMPro.MultipleSubstitutionRecord' )
  var i1153 = data
  i1152.m_TargetGlyphID = i1153[0]
  i1152.m_SubstituteGlyphIDs = i1153[1]
  return i1152
}

Deserializers["TMPro.LigatureSubstitutionRecord"] = function (request, data, root) {
  var i1156 = root || request.c( 'TMPro.LigatureSubstitutionRecord' )
  var i1157 = data
  i1156.m_ComponentGlyphIDs = i1157[0]
  i1156.m_LigatureGlyphID = i1157[1]
  return i1156
}

Deserializers["UnityEngine.TextCore.LowLevel.GlyphPairAdjustmentRecord"] = function (request, data, root) {
  var i1160 = root || request.c( 'UnityEngine.TextCore.LowLevel.GlyphPairAdjustmentRecord' )
  var i1161 = data
  i1160.m_FirstAdjustmentRecord = request.d('UnityEngine.TextCore.LowLevel.GlyphAdjustmentRecord', i1161[0], i1160.m_FirstAdjustmentRecord)
  i1160.m_SecondAdjustmentRecord = request.d('UnityEngine.TextCore.LowLevel.GlyphAdjustmentRecord', i1161[1], i1160.m_SecondAdjustmentRecord)
  i1160.m_FeatureLookupFlags = i1161[2]
  return i1160
}

Deserializers["TMPro.MarkToBaseAdjustmentRecord"] = function (request, data, root) {
  var i1164 = root || request.c( 'TMPro.MarkToBaseAdjustmentRecord' )
  var i1165 = data
  i1164.m_BaseGlyphID = i1165[0]
  i1164.m_BaseGlyphAnchorPoint = request.d('TMPro.GlyphAnchorPoint', i1165[1], i1164.m_BaseGlyphAnchorPoint)
  i1164.m_MarkGlyphID = i1165[2]
  i1164.m_MarkPositionAdjustment = request.d('TMPro.MarkPositionAdjustment', i1165[3], i1164.m_MarkPositionAdjustment)
  return i1164
}

Deserializers["TMPro.MarkToMarkAdjustmentRecord"] = function (request, data, root) {
  var i1168 = root || request.c( 'TMPro.MarkToMarkAdjustmentRecord' )
  var i1169 = data
  i1168.m_BaseMarkGlyphID = i1169[0]
  i1168.m_BaseMarkGlyphAnchorPoint = request.d('TMPro.GlyphAnchorPoint', i1169[1], i1168.m_BaseMarkGlyphAnchorPoint)
  i1168.m_CombiningMarkGlyphID = i1169[2]
  i1168.m_CombiningMarkPositionAdjustment = request.d('TMPro.MarkPositionAdjustment', i1169[3], i1168.m_CombiningMarkPositionAdjustment)
  return i1168
}

Deserializers["TMPro.TMP_FontWeightPair"] = function (request, data, root) {
  var i1174 = root || request.c( 'TMPro.TMP_FontWeightPair' )
  var i1175 = data
  request.r(i1175[0], i1175[1], 0, i1174, 'regularTypeface')
  request.r(i1175[2], i1175[3], 0, i1174, 'italicTypeface')
  return i1174
}

Deserializers["TMPro.FaceInfo_Legacy"] = function (request, data, root) {
  var i1176 = root || request.c( 'TMPro.FaceInfo_Legacy' )
  var i1177 = data
  i1176.Name = i1177[0]
  i1176.PointSize = i1177[1]
  i1176.Scale = i1177[2]
  i1176.CharacterCount = i1177[3]
  i1176.LineHeight = i1177[4]
  i1176.Baseline = i1177[5]
  i1176.Ascender = i1177[6]
  i1176.CapHeight = i1177[7]
  i1176.Descender = i1177[8]
  i1176.CenterLine = i1177[9]
  i1176.SuperscriptOffset = i1177[10]
  i1176.SubscriptOffset = i1177[11]
  i1176.SubSize = i1177[12]
  i1176.Underline = i1177[13]
  i1176.UnderlineThickness = i1177[14]
  i1176.strikethrough = i1177[15]
  i1176.strikethroughThickness = i1177[16]
  i1176.TabWidth = i1177[17]
  i1176.Padding = i1177[18]
  i1176.AtlasWidth = i1177[19]
  i1176.AtlasHeight = i1177[20]
  return i1176
}

Deserializers["TMPro.TMP_Glyph"] = function (request, data, root) {
  var i1180 = root || request.c( 'TMPro.TMP_Glyph' )
  var i1181 = data
  i1180.id = i1181[0]
  i1180.x = i1181[1]
  i1180.y = i1181[2]
  i1180.width = i1181[3]
  i1180.height = i1181[4]
  i1180.xOffset = i1181[5]
  i1180.yOffset = i1181[6]
  i1180.xAdvance = i1181[7]
  i1180.scale = i1181[8]
  return i1180
}

Deserializers["TMPro.KerningTable"] = function (request, data, root) {
  var i1182 = root || request.c( 'TMPro.KerningTable' )
  var i1183 = data
  var i1185 = i1183[0]
  var i1184 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.KerningPair')))
  for(var i = 0; i < i1185.length; i += 1) {
    i1184.add(request.d('TMPro.KerningPair', i1185[i + 0]));
  }
  i1182.kerningPairs = i1184
  return i1182
}

Deserializers["TMPro.KerningPair"] = function (request, data, root) {
  var i1188 = root || request.c( 'TMPro.KerningPair' )
  var i1189 = data
  i1188.xOffset = i1189[0]
  i1188.m_FirstGlyph = i1189[1]
  i1188.m_FirstGlyphAdjustments = request.d('TMPro.GlyphValueRecord_Legacy', i1189[2], i1188.m_FirstGlyphAdjustments)
  i1188.m_SecondGlyph = i1189[3]
  i1188.m_SecondGlyphAdjustments = request.d('TMPro.GlyphValueRecord_Legacy', i1189[4], i1188.m_SecondGlyphAdjustments)
  i1188.m_IgnoreSpacingAdjustments = !!i1189[5]
  return i1188
}

Deserializers["UnityEngine.TextCore.FaceInfo"] = function (request, data, root) {
  var i1190 = root || request.c( 'UnityEngine.TextCore.FaceInfo' )
  var i1191 = data
  i1190.m_FaceIndex = i1191[0]
  i1190.m_FamilyName = i1191[1]
  i1190.m_StyleName = i1191[2]
  i1190.m_PointSize = i1191[3]
  i1190.m_Scale = i1191[4]
  i1190.m_UnitsPerEM = i1191[5]
  i1190.m_LineHeight = i1191[6]
  i1190.m_AscentLine = i1191[7]
  i1190.m_CapLine = i1191[8]
  i1190.m_MeanLine = i1191[9]
  i1190.m_Baseline = i1191[10]
  i1190.m_DescentLine = i1191[11]
  i1190.m_SuperscriptOffset = i1191[12]
  i1190.m_SuperscriptSize = i1191[13]
  i1190.m_SubscriptOffset = i1191[14]
  i1190.m_SubscriptSize = i1191[15]
  i1190.m_UnderlineOffset = i1191[16]
  i1190.m_UnderlineThickness = i1191[17]
  i1190.m_StrikethroughOffset = i1191[18]
  i1190.m_StrikethroughThickness = i1191[19]
  i1190.m_TabWidth = i1191[20]
  return i1190
}

Deserializers["TMPro.TMP_Settings"] = function (request, data, root) {
  var i1192 = root || request.c( 'TMPro.TMP_Settings' )
  var i1193 = data
  i1192.assetVersion = i1193[0]
  i1192.m_TextWrappingMode = i1193[1]
  i1192.m_enableKerning = !!i1193[2]
  var i1195 = i1193[3]
  var i1194 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.TextCore.OTL_FeatureTag')))
  for(var i = 0; i < i1195.length; i += 1) {
    i1194.add(i1195[i + 0]);
  }
  i1192.m_ActiveFontFeatures = i1194
  i1192.m_enableExtraPadding = !!i1193[4]
  i1192.m_enableTintAllSprites = !!i1193[5]
  i1192.m_enableParseEscapeCharacters = !!i1193[6]
  i1192.m_EnableRaycastTarget = !!i1193[7]
  i1192.m_GetFontFeaturesAtRuntime = !!i1193[8]
  i1192.m_missingGlyphCharacter = i1193[9]
  i1192.m_ClearDynamicDataOnBuild = !!i1193[10]
  i1192.m_warningsDisabled = !!i1193[11]
  request.r(i1193[12], i1193[13], 0, i1192, 'm_defaultFontAsset')
  i1192.m_defaultFontAssetPath = i1193[14]
  i1192.m_defaultFontSize = i1193[15]
  i1192.m_defaultAutoSizeMinRatio = i1193[16]
  i1192.m_defaultAutoSizeMaxRatio = i1193[17]
  i1192.m_defaultTextMeshProTextContainerSize = new pc.Vec2( i1193[18], i1193[19] )
  i1192.m_defaultTextMeshProUITextContainerSize = new pc.Vec2( i1193[20], i1193[21] )
  i1192.m_autoSizeTextContainer = !!i1193[22]
  i1192.m_IsTextObjectScaleStatic = !!i1193[23]
  var i1197 = i1193[24]
  var i1196 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_FontAsset')))
  for(var i = 0; i < i1197.length; i += 2) {
  request.r(i1197[i + 0], i1197[i + 1], 1, i1196, '')
  }
  i1192.m_fallbackFontAssets = i1196
  i1192.m_matchMaterialPreset = !!i1193[25]
  i1192.m_HideSubTextObjects = !!i1193[26]
  request.r(i1193[27], i1193[28], 0, i1192, 'm_defaultSpriteAsset')
  i1192.m_defaultSpriteAssetPath = i1193[29]
  i1192.m_enableEmojiSupport = !!i1193[30]
  i1192.m_MissingCharacterSpriteUnicode = i1193[31]
  var i1199 = i1193[32]
  var i1198 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_Asset')))
  for(var i = 0; i < i1199.length; i += 2) {
  request.r(i1199[i + 0], i1199[i + 1], 1, i1198, '')
  }
  i1192.m_EmojiFallbackTextAssets = i1198
  i1192.m_defaultColorGradientPresetsPath = i1193[33]
  request.r(i1193[34], i1193[35], 0, i1192, 'm_defaultStyleSheet')
  i1192.m_StyleSheetsResourcePath = i1193[36]
  request.r(i1193[37], i1193[38], 0, i1192, 'm_leadingCharacters')
  request.r(i1193[39], i1193[40], 0, i1192, 'm_followingCharacters')
  i1192.m_UseModernHangulLineBreakingRules = !!i1193[41]
  return i1192
}

Deserializers["UnityEngine.TextCore.LowLevel.GlyphAdjustmentRecord"] = function (request, data, root) {
  var i1202 = root || request.c( 'UnityEngine.TextCore.LowLevel.GlyphAdjustmentRecord' )
  var i1203 = data
  i1202.m_GlyphIndex = i1203[0]
  i1202.m_GlyphValueRecord = request.d('UnityEngine.TextCore.LowLevel.GlyphValueRecord', i1203[1], i1202.m_GlyphValueRecord)
  return i1202
}

Deserializers["UnityEngine.TextCore.LowLevel.GlyphValueRecord"] = function (request, data, root) {
  var i1204 = root || request.c( 'UnityEngine.TextCore.LowLevel.GlyphValueRecord' )
  var i1205 = data
  i1204.m_XPlacement = i1205[0]
  i1204.m_YPlacement = i1205[1]
  i1204.m_XAdvance = i1205[2]
  i1204.m_YAdvance = i1205[3]
  return i1204
}

Deserializers["TMPro.TMP_SpriteAsset"] = function (request, data, root) {
  var i1206 = root || request.c( 'TMPro.TMP_SpriteAsset' )
  var i1207 = data
  request.r(i1207[0], i1207[1], 0, i1206, 'spriteSheet')
  var i1209 = i1207[2]
  var i1208 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_Sprite')))
  for(var i = 0; i < i1209.length; i += 1) {
    i1208.add(request.d('TMPro.TMP_Sprite', i1209[i + 0]));
  }
  i1206.spriteInfoList = i1208
  var i1211 = i1207[3]
  var i1210 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_SpriteAsset')))
  for(var i = 0; i < i1211.length; i += 2) {
  request.r(i1211[i + 0], i1211[i + 1], 1, i1210, '')
  }
  i1206.fallbackSpriteAssets = i1210
  var i1213 = i1207[4]
  var i1212 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_SpriteCharacter')))
  for(var i = 0; i < i1213.length; i += 1) {
    i1212.add(request.d('TMPro.TMP_SpriteCharacter', i1213[i + 0]));
  }
  i1206.m_SpriteCharacterTable = i1212
  var i1215 = i1207[5]
  var i1214 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_SpriteGlyph')))
  for(var i = 0; i < i1215.length; i += 1) {
    i1214.add(request.d('TMPro.TMP_SpriteGlyph', i1215[i + 0]));
  }
  i1206.m_GlyphTable = i1214
  i1206.m_Version = i1207[6]
  i1206.m_FaceInfo = request.d('UnityEngine.TextCore.FaceInfo', i1207[7], i1206.m_FaceInfo)
  request.r(i1207[8], i1207[9], 0, i1206, 'm_Material')
  return i1206
}

Deserializers["TMPro.TMP_Sprite"] = function (request, data, root) {
  var i1218 = root || request.c( 'TMPro.TMP_Sprite' )
  var i1219 = data
  i1218.name = i1219[0]
  i1218.hashCode = i1219[1]
  i1218.unicode = i1219[2]
  i1218.pivot = new pc.Vec2( i1219[3], i1219[4] )
  request.r(i1219[5], i1219[6], 0, i1218, 'sprite')
  i1218.id = i1219[7]
  i1218.x = i1219[8]
  i1218.y = i1219[9]
  i1218.width = i1219[10]
  i1218.height = i1219[11]
  i1218.xOffset = i1219[12]
  i1218.yOffset = i1219[13]
  i1218.xAdvance = i1219[14]
  i1218.scale = i1219[15]
  return i1218
}

Deserializers["TMPro.TMP_SpriteCharacter"] = function (request, data, root) {
  var i1224 = root || request.c( 'TMPro.TMP_SpriteCharacter' )
  var i1225 = data
  i1224.m_Name = i1225[0]
  i1224.m_ElementType = i1225[1]
  i1224.m_Unicode = i1225[2]
  i1224.m_GlyphIndex = i1225[3]
  i1224.m_Scale = i1225[4]
  return i1224
}

Deserializers["TMPro.TMP_SpriteGlyph"] = function (request, data, root) {
  var i1228 = root || request.c( 'TMPro.TMP_SpriteGlyph' )
  var i1229 = data
  request.r(i1229[0], i1229[1], 0, i1228, 'sprite')
  i1228.m_Index = i1229[2]
  i1228.m_Metrics = request.d('UnityEngine.TextCore.GlyphMetrics', i1229[3], i1228.m_Metrics)
  i1228.m_GlyphRect = request.d('UnityEngine.TextCore.GlyphRect', i1229[4], i1228.m_GlyphRect)
  i1228.m_Scale = i1229[5]
  i1228.m_AtlasIndex = i1229[6]
  i1228.m_ClassDefinitionType = i1229[7]
  return i1228
}

Deserializers["TMPro.TMP_StyleSheet"] = function (request, data, root) {
  var i1230 = root || request.c( 'TMPro.TMP_StyleSheet' )
  var i1231 = data
  var i1233 = i1231[0]
  var i1232 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_Style')))
  for(var i = 0; i < i1233.length; i += 1) {
    i1232.add(request.d('TMPro.TMP_Style', i1233[i + 0]));
  }
  i1230.m_StyleList = i1232
  return i1230
}

Deserializers["TMPro.TMP_Style"] = function (request, data, root) {
  var i1236 = root || request.c( 'TMPro.TMP_Style' )
  var i1237 = data
  i1236.m_Name = i1237[0]
  i1236.m_HashCode = i1237[1]
  i1236.m_OpeningDefinition = i1237[2]
  i1236.m_ClosingDefinition = i1237[3]
  i1236.m_OpeningTagArray = i1237[4]
  i1236.m_ClosingTagArray = i1237[5]
  return i1236
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Resources"] = function (request, data, root) {
  var i1238 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Resources' )
  var i1239 = data
  var i1241 = i1239[0]
  var i1240 = []
  for(var i = 0; i < i1241.length; i += 1) {
    i1240.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Resources+File', i1241[i + 0]) );
  }
  i1238.files = i1240
  i1238.componentToPrefabIds = i1239[1]
  return i1238
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Resources+File"] = function (request, data, root) {
  var i1244 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Resources+File' )
  var i1245 = data
  i1244.path = i1245[0]
  request.r(i1245[1], i1245[2], 0, i1244, 'unityObject')
  return i1244
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings"] = function (request, data, root) {
  var i1246 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings' )
  var i1247 = data
  var i1249 = i1247[0]
  var i1248 = []
  for(var i = 0; i < i1249.length; i += 1) {
    i1248.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+ScriptsExecutionOrder', i1249[i + 0]) );
  }
  i1246.scriptsExecutionOrder = i1248
  var i1251 = i1247[1]
  var i1250 = []
  for(var i = 0; i < i1251.length; i += 1) {
    i1250.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+SortingLayer', i1251[i + 0]) );
  }
  i1246.sortingLayers = i1250
  var i1253 = i1247[2]
  var i1252 = []
  for(var i = 0; i < i1253.length; i += 1) {
    i1252.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+CullingLayer', i1253[i + 0]) );
  }
  i1246.cullingLayers = i1252
  i1246.timeSettings = request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+TimeSettings', i1247[3], i1246.timeSettings)
  i1246.physicsSettings = request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings', i1247[4], i1246.physicsSettings)
  i1246.physics2DSettings = request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings', i1247[5], i1246.physics2DSettings)
  i1246.qualitySettings = request.d('Luna.Unity.DTO.UnityEngine.Assets.QualitySettings', i1247[6], i1246.qualitySettings)
  i1246.enableRealtimeShadows = !!i1247[7]
  i1246.enableAutoInstancing = !!i1247[8]
  i1246.enableStaticBatching = !!i1247[9]
  i1246.enableDynamicBatching = !!i1247[10]
  i1246.lightmapEncodingQuality = i1247[11]
  i1246.desiredColorSpace = i1247[12]
  var i1255 = i1247[13]
  var i1254 = []
  for(var i = 0; i < i1255.length; i += 1) {
    i1254.push( i1255[i + 0] );
  }
  i1246.allTags = i1254
  return i1246
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+ScriptsExecutionOrder"] = function (request, data, root) {
  var i1258 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+ScriptsExecutionOrder' )
  var i1259 = data
  i1258.name = i1259[0]
  i1258.value = i1259[1]
  return i1258
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+SortingLayer"] = function (request, data, root) {
  var i1262 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+SortingLayer' )
  var i1263 = data
  i1262.id = i1263[0]
  i1262.name = i1263[1]
  i1262.value = i1263[2]
  return i1262
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+CullingLayer"] = function (request, data, root) {
  var i1266 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+CullingLayer' )
  var i1267 = data
  i1266.id = i1267[0]
  i1266.name = i1267[1]
  return i1266
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+TimeSettings"] = function (request, data, root) {
  var i1268 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+TimeSettings' )
  var i1269 = data
  i1268.fixedDeltaTime = i1269[0]
  i1268.maximumDeltaTime = i1269[1]
  i1268.timeScale = i1269[2]
  i1268.maximumParticleTimestep = i1269[3]
  return i1268
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings"] = function (request, data, root) {
  var i1270 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings' )
  var i1271 = data
  i1270.gravity = new pc.Vec3( i1271[0], i1271[1], i1271[2] )
  i1270.defaultSolverIterations = i1271[3]
  i1270.bounceThreshold = i1271[4]
  i1270.autoSyncTransforms = !!i1271[5]
  i1270.autoSimulation = !!i1271[6]
  var i1273 = i1271[7]
  var i1272 = []
  for(var i = 0; i < i1273.length; i += 1) {
    i1272.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings+CollisionMask', i1273[i + 0]) );
  }
  i1270.collisionMatrix = i1272
  return i1270
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings+CollisionMask"] = function (request, data, root) {
  var i1276 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings+CollisionMask' )
  var i1277 = data
  i1276.enabled = !!i1277[0]
  i1276.layerId = i1277[1]
  i1276.otherLayerId = i1277[2]
  return i1276
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings"] = function (request, data, root) {
  var i1278 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings' )
  var i1279 = data
  request.r(i1279[0], i1279[1], 0, i1278, 'material')
  i1278.gravity = new pc.Vec2( i1279[2], i1279[3] )
  i1278.positionIterations = i1279[4]
  i1278.velocityIterations = i1279[5]
  i1278.velocityThreshold = i1279[6]
  i1278.maxLinearCorrection = i1279[7]
  i1278.maxAngularCorrection = i1279[8]
  i1278.maxTranslationSpeed = i1279[9]
  i1278.maxRotationSpeed = i1279[10]
  i1278.baumgarteScale = i1279[11]
  i1278.baumgarteTOIScale = i1279[12]
  i1278.timeToSleep = i1279[13]
  i1278.linearSleepTolerance = i1279[14]
  i1278.angularSleepTolerance = i1279[15]
  i1278.defaultContactOffset = i1279[16]
  i1278.autoSimulation = !!i1279[17]
  i1278.queriesHitTriggers = !!i1279[18]
  i1278.queriesStartInColliders = !!i1279[19]
  i1278.callbacksOnDisable = !!i1279[20]
  i1278.reuseCollisionCallbacks = !!i1279[21]
  i1278.autoSyncTransforms = !!i1279[22]
  var i1281 = i1279[23]
  var i1280 = []
  for(var i = 0; i < i1281.length; i += 1) {
    i1280.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings+CollisionMask', i1281[i + 0]) );
  }
  i1278.collisionMatrix = i1280
  return i1278
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings+CollisionMask"] = function (request, data, root) {
  var i1284 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings+CollisionMask' )
  var i1285 = data
  i1284.enabled = !!i1285[0]
  i1284.layerId = i1285[1]
  i1284.otherLayerId = i1285[2]
  return i1284
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.QualitySettings"] = function (request, data, root) {
  var i1286 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.QualitySettings' )
  var i1287 = data
  var i1289 = i1287[0]
  var i1288 = []
  for(var i = 0; i < i1289.length; i += 1) {
    i1288.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.QualitySettings', i1289[i + 0]) );
  }
  i1286.qualityLevels = i1288
  var i1291 = i1287[1]
  var i1290 = []
  for(var i = 0; i < i1291.length; i += 1) {
    i1290.push( i1291[i + 0] );
  }
  i1286.names = i1290
  i1286.shadows = i1287[2]
  i1286.anisotropicFiltering = i1287[3]
  i1286.antiAliasing = i1287[4]
  i1286.lodBias = i1287[5]
  i1286.shadowCascades = i1287[6]
  i1286.shadowDistance = i1287[7]
  i1286.shadowmaskMode = i1287[8]
  i1286.shadowProjection = i1287[9]
  i1286.shadowResolution = i1287[10]
  i1286.softParticles = !!i1287[11]
  i1286.softVegetation = !!i1287[12]
  i1286.activeColorSpace = i1287[13]
  i1286.desiredColorSpace = i1287[14]
  i1286.masterTextureLimit = i1287[15]
  i1286.maxQueuedFrames = i1287[16]
  i1286.particleRaycastBudget = i1287[17]
  i1286.pixelLightCount = i1287[18]
  i1286.realtimeReflectionProbes = !!i1287[19]
  i1286.shadowCascade2Split = i1287[20]
  i1286.shadowCascade4Split = new pc.Vec3( i1287[21], i1287[22], i1287[23] )
  i1286.streamingMipmapsActive = !!i1287[24]
  i1286.vSyncCount = i1287[25]
  i1286.asyncUploadBufferSize = i1287[26]
  i1286.asyncUploadTimeSlice = i1287[27]
  i1286.billboardsFaceCameraPosition = !!i1287[28]
  i1286.shadowNearPlaneOffset = i1287[29]
  i1286.streamingMipmapsMemoryBudget = i1287[30]
  i1286.maximumLODLevel = i1287[31]
  i1286.streamingMipmapsAddAllCameras = !!i1287[32]
  i1286.streamingMipmapsMaxLevelReduction = i1287[33]
  i1286.streamingMipmapsRenderersPerFrame = i1287[34]
  i1286.resolutionScalingFixedDPIFactor = i1287[35]
  i1286.streamingMipmapsMaxFileIORequests = i1287[36]
  i1286.currentQualityLevel = i1287[37]
  return i1286
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShapeFrame"] = function (request, data, root) {
  var i1296 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShapeFrame' )
  var i1297 = data
  i1296.weight = i1297[0]
  i1296.vertices = i1297[1]
  i1296.normals = i1297[2]
  i1296.tangents = i1297[3]
  return i1296
}

Deserializers["TMPro.GlyphAnchorPoint"] = function (request, data, root) {
  var i1298 = root || request.c( 'TMPro.GlyphAnchorPoint' )
  var i1299 = data
  i1298.m_XCoordinate = i1299[0]
  i1298.m_YCoordinate = i1299[1]
  return i1298
}

Deserializers["TMPro.MarkPositionAdjustment"] = function (request, data, root) {
  var i1300 = root || request.c( 'TMPro.MarkPositionAdjustment' )
  var i1301 = data
  i1300.m_XPositionAdjustment = i1301[0]
  i1300.m_YPositionAdjustment = i1301[1]
  return i1300
}

Deserializers["TMPro.GlyphValueRecord_Legacy"] = function (request, data, root) {
  var i1302 = root || request.c( 'TMPro.GlyphValueRecord_Legacy' )
  var i1303 = data
  i1302.xPlacement = i1303[0]
  i1302.yPlacement = i1303[1]
  i1302.xAdvance = i1303[2]
  i1302.yAdvance = i1303[3]
  return i1302
}

Deserializers.fields = {"Luna.Unity.DTO.UnityEngine.Assets.Mesh":{"name":0,"halfPrecision":1,"useSimplification":2,"useUInt32IndexFormat":3,"vertexCount":4,"aabb":5,"streams":6,"vertices":7,"subMeshes":8,"bindposes":9,"blendShapes":10},"Luna.Unity.DTO.UnityEngine.Assets.Mesh+SubMesh":{"triangles":0},"Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShape":{"name":0,"frames":1},"Luna.Unity.DTO.UnityEngine.Assets.Material":{"name":0,"shader":1,"renderQueue":3,"enableInstancing":4,"floatParameters":5,"colorParameters":6,"vectorParameters":7,"textureParameters":8,"materialFlags":9},"Luna.Unity.DTO.UnityEngine.Assets.Material+FloatParameter":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Material+ColorParameter":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Material+VectorParameter":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Material+TextureParameter":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Material+MaterialFlag":{"name":0,"enabled":1},"Luna.Unity.DTO.UnityEngine.Textures.Texture2D":{"name":0,"width":1,"height":2,"mipmapCount":3,"anisoLevel":4,"filterMode":5,"hdr":6,"format":7,"wrapMode":8,"alphaIsTransparency":9,"alphaSource":10,"graphicsFormat":11,"sRGBTexture":12,"desiredColorSpace":13,"wrapU":14,"wrapV":15},"Luna.Unity.DTO.UnityEngine.Components.Transform":{"position":0,"scale":3,"rotation":6},"Luna.Unity.DTO.UnityEngine.Components.MeshFilter":{"sharedMesh":0},"Luna.Unity.DTO.UnityEngine.Components.MeshRenderer":{"additionalVertexStreams":0,"enabled":2,"sharedMaterial":3,"sharedMaterials":5,"receiveShadows":6,"shadowCastingMode":7,"sortingLayerID":8,"sortingOrder":9,"lightmapIndex":10,"lightmapSceneIndex":11,"lightmapScaleOffset":12,"lightProbeUsage":16,"reflectionProbeUsage":17},"Luna.Unity.DTO.UnityEngine.Components.MeshCollider":{"sharedMesh":0,"convex":2,"enabled":3,"isTrigger":4,"material":5},"Luna.Unity.DTO.UnityEngine.Scene.GameObject":{"name":0,"tagId":1,"enabled":2,"isStatic":3,"layer":4},"Luna.Unity.DTO.UnityEngine.Textures.RenderTexture":{"name":0,"width":1,"height":2,"anisoLevel":3,"filterMode":4,"hdr":5,"colorFormat":6,"depthStencilFormat":7,"renderTextureFormat":8,"depth":9,"wrapU":10,"wrapV":11},"Luna.Unity.DTO.UnityEngine.Components.SphereCollider":{"center":0,"radius":3,"enabled":4,"isTrigger":5,"material":6},"Luna.Unity.DTO.UnityEngine.Components.Rigidbody":{"mass":0,"drag":1,"angularDrag":2,"useGravity":3,"isKinematic":4,"constraints":5,"maxAngularVelocity":6,"collisionDetectionMode":7,"interpolation":8},"Luna.Unity.DTO.UnityEngine.Components.ParticleSystem":{"main":0,"colorBySpeed":1,"colorOverLifetime":2,"emission":3,"rotationBySpeed":4,"rotationOverLifetime":5,"shape":6,"sizeBySpeed":7,"sizeOverLifetime":8,"textureSheetAnimation":9,"velocityOverLifetime":10,"noise":11,"inheritVelocity":12,"forceOverLifetime":13,"limitVelocityOverLifetime":14,"useAutoRandomSeed":15,"randomSeed":16},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.MainModule":{"duration":0,"loop":1,"prewarm":2,"startDelay":3,"startLifetime":4,"startSpeed":5,"startSize3D":6,"startSizeX":7,"startSizeY":8,"startSizeZ":9,"startRotation3D":10,"startRotationX":11,"startRotationY":12,"startRotationZ":13,"startColor":14,"gravityModifier":15,"simulationSpace":16,"customSimulationSpace":17,"simulationSpeed":19,"useUnscaledTime":20,"scalingMode":21,"playOnAwake":22,"maxParticles":23,"emitterVelocityMode":24,"stopAction":25},"Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve":{"mode":0,"curveMin":1,"curveMax":2,"curveMultiplier":3,"constantMin":4,"constantMax":5},"Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxGradient":{"mode":0,"gradientMin":1,"gradientMax":2,"colorMin":3,"colorMax":7},"Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Gradient":{"mode":0,"colorKeys":1,"alphaKeys":2},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ColorBySpeedModule":{"enabled":0,"color":1,"range":2},"Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientColorKey":{"color":0,"time":4},"Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientAlphaKey":{"alpha":0,"time":1},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ColorOverLifetimeModule":{"enabled":0,"color":1},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.EmissionModule":{"enabled":0,"rateOverTime":1,"rateOverDistance":2,"bursts":3},"Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Burst":{"count":0,"cycleCount":1,"minCount":2,"maxCount":3,"repeatInterval":4,"time":5},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.RotationBySpeedModule":{"enabled":0,"x":1,"y":2,"z":3,"separateAxes":4,"range":5},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.RotationOverLifetimeModule":{"enabled":0,"x":1,"y":2,"z":3,"separateAxes":4},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ShapeModule":{"enabled":0,"shapeType":1,"randomDirectionAmount":2,"sphericalDirectionAmount":3,"randomPositionAmount":4,"alignToDirection":5,"radius":6,"radiusMode":7,"radiusSpread":8,"radiusSpeed":9,"radiusThickness":10,"angle":11,"length":12,"boxThickness":13,"meshShapeType":16,"mesh":17,"meshRenderer":19,"skinnedMeshRenderer":21,"useMeshMaterialIndex":23,"meshMaterialIndex":24,"useMeshColors":25,"normalOffset":26,"arc":27,"arcMode":28,"arcSpread":29,"arcSpeed":30,"donutRadius":31,"position":32,"rotation":35,"scale":38},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.SizeBySpeedModule":{"enabled":0,"x":1,"y":2,"z":3,"separateAxes":4,"range":5},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.SizeOverLifetimeModule":{"enabled":0,"x":1,"y":2,"z":3,"separateAxes":4},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.TextureSheetAnimationModule":{"enabled":0,"mode":1,"animation":2,"numTilesX":3,"numTilesY":4,"useRandomRow":5,"frameOverTime":6,"startFrame":7,"cycleCount":8,"rowIndex":9,"flipU":10,"flipV":11,"spriteCount":12,"sprites":13},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.VelocityOverLifetimeModule":{"enabled":0,"x":1,"y":2,"z":3,"radial":4,"speedModifier":5,"space":6,"orbitalX":7,"orbitalY":8,"orbitalZ":9,"orbitalOffsetX":10,"orbitalOffsetY":11,"orbitalOffsetZ":12},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.NoiseModule":{"enabled":0,"separateAxes":1,"strengthX":2,"strengthY":3,"strengthZ":4,"frequency":5,"damping":6,"octaveCount":7,"octaveMultiplier":8,"octaveScale":9,"quality":10,"scrollSpeed":11,"scrollSpeedMultiplier":12,"remapEnabled":13,"remapX":14,"remapY":15,"remapZ":16,"positionAmount":17,"rotationAmount":18,"sizeAmount":19},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.InheritVelocityModule":{"enabled":0,"mode":1,"curve":2},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ForceOverLifetimeModule":{"enabled":0,"x":1,"y":2,"z":3,"space":4,"randomized":5},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.LimitVelocityOverLifetimeModule":{"enabled":0,"limit":1,"limitX":2,"limitY":3,"limitZ":4,"dampen":5,"separateAxes":6,"space":7,"drag":8,"multiplyDragByParticleSize":9,"multiplyDragByParticleVelocity":10},"Luna.Unity.DTO.UnityEngine.Components.ParticleSystemRenderer":{"mesh":0,"meshCount":2,"activeVertexStreamsCount":3,"alignment":4,"renderMode":5,"sortMode":6,"lengthScale":7,"velocityScale":8,"cameraVelocityScale":9,"normalDirection":10,"sortingFudge":11,"minParticleSize":12,"maxParticleSize":13,"pivot":14,"trailMaterial":17,"applyActiveColorSpace":19,"enabled":20,"sharedMaterial":21,"sharedMaterials":23,"receiveShadows":24,"shadowCastingMode":25,"sortingLayerID":26,"sortingOrder":27,"lightmapIndex":28,"lightmapSceneIndex":29,"lightmapScaleOffset":30,"lightProbeUsage":34,"reflectionProbeUsage":35},"Luna.Unity.DTO.UnityEngine.Textures.Cubemap":{"name":0,"atlasId":1,"mipmapCount":2,"hdr":3,"size":4,"anisoLevel":5,"filterMode":6,"rects":7,"wrapU":8,"wrapV":9},"Luna.Unity.DTO.UnityEngine.Scene.Scene":{"name":0,"index":1,"startup":2},"Luna.Unity.DTO.UnityEngine.Components.Camera":{"aspect":0,"orthographic":1,"orthographicSize":2,"backgroundColor":3,"nearClipPlane":7,"farClipPlane":8,"fieldOfView":9,"depth":10,"clearFlags":11,"cullingMask":12,"rect":13,"targetTexture":14,"usePhysicalProperties":16,"focalLength":17,"sensorSize":18,"lensShift":20,"gateFit":22,"commandBufferCount":23,"cameraType":24,"enabled":25},"Luna.Unity.DTO.UnityEngine.Components.Light":{"type":0,"color":1,"cullingMask":5,"intensity":6,"range":7,"spotAngle":8,"shadows":9,"shadowNormalBias":10,"shadowBias":11,"shadowStrength":12,"shadowResolution":13,"lightmapBakeType":14,"renderMode":15,"cookie":16,"cookieSize":18,"shadowNearPlane":19,"enabled":20},"Luna.Unity.DTO.UnityEngine.Components.AudioSource":{"clip":0,"outputAudioMixerGroup":2,"playOnAwake":4,"loop":5,"time":6,"volume":7,"pitch":8,"enabled":9},"Luna.Unity.DTO.UnityEngine.Components.HingeJoint":{"useMotor":0,"useLimits":1,"useSpring":2,"limits":3,"motor":4,"spring":5,"connectedBody":6,"axis":8,"anchor":11,"connectedAnchor":14,"autoConfigureConnectedAnchor":17,"massScale":18,"connectedMassScale":19,"enableCollision":20,"breakForce":21,"breakTorque":22},"Luna.Unity.DTO.UnityEngine.Components.CapsuleCollider":{"center":0,"radius":3,"height":4,"direction":5,"enabled":6,"isTrigger":7,"material":8},"Luna.Unity.DTO.UnityEngine.Components.SkinnedMeshRenderer":{"sharedMesh":0,"bones":2,"updateWhenOffscreen":3,"localBounds":4,"rootBone":5,"blendShapesWeights":7,"enabled":8,"sharedMaterial":9,"sharedMaterials":11,"receiveShadows":12,"shadowCastingMode":13,"sortingLayerID":14,"sortingOrder":15,"lightmapIndex":16,"lightmapSceneIndex":17,"lightmapScaleOffset":18,"lightProbeUsage":22,"reflectionProbeUsage":23},"Luna.Unity.DTO.UnityEngine.Components.SkinnedMeshRenderer+BlendShapeWeight":{"weight":0},"Luna.Unity.DTO.UnityEngine.Components.BoxCollider":{"center":0,"size":3,"enabled":6,"isTrigger":7,"material":8},"Luna.Unity.DTO.UnityEngine.Components.SpriteRenderer":{"color":0,"sprite":4,"flipX":6,"flipY":7,"drawMode":8,"size":9,"tileMode":11,"adaptiveModeThreshold":12,"maskInteraction":13,"spriteSortPoint":14,"enabled":15,"sharedMaterial":16,"sharedMaterials":18,"receiveShadows":19,"shadowCastingMode":20,"sortingLayerID":21,"sortingOrder":22,"lightmapIndex":23,"lightmapSceneIndex":24,"lightmapScaleOffset":25,"lightProbeUsage":29,"reflectionProbeUsage":30},"Luna.Unity.DTO.UnityEngine.Components.TrailRenderer":{"positions":0,"positionCount":1,"time":2,"startWidth":3,"endWidth":4,"widthMultiplier":5,"autodestruct":6,"emitting":7,"numCornerVertices":8,"numCapVertices":9,"minVertexDistance":10,"colorGradient":11,"startColor":12,"endColor":16,"generateLightingData":20,"textureMode":21,"alignment":22,"widthCurve":23,"enabled":24,"sharedMaterial":25,"sharedMaterials":27,"receiveShadows":28,"shadowCastingMode":29,"sortingLayerID":30,"sortingOrder":31,"lightmapIndex":32,"lightmapSceneIndex":33,"lightmapScaleOffset":34,"lightProbeUsage":38,"reflectionProbeUsage":39},"Luna.Unity.DTO.UnityEngine.Components.RectTransform":{"pivot":0,"anchorMin":2,"anchorMax":4,"sizeDelta":6,"anchoredPosition3D":8,"rotation":11,"scale":15},"Luna.Unity.DTO.UnityEngine.Components.Canvas":{"planeDistance":0,"referencePixelsPerUnit":1,"isFallbackOverlay":2,"renderMode":3,"renderOrder":4,"sortingLayerName":5,"sortingOrder":6,"scaleFactor":7,"worldCamera":8,"overrideSorting":10,"pixelPerfect":11,"targetDisplay":12,"overridePixelPerfect":13,"enabled":14},"Luna.Unity.DTO.UnityEngine.Components.CanvasRenderer":{"cullTransparentMesh":0},"Luna.Unity.DTO.UnityEngine.Assets.RenderSettings":{"ambientIntensity":0,"reflectionIntensity":1,"ambientMode":2,"ambientLight":3,"ambientSkyColor":7,"ambientGroundColor":11,"ambientEquatorColor":15,"fogColor":19,"fogEndDistance":23,"fogStartDistance":24,"fogDensity":25,"fog":26,"skybox":27,"fogMode":29,"lightmaps":30,"lightProbes":31,"lightmapsMode":32,"mixedBakeMode":33,"environmentLightingMode":34,"ambientProbe":35,"referenceAmbientProbe":36,"useReferenceAmbientProbe":37,"customReflection":38,"defaultReflection":40,"defaultReflectionMode":42,"defaultReflectionResolution":43,"sunLightObjectId":44,"pixelLightCount":45,"defaultReflectionHDR":46,"hasLightDataAsset":47,"hasManualGenerate":48},"Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+Lightmap":{"lightmapColor":0,"lightmapDirection":2},"Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+LightProbes":{"bakedProbes":0,"positions":1,"hullRays":2,"tetrahedra":3,"neighbours":4,"matrices":5},"Luna.Unity.DTO.UnityEngine.Assets.UniversalRenderPipelineAsset":{"AdditionalLightsPerObjectLimit":0,"AdditionalLightsRenderingMode":1,"LightRenderingMode":2,"ColorGradingLutSize":3,"ColorGradingMode":4,"MainLightRenderingMode":5,"MainLightRenderingModeValue":6,"SupportsMainLightShadows":7,"MixedLightingSupported":8,"MsaaQuality":9,"MSAA":10,"OpaqueDownsampling":11,"MainLightShadowmapResolution":12,"MainLightShadowmapResolutionValue":13,"SupportsSoftShadows":14,"SoftShadowQuality":15,"SoftShadowQualityValue":16,"ShadowDistance":17,"ShadowCascadeCount":18,"Cascade2Split":19,"Cascade3Split":20,"Cascade4Split":22,"CascadeBorder":25,"ShadowDepthBias":26,"ShadowNormalBias":27,"RenderScale":28,"RequireDepthTexture":29,"RequireOpaqueTexture":30,"SupportsHDR":31,"SupportsTerrainHoles":32},"Luna.Unity.DTO.UnityEngine.Assets.LightRenderingMode":{"Disabled":0,"PerVertex":1,"PerPixel":2},"Luna.Unity.DTO.UnityEngine.Assets.ColorGradingMode":{"LowDynamicRange":0,"HighDynamicRange":1},"Luna.Unity.DTO.UnityEngine.Assets.MsaaQuality":{"Disabled":0,"_2x":1,"_4x":2,"_8x":3},"Luna.Unity.DTO.UnityEngine.Assets.Downsampling":{"None":0,"_2xBilinear":1,"_4xBox":2,"_4xBilinear":3},"Luna.Unity.DTO.UnityEngine.Assets.ShadowResolution":{"_256":0,"_512":1,"_1024":2,"_2048":3,"_4096":4},"Luna.Unity.DTO.UnityEngine.Assets.SoftShadowQuality":{"UsePipelineSettings":0,"Low":1,"Medium":2,"High":3},"Luna.Unity.DTO.UnityEngine.Assets.PhysicMaterial":{"name":0,"bounciness":1,"dynamicFriction":2,"staticFriction":3,"frictionCombine":4,"bounceCombine":5},"Luna.Unity.DTO.UnityEngine.Assets.Shader":{"ShaderCompilationErrors":0,"name":1,"guid":2,"shaderDefinedKeywords":3,"passes":4,"usePasses":5,"defaultParameterValues":6,"unityFallbackShader":7,"readDepth":9,"hasDepthOnlyPass":10,"isCreatedByShaderGraph":11,"disableBatching":12,"compiled":13},"Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError":{"shaderName":0,"errorMessage":1},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass":{"id":0,"subShaderIndex":1,"name":2,"passType":3,"grabPassTextureName":4,"usePass":5,"zTest":6,"zWrite":7,"culling":8,"blending":9,"alphaBlending":10,"colorWriteMask":11,"offsetUnits":12,"offsetFactor":13,"stencilRef":14,"stencilReadMask":15,"stencilWriteMask":16,"stencilOp":17,"stencilOpFront":18,"stencilOpBack":19,"tags":20,"passDefinedKeywords":21,"passDefinedKeywordGroups":22,"variants":23,"excludedVariants":24,"hasDepthReader":25},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value":{"val":0,"name":1},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending":{"src":0,"dst":1,"op":2},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp":{"pass":0,"fail":1,"zFail":2,"comp":3},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Tag":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+KeywordGroup":{"keywords":0,"hasDiscard":1},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant":{"passId":0,"subShaderIndex":1,"keywords":2,"vertexProgram":3,"fragmentProgram":4,"exportedForWebGl2":5,"readDepth":6},"Luna.Unity.DTO.UnityEngine.Assets.Shader+UsePass":{"shader":0,"pass":2},"Luna.Unity.DTO.UnityEngine.Assets.Shader+DefaultParameterValue":{"name":0,"type":1,"value":2,"textureValue":6,"shaderPropertyFlag":7},"Luna.Unity.DTO.UnityEngine.Textures.Sprite":{"name":0,"texture":1,"aabb":3,"vertices":4,"triangles":5,"textureRect":6,"packedRect":10,"border":14,"transparency":18,"bounds":19,"pixelsPerUnit":20,"textureWidth":21,"textureHeight":22,"nativeSize":23,"pivot":25,"textureRectOffset":27},"Luna.Unity.DTO.UnityEngine.Assets.AudioClip":{"name":0},"Luna.Unity.DTO.UnityEngine.Assets.Font":{"name":0,"ascent":1,"originalLineHeight":2,"fontSize":3,"characterInfo":4,"texture":5,"originalFontSize":7},"Luna.Unity.DTO.UnityEngine.Assets.Font+CharacterInfo":{"index":0,"advance":1,"bearing":2,"glyphWidth":3,"glyphHeight":4,"minX":5,"maxX":6,"minY":7,"maxY":8,"uvBottomLeftX":9,"uvBottomLeftY":10,"uvBottomRightX":11,"uvBottomRightY":12,"uvTopLeftX":13,"uvTopLeftY":14,"uvTopRightX":15,"uvTopRightY":16},"Luna.Unity.DTO.UnityEngine.Assets.TextAsset":{"name":0,"bytes64":1,"data":2},"Luna.Unity.DTO.UnityEngine.Assets.Resources":{"files":0,"componentToPrefabIds":1},"Luna.Unity.DTO.UnityEngine.Assets.Resources+File":{"path":0,"unityObject":1},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings":{"scriptsExecutionOrder":0,"sortingLayers":1,"cullingLayers":2,"timeSettings":3,"physicsSettings":4,"physics2DSettings":5,"qualitySettings":6,"enableRealtimeShadows":7,"enableAutoInstancing":8,"enableStaticBatching":9,"enableDynamicBatching":10,"lightmapEncodingQuality":11,"desiredColorSpace":12,"allTags":13},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+ScriptsExecutionOrder":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+SortingLayer":{"id":0,"name":1,"value":2},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+CullingLayer":{"id":0,"name":1},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+TimeSettings":{"fixedDeltaTime":0,"maximumDeltaTime":1,"timeScale":2,"maximumParticleTimestep":3},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings":{"gravity":0,"defaultSolverIterations":3,"bounceThreshold":4,"autoSyncTransforms":5,"autoSimulation":6,"collisionMatrix":7},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings+CollisionMask":{"enabled":0,"layerId":1,"otherLayerId":2},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings":{"material":0,"gravity":2,"positionIterations":4,"velocityIterations":5,"velocityThreshold":6,"maxLinearCorrection":7,"maxAngularCorrection":8,"maxTranslationSpeed":9,"maxRotationSpeed":10,"baumgarteScale":11,"baumgarteTOIScale":12,"timeToSleep":13,"linearSleepTolerance":14,"angularSleepTolerance":15,"defaultContactOffset":16,"autoSimulation":17,"queriesHitTriggers":18,"queriesStartInColliders":19,"callbacksOnDisable":20,"reuseCollisionCallbacks":21,"autoSyncTransforms":22,"collisionMatrix":23},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings+CollisionMask":{"enabled":0,"layerId":1,"otherLayerId":2},"Luna.Unity.DTO.UnityEngine.Assets.QualitySettings":{"qualityLevels":0,"names":1,"shadows":2,"anisotropicFiltering":3,"antiAliasing":4,"lodBias":5,"shadowCascades":6,"shadowDistance":7,"shadowmaskMode":8,"shadowProjection":9,"shadowResolution":10,"softParticles":11,"softVegetation":12,"activeColorSpace":13,"desiredColorSpace":14,"masterTextureLimit":15,"maxQueuedFrames":16,"particleRaycastBudget":17,"pixelLightCount":18,"realtimeReflectionProbes":19,"shadowCascade2Split":20,"shadowCascade4Split":21,"streamingMipmapsActive":24,"vSyncCount":25,"asyncUploadBufferSize":26,"asyncUploadTimeSlice":27,"billboardsFaceCameraPosition":28,"shadowNearPlaneOffset":29,"streamingMipmapsMemoryBudget":30,"maximumLODLevel":31,"streamingMipmapsAddAllCameras":32,"streamingMipmapsMaxLevelReduction":33,"streamingMipmapsRenderersPerFrame":34,"resolutionScalingFixedDPIFactor":35,"streamingMipmapsMaxFileIORequests":36,"currentQualityLevel":37},"Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShapeFrame":{"weight":0,"vertices":1,"normals":2,"tangents":3}}

Deserializers.requiredComponents = {"61":[62],"63":[62],"64":[62],"65":[62],"66":[62],"67":[62],"26":[27],"68":[14],"69":[9],"70":[9],"71":[9],"72":[9],"23":[9],"73":[9],"74":[75],"76":[75],"77":[75],"78":[75],"79":[75],"80":[75],"81":[75],"82":[75],"83":[75],"84":[75],"85":[75],"86":[75],"87":[75],"88":[14],"89":[5],"90":[91],"92":[91],"40":[39],"93":[49],"94":[40],"95":[39],"96":[14],"16":[14],"18":[17],"97":[39],"98":[5,39],"37":[39,44],"99":[39],"100":[44,39],"101":[5],"102":[44,39],"103":[39],"104":[105],"106":[105],"107":[105],"108":[39],"109":[39],"43":[40],"45":[44,39],"110":[39],"42":[40],"111":[39],"112":[39],"48":[39],"113":[39],"114":[39],"115":[39],"47":[39],"116":[39],"117":[39],"118":[44,39],"119":[39],"120":[39],"121":[39],"122":[39],"123":[44,39],"124":[39],"125":[49],"126":[49],"50":[49],"127":[49],"128":[14],"129":[14]}

Deserializers.types = ["UnityEngine.Shader","UnityEngine.Texture2D","UnityEngine.Transform","UnityEngine.MeshFilter","UnityEngine.Mesh","UnityEngine.MeshRenderer","UnityEngine.Material","UnityEngine.MeshCollider","UnityEngine.SphereCollider","UnityEngine.Rigidbody","UnityEngine.MonoBehaviour","BallBehavior","UnityEngine.ParticleSystem","UnityEngine.ParticleSystemRenderer","UnityEngine.Camera","UnityEngine.AudioListener","UnityEngine.Rendering.Universal.UniversalAdditionalCameraData","UnityEngine.Light","UnityEngine.Rendering.Universal.UniversalAdditionalLightData","UnityEngine.Rendering.Volume","UnityEngine.Rendering.VolumeProfile","UnityEngine.AudioSource","UnityEngine.AudioClip","UnityEngine.HingeJoint","BasketBehavior","UnityEngine.CapsuleCollider","UnityEngine.Cloth","UnityEngine.SkinnedMeshRenderer","UnityEngine.BoxCollider","UnityEngine.SpriteRenderer","UnityEngine.Sprite","UnityEngine.RenderTexture","UnityEngine.PhysicsMaterial","UnityEngine.TrailRenderer","InputManager","UnityEngine.GameObject","GameManager","TMPro.TextMeshProUGUI","UnityEngine.UI.Button","UnityEngine.RectTransform","UnityEngine.Canvas","UnityEngine.EventSystems.UIBehaviour","UnityEngine.UI.CanvasScaler","UnityEngine.UI.GraphicRaycaster","UnityEngine.CanvasRenderer","UnityEngine.UI.Image","TMPro.TMP_FontAsset","UnityEngine.UI.VerticalLayoutGroup","UnityEngine.UI.HorizontalLayoutGroup","UnityEngine.EventSystems.EventSystem","UnityEngine.EventSystems.StandaloneInputModule","UnityEngine.Cubemap","UnityEngine.Rendering.Universal.Tonemapping","UnityEngine.Rendering.Universal.Bloom","UnityEngine.Rendering.Universal.MotionBlur","UnityEngine.Rendering.Universal.Vignette","UnityEngine.Font","TMPro.TMP_Settings","TMPro.TMP_SpriteAsset","TMPro.TMP_StyleSheet","UnityEngine.TextAsset","UnityEngine.AudioLowPassFilter","UnityEngine.AudioBehaviour","UnityEngine.AudioHighPassFilter","UnityEngine.AudioReverbFilter","UnityEngine.AudioDistortionFilter","UnityEngine.AudioEchoFilter","UnityEngine.AudioChorusFilter","UnityEngine.FlareLayer","UnityEngine.CharacterJoint","UnityEngine.ConfigurableJoint","UnityEngine.ConstantForce","UnityEngine.FixedJoint","UnityEngine.SpringJoint","UnityEngine.CompositeCollider2D","UnityEngine.Rigidbody2D","UnityEngine.Joint2D","UnityEngine.AnchoredJoint2D","UnityEngine.SpringJoint2D","UnityEngine.DistanceJoint2D","UnityEngine.FrictionJoint2D","UnityEngine.HingeJoint2D","UnityEngine.RelativeJoint2D","UnityEngine.SliderJoint2D","UnityEngine.TargetJoint2D","UnityEngine.FixedJoint2D","UnityEngine.WheelJoint2D","UnityEngine.ConstantForce2D","UnityEngine.StreamingController","UnityEngine.TextMesh","UnityEngine.Tilemaps.TilemapRenderer","UnityEngine.Tilemaps.Tilemap","UnityEngine.Tilemaps.TilemapCollider2D","UnityEngine.InputSystem.UI.InputSystemUIInputModule","UnityEngine.InputSystem.UI.TrackedDeviceRaycaster","UnityEngine.Rendering.UI.UIFoldout","UnityEngine.Rendering.Universal.PixelPerfectCamera","TMPro.TextContainer","TMPro.TextMeshPro","TMPro.TMP_Dropdown","TMPro.TMP_SelectionCaret","TMPro.TMP_SubMesh","TMPro.TMP_SubMeshUI","TMPro.TMP_Text","Unity.VisualScripting.SceneVariables","Unity.VisualScripting.Variables","Unity.VisualScripting.ScriptMachine","Unity.VisualScripting.StateMachine","UnityEngine.UI.Dropdown","UnityEngine.UI.Graphic","UnityEngine.UI.AspectRatioFitter","UnityEngine.UI.ContentSizeFitter","UnityEngine.UI.GridLayoutGroup","UnityEngine.UI.HorizontalOrVerticalLayoutGroup","UnityEngine.UI.LayoutElement","UnityEngine.UI.LayoutGroup","UnityEngine.UI.Mask","UnityEngine.UI.MaskableGraphic","UnityEngine.UI.RawImage","UnityEngine.UI.RectMask2D","UnityEngine.UI.Scrollbar","UnityEngine.UI.ScrollRect","UnityEngine.UI.Slider","UnityEngine.UI.Text","UnityEngine.UI.Toggle","UnityEngine.EventSystems.BaseInputModule","UnityEngine.EventSystems.PointerInputModule","UnityEngine.EventSystems.TouchInputModule","UnityEngine.EventSystems.Physics2DRaycaster","UnityEngine.EventSystems.PhysicsRaycaster"]

Deserializers.unityVersion = "6000.0.60f1";

Deserializers.productName = "INDIEZ_PerformanceTest";

Deserializers.lunaInitializationTime = "11/25/2025 03:49:18";

Deserializers.lunaDaysRunning = "8.0";

Deserializers.lunaVersion = "7.0.0";

Deserializers.lunaSHA = "3bcc3e343f23b4c67e768a811a8d088c7f7adbc5";

Deserializers.creativeName = "";

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

Deserializers.runtimeAnalysisExcludedClassesCount = "0";

Deserializers.runtimeAnalysisExcludedMethodsCount = "0";

Deserializers.runtimeAnalysisExcludedModules = "";

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

Deserializers.buildID = "3036f86e-c2ca-4247-93a8-9d3e19787e79";

Deserializers.runtimeInitializeOnLoadInfos = [[["UnityEngine","Rendering","DebugUpdater","RuntimeInit"],["UnityEngine","Experimental","Rendering","ScriptableRuntimeReflectionSystemSettings","ScriptingDirtyReflectionSystemInstance"]],[["Unity","VisualScripting","RuntimeVSUsageUtility","RuntimeInitializeOnLoadBeforeSceneLoad"],["UnityEngine","InputSystem","InputSystem","RunInitialUpdate"],["Unity","AI","Navigation","NavMeshModifierVolume","ClearNavMeshModifiers"],["Unity","AI","Navigation","NavMeshLink","ClearTrackedList"],["Unity","AI","Navigation","NavMeshSurface","ClearNavMeshSurfaces"],["Unity","AI","Navigation","NavMeshModifier","ClearNavMeshModifiers"],["UnityEngine","AI","NavMesh","ClearPreUpdateListeners"]],[["$BurstDirectCallInitializer","Initialize"],["$BurstDirectCallInitializer","Initialize"],["$BurstDirectCallInitializer","Initialize"],["$BurstDirectCallInitializer","Initialize"]],[["UnityEngine","Experimental","Rendering","XRSystem","XRSystemInit"]],[["UnityEngine","InputSystem","Plugins","InputForUI","InputSystemProvider","Bootstrap"],["UnityEngine","InputSystem","UI","InputSystemUIInputModule","ResetDefaultActions"],["UnityEngine","InputSystem","InputSystem","RunInitializeInPlayer"]]];

Deserializers.typeNameToIdMap = function(){ var i = 0; return Deserializers.types.reduce( function( res, item ) { res[ item ] = i++; return res; }, {} ) }()

